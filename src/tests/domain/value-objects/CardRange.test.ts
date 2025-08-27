import {describe, expect, it} from "vitest";
import {CardRange} from "../../../domain/value-objects/CardRange.js";

describe("CardRange", () => {
  describe("constructor", () => {
    it('should have 169 hands exactly', () => {
      const range = new CardRange('name');
      expect(range.getHands().length).toEqual(169)
    });
  })
})