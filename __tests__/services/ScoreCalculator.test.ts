import { ScoreCalculator } from '../../src/services/ScoreCalculator';

describe('ScoreCalculator', () => {
  let scoreCalculator: ScoreCalculator;

  beforeEach(() => {
    scoreCalculator = new ScoreCalculator();
  });

  test('given no rolls, when calculateScore is called, then it should return 0', () => {
    expect(scoreCalculator.calculateScore([])).toBe(0);
  });

  test('given a single roll, when calculateScore is called, then it should return the value of the single roll', () => {
    expect(scoreCalculator.calculateScore([5])).toBe(5);
  });

  test('given a frame with no strikes or spares, when calculateScore is called, then it should return the sum of all pins', () => {
    expect(scoreCalculator.calculateScore([3, 4])).toBe(7);
  });

  test('given multiple frames with no strikes or spares, when calculateScore is called, then it should return the sum of all pins', () => {
    expect(scoreCalculator.calculateScore([3, 4, 5, 2])).toBe(14);
  });

  test('given a spare followed by another roll, when calculateScore is called, then it should add the appropriate bonus score', () => {
    expect(scoreCalculator.calculateScore([5, 5, 3])).toBe(16);
  });

  test('given a strike followed by two rolls, when calculateScore is called, then it should add the appropriate bonus score', () => {
    expect(scoreCalculator.calculateScore([10, 3, 4])).toBe(24);
  });

  test('given consecutive strikes, when calculateScore is called, then it should add the appropriate bonus score', () => {
    expect(scoreCalculator.calculateScore([10, 10, 10])).toBe(60);
  });

  test('given a perfect game, when calculateScore is called, then it should return 300', () => {
    const rolls = Array(12).fill(10);
    expect(scoreCalculator.calculateScore(rolls)).toBe(300);
  });
}); 