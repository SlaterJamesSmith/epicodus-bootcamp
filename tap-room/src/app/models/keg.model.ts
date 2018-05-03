export class Keg {
  public fluidOzVolume: number = 1984;
  public fluidOzCapacity: number = 1984;
  constructor(
    public beerName: string,
    public breweryName: string,
    public beerType: string,
    public abv: number,
    public price: number,
  ) { }
}
