export class ValidationUtils {
  private static readonly MAX_PINS = 10;
  
  /**
   * Validates the number of pins knocked down.
   * @param pins - The number of pins knocked down.
   * @throws Error if the number of pins is invalid.
   */
  static validatePins(pins: number): void {
    if (pins < 0 || pins > ValidationUtils.MAX_PINS) {
      throw new Error(`Invalid number of pins: ${pins}. Must be between 0 and 10.`);
    }
  }
} 