# Datarock Bowling Scoring System

A TypeScript implementation of a bowling scoring system for Datarock's bowling club.

## Description

This system implements scoring for a game of ten pin bowling with the following features:

- One player only
- Standard bowling rules: 10 frames, 10 pins per frame, 2 tries per frame
- Spare: 10 pins + next roll
- Strike: 10 pins + next two rolls
- 10th frame special rules:
  - Spare: Player gets a bonus roll (3 total)
  - Strike: Player gets 2 bonus rolls (3 total)

## Interface

```typescript
// Create a new bowling game
const game = new BowlingGame();

// Record a roll
game.roll(noOfPins);

// Get the current score
const score = game.score();
```

## Project Structure

- **Main**: `BowlingGame.ts` - Main interface
- **Models**: `Frame.ts`, `Roll.ts` 
- **Services**: `ScoreCalculator.ts`, `FrameManager.ts`
- **Utils**: `ValidationUtils.ts`
- **Tests**: `__tests__/BowlingGame.test.ts` (using Jest)

## Building and Testing

```bash
# Compile TypeScript
npm run build

# Run tests
npm test
```

## Usage Examples

### Regular Frame
```typescript
const game = new BowlingGame();
game.roll(4);
game.roll(4);
console.log(game.score()); // 8
```

### Spare
```typescript
const game = new BowlingGame();
game.roll(4); 
game.roll(6); // Spare
game.roll(5); 
game.roll(0);
console.log(game.score()); // 20
```

### Strike
```typescript
const game = new BowlingGame();
game.roll(10); // Strike
game.roll(5); 
game.roll(4);
console.log(game.score()); // 28
```