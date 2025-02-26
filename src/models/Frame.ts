export class Frame {
  private rolls: number[] = [];
  private readonly maxRolls: number;
  private static readonly PINS_PER_FRAME = 10;
  
  /**
   * Creates a new frame.
   * @param frameNumber - The 1-based frame number (1-10).
   */
  constructor(public readonly frameNumber: number) {
    // 10th frame can have up to 3 rolls
    this.maxRolls = frameNumber === 10 ? 3 : 2;
  }
  
  /**
   * Adds a roll to this frame.
   * @param pins - The number of pins knocked down in this roll.
   */
  addRoll(pins: number) {
    this.rolls.push(pins);
  }
  
  /**
   * Gets the rolls in this frame.
   * @returns A copy of the rolls array.
   */
  getRolls(): number[] {
    return [...this.rolls];
  }
  
  /**
   * Checks if this frame is complete.
   * @returns True if the frame is complete, false otherwise.
   */
  isComplete(): boolean {
    // If we've used all available rolls
    if (this.rolls.length >= this.maxRolls) return true;
    
    // If it's not the 10th frame and we have a strike
    if (this.frameNumber < 10 && this.rolls[0] === Frame.PINS_PER_FRAME) return true;
    
    // If it's the 10th frame with a strike or spare, we need all rolls
    if (this.frameNumber === 10) {
      // If we have 2 rolls and neither is a strike or spare
      if (this.rolls.length === 2 && 
          this.rolls[0] !== Frame.PINS_PER_FRAME && 
          this.rolls[0] + this.rolls[1] !== Frame.PINS_PER_FRAME) {
        return true;
      }
    }
    
    return false;
  }
} 