class User {
  constructor(currentDate, birthDate, sex) {
    this.currentDate = new Date(currentDate);
    this.birthDate = new Date(birthDate);
    this.birthSexOrigin = sex;
    this.earthAgeSeconds;
    this.earthAgeDays;
    this.earthAgeYears;
    this.earthLifeExpectancy;
    this.earthExpectedYearsLeft;
    this.earthYearsPastExpectancy = 0;
    this.planets = [
      {planet: 'jupiter', conversionFactor: 11.86, ageYears: undefined, lifeExpectancy: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'mars', conversionFactor: 1.88, ageYears: undefined, lifeExpectancy: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'mercury', conversionFactor: 0.24, ageYears: undefined, lifeExpectancy: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'venus', conversionFactor: 0.62, ageYears: undefined, lifeExpectancy: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
    ];
  }

  calcEarthAgeData() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeDays = parseFloat((this.earthAgeSeconds / 86400).toFixed(2));
    this.earthAgeYears = parseFloat((this.earthAgeDays / 365.25).toFixed(2));
  }

  calcEarthLifeExpectancy() {
    if (this.birthSexOrigin === 'male') {
      this.earthLifeExpectancy = 77;
    } else if (this.birthSexOrigin === 'average') {
      this.earthLifeExpectancy = 80;
    } else if (this.birthSexOrigin === 'female') {
      this.earthLifeExpectancy = 83;
    }
    this.earthExpectedYearsLeft = this.earthLifeExpectancy - this.earthAgeYears;
    if (this.earthExpectedYearsLeft < 0) {
      this.earthYearsPastExpectancy = Math.abs(this.earthExpectedYearsLeft);
      this.earthExpectedYearsLeft = 0;
    }
  }

  calcPlanetData() {
    this.planets.forEach((planet) => {
      planet.ageYears = parseFloat((this.earthAgeYears / planet.conversionFactor).toFixed(2));
      planet.lifeExpectancy = parseFloat((this.earthLifeExpectancy / planet.conversionFactor).toFixed(2));
      planet.expectedYearsLeft = parseFloat((this.earthExpectedYearsLeft / planet.conversionFactor).toFixed(2));
      planet.yearsPastExpectancy = parseFloat((this.earthYearsPastExpectancy / planet.conversionFactor).toFixed(2));
    });
  }
}

export { User };
