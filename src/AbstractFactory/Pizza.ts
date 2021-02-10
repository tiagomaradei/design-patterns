import Cheese from './base-ingredients/Cheese';
import Clam from './base-ingredients/Clam';
import Dough from './base-ingredients/Dough';
import Pepperoni from './base-ingredients/Pepperoni';
import Sauce from './base-ingredients/Sauce';

abstract class Pizza {
  protected name: string;

  protected dough: Dough;

  protected suace: Sauce;

  protected cheese: Cheese;

  protected pepperoni: Pepperoni;

  protected clam: Clam;

  public abstract prepare(): void;

  public bake(): void {
    console.log(`Bake for 25 minutes...`);
  }

  public cut(): void {
    console.log(`Cutting pizza...`);
  }

  public box(): void {
    console.log(`Boxing pizza...`);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

export default Pizza;
