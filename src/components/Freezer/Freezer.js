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

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor key={flavorName} flavorName={flavorName} scoops={this.state.flavors[flavorName]} />
    ));
    //console.log(this.state.flavors);
    //console.log(this.state.temperature);

    // used templating technique `` for title
    return (
      <Panel title={`Freezer (°${this.state.temperature || 0}C)`}>
      {flavors}
      </Panel>
    );
  }
}

export default Freezer;

