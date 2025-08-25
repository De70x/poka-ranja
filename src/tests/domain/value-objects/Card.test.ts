import {describe, it, expect} from "vitest";
import {Card, Rank, Suit} from "../../../domain/value-objects/Card.js";

describe("Card", () => {
    describe("constructor", () => {
        it("should create a Card if rank and suits are correct", () => {
            const card = new Card(Rank.SEVEN, Suit.SPADES)
            expect(card.getRank()).toBe(Rank.SEVEN)
            expect(card.getSuit()).toBe(Suit.SPADES)
        })
    })
})