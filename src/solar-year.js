class User {
  constructor() {
    this.birthDate;
    this.currentDate;
    this.earthAgeSeconds;
    this.earthAgeYears;
    this.jupiterAgeYears;
    this.marsAgeYears;
    this.mercuryAgeYears;
    this.venusAgeYears;
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
    }
  }
}

export { User };
