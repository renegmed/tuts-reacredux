import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { actions, types } from '../../employees';

describe('fetchEmployees()', function(){
    it('should dispatch the REQUEST action when the action is dispatched', function(){
        const spy = jest.fn();
        const thunk = actions.fetchEmployees();
        thunk(spy); // call the returned function function (dispatch, getState){...}

        expect(spy.mock.calls[0][0]).toEqual({  // [0][0] - first function dispatch and the first argument
            type: types.FETCH_EMPLOYEES_REQUEST,
        });
    });

    it('should dispatch the SUCCESS action when the data is fetched successfully', function(){
        const fakeData = [1,2,3];
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/employees.json').reply(200, fakeData);

        const spy = jest.fn();
        const thunk = actions.fetchEmployees(); // call the returned function return axios.get('/employees.json') 
        thunk(spy).then(function(){
                expect(spy.mock.calls[1][0]).toEqual({  
                    /*
                     [1][0] - second function 
                     
                       axios.get('/employees.json') 
                       
                       and the 
                     
                       .then(function(response){
                     
                       dispatch({
                          type: types.FETCH_EMPLOYEES_SUCCESS,
                    */    
                type: types.FETCH_EMPLOYEES_SUCCESS,
                payload: fakeData,
            });
        }); 
       
    });

    it('should dispatch the FAILURE action when the data is not available', function(){
        
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/employees.jsonn').reply(404);

        const spy = jest.fn();
        const thunk = actions.fetchEmployees(); // call the returned function return axios.get('/employees.json') 
        thunk(spy).then(function(){
                expect(spy.mock.calls[1][0]).toEqual({  
                    /*
                     [1][0] - second function 
                     
                     and the catch error part

                    .catch(err => {
                        //console.log(err.message);
                        dispatch({
                        type: types.FETCH_EMPLOYEES_FAILURE,
                        payload: err.message,
                    })
                    */    
                type: types.FETCH_EMPLOYEES_FAILURE, 
                payload: 'Request failed with status code 404',
            });
        }); 
       
    });
});