export class Keg {
  public fluidOzVolume: number = 1984;
  public fluidOzCapacity: number = 1984;
  public pintCount: number = this.fluidOzVolume / 16;
  constructor(
    public beerName: string,
    public breweryName: string,
    public beerType: string,
    public abv: number,
    public price: number,
  ) { }

  updatePintCount() {
    this.pintCount = this.fluidOzVolume / 16;
  }
}
