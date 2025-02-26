import { Frame } from '../models/Frame';

export class FrameManager {
  private static readonly MAX_FRAMES = 10;
  
  private frames: Frame[] = [];
  private currentFrameIndex = 0;

  constructor() {
    this.frames.push(new Frame(1));
  }
  
  /**
   * Adds a roll to the current frame.
   * @param pins - The number of pins knocked down in this roll.
   */
  addRoll(pins: number): void {
    const currentFrame = this.frames[this.currentFrameIndex];
    currentFrame.addRoll(pins);
    
    // If frame is complete and not the last frame, create a new frame
    if (currentFrame.isComplete() && this.frames.length < FrameManager.MAX_FRAMES) {
      this.frames.push(new Frame(this.frames.length + 1));
      this.currentFrameIndex++;
    }
  }
  
  /**
   * Gets all rolls in the game.
   * @returns Array of all rolls.
   */
  getAllRolls(): number[] {
    return this.frames.flatMap(frame => frame.getRolls());
  }
} 