import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import OrderTicket from '../OrderTicket/OrderTicket';

class OrderOverview extends Component {
  render() {
    console.log(this.props);

    return (
      <Panel title="Orders" horizontalScroll>
       {this.props.orders.map( (order, index) => (
        <OrderTicket
           key={index}
           {...order}
        />
       ))}
      </Panel>
    );
  }
};

export default OrderOverview;

