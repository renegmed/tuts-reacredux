import React, { Component } from 'react';
import store from '../../store';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe(); // this will cleanly unsubscribe (no error thrown) this component to store if Freezer is un-rendered.
  }

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor key={flavorName} flavorName={flavorName} scoops={this.state.flavors[flavorName]} />
    ));
    console.log(this.state.flavors);
    return (
      <Panel title="Freezer (°0C)">
      {flavors}
      </Panel>
    );
  }
}

export default Freezer;

