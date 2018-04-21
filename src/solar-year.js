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
    this.earthYearsPastLifeExpect;
    this.jupiterAgeYears;
    this.jupiterYearsBeforeLifeExpect;
    this.jupiterYearsPastLifeExpect;
    this.marsAgeYears;
    this.marsYearsBeforeLifeExpect;
    this.marsYearsPastLifeExpect;
    this.mercuryAgeYears;
    this.mercuryYearsBeforeLifeExpect;
    this.mercuryYearsPastLifeExpect;
    this.venusAgeYears;
    this.venusYearsBeforeLifeExpect;
    this.venusYearsPastLifeExpect;
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeDays = this.earthAgeSeconds / 86400;
    this.earthAgeYears = parseFloat((this.earthAgeDays / 365.25).toFixed(4));
  }

  calcSolarYearAge() {
    this.jupiterAgeYears = parseFloat((this.earthAgeYears / 11.86).toFixed(4));
    this.marsAgeYears = parseFloat((this.earthAgeYears / 1.88).toFixed(4));
    this.mercuryAgeYears = parseFloat((this.earthAgeYears / 0.24).toFixed(4));
    this.venusAgeYears = parseFloat((this.earthAgeYears / 0.62).toFixed(4));
  }

  calcLifeExpectancy() {
    if (this.birthSexOrigin === 'male') {
      this.lifeExpectancy = 77;
    } else if (this.birthSexOrigin === 'average') {
      this.lifeExpectancy = 80;
    } else if (this.birthSexOrigin === 'female') {
      this.lifeExpectancy = 83;
    }
  }

  calcYearsPastLifeExpect() {
    this.earthYearsPastLifeExpect = this.earthAgeYears - this.lifeExpectancy;
    this.jupiterYearsPastLifeExpect = parseFloat((this.earthYearsPastLifeExpect / 11.86).toFixed(4));
    this.marsYearsPastLifeExpect = parseFloat((this.earthYearsPastLifeExpect / 1.88).toFixed(4));
    this.mercuryYearsPastLifeExpect = parseFloat((this.earthYearsPastLifeExpect / 0.24).toFixed(4));
    this.venusYearsPastLifeExpect = parseFloat((this.earthYearsPastLifeExpect / 0.62).toFixed(4));
  }

  calcYearsBeforeLifeExpect() {
    if (this.earthAgeYears > this.lifeExpectancy) {
      this.earthYearsBeforeLifeExpect = 0;
      this.calcYearsPastLifeExpect();
    } else {
      this.earthYearsBeforeLifeExpect = this.lifeExpectancy - this.earthAgeYears;
    }
    this.jupiterYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 11.86).toFixed(4));
    this.marsYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 1.88).toFixed(4));
    this.mercuryYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 0.24).toFixed(4));
    this.venusYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 0.62).toFixed(4));
  }
}

export { User };
