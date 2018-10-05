import React from 'react';
import TamaRoom from './TamaRoom';
import CircularMeter from './tamagotchi-ui/CircularMeter';
import TubeMeter from './tamagotchi-ui/TubeMeter';
import { v4 } from 'uuid';

class TamaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petStatus: {
        foodLevel: 100,
        healthLevel: 100,
        playLevel: 100
      },
      petDebuff: {
        statDecayValue: -15
      },
      petBuff: {
        statBoostValue: 50
      },
      petConditions: {
        activeStatus: null,
        mealsToDigest: 0,
        poopsOut: {},
        vomitsOut: 0
      },
      petConstants: {
        mealCapacity: 5
      }
    };
    this.handleFeedPet = this.handleFeedPet.bind(this);
    this.handleExercisePet = this.handleExercisePet.bind(this);
    this.handlePlayWithPet = this.handlePlayWithPet.bind(this);
    this.handleDrainVomit = this.handleDrainVomit.bind(this);
    this.handleScoopPoop = this.handleScoopPoop.bind(this);
  }

  componentDidMount() {
    this.tamaPetStatusTimer = setInterval(() => this.tamaStatusUpdater(), 3000);
    this.tamaPetConditionsTimer = setInterval(() => this.tamaConditionsUpdater(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.tamaPetStatusTimer);
    clearInterval(this.tamaPetConditionsTimer);
  }

  tamaStatusUpdater() {
    this.calcPetStatusDecay();
  }

  tamaConditionsUpdater() {
    this.calcPetDigestion();
  }

  calcPetStatusDecay() {
    const status = this.state.petStatus;
    const decay = this.state.petDebuff.statDecayValue;
    this.setState({
      petStatus: {
        foodLevel: (status.foodLevel + decay > 0) ? status.foodLevel + decay : 0,
        healthLevel: (status.healthLevel + decay > 0) ? status.healthLevel + decay : 0,
        playLevel: (status.playLevel + decay > 0) ? status.playLevel + decay : 0
      }
    });
  }

  calcPetDigestion() {
    const conditions = this.state.petConditions;
    let newPoopsOut = Object.assign({}, conditions.poopsOut);
    if (conditions.mealsToDigest > 0) {
      let newPoopId = v4();
      newPoopsOut = Object.assign(newPoopsOut, {
        [newPoopId]: {status: 'unscooped'}
      });
    }
    this.setState({
      petConditions: {
        activeStatus: conditions.activeStatus,
        mealsToDigest: (conditions.mealsToDigest - 1 > 0) ? conditions.mealsToDigest - 1 : 0,
        poopsOut: newPoopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  handleFeedPet() {
    const conditions = this.state.petConditions;
    if (conditions.mealsToDigest < this.state.petConstants.mealCapacity && conditions.activeStatus === null) {
      this.startFeed();
    } else if (conditions.mealsToDigest >= this.state.petConstants.mealCapacity && conditions.activeStatus === null) {
      this.startVomit();
    }
  }

  startFeed() {
    const status = this.state.petStatus;
    const conditions = this.state.petConditions;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: (status.foodLevel + boost < 100) ? status.foodLevel + boost : 100,
        healthLevel: status.healthLevel,
        playLevel: status.playLevel
      },
      petConditions: {
        activeStatus: 'eating',
        mealsToDigest: conditions.mealsToDigest + 1,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
    setTimeout(() => this.stopFeed(), 1000);
  }

  stopFeed() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: null,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  startVomit() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: 'vomiting',
        mealsToDigest: 0,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut + 1
      }
    });
    setTimeout(() => this.stopVomit(), 2000);
  }

  stopVomit() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: null,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  handleExercisePet() {
    const conditions = this.state.petConditions;
    if (conditions.activeStatus === null) {
      this.startExercise();
    }
  }

  startExercise() {
    const status = this.state.petStatus;
    const conditions = this.state.petConditions;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: status.foodLevel,
        healthLevel: (status.healthLevel + boost < 100) ? status.healthLevel + boost : 100,
        playLevel: status.playLevel
      },
      petConditions: {
        activeStatus: 'exercising',
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
    setTimeout(() => this.stopExercise(), 1000);
  }

  stopExercise() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: null,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  handlePlayWithPet() {
    const conditions = this.state.petConditions;
    if (conditions.activeStatus === null) {
      this.startPlay();
    }
  }

  startPlay() {
    const status = this.state.petStatus;
    const conditions = this.state.petConditions;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: status.foodLevel,
        healthLevel: status.healthLevel,
        playLevel: (status.playLevel + boost < 100) ? status.playLevel + boost : 100
      },
      petConditions: {
        activeStatus: (Math.random() > 0.5) ? 'playing-1' : 'playing-2',
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
    setTimeout(() => this.stopPlay(), 1000);
  }

  stopPlay() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: null,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  handleDrainVomit() {
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: conditions.activeStatus,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: (conditions.vomitsOut - 1 >= 0) ? conditions.vomitsOut - 1 : 0
      }
    });
  }

  handleScoopPoop(poopId) {
    const conditions = this.state.petConditions;
    let newPoopsOut = Object.assign({}, conditions.poopsOut, {
      [poopId]: {status: 'scooped'}
    });
    this.setState({
      petConditions: {
        activeStatus: conditions.activeStatus,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: newPoopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
    setTimeout(() => this.removePoop(poopId), 250);
  }

  removePoop(poopId) {
    const conditions = this.state.petConditions;
    let newPoopsOut = Object.assign({}, conditions.poopsOut);
    delete newPoopsOut[poopId];
    this.setState({
      petConditions: {
        activeStatus: conditions.activeStatus,
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: newPoopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
  }

  render() {
    return (
      <section id="tama-home">
        <style jsx>
          {`
            #tama-home {
              min-height: 100vh;
              width: 100%;
              position: absolute;
              top: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 100px 0 25px;
              animation: fade-in 2s forwards;
            }

            .scenery {
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(#00b8ff, #fff);
              animation: hue 24s linear infinite;
            }

            .sky-box {
              height: 50%;
              width: 100%;
              position: absolute;
              display: flex;
              justify-content: center;
              top: 0;
              overflow: hidden;
              z-index: 10;
            }

            .rotator {
              height: 0;
              width: 0;
              position: absolute;
              display: flex;
              justify-content: center;
              top: 1000px;
              transform: rotate(180deg);
              animation: rotate-sky 24s linear infinite;
            }

            .sun {
              height: 150px;
              width: 150px;
              position: absolute;
              bottom: 850px;
              border-radius: 100%;
              background: #fff7d1;
              animation: sun 24s linear infinite;
            }

            .moon-ext {
              height: 100px;
              width: 100px;
              position: absolute;
              top: 850px;
              border-radius: 100%;
              overflow: hidden;
              animation: moon 24s linear infinite;
            }

            .moon-int {
              box-sizing: content-box;
              height: 80px;
              width: 120px;
              position: absolute;
              top: -35px;
              left: -70px;
              border-radius: 100%;
              border: 60px solid #fff;
            }

            .lawn {
              height: 50%;
              width: 100%;
              position: absolute;
              bottom: 0;
              background: linear-gradient(#42dc63, #00a424);
            }

            .color-filter {
              height: 100%;
              width: 100%;
              position: absolute;
              opacity: 0.5;
              z-index: 5;
              animation: color 24s linear infinite;
            }

            .house {
              width: 500px;
              position: relative;
              z-index: 10;
            }

            .chimney {
              height: 80px;
              width: 40px;
              position: absolute;
              top: 20px;
              right: 10%;
              border-radius: 5px;
              background-color: #f09;
              z-index: 0;
            }

            .roof {
              border-left: 250px solid transparent;
              border-right: 250px solid transparent;
              border-bottom: 100px solid #f09;
              z-index: 5;
            }

            .walls {
              height: 500px;
              padding: 15px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              background-color: #ddd;
            }

            .status-meters {
              display: flex;
              z-index: 10;
            }

            @keyframes fade-in {
              0% {opacity: 0;}
              100% {opacity: 1;}
            }

            @keyframes rotate-sky {
              0% {transform: rotate(0deg);}
              100% {transform: rotate(-360deg);}
            }

            @keyframes sun {
              10% {background: #fff7d1;}
              25% {background: #ff966e;}
              75% {background: #ff966e;}
              90% {background: #fff7d1;}
            }

            @keyframes moon {
              25% {transform: rotate(-135deg);}
              50% {transform: rotate(-45deg);}
              75% {transform: rotate(45deg);}
            }

            @keyframes hue {
              0% {filter: hue-rotate(0deg);}
              50% {filter: hue-rotate(50deg);}
              100% {filter: hue-rotate(0deg);}
            }

            @keyframes color {
              0% {background: transparent;}
              50% {background: #430065;}
              100% {background: transparent;}
            }
          `}
        </style>
        <section className="scenery">
          <div className="color-filter"></div>
          <div className="sky-box">
            <div className="rotator">
              <div className="sun"></div>
              <div className="moon-ext">
                <div className="moon-int"></div>
              </div>
            </div>
          </div>
          <div className="lawn"></div>
        </section>
        <section className="house">
          <div className="chimney"></div>
          <div className="roof"></div>
          <div className="walls">
            <TamaRoom
              petStatus={this.state.petStatus}
              petConditions={this.state.petConditions}
              onDrainVomit={this.handleDrainVomit}
              onScoopPoop={this.handleScoopPoop}
            />
          </div>
        </section>
        <section className="status-meters">
          <TubeMeter
            meterType="Happiness"
            meterValue={this.state.petStatus.foodLevel + this.state.petStatus.healthLevel + this.state.petStatus.playLevel}
            maxValue={300}
          />
          <CircularMeter
            meterType="food"
            meterValue={this.state.petStatus.foodLevel}
            maxValue={100}
            onAction={this.handleFeedPet}
          />
          <CircularMeter
            meterType="health"
            meterValue={this.state.petStatus.healthLevel}
            maxValue={100}
            onAction={this.handleExercisePet}
          />
          <CircularMeter
            meterType="play"
            meterValue={this.state.petStatus.playLevel}
            maxValue={100}
            onAction={this.handlePlayWithPet}
          />
        </section>
      </section>
    );
  }
}

export default TamaHome;
