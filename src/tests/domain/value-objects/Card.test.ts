import {describe, it, expect} from "vitest";

describe("Card", () => {
    describe("constructor", () => {
        it("should create a Card if rank and suits are correct", () => {
            const card = new Card(Rank.SEVEN, Suit.SPADES)
            expect(card.getRank()).toBe(Rank.SEVEN)
            expect(card.getSuit()).toBe(Suit.SPADES)
        })
    })
})