class User {
  constructor() {
    this.birthDate;
    this.currentDate;
    this.earthAgeYears;
  }

  calcEarthAge() {
    this.earthAgeYears = this.currentDate.getFullYear() - this.birthDate.getFullYear();
  }
}

export { User };
