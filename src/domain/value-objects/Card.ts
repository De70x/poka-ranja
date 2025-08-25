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
  private static readonly RANK_VALUES: Record<Rank, number> = {
    [Rank.TWO]: 2,
    [Rank.THREE]: 3,
    [Rank.FOUR]: 4,
    [Rank.FIVE]: 5,
    [Rank.SIX]: 6,
    [Rank.SEVEN]: 7,
    [Rank.EIGHT]: 8,
    [Rank.NINE]: 9,
    [Rank.TEN]: 10,
    [Rank.JACK]: 11,
    [Rank.QUEEN]: 12,
    [Rank.KING]: 13,
    [Rank.ACE]: 14
  };

  constructor(private readonly rank: Rank, private readonly suit: Suit) {
  }

  getRank(): Rank {
    return this.rank
  }

  getRankValue(): number {
    return Card.RANK_VALUES[this.getRank()]
  }

  getSuit(): Suit {
    return this.suit
  }

  compareTo(card: Card): number {
    if(this.getRankValue() > card.getRankValue()){
      return -1
    }
    else if(this.getRankValue() < card.getRankValue()){
      return 1
    }
    else{
      return 0
    }
  }

  static sortCards(card1:Card, card2:Card){
    return card1.compareTo(card2)
  }

}