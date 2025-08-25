import {describe, it, expect} from "vitest";
import {Card, Rank, Suit} from "../../../domain/value-objects/Card.js";

const areArraysEquals = (array1, array2) => {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

describe("Card", () => {
  describe("constructor", () => {
    it("should create a Card if rank and suits are correct", () => {
      const card = new Card(Rank.SEVEN, Suit.SPADES)
      expect(card.getRank()).toEqual(Rank.SEVEN)
      expect(card.getSuit()).toEqual(Suit.SPADES)
    })
  })
  describe("compare", () => {
    it("should be able to compare a rank", () => {
      const card1 = new Card(Rank.SEVEN, Suit.SPADES)
      const card2 = new Card(Rank.TWO, Suit.SPADES)
      const card3 = new Card(Rank.TWO, Suit.CLUBS)
      expect(card1.compareTo(card2)).toEqual(-1)
      expect(card2.compareTo(card1)).toEqual(1)
      expect(card3.compareTo(card2)).toEqual(0)
    })
    it("should be able to sort card arrays", () => {
      const cards = []
      cards.push(new Card(Rank.SEVEN, Suit.SPADES))
      cards.push(new Card(Rank.SEVEN, Suit.CLUBS))
      cards.push(new Card(Rank.ACE, Suit.CLUBS))
      cards.push(new Card(Rank.TWO, Suit.CLUBS))
      cards.push(new Card(Rank.TEN, Suit.CLUBS))

      cards.sort((a, b) => Card.sortCards(a,b))

      const expectedOrder = ['A', 'T', '7', '7', '2']
      const realOrder = cards.map(c => c.rank)
      expect(areArraysEquals(expectedOrder, realOrder)).toEqual(true)
    })
  })
})