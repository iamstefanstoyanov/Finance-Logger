import { HasFormater } from '../interfaces/HasFormater';

export class Payment implements HasFormater {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
