import React from 'react';
import TamaRoom from './TamaRoom';
import CircularMeter from './tamagotchi-ui/CircularMeter';

class TamaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petStatus: {
        foodLevel: 100,
        energyLevel: 100,
        playLevel: 100
      }
    };
  }

  componentDidMount() {
    this.tamaClock = setInterval(() => this.tamaStateUpdater(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tamaClock);
  }

  tamaStateUpdater() {
    this.calcPetStatusLevels(this.state.petStatus);
  }

  calcPetStatusLevels(status) {
    this.setState({
      petStatus: {
        foodLevel: (status.foodLevel > 0) ? status.foodLevel - 5 : 0,
        energyLevel: (status.energyLevel > 0) ? status.energyLevel - 5 : 0,
        playLevel: (status.playLevel > 0) ? status.playLevel - 5 : 0
      }
    });
    if (status.foodLevel + status.energyLevel + status.playLevel <= 0) {
      clearInterval(this.tamaClock);
    }
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
          <CircularMeter
            meterType="F"
            meterValue={this.state.petStatus.foodLevel}
          />
          <CircularMeter
            meterType="E"
            meterValue={this.state.petStatus.energyLevel}
          />
          <CircularMeter
            meterType="P"
            meterValue={this.state.petStatus.playLevel}
          />
        </section>
      </section>
    );
  }
}

export default TamaHome;
