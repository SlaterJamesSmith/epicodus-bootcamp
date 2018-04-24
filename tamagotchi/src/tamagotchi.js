class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.age = 0;
    this.evolution = 'Infant';
    this.foodLevel = 10;
    this.attentionLevel = 10;
    this.sleepLevel = 10;
    this.status = 'Alive';
  }

  setAge() {
    let clock = setInterval(() => {
      if (this.status === 'Dead') {
        clearInterval(clock);
      } else {
        this.age++;
        if (this.age >= 10) {
          this.evolution = 'Adult';
        }
      }
    }, 60000);
  }

  setFoodLevel() {
    let clock = setInterval(() => {
      if (this.status === 'Dead') {
        clearInterval(clock);
      } else {
        this.foodLevel--;
        if (this.foodLevel <= 0) {
          this.status = 'Dead';
        }
      }
    }, 1000);
  }

  setAttentionLevel() {
    let clock = setInterval(() => {
      if (this.status === 'Dead') {
        clearInterval(clock);
      } else {
        this.attentionLevel--;
        if (this.attentionLevel <= 0) {
          this.status = 'Dead';
        }
      }
    }, 5000);
  }

  setSleepLevel() {
    let clock = setInterval(() => {
      if (this.status === 'Dead') {
        clearInterval(clock);
      } else {
        this.sleepLevel--;
        if (this.sleepLevel <= 0) {
          this.status = 'Dead';
        }
      }
    }, 10000);
  }

  feed() {
    if (this.status === 'Alive' && this.foodLevel < 100) {
      this.foodLevel += 10;
    }
  }

  playTime() {
    if (this.status === 'Alive' && this.attentionLevel < 100) {
      this.attentionLevel += 10;
    }
  }

  sleep() {
    if (this.status === 'Alive' && this.sleepLevel < 100) {
      this.sleepLevel += 10;
      this.status = 'Sleeping';
      setTimeout(() => {
        this.status = 'Alive';
      }, 10000);
    }
  }

  grow() {
    if (this.age < 100) {
      this.age += 10;
      this.evolution = 'Adult';
      if (this.age >= 100) {
        this.status = 'Dead';
      }
    }
  }
}

export { Tamagotchi };
