abstract class Pizza {
  protected name: string;

  protected dough: string;

  protected suace: string;

  protected topPings: string[] = [];

  public prepare(): void {
    console.log(`Preparing... ${this.getName()}`);
    console.log(`Tossing dough...`);
    console.log(`Adding sauce...`);
    console.log(`Adding toppings: ${this.topPings.join(',')}`);
  }

  public bake(): void {
    console.log(`Bake for 25 minutes...`);
  }

  public cut(): void {
    console.log(`Cutting pizza...`);
  }

  public box(): void {
    console.log(`Boxing pizza...`);
  }

  public getName(): string {
    return this.name;
  }
}

export default Pizza;
