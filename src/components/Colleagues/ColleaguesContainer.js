import React, { Component } from 'react';

import { connect } from 'react-redux';

import { actions as employeesActions } from '../../ducks/employees';
import Colleagues from './Colleagues';

class ColleaguesContainer extends Component {
    render() {
        return (
            <Colleagues />
        );
    }
}
 

export default connect()(ColleaguesContainer);

