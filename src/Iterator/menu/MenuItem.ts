export default class MenuItem {
  protected name: string;

  protected description: string;

  protected isVertarian: boolean;

  protected price: number;

  constructor(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number,
  ) {
    this.name = name;
    this.description = description;
    this.isVertarian = isVegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public isVegetarian(): boolean {
    return this.isVertarian;
  }

  public getPrice(): number {
    return this.price;
  }
}
