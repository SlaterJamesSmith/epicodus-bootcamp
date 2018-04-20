class User {
  constructor() {
    this.birthDate;
    this.currentDate;
    this.earthAgeSeconds;
    this.earthAgeYears;
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
    this.earthAgeYears = this.earthAgeSeconds / 31536000;
  }
}

export { User };
