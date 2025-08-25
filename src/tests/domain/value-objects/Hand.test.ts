import {describe, expect, it} from "vitest";
import {Card, Rank, Suit} from "../../../domain/value-objects/Card.js";
import {Hand} from "../../../domain/value-objects/Hand.js";

describe("Hand", () => {
  describe("constructor", () => {
    it('should say when it is a pair', () => {
      const card1 = new Card(Rank.TWO, Suit.CLUBS)
      const card2 = new Card(Rank.TWO, Suit.SPADES)
      const hand = new Hand(card1, card2)
      expect(hand.getType()).toEqual(HAND_TYPE.PAIR)
    });
  })
})