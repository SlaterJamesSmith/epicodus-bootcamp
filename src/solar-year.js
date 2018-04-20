class User {
  constructor() {
    this.birthDate;
    this.currentDate;
    this.earthAgeSeconds;
    this.earthAgeYears;
    this.mercuryAgeYears;
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeYears = this.earthAgeSeconds / 31536000;
  }

  calcSolarYearAge() {
    this.mercuryAgeYears = parseFloat((this.earthAgeYears / 0.24).toFixed(4));
  }
}

export { User };
