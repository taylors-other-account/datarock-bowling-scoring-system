import { BowlingGame } from '../src/BowlingGame';

describe('BowlingGame', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  test('given all rolls score 0, when calculating score, then return 0', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  test('given all rolls score 1, when calculating score, then return 20', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  test('given 12 strikes in a row, when calculating score, then return 300', () => {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });

  test('given two rolls of 4, when calculating score, then return 8', () => {
    game.roll(4);
    game.roll(4);
    expect(game.score()).toBe(8);
  });

  test('given a spare with a following frame of 5,0, when calculating score, then return 20', () => {
    game.roll(4);
    game.roll(6); // spare
    game.roll(5);
    game.roll(0);
    expect(game.score()).toBe(20);
  });

  test('given a strike with a following frame of 5,4, when calculating score, then return 28', () => {
    game.roll(10); // strike
    game.roll(5);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(28);
  });

  test('given an invalid input, when rolling, then throw an error', () => {
    expect(() => game.roll(-1)).toThrow('Invalid number of pins');
    expect(() => game.roll(11)).toThrow('Invalid number of pins');
  });

  test('given a strike in the first two rolls of the last frame, when rolling, then allow a 3rd roll in that frame', () => {
    rollMany(18, 0); // First 9 frames with 0 pins
    rollStrike(); // Strike in 10th frame
    game.roll(3); // Second roll
    game.roll(4); // Bonus roll
    expect(game.score()).toBe(17);
  });

  test('given a spare in the last frame, when rolling, then allow a 3rd roll in that frame', () => {
    rollMany(18, 0); // First 9 frames with 0 pins
    game.roll(6);
    game.roll(4); // Spare in 10th frame
    game.roll(5); // Bonus roll
    expect(game.score()).toBe(15);
  });

  test('given two strikes and an 8 in the tenth frame, when calculating score, then return 28', () => {
    rollMany(18, 0); // First 9 frames with 0 pins
    rollStrike(); // Strike in 10th frame
    rollStrike(); // First bonus roll is a strike
    game.roll(8); // Second bonus roll
    expect(game.score()).toBe(28);
  });

  test('given a spare and a 9 in the tenth frame, when calculating score, then return 19', () => {
    rollMany(18, 0); // First 9 frames with 0 pins
    game.roll(8); // First roll in 10th frame
    game.roll(2); // Spare in 10th frame
    game.roll(9); // Bonus roll
    expect(game.score()).toBe(19);
  });

  // Helper functions
  function rollMany(n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare(): void {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike(): void {
    game.roll(10);
  }
}); 