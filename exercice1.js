const RockPaperScissors = require('./RockPaperScissorsClass');

describe('Hand1 wins', () => {
  let game;
  beforeEach(() => {
    game = new RockPaperScissors();
  })

  test('rock wins over scissors', () => {
    game.hand1Move('rock');
    expect(game.statusPlay).toBe('pending_hand2');
    game.hand2Move('scissors');
    expect(game.statusPlay).toBe('finished');
    expect(game.score.hand1).toBe(1);
    expect(game.score.hand2).toBe(0);
    expect(game.score.tie).toBe(0);
  })

  test('paper wins over rock', () => {
    game.hand1Move('paper');
    expect(game.statusPlay).toBe('pending_hand2');
    game.hand2Move('rock');
    expect(game.statusPlay).toBe('finished');
    expect(game.score.hand1).toBe(1);
    expect(game.score.hand2).toBe(0);
    expect(game.score.tie).toBe(0);
  })
})