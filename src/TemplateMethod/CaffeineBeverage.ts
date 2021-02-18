export default abstract class CaffeineBeverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();

    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  public boilWater(): void {
    console.log('Bolling water');
  }

  public pourInCup(): void {
    console.log('Pouring into cup');
  }

  public customerWantsCondiments(): boolean {
    return true;
  }
}
