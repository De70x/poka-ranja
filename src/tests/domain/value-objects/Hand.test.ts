import {describe, expect, it} from "vitest";
import {Hand, HAND_TYPES} from "../../../domain/value-objects/Hand.js";

describe("Hand", () => {
  describe("constructor", () => {
    it('should say when it is a pair if two cards got the same rank', () => {
      const hand = new Hand('AA')
      expect(hand.getType()).toEqual(HAND_TYPES.PAIRED)
    })
    it('should say when it is suited if last char is s', () => {
      const hand = new Hand('AKs')
      expect(hand.getType()).toEqual(HAND_TYPES.SUITED)
    })
    it('should say when it is offsuited last char is o', () => {
      const hand = new Hand('AKo')
      expect(hand.getType()).toEqual(HAND_TYPES.OFFSUITED)
    })
    it('should not accept other char than known Ranks and o and s', () => {
      expect(() => new Hand('AP')).toThrow('DOMAIN_EXCEPTION_UNKNOWN_HAND')
    })
    it('should not accept to have the same card with an additional char (AAs is dumb and AAo is too long)', () => {
      expect(() => new Hand('AAs')).toThrow('DOMAIN_EXCEPTION_UNKNOWN_HAND')
      expect(() => new Hand('AAo')).toThrow('DOMAIN_EXCEPTION_UNKNOWN_HAND')
    })
  })
})