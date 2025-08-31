import {Hand} from "./Hand.js";
import {Card, Rank} from "./Card.js";

export class CardRange {
  private readonly hands: Hand[] = [];
  
  constructor(private readonly name: string) {
    for (let rankCard1 in Rank) {
      for (let rankCard2 in Rank) {
        let newHandStr = `${Rank[rankCard1]}${Rank[rankCard2]}`
        if (Card.RANK_VALUES[Rank[rankCard1]] > Card.RANK_VALUES[Rank[rankCard2]]) {
          newHandStr += 'o'
        } else if (Card.RANK_VALUES[Rank[rankCard1]] < Card.RANK_VALUES[Rank[rankCard2]]) {
          newHandStr = `${Rank[rankCard2]}${Rank[rankCard1]}s`
        }
        this.hands.push(new Hand(newHandStr));
      }
    }
  }
  
  public getHands() {
    return this.hands;
  }
  
  public getName() {
    return this.name;
  }
}