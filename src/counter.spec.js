import { increaseCount, reducer, store } from './counter';

describe('Counter', function(){
    it('should have a default state', function(){
        const result = reducer();
        expect(result.count).toEqual(0);
    });

    it('should increase the count when the right action is passed in the reducer', function(){
        const action = increaseCount(); 
        const result = reducer(undefined, action); 
        expect(result.count).toEqual(1);
    });

    it('should increase the count with the right amount passed into the reducer', function(){
        const action = increaseCount(3); 
        const result = reducer(undefined, action); 
        expect(result.count).toEqual(3);
    });
});

describe('Sheep counting store', function() {
    it('should return the state', function(){
        const state = store.getState();
        expect(state.count).toEqual(0);
    });

    it('should dispatch actions and update the state', function(){
        const action = increaseCount();
        store.dispatch(action)  // calls the reducer using this action
        expect(store.getState().count).toEqual(1)
        store.dispatch(action)
        expect(store.getState().count).toEqual(2)
        store.dispatch(action)
        expect(store.getState().count).toEqual(3)
    });

  

    it('should call the subscribers when the store data changes', function(){
        const listener = jest.fn();
        store.subscribe(listener);
        const action = increaseCount();
        store.dispatch(action);
        expect(listener).toHaveBeenCalled(); // listener is called when store changes
    });

    it('should not call the unsubscribed subscriber when the store data changes', function(){
        const listener = jest.fn();
        const unsubscribe = store.subscribe(listener);
        const action = increaseCount();
        unsubscribe();
        store.dispatch(action);
        expect(listener).not.toHaveBeenCalled(); // listener is called when store changes
    });
});