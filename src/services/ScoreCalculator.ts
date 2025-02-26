export class ScoreCalculator {
  private static readonly PINS_PER_FRAME = 10;
  private static readonly MAX_FRAMES = 10;
  
  /**
   * Calculates the total score.
   * @param rolls - Array of rolls in the game.
   * @returns The total score.
   */
  calculateScore(rolls: number[]): number {
    let score = 0;
    let rollIndex = 0;
    
    for (let frame = 0; frame < ScoreCalculator.MAX_FRAMES; frame++) {
      if (rollIndex >= rolls.length) {
        break;
      }
      
      if (this.isStrike(rolls, rollIndex)) {
        score += this.calculateStrikeScore(rolls, rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rolls, rollIndex)) {
        score += this.calculateSpareScore(rolls, rollIndex);
        rollIndex += 2;
      } else {
        score += this.calculateFrameScore(rolls, rollIndex);
        rollIndex += 2;
      }
    }
    
    return score;
  }
  
  /**
   * Checks if the roll at the given index is a strike.
   * @param rolls - Array of rolls in the game.
   * @param rollIndex - The index of the roll to check.
   * @returns True if the roll is a strike, false otherwise.
   */
  private isStrike(rolls: number[], rollIndex: number): boolean {
    return rolls[rollIndex] === ScoreCalculator.PINS_PER_FRAME;
  }
  
  /**
   * Checks if the frame starting at the given roll index is a spare.
   * @param rolls - Array of rolls in the game.
   * @param rollIndex - The index of the first roll in the frame.
   * @returns True if the frame is a spare, false otherwise.
   */
  private isSpare(rolls: number[], rollIndex: number): boolean {
    return rollIndex + 1 < rolls.length && 
           rolls[rollIndex] + rolls[rollIndex + 1] === ScoreCalculator.PINS_PER_FRAME;
  }
  
  /**
   * Calculates the score for a strike.
   * @param rolls - Array of rolls in the game.
   * @param rollIndex - The index of the strike roll.
   * @returns The score for the strike frame.
   */
  private calculateStrikeScore(rolls: number[], rollIndex: number): number {
    const nextTwoRolls = (rollIndex + 1 < rolls.length ? rolls[rollIndex + 1] : 0) + 
                         (rollIndex + 2 < rolls.length ? rolls[rollIndex + 2] : 0);
    return ScoreCalculator.PINS_PER_FRAME + nextTwoRolls;
  }
  
  /**
   * Calculates the score for a spare.
   * @param rolls - Array of rolls in the game.
   * @param rollIndex - The index of the first roll in the spare frame.
   * @returns The score for the spare frame.
   */
  private calculateSpareScore(rolls: number[], rollIndex: number): number {
    const nextRoll = rollIndex + 2 < rolls.length ? rolls[rollIndex + 2] : 0;
    return ScoreCalculator.PINS_PER_FRAME + nextRoll;
  }
  
  /**
   * Calculates the score for a regular frame.
   * @param rolls - Array of rolls in the game.
   * @param rollIndex - The index of the first roll in the frame.
   * @returns The score for the regular frame.
   */
  private calculateFrameScore(rolls: number[], rollIndex: number): number {
    const firstRoll = rolls[rollIndex];
    const secondRoll = rollIndex + 1 < rolls.length ? rolls[rollIndex + 1] : 0;
    return firstRoll + secondRoll;
  }
} 