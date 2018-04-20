class User {
  constructor() {
    this.birthDate;
    this.currentDate;
    this.earthAgeSeconds;
  }

  calcEarthAge() {
    this.earthAgeSeconds = (this.currentDate - this.birthDate) / 1000;
  }
}

export { User };
