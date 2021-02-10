export default class Singleton {
  private static uniqueInstance: Singleton;

  private flag = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton();
    }

    return this.uniqueInstance;
  }

  public setFlag(): void {
    this.flag = true;
  }

  public getFlag(): boolean {
    return this.flag;
  }
}
