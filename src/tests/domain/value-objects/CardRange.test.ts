import {describe, expect, it} from "vitest";
import {CardRange} from "../../../domain/value-objects/CardRange.js";

describe("CardRange", () => {
  describe("constructor", () => {
    it('should have 169 hands exactly', () => {
      const range = new CardRange('name');
      expect(range.getHands().length).toEqual(169)
    });
    it('should have all the different combos', () => {
      const range = new CardRange('name');
      let tempHand = null
      range.getHands().forEach((hand) => {
        expect(tempHand).not.toEqual(hand);
        tempHand = hand;
      })
    })
  })
})