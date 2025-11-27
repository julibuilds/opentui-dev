import type { CliRenderer } from "../renderer"

/**
 * Configuration options for {@link Timeline}.
 *
 * @public
 */
export interface TimelineOptions {
  /** Total duration of the timeline in milliseconds */
  duration?: number
  /** Whether the timeline should loop indefinitely */
  loop?: boolean
  /** Whether to start playing immediately upon creation */
  autoplay?: boolean
  /** Callback invoked when the timeline completes */
  onComplete?: () => void
  /** Callback invoked when the timeline is paused */
  onPause?: () => void
}

/**
 * Configuration options for individual animations within a {@link Timeline}.
 *
 * @remarks
 * This interface allows you to specify animation properties along with
 * custom numeric properties to animate. Any numeric property can be animated
 * by including it in the options object.
 *
 * @public
 */
export interface AnimationOptions {
  /** Duration of the animation in milliseconds */
  duration: number
  /** Easing function to apply */
  ease?: EasingFunctions
  /** Callback invoked on each animation frame */
  onUpdate?: (animation: JSAnimation) => void
  /** Callback invoked when animation completes */
  onComplete?: () => void
  /** Callback invoked when animation starts */
  onStart?: () => void
  /** Callback invoked on each loop iteration */
  onLoop?: () => void
  /** Number of times to loop (true = infinite, number = specific count) */
  loop?: boolean | number
  /** Delay between loop iterations in milliseconds */
  loopDelay?: number
  /** Whether to alternate direction on each loop */
  alternate?: boolean
  /** If true, animation is removed from timeline after completion */
  once?: boolean
  /** Additional numeric properties to animate */
  [key: string]: any
}

/**
 * Animation state object passed to update callbacks.
 *
 * @public
 */
export interface JSAnimation {
  /** Array of targets being animated */
  targets: any[]
  /** Time elapsed since last frame in milliseconds */
  deltaTime: number
  /** Current progress (0-1) after easing */
  progress: number
  /** Current timeline time in milliseconds */
  currentTime: number
}

/**
 * @internal
 */
interface TimelineItem {
  type: "animation" | "callback" | "timeline"
  startTime: number
}

interface TimelineTimelineItem extends TimelineItem {
  type: "timeline"
  timeline: Timeline
  timelineStarted?: boolean
}

interface TimelineCallbackItem extends TimelineItem {
  type: "callback"
  callback: () => void
  executed: boolean
}

interface TimelineAnimationItem extends TimelineItem {
  type: "animation"

  target: any[]
  properties?: Record<string, number>
  initialValues?: Record<string, number>[]
  duration?: number
  ease?: keyof typeof easingFunctions
  loop?: boolean | number
  loopDelay?: number
  alternate?: boolean
  onUpdate?: (animation: JSAnimation) => void
  onComplete?: () => void
  onStart?: () => void
  onLoop?: () => void
  completed?: boolean
  started?: boolean
  currentLoop?: number
  once?: boolean
}

export type EasingFunctions = keyof typeof easingFunctions

const easingFunctions = {
  linear: (t: number) => t,
  inQuad: (t: number) => t * t,
  outQuad: (t: number) => t * (2 - t),
  inOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  inExpo: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  outExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
  outBounce: (t: number) => {
    const n1 = 7.5625
    const d1 = 2.75
    if (t < 1 / d1) {
      return n1 * t * t
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375
    }
  },
  outElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
  },
  inBounce: (t: number) => 1 - easingFunctions.outBounce(1 - t),
  inCirc: (t: number) => 1 - Math.sqrt(1 - t * t),
  outCirc: (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2)),
  inOutCirc: (t: number) => {
    if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  },
  inBack: (t: number, s: number = 1.70158) => t * t * ((s + 1) * t - s),
  outBack: (t: number, s: number = 1.70158) => --t * t * ((s + 1) * t + s) + 1,
  inOutBack: (t: number, s: number = 1.70158) => {
    s *= 1.525
    if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s))
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
  },
}

function captureInitialValues(item: TimelineAnimationItem): void {
  if (!item.properties) return
  if (!item.initialValues || item.initialValues.length === 0) {
    const initialValues: Record<string, number>[] = []

    for (let i = 0; i < item.target.length; i++) {
      const target = item.target[i]
      const targetInitialValues: Record<string, number> = {}

      for (const key of Object.keys(item.properties)) {
        if (typeof target[key] === "number") {
          targetInitialValues[key] = target[key]
        }
      }

      initialValues.push(targetInitialValues)
    }

    item.initialValues = initialValues
  }
}

function applyAnimationAtProgress(
  item: TimelineAnimationItem,
  progress: number,
  reversed: boolean,
  timelineTime: number,
  deltaTime: number = 0,
): void {
  if (!item.properties || !item.initialValues) return

  const easingFn = easingFunctions[item.ease || "linear"] || easingFunctions.linear
  const easedProgress = easingFn(Math.max(0, Math.min(1, progress)))
  const finalProgress = reversed ? 1 - easedProgress : easedProgress

  for (let i = 0; i < item.target.length; i++) {
    const target = item.target[i]
    const targetInitialValues = item.initialValues[i]

    if (!targetInitialValues) continue

    for (const [key, endValue] of Object.entries(item.properties)) {
      const startValue = targetInitialValues[key]
      const newValue = startValue + (endValue - startValue) * finalProgress
      target[key] = newValue
    }
  }

  if (item.onUpdate) {
    const animation: JSAnimation = {
      targets: item.target,
      progress: easedProgress,
      currentTime: timelineTime,
      deltaTime: deltaTime,
    }
    item.onUpdate(animation)
  }
}

function evaluateAnimation(item: TimelineAnimationItem, timelineTime: number, deltaTime: number = 0): void {
  if (timelineTime < item.startTime) {
    return
  }

  const animationTime = timelineTime - item.startTime
  const duration = item.duration || 0

  if (timelineTime >= item.startTime && !item.started) {
    captureInitialValues(item)
    if (item.onStart) {
      item.onStart()
    }
    item.started = true
  }

  if (duration === 0) {
    if (!item.completed) {
      applyAnimationAtProgress(item, 1, false, timelineTime, deltaTime)
      if (item.onComplete) {
        item.onComplete()
      }
      item.completed = true
    }
    return
  }

  // Unified looping logic - single execution is just maxLoops = 1
  const maxLoops = !item.loop || item.loop === 1 ? 1 : typeof item.loop === "number" ? item.loop : Infinity
  const loopDelay = item.loopDelay || 0
  const cycleTime = duration + loopDelay
  let currentCycle = Math.floor(animationTime / cycleTime)
  let timeInCycle = animationTime % cycleTime

  // Trigger onLoop if a loop cycle (not the final one) completes
  if (item.onLoop && item.currentLoop !== undefined && currentCycle > item.currentLoop && currentCycle < maxLoops) {
    item.onLoop()
  }
  item.currentLoop = currentCycle

  // Check if the animation part of the *final loop* has just completed
  if (item.onComplete && !item.completed && currentCycle === maxLoops - 1 && timeInCycle >= duration) {
    const finalLoopReversed = (item.alternate || false) && currentCycle % 2 === 1
    applyAnimationAtProgress(item, 1, finalLoopReversed, timelineTime, deltaTime)

    item.onComplete()
    item.completed = true
    return
  }

  if (currentCycle >= maxLoops) {
    if (!item.completed) {
      const finalReversed = (item.alternate || false) && (maxLoops - 1) % 2 === 1
      applyAnimationAtProgress(item, 1, finalReversed, timelineTime, deltaTime)

      if (item.onComplete) {
        item.onComplete()
      }
      item.completed = true
    }
    return
  }

  if (timeInCycle === 0 && animationTime > 0 && currentCycle < maxLoops) {
    currentCycle = currentCycle - 1
    timeInCycle = cycleTime
  }

  if (timeInCycle >= duration) {
    const isReversed = (item.alternate || false) && currentCycle % 2 === 1
    applyAnimationAtProgress(item, 1, isReversed, timelineTime, deltaTime)
    return
  }

  const progress = timeInCycle / duration
  const isReversed = (item.alternate || false) && currentCycle % 2 === 1
  applyAnimationAtProgress(item, progress, isReversed, timelineTime, deltaTime)
}

function evaluateCallback(item: TimelineCallbackItem, timelineTime: number): void {
  if (!item.executed && timelineTime >= item.startTime && item.callback) {
    item.callback()
    item.executed = true
  }
}

function evaluateTimelineSync(item: TimelineTimelineItem, timelineTime: number, deltaTime: number = 0): void {
  if (!item.timeline) return
  if (timelineTime < item.startTime) {
    return
  }

  if (!item.timelineStarted) {
    item.timelineStarted = true
    item.timeline.play()

    const overshoot = timelineTime - item.startTime
    item.timeline.update(overshoot)
    return
  }

  item.timeline.update(deltaTime)
}

function evaluateItem(item: TimelineItem, timelineTime: number, deltaTime: number = 0): void {
  if (item.type === "animation") {
    evaluateAnimation(item as TimelineAnimationItem, timelineTime, deltaTime)
  } else if (item.type === "callback") {
    evaluateCallback(item as TimelineCallbackItem, timelineTime)
  }
}

export class Timeline {
  public items: (TimelineAnimationItem | TimelineCallbackItem)[] = []
  public subTimelines: TimelineTimelineItem[] = []
  public currentTime: number = 0
  public isPlaying: boolean = false
  public isComplete: boolean = false
  public duration: number
  public loop: boolean
  public synced: boolean = false
  private autoplay: boolean
  private onComplete?: () => void
  private onPause?: () => void
  private stateChangeListeners: ((timeline: Timeline) => void)[] = []

  constructor(options: TimelineOptions = {}) {
    this.duration = options.duration || 1000
    this.loop = options.loop === true
    this.autoplay = options.autoplay !== false
    this.onComplete = options.onComplete
    this.onPause = options.onPause
  }

  public addStateChangeListener(listener: (timeline: Timeline) => void): void {
    this.stateChangeListeners.push(listener)
  }

  public removeStateChangeListener(listener: (timeline: Timeline) => void): void {
    this.stateChangeListeners = this.stateChangeListeners.filter((l) => l !== listener)
  }

  private notifyStateChange(): void {
    for (const listener of this.stateChangeListeners) {
      listener(this)
    }
  }

  /**
   * Adds an animation to the timeline.
   *
   * @param target - Object or array of objects to animate
   * @param properties - Animation configuration and target property values
   * @param startTime - Time offset in milliseconds when animation should start (default: 0)
   * @returns The timeline instance for method chaining
   *
   * @remarks
   * The `add` method is the primary way to create animations. Any numeric property
   * in the `properties` object will be animated from its current value to the
   * specified target value. Special properties control animation behavior:
   * - `duration`: Animation length in milliseconds
   * - `ease`: Easing function name (e.g., "linear", "inOutQuad", "outBounce")
   * - `loop`: Number of times to loop (true for infinite, number for count)
   * - `loopDelay`: Delay between loop iterations in milliseconds
   * - `alternate`: Reverse direction on each loop iteration
   * - `onUpdate`: Callback invoked each frame with animation state
   * - `onComplete`: Callback invoked when animation completes
   * - `onStart`: Callback invoked when animation starts
   * - `onLoop`: Callback invoked on each loop iteration
   *
   * @example
   * ```ts
   * const box = { x: 0, y: 0, opacity: 1 }
   * const timeline = createTimeline({ duration: 5000 })
   *
   * // Animate position from current values to x=100, y=50
   * timeline.add(box, {
   *   x: 100,
   *   y: 50,
   *   duration: 2000,
   *   ease: "inOutQuad"
   * })
   *
   * // Chain another animation starting at 1 second
   * timeline.add(box, {
   *   opacity: 0,
   *   duration: 1000,
   *   ease: "linear",
   *   onUpdate: (anim) => {
   *     console.log("Opacity:", box.opacity)
   *   }
   * }, 1000)
   *
   * // Animate with looping
   * timeline.add(box, {
   *   x: 200,
   *   duration: 500,
   *   loop: 3,
   *   alternate: true
   * }, 3000)
   * ```
   *
   * @public
   */
  add(target: any, properties: AnimationOptions, startTime: number | string = 0): this {
    const resolvedStartTime = typeof startTime === "string" ? 0 : startTime

    const animationProperties: Record<string, number> = {}

    // Extract animation properties (don't capture initial values here)
    for (const key in properties) {
      if (
        !["duration", "ease", "onUpdate", "onComplete", "onStart", "onLoop", "loop", "loopDelay", "alternate"].includes(
          key,
        )
      ) {
        if (typeof properties[key] === "number") {
          animationProperties[key] = properties[key]
        }
      }
    }

    this.items.push({
      type: "animation",
      startTime: resolvedStartTime,
      target: Array.isArray(target) ? target : [target],
      properties: animationProperties,
      initialValues: [], // Will be captured when animation starts
      duration: properties.duration !== undefined ? properties.duration : 1000,
      ease: properties.ease || "linear",
      loop: properties.loop,
      loopDelay: properties.loopDelay || 0,
      alternate: properties.alternate || false,
      onUpdate: properties.onUpdate,
      onComplete: properties.onComplete,
      onStart: properties.onStart,
      onLoop: properties.onLoop,
      completed: false,
      started: false,
      currentLoop: 0,
      once: properties.once ?? false,
    })

    return this
  }

  once(target: any, properties: AnimationOptions): this {
    this.add(
      target,
      {
        ...properties,
        once: true,
      },
      this.currentTime,
    )

    return this
  }

  /**
   * Schedules a callback to execute at a specific time in the timeline.
   *
   * @param callback - Function to invoke
   * @param startTime - Time offset in milliseconds when callback should execute (default: 0)
   * @returns The timeline instance for method chaining
   *
   * @remarks
   * Use `call` to trigger side effects at specific points in your animation sequence,
   * such as playing sounds, updating UI, or triggering other events.
   *
   * @example
   * ```ts
   * const timeline = createTimeline({ duration: 5000 })
   *
   * timeline.call(() => {
   *   console.log("Animation starting!")
   * }, 0)
   *
   * timeline.add(box, { x: 100, duration: 2000 })
   *
   * timeline.call(() => {
   *   console.log("Halfway through!")
   * }, 2500)
   *
   * timeline.call(() => {
   *   console.log("Animation complete!")
   * }, 5000)
   * ```
   *
   * @public
   */
  call(callback: () => void, startTime: number | string = 0): this {
    const resolvedStartTime = typeof startTime === "string" ? 0 : startTime

    this.items.push({
      type: "callback",
      startTime: resolvedStartTime,
      callback,
      executed: false,
    })

    return this
  }

  /**
   * Synchronizes a child timeline to start at a specific time in this timeline.
   *
   * @param timeline - Child timeline to synchronize
   * @param startTime - Time offset in milliseconds when child timeline should start (default: 0)
   * @returns The timeline instance for method chaining
   *
   * @remarks
   * Timeline synchronization allows you to compose complex animations by combining
   * multiple timelines. The child timeline's playback is controlled by the parent:
   * - Child timeline starts when parent reaches `startTime`
   * - Child timeline pauses/plays/restarts with parent
   * - Each timeline can have different durations and loop settings
   * - A timeline can only be synced to one parent
   *
   * @example
   * ```ts
   * // Create main timeline
   * const mainTimeline = createTimeline({
   *   duration: 10000,
   *   loop: true
   * })
   *
   * // Create sub-timeline for box animations
   * const boxTimeline = createTimeline({
   *   duration: 3000,
   *   autoplay: false
   * })
   * boxTimeline.add(box, { x: 100, duration: 3000 })
   *
   * // Create sub-timeline for color animations
   * const colorTimeline = createTimeline({
   *   duration: 2000,
   *   autoplay: false
   * })
   * colorTimeline.add(colors, { red: 255, duration: 2000 })
   *
   * // Sync both to main timeline at different times
   * mainTimeline.sync(boxTimeline, 0)      // Start immediately
   * mainTimeline.sync(colorTimeline, 5000) // Start at 5 seconds
   *
   * mainTimeline.play()
   * ```
   *
   * @public
   */
  sync(timeline: Timeline, startTime: number = 0): this {
    if (timeline.synced) {
      throw new Error("Timeline already synced")
    }
    this.subTimelines.push({
      type: "timeline",
      startTime,
      timeline,
    })
    timeline.synced = true

    return this
  }

  /**
   * Starts or resumes timeline playback.
   *
   * @returns The timeline instance for method chaining
   *
   * @remarks
   * - If timeline is complete, automatically restarts from beginning
   * - If timeline is paused, resumes from current position
   * - Also resumes any synced child timelines that have started
   * - Call {@link update} on each frame to advance the timeline
   *
   * @example
   * ```ts
   * const timeline = createTimeline({
   *   duration: 5000,
   *   autoplay: false
   * })
   *
   * timeline.add(box, { x: 100, duration: 2000 })
   *
   * // Start playback
   * timeline.play()
   *
   * // In your render loop
   * renderer.setFrameCallback(async (deltaTime) => {
   *   timeline.update(deltaTime)
   * })
   * ```
   *
   * @public
   */
  play(): this {
    if (this.isComplete) {
      return this.restart()
    }
    this.subTimelines.forEach((subTimeline) => {
      if (subTimeline.timelineStarted) {
        subTimeline.timeline.play()
      }
    })
    this.isPlaying = true
    this.notifyStateChange()
    return this
  }

  /**
   * Pauses timeline playback at the current position.
   *
   * @returns The timeline instance for method chaining
   *
   * @remarks
   * - Timeline state is preserved and can be resumed with {@link play}
   * - Also pauses all synced child timelines
   * - Triggers `onPause` callback if configured
   *
   * @example
   * ```ts
   * timeline.play()
   *
   * // Pause after 2 seconds
   * setTimeout(() => {
   *   timeline.pause()
   * }, 2000)
   *
   * // Resume later
   * setTimeout(() => {
   *   timeline.play()
   * }, 5000)
   * ```
   *
   * @public
   */
  pause(): this {
    this.subTimelines.forEach((subTimeline) => {
      subTimeline.timeline.pause()
    })
    this.isPlaying = false
    if (this.onPause) {
      this.onPause()
    }
    this.notifyStateChange()
    return this
  }

  resetItems() {
    this.items.forEach((item) => {
      if (item.type === "callback") {
        item.executed = false
      } else if (item.type === "animation") {
        item.completed = false
        item.started = false
        item.currentLoop = 0
      }
    })
    this.subTimelines.forEach((subTimeline) => {
      subTimeline.timelineStarted = false
      if (subTimeline.timeline) {
        subTimeline.timeline.restart()
        subTimeline.timeline.pause()
      }
    })
  }

  restart(): this {
    this.isComplete = false
    this.currentTime = 0
    this.isPlaying = true
    this.resetItems()
    this.notifyStateChange()

    return this
  }

  update(deltaTime: number): void {
    for (const subTimeline of this.subTimelines) {
      evaluateTimelineSync(subTimeline, this.currentTime + deltaTime, deltaTime)
    }

    if (!this.isPlaying) return

    this.currentTime += deltaTime

    for (const item of this.items) {
      evaluateItem(item, this.currentTime, deltaTime)
    }

    // Remove completed "once" items (iterate backwards to avoid index shifting)
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i]
      if (item.type === "animation" && item.once && item.completed) {
        this.items.splice(i, 1)
      }
    }

    if (this.loop && this.currentTime >= this.duration) {
      const overshoot = this.currentTime % this.duration

      this.resetItems()
      this.currentTime = 0

      if (overshoot > 0) {
        this.update(overshoot)
      }
    } else if (!this.loop && this.currentTime >= this.duration) {
      this.currentTime = this.duration
      this.isPlaying = false
      this.isComplete = true

      if (this.onComplete) {
        this.onComplete()
      }
      this.notifyStateChange()
    }
  }
}

class TimelineEngine {
  private timelines: Set<Timeline> = new Set()
  private renderer: CliRenderer | null = null
  private frameCallback: ((deltaTime: number) => Promise<void>) | null = null
  private isLive: boolean = false
  public defaults = {
    frameRate: 60,
  }

  attach(renderer: CliRenderer): void {
    if (this.renderer) {
      this.detach()
    }

    this.renderer = renderer
    this.frameCallback = async (deltaTime: number) => {
      this.update(deltaTime)
    }

    renderer.setFrameCallback(this.frameCallback)
  }

  detach(): void {
    if (this.renderer && this.frameCallback) {
      this.renderer.removeFrameCallback(this.frameCallback)
      if (this.isLive) {
        this.renderer.dropLive()
        this.isLive = false
      }
    }
    this.renderer = null
    this.frameCallback = null
  }

  private updateLiveState(): void {
    if (!this.renderer) return

    const hasRunningTimelines = Array.from(this.timelines).some(
      (timeline) => !timeline.synced && timeline.isPlaying && !timeline.isComplete,
    )

    if (hasRunningTimelines && !this.isLive) {
      this.renderer.requestLive()
      this.isLive = true
    } else if (!hasRunningTimelines && this.isLive) {
      this.renderer.dropLive()
      this.isLive = false
    }
  }

  private onTimelineStateChange = (timeline: Timeline): void => {
    this.updateLiveState()
  }

  register(timeline: Timeline): void {
    if (!this.timelines.has(timeline)) {
      this.timelines.add(timeline)
      timeline.addStateChangeListener(this.onTimelineStateChange)
      this.updateLiveState()
    }
  }

  unregister(timeline: Timeline): void {
    if (this.timelines.has(timeline)) {
      this.timelines.delete(timeline)
      timeline.removeStateChangeListener(this.onTimelineStateChange)
      this.updateLiveState()
    }
  }

  clear(): void {
    for (const timeline of this.timelines) {
      timeline.removeStateChangeListener(this.onTimelineStateChange)
    }
    this.timelines.clear()
    this.updateLiveState()
  }

  update(deltaTime: number): void {
    for (const timeline of this.timelines) {
      if (!timeline.synced) {
        timeline.update(deltaTime)
      }
    }
  }
}

export const engine = new TimelineEngine()

/**
 * Creates a new animation timeline.
 *
 * @remarks
 * A timeline is the primary way to create animations in OpenTUI. It allows you to:
 * - Animate numeric properties of any object over time
 * - Chain multiple animations with precise timing
 * - Use easing functions for smooth motion
 * - Loop and alternate animations
 * - Synchronize multiple timelines
 *
 * The timeline is automatically registered with the global animation engine and
 * will start playing immediately unless `autoplay: false` is specified.
 *
 * @param options - Configuration options for the timeline
 * @returns A new Timeline instance
 *
 * @example
 * ```ts
 * import { createTimeline, BoxRenderable } from "@opentui/core"
 *
 * const box = new BoxRenderable(ctx, {
 *   position: "absolute",
 *   left: 10,
 *   top: 10,
 *   width: 20,
 *   height: 10
 * })
 *
 * // Create a simple animation
 * const timeline = createTimeline({ duration: 2000 })
 * timeline.add(box, {
 *   x: 50,
 *   y: 20,
 *   duration: 1000,
 *   ease: "inOutQuad"
 * })
 *
 * // Create a looping animation with callbacks
 * const loopTimeline = createTimeline({
 *   duration: 3000,
 *   loop: true,
 *   onComplete: () => console.log("Loop complete!")
 * })
 *
 * // Animate multiple properties with different timings
 * const state = { x: 0, opacity: 1, scale: 1 }
 * loopTimeline.add(state, {
 *   x: 100,
 *   duration: 1000,
 *   ease: "outExpo",
 *   onUpdate: (anim) => {
 *     box.x = state.x
 *   }
 * }, 0)
 * loopTimeline.add(state, {
 *   opacity: 0.5,
 *   scale: 1.5,
 *   duration: 500,
 *   ease: "inOutSine"
 * }, 500)
 * ```
 *
 * @public
 */
/**
 * Creates a new timeline for orchestrating animations.
 *
 * @param options - Configuration options for the timeline
 * @returns A Timeline instance ready for adding animations
 *
 * @remarks
 * Timeline is the main animation system in OpenTUI. It provides:
 * - **Sequential Animations**: Chain multiple animations with precise timing
 * - **Parallel Animations**: Run multiple animations simultaneously
 * - **Nested Timelines**: Compose complex animations from sub-timelines
 * - **Looping**: Repeat animations infinitely or a specific number of times
 * - **Easing Functions**: Smooth transitions with various easing curves
 * - **Callbacks**: Trigger events at specific points in the animation
 *
 * Timelines use an object-based animation system where you specify target
 * property values and the timeline animates from current to target values.
 *
 * @example
 * ```ts
 * // Simple timeline with one animation
 * const timeline = createTimeline({ duration: 2000 })
 * timeline.add(box, { x: 100, y: 50, duration: 2000 })
 *
 * // Timeline with multiple sequential animations
 * const sequence = createTimeline({ duration: 5000 })
 * sequence.add(box, { x: 100, duration: 1000 }, 0)     // Start at 0ms
 * sequence.add(box, { y: 50, duration: 1000 }, 1000)   // Start at 1000ms
 * sequence.add(box, { x: 0, y: 0, duration: 1000 }, 2000) // Start at 2000ms
 *
 * // Looping timeline
 * const loop = createTimeline({
 *   duration: 3000,
 *   loop: true,
 *   onComplete: () => console.log("Loop iteration complete")
 * })
 * loop.add(box, {
 *   rotation: Math.PI * 2,
 *   duration: 3000,
 *   ease: "linear"
 * })
 *
 * // Update timeline in render loop
 * renderer.setFrameCallback(async (deltaTime) => {
 *   timeline.update(deltaTime)
 * })
 * ```
 *
 * @public
 */
export function createTimeline(options: TimelineOptions = {}): Timeline {
  const timeline = new Timeline(options)
  if (options.autoplay !== false) {
    timeline.play()
  }

  engine.register(timeline)

  return timeline
}
