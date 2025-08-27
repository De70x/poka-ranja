import {Hand} from "./Hand.js";
import {Card, Rank, Suit} from "./Card.js";

export class CardRange {
  private readonly hands: Hand[] = [];
  
  constructor(private readonly name: string) {
    for (let i = 0; i < 169; i++) {
      this.hands.push(new Hand(new Card(Rank.ACE, Suit.CLUBS), new Card(Rank.ACE, Suit.CLUBS)))
    }
  }
  
  public getHands() {
    return this.hands;
  }
  
  public getName() {
    return this.name;
  }
}