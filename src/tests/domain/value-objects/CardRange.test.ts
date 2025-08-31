import assert from 'assert';
import {CardRange} from "../../../domain/value-objects/CardRange.js";
import {Hand} from "../../../domain/value-objects/Hand.js";

describe("CardRange", () => {
  describe("constructor", () => {
    it('should have 169 hands exactly', () => {
      const range = new CardRange('name');
      assert.strictEqual(range.getHands().length, 169);
    });
    it('should have all possible combos', () => {
      const range = new CardRange('name');
      const handsAsStrings = range.getHands().map((hand: Hand) => hand.getValue())
      const suitedHands = handsAsStrings.filter(h => h.length === 3 && h.charAt(2) === 's');
      assert.equal(suitedHands.length, 78);
      const offsuitedHands = handsAsStrings.filter(h => h.length === 3 && h.charAt(2) === 'o');
      assert.equal(offsuitedHands.length, 78);
      const pairedHands = handsAsStrings.filter(h => h.length === 2);
      assert.equal(pairedHands.length, 13);
      const setToVerifyDuplicates = [...new Set(handsAsStrings)]
      assert.equal(setToVerifyDuplicates.length, 169);
    })
  })
})