import { ScoreCalculator } from './services/ScoreCalculator';
import { FrameManager } from './services/FrameManager';
import { ValidationUtils } from './utils/ValidationUtils';

export class BowlingGame {
  private readonly scoreCalculator = new ScoreCalculator();
  private readonly frameManager = new FrameManager();
  
  /**
   * Records a roll in the game.
   * @param pins - The number of pins knocked down in this roll.
   */
  public roll(pins: number): void {
    ValidationUtils.validatePins(pins);
    this.frameManager.addRoll(pins);
  }
  
  /**
   * Calculates the current score of the game.
   * @returns The total score.
   */
  public score(): number {
    return this.scoreCalculator.calculateScore(this.frameManager.getAllRolls());
  }
} 