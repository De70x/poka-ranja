import {Color} from "./Color.js";

export class Action {
  constructor(private readonly name: string, private readonly color: Color) {
  }
  
  public getColor() {
    return this.color;
  }
  
  public getName() {
    return this.name;
  }
}