import { FrameManager } from '../../src/services/FrameManager';

describe('FrameManager', () => {
  let frameManager: FrameManager;

  beforeEach(() => {
    frameManager = new FrameManager();
  });

  describe('addRoll', () => {
    test('given a FrameManager with one roll, when checking the frame number, then we should be on the first frame', () => {
        frameManager.addRoll(5);
        expect(frameManager.getCurrentFrameNumber()).toBe(1);
      });

    test('given a FrameManager with a strike in the first frame, when a new roll is added, then we should be on the second frame', () => {
      frameManager.addRoll(10);
      frameManager.addRoll(5);
      expect(frameManager.getCurrentFrameNumber()).toBe(2);
    });

    test('given a FrameManager with a complete frame, when a new roll is added, then we should be on the second frame', () => {
      frameManager.addRoll(5);
      frameManager.addRoll(3);
      frameManager.addRoll(7);
      expect(frameManager.getCurrentFrameNumber()).toBe(2);
    });
  });

  describe('getAllRolls', () => {
    test('given a FrameManager with many rolls, when getAllRolls is called, then it should return all rolls from all frames', () => {
      frameManager.addRoll(10);
      frameManager.addRoll(5);
      frameManager.addRoll(5);
      frameManager.addRoll(7);
      
      expect(frameManager.getAllRolls()).toEqual([10, 5, 5, 7]);
    });
  });
}); 