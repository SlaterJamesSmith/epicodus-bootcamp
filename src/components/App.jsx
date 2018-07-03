import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import StatusBar from './StatusBar';
import Tamagotchi from './Tamagotchi';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hungerLevel: 100,
      energyLevel: 100,
      happinessLevel: 100,
      hygieneLevel: 100,
      hunger: -1,
      energy: -1,
      happiness: 0,
      hygiene: 0
    };
  }

  componentDidMount() {
    this.levelsUpdater = setInterval(() =>
      this.processLevelChanges(), 1000
    );
  }

  processLevelChanges() {
    let newHungerLevel = this.state.hungerLevel + this.state.hunger;
    let newEnergyLevel = this.state.energyLevel + this.state.energy;
    let newHappinessLevel = this.state.happinessLevel + this.state.happiness;
    let newHygieneLevel = this.state.hygieneLevel + this.state.hygiene;
    this.setState({
      hungerLevel: newHungerLevel,
      energyLevel: newEnergyLevel,
      happinessLevel: newHappinessLevel,
      hygieneLevel: newHygieneLevel
    });
    if (newHungerLevel === 0 || newEnergyLevel === 0 || newHappinessLevel === 0 || newHygieneLevel === 0) {
      clearInterval(this.levelsUpdater);
    }
  }

  render() {
    return(
      <div id='app-container'>
        <style jsx global>
          {`
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }

            #app-container {
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }

            h1 {
              color: #08f;
            }
          `}
        </style>
        <StatusBar
          hungerLevel={this.state.hungerLevel}
          energyLevel={this.state.energyLevel}
          happinessLevel={this.state.happinessLevel}
          hygieneLevel={this.state.hygieneLevel}
        />
        <Switch>
          <Route exact path='/' component={Tamagotchi}/>
          <Route component={Error404}/>
        </Switch>
        <ActionBar/>
      </div>
    );
  }
}

export default App;
