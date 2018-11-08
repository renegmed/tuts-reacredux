import React, { Component } from 'react';
import store from '../../store';
import { actions } from '../../ducks/freezer';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
    temperature: store.getState().freezer.temperature,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors,
        temperature: store.getState().freezer.temperature,
      });
    });

    setInterval(() => {
      const randomTemperature = -Math.round(Math.random() * 10);
      //console.log("random temperature:", randomTemperature);
      store.dispatch(actions.updateTemperature(randomTemperature));
    }, 2000);
  }

  componentWillUnmount() {
    this.unsubscribe(); // this will cleanly unsubscribe (no error thrown) this component to store if Freezer is un-rendered.
  }

  handleClickRestock = (flavorName) => {
    const amount = parseInt(window.prompt(`Enter amount to restock ${flavorName}`));

    if (!isNaN(amount)) {  // amount is a number
      store.dispatch(actions.addProductToFreezer(flavorName, amount));
    }
  };

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor 
        key={flavorName}
        onClickRestock={() => this.handleClickRestock(flavorName)} 
        flavorName={flavorName} 
        scoops={this.state.flavors[flavorName]} 
      />
    ));
    
    // used templating technique `` for title
    return (
      <Panel title={`Freezer (°${this.state.temperature || 0}C)`}>
      {flavors}
      </Panel>
    );
  }
}

export default Freezer;

