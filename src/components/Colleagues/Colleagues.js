import React, { Component } from 'react';

import Panel from '../Panel/Panel';

import './Colleagues.css';

const Colleague = ({ photo, name, status }) => (
  <tr className="colleague">
    <td>
      <img className="colleague__photo" src={photo} alt={name} />
    </td>
    <td className="colleague__info">
      <div className="colleague__name">{name}</div>
      <div className="colleague__status">{status}</div>
    </td>
  </tr>
);

class Colleagues extends Component { 
  render() {
    return (
      <Panel title="Colleagues">
        <table className="colleagues-table">
          <colgroup>
            <col width="0" />
            <col width="100%" />
          </colgroup>
          <tbody>
            {this.props.data.map( (person, index) => (
              <Colleague
              key={index}
              photo={person.picture.thumbnail}
              name={person.name.first}
              status={person.status}
            />
            ))}
          </tbody>
        </table>
      </Panel>
    );
  }
}

export default Colleagues;
