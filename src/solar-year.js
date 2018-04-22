class User {
  constructor() {
    this.currentDate;
    this.birthDate;
    this.birthSexOrigin;
    this.earthAgeSeconds;
    this.earthAgeDays;
    this.earthAgeYears;
    this.lifeExpectancy;
    this.earthYearsBeforeLifeExpect;
    this.earthYearsPastLifeExpect = 0;
    this.planetConversions = [
      {planet: 'jupiter', conversionFactor: 11.86, ageYears: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'mars', conversionFactor: 1.88, ageYears: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'mercury', conversionFactor: 0.24, ageYears: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
      {planet: 'venus', conversionFactor: 0.62, ageYears: undefined, expectedYearsLeft: undefined, yearsPastExpectancy: 0},
    ];
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeDays = parseFloat((this.earthAgeSeconds / 86400).toFixed(4));
    this.earthAgeYears = parseFloat((this.earthAgeDays / 365.25).toFixed(4));
  }

  calcLifeExpectancy() {
    if (this.birthSexOrigin === 'male') {
      this.lifeExpectancy = 77;
    } else if (this.birthSexOrigin === 'average') {
      this.lifeExpectancy = 80;
    } else if (this.birthSexOrigin === 'female') {
      this.lifeExpectancy = 83;
    }
    this.earthYearsBeforeLifeExpect = this.lifeExpectancy - this.earthAgeYears;
    if (this.earthYearsBeforeLifeExpect < 0) {
      this.earthYearsPastLifeExpect = Math.abs(this.earthYearsBeforeLifeExpect);
      this.earthYearsBeforeLifeExpect = 0;
    }
  }

  calcSolarYearAge() {
    this.planetConversions.forEach((planet) => {
      planet.ageYears = parseFloat((this.earthAgeYears / planet.conversionFactor).toFixed(4));
      planet.expectedYearsLeft = parseFloat((this.earthYearsBeforeLifeExpect / planet.conversionFactor).toFixed(4));
      planet.yearsPastExpectancy = parseFloat((this.earthYearsPastLifeExpect / planet.conversionFactor).toFixed(4));
    });
  }
}

export { User };
