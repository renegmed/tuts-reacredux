import React, { Component } from 'react';

import { connect } from 'react-redux';

import { actions as employeesActions } from '../../ducks/employees';
import Colleagues from './Colleagues';

class ColleaguesContainer extends Component {

    componentDidMount() {
        this.props.fetchEmployees();
    }
    
    render() {
        return (
            <Colleagues />
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch(employeesActions.fetchEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColleaguesContainer);

