import {Card} from "./Card.js";

export enum HAND_TYPES {
    PAIRED = '',
    OFFSUITED = 'o',
    SUITED = 's',
}

export class Hand {
  constructor(private readonly card1: Card, private readonly card2: Card) {
  }

  getType(): HAND_TYPES {
      if(this.card1.getRank() === this.card2.getRank()) {
          return HAND_TYPES.PAIRED
      }
      else if(this.card1.getSuit() === this.card2.getSuit()) {
          return HAND_TYPES.SUITED
      }
      else{
          return HAND_TYPES.OFFSUITED
      }
  }

}