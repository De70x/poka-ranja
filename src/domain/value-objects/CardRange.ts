import {Hand} from "./Hand.js";

export class CardRange {
  private readonly hands: Hand[] = [];
  
  constructor(private readonly name: string) {
  }
  
  public getHands() {
    return this.hands;
  }
  
  public getName() {
    return this.name;
  }
}