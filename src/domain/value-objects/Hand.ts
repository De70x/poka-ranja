import {Rank} from "./Card.js";

export enum HAND_TYPES {
  PAIRED = '',
  OFFSUITED = 'o',
  SUITED = 's',
}

export class Hand {
  constructor(private readonly name: string) {
    if (!Object.values(Rank).includes(name.charAt(0) as Rank) || !Object.values(Rank).includes(name.charAt(1) as Rank)) {
      throw new Error('DOMAIN_EXCEPTION_UNKNOWN_HAND');
    }
    if (name.charAt(0) === name.charAt(1) && name.length !== 2) {
      throw new Error('DOMAIN_EXCEPTION_UNKNOWN_HAND');
    }
  }
  
  public getType(): HAND_TYPES {
    if (this.name.length === 2 && this.name.charAt(0) === this.name.charAt(1)) {
      return HAND_TYPES.PAIRED
    } else if (this.name.charAt(2) === 's') {
      return HAND_TYPES.SUITED
    } else if (this.name.charAt(2) === 'o') {
      return HAND_TYPES.OFFSUITED
    } else {
      throw new Error(`Unhandled hand ${this.name}`)
    }
  }
}