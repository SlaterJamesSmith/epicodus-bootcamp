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
        mealCapacity: 6
      }
    };
    this.handleFeedPet = this.handleFeedPet.bind(this);
    this.handleExercisePet = this.handleExercisePet.bind(this);
    this.handlePlayWithPet = this.handlePlayWithPet.bind(this);
    this.handleDrainVomit = this.handleDrainVomit.bind(this);
    this.handleScoopPoop = this.handleScoopPoop.bind(this);
  }

  componentDidMount() {
    this.tamaPetStatusTimer = setInterval(() => this.tamaStatusUpdater(), 2000);
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
    const conditions = this.state.petConditions;
    this.setState({
      petConditions: {
        activeStatus: 'eating',
        mealsToDigest: conditions.mealsToDigest,
        poopsOut: conditions.poopsOut,
        vomitsOut: conditions.vomitsOut
      }
    });
    setTimeout(() => this.stopFeed(), 1000);
  }

  stopFeed() {
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
        activeStatus: null,
        mealsToDigest: conditions.mealsToDigest + 1,
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
    const status = this.state.petStatus;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: status.foodLevel,
        healthLevel: (status.healthLevel + boost < 100) ? status.healthLevel + boost : 100,
        playLevel: status.playLevel
      }
    });
  }

  handlePlayWithPet() {
    const status = this.state.petStatus;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: status.foodLevel,
        healthLevel: status.healthLevel,
        playLevel: (status.playLevel + boost < 100) ? status.playLevel + boost : 100
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
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              animation: fade-in 2s forwards;
            }

            .chimney {
              height: 100px;
              width: 50px;
              position: absolute;
              top: 0;
              right: 10%;
              border-radius: 5px;
              background-color: #ddd;
            }

            .roof {
              border-left: 250px solid transparent;
              border-right: 250px solid transparent;
              border-bottom: 100px solid #f09;
              z-index: 5;
            }

            .walls {
              width: 100%;
              height: 500px;
              padding: 15px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              background-color: #ddd;
            }

            .status-meters {
              display: flex;
              justify-content: center;
            }

            @keyframes fade-in {
              0% {opacity: 0;}
              100% {opacity: 1;}
            }
          `}
        </style>
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
