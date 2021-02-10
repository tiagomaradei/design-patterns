abstract class Beverage {
  protected description = 'Bebida desconhecida';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export default Beverage;
