import { ValidationUtils } from '../../src/utils/ValidationUtils';

describe('ValidationUtils', () => {
  describe('validatePins', () => {
    test('given a valid number of pins (0-10), when validatePins is called, then no error should be thrown', () => {
      expect(() => ValidationUtils.validatePins(0)).not.toThrow();
      expect(() => ValidationUtils.validatePins(5)).not.toThrow();
      expect(() => ValidationUtils.validatePins(10)).not.toThrow();
    });

    test('given a negative number of pins, when validatePins is called, then an error should be thrown', () => {
      expect(() => ValidationUtils.validatePins(-1)).toThrow('Invalid number of pins');
    });

    test('given a number of pins greater than 10, when validatePins is called, then an error should be thrown', () => {
      expect(() => ValidationUtils.validatePins(11)).toThrow('Invalid number of pins');
    });
  });
}); 