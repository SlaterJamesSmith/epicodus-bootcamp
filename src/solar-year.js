class User {
  constructor() {
    this.currentDate;
    this.birthDate;
    this.birthSexOrigin;
    this.earthAgeSeconds;
    this.earthAgeYears;
    this.lifeExpectancy;
    this.earthYearsBeforeLifeExpect;
    this.jupiterAgeYears;
    this.marsAgeYears;
    this.marsYearsBeforeLifeExpect
    this.mercuryAgeYears;
    this.mercuryYearsBeforeLifeExpect;
    this.venusAgeYears;
    this.venusYearsBeforeLifeExpect;
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeYears = this.earthAgeSeconds / 31536000;
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
    } else if (this.birthSexOrigin === 'not reported or intersex') {
      this.lifeExpectancy = 80;
    } else if (this.birthSexOrigin === 'female') {
      this.lifeExpectancy = 83;
    }
  }

  calcYearsBeforeLifeExpect() {
    this.earthYearsBeforeLifeExpect = this.lifeExpectancy - this.earthAgeYears;
    this.marsYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 1.88).toFixed(4));
    this.mercuryYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 0.24).toFixed(4));
    this.venusYearsBeforeLifeExpect = parseFloat((this.earthYearsBeforeLifeExpect / 0.62).toFixed(4));
  }
}

export { User };
