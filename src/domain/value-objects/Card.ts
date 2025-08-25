export enum Suit {
    SPADES = 's',
    HEARTS = 'h',
    DIAMONDS = 'd',
    CLUBS = 'c'
}

export enum Rank {
    TWO = '2', THREE = '3', FOUR = '4', FIVE = '5', SIX = '6',
    SEVEN = '7', EIGHT = '8', NINE = '9', TEN = 'T',
    JACK = 'J', QUEEN = 'Q', KING = 'K', ACE = 'A'
}

export class Card {
    constructor(private readonly rank: Rank, private readonly suit: Suit) {

    }

    getRank(): Rank { return this.rank }
    getSuit(): Suit { return this.suit }

}