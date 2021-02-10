export default class Light {
  private place: string;

  constructor(place: string) {
    this.place = place;
  }

  public on(): void {
    console.log(`Luz do(a) ${this.place} On`);
  }

  public off(): void {
    console.log(`Luz do(a) ${this.place} Off`);
  }
}
