import {describe, expect, it} from "vitest";
import {Card, Rank, Suit} from "../../../domain/value-objects/Card.js";
import {Hand, HAND_TYPES} from "../../../domain/value-objects/Hand.js";

describe("Hand", () => {
  describe("constructor", () => {
    it('should say when it is a pair if two casds got the same rank', () => {
      const card1 = new Card(Rank.SEVEN, Suit.CLUBS)
      const card2 = new Card(Rank.SEVEN, Suit.SPADES)
      const hand = new Hand(card1, card2)
      expect(hand.getType()).toEqual(HAND_TYPES.PAIRED)
    })
    it('should say when it is suited if two cards got the same suit', () => {
      const card1 = new Card(Rank.SEVEN, Suit.SPADES)
      const card2 = new Card(Rank.ACE, Suit.SPADES)
      const hand = new Hand(card1, card2)
      expect(hand.getType()).toEqual(HAND_TYPES.SUITED)
    })
    it('should say when it is offsuited if two cards does not have the same rank nor suit', () => {
      const card1 = new Card(Rank.SEVEN, Suit.SPADES)
      const card2 = new Card(Rank.ACE, Suit.CLUBS)
      const hand = new Hand(card1, card2)
      expect(hand.getType()).toEqual(HAND_TYPES.OFFSUITED)
    })
  })
})