import assert from 'assert';
import {Hand, HAND_TYPES} from "../../../domain/value-objects/Hand.js";

describe("Hand", () => {
  describe("constructor", () => {
    it('should say when it is a pair if two cards got the same rank', () => {
      const hand = new Hand('AA')
      assert.equal(hand.getType(), HAND_TYPES.PAIRED)
    })
    it('should say when it is suited if last char is s', () => {
      const hand = new Hand('AKs')
      assert.equal(hand.getType(), HAND_TYPES.SUITED)
    })
    it('should say when it is offsuited last char is o', () => {
      const hand = new Hand('AKo')
      assert.equal(hand.getType(), HAND_TYPES.OFFSUITED)
    })
    it('should not accept other char than known Ranks and o and s', () => {
      assert.throws(() => new Hand('AP'), /DOMAIN_EXCEPTION_UNKNOWN_HAND/)
    })
    it('should not accept to have the same card with an additional char (AAs is dumb and AAo is too long)', () => {
      assert.throws(() => new Hand('AAs'), /DOMAIN_EXCEPTION_UNKNOWN_HAND/)
      assert.throws(() => new Hand('AAo'), /DOMAIN_EXCEPTION_UNKNOWN_HAND/)
    })
  })
})