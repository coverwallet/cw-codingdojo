import Kata from '../src/Kata';

describe('Kata', () => {
  it('works', () => {
    expect(Kata.describeYourself()).toBe('I am a kata in js');
  });
})