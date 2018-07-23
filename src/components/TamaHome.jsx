import React from 'react';
import TamaRoom from './TamaRoom';
import CircularMeter from './tamagotchi-ui/CircularMeter';
import TubeMeter from './tamagotchi-ui/TubeMeter';

class TamaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petStatus: {
        foodLevel: 100,
        energyLevel: 100,
        playLevel: 100
      },
      petDebuff: {
        statDecayValue: -5
      },
      petBuff: {
        statBoostValue: 50
      }
    };
    this.handleFeedPet = this.handleFeedPet.bind(this);
    this.handleEnergizePet = this.handleEnergizePet.bind(this);
    this.handlePlayWithPet = this.handlePlayWithPet.bind(this);
  }

  componentDidMount() {
    this.tamaClock = setInterval(() => this.tamaStateUpdater(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.tamaClock);
  }

  tamaStateUpdater() {
    this.calcPetStatusDecay();
  }

  calcPetStatusDecay() {
    const status = this.state.petStatus;
    const decay = this.state.petDebuff.statDecayValue;
    this.setState({
      petStatus: {
        foodLevel: (status.foodLevel + decay > 0) ? status.foodLevel + decay : 0,
        energyLevel: (status.energyLevel + decay > 0) ? status.energyLevel + decay : 0,
        playLevel: (status.playLevel + decay > 0) ? status.playLevel + decay : 0
      }
    });
    if (status.foodLevel + status.energyLevel + status.playLevel <= 0) {
      clearInterval(this.tamaClock);
    }
  }

  handleFeedPet() {
    const status = this.state.petStatus;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: (status.foodLevel + boost < 100) ? status.foodLevel + boost : 100,
        energyLevel: status.energyLevel,
        playLevel: status.playLevel
      }
    });
  }

  handleEnergizePet() {
    const status = this.state.petStatus;
    const boost = this.state.petBuff.statBoostValue;
    this.setState({
      petStatus: {
        foodLevel: status.foodLevel,
        energyLevel: (status.energyLevel + boost < 100) ? status.energyLevel + boost : 100,
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
        energyLevel: status.energyLevel,
        playLevel: (status.playLevel + boost < 100) ? status.playLevel + boost : 100
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
            }

            .chimney {
              height: 100px;
              width: 50px;
              position: absolute;
              top: 0;
              right: 10%;
              border-radius: 5px;
              background-color: #fce;
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
              background-color: #fce;
            }

            .status-meters {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
        <div className="chimney"></div>
        <div className="roof"></div>
        <div className="walls">
          <TamaRoom petStatus={this.state.petStatus} />
        </div>
        <section className="status-meters">
          <TubeMeter
            meterType="HAPPINESS"
            meterValue={this.state.petStatus.foodLevel + this.state.petStatus.energyLevel + this.state.petStatus.playLevel}
            maxValue={300}
          />
          <CircularMeter
            meterType="F"
            meterValue={this.state.petStatus.foodLevel}
            maxValue={100}
            onAction={this.handleFeedPet}
          />
          <CircularMeter
            meterType="E"
            meterValue={this.state.petStatus.energyLevel}
            maxValue={100}
            onAction={this.handleEnergizePet}
          />
          <CircularMeter
            meterType="P"
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
