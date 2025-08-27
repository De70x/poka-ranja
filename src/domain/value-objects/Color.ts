export class Color {
  constructor(private readonly value: string) {
    if (!/^#[0-9A-Fa-f]{6}$/.test(value)) {
      throw new Error('DOMAIN_EXCEPTION_INVALID_COLOR' + value);
    }
    this.value = value;
  }
  
  public getValue(): string {
    return this.value;
  }
}