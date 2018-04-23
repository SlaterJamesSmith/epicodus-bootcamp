class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.attentionLevel = 10;
    this.sleepLevel = 10;
    this.status = "Alive";
  }

  setFoodLevel() {
    setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel <= 0) {
        this.status = "Dead";
      }
    }, 1000);
  }

  setAttentionLevel() {
    setInterval(() => {
      this.attentionLevel--;
      if (this.attentionLevel <= 0) {
        this.status = "Dead";
      }
    }, 5000);
  }

  setSleepLevel() {
    setInterval(() => {
      this.sleepLevel--;
      if (this.sleepLevel <= 0) {
        this.status = "Dead";
      }
    }, 10000);
  }

}

export { Tamagotchi };
