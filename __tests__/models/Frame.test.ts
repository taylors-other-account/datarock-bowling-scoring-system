import { Frame } from '../../src/models/Frame';

describe('Frame', () => {
    test('given a frame number between 1-9 and two rolls, when checking if the frame is complete, then it should be true', () => {
        const frame = new Frame(5);
        frame.addRoll(3);
        frame.addRoll(4);
        expect(frame.isComplete()).toBe(true);
    });

    test('given frame number 10 with two rolls and no strike or spare, when checking if the frame is complete, then it should be true', () => {
        const frame = new Frame(10);
        frame.addRoll(8);
        frame.addRoll(1);
        expect(frame.isComplete()).toBe(true);
    });

    test('given frame number 10 with a strike, when checking if the frame is complete, then three rolls should be allowed', () => {
        const strikeFrame = new Frame(10);
        strikeFrame.addRoll(10);
        expect(strikeFrame.isComplete()).toBe(false);
        strikeFrame.addRoll(5);
        expect(strikeFrame.isComplete()).toBe(false);
        strikeFrame.addRoll(5);
        expect(strikeFrame.isComplete()).toBe(true);
    });

    test('given frame number 10 with a spare, when checking if the frame is complete, then three rolls should be allowed', () => {
        const spareFrame = new Frame(10);
        spareFrame.addRoll(5);
        expect(spareFrame.isComplete()).toBe(false);
        spareFrame.addRoll(5);
        expect(spareFrame.isComplete()).toBe(false);
        spareFrame.addRoll(5);
        expect(spareFrame.isComplete()).toBe(true);
    });
}); 