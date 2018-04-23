class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.age = 0;
    this.evolution = "Infant";
    this.foodLevel = 10;
    this.attentionLevel = 10;
    this.sleepLevel = 10;
    this.status = "Alive";
  }

  setAge() {
    setInterval(() => {
      this.age++;
      if (this.age >= 10) {
        this.evolution = "Adult";
      }
    }, 60000);
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

  feed() {
    if (this.status === "Alive" && this.foodLevel < 100) {
      this.foodLevel += 10;
    }
  }

  playTime() {
    if (this.status === "Alive" && this.attentionLevel < 100) {
      this.attentionLevel += 10;
    }
  }

  sleep() {
    if (this.status === "Alive" && this.sleepLevel < 100) {
      this.sleepLevel += 10;
      this.status = "Sleeping";
      setTimeout(() => {
        this.status = "Alive";
      }, 10000);
    }
  }
}

export { Tamagotchi };
