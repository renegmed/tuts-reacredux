import { actions, types } from '../../orders';

describe('placeOrder()', function(){
    it('should have the right action type', function(){
        const action = actions.placeOrder({});
        expect(action.type).toEqual(types.PLACE_ORDER); 
    });

    /**
     * customerName: String 
     * createdAt: Number 
     * cone: Boolean
     * scoops: Object
     * 
     */

    it('should contain the customer name in the payload', function(){
         const action = actions.placeOrder({
             customerName: 'Cindy',
         })

         expect(action.payload.customerName).toEqual('Cindy')
    });

    it('should contain the date of creation in the payload', function(){
        const action = actions.placeOrder({
            createdAt: 5,
        })

        expect(action.payload.createdAt).toEqual(5)
    });

    it('should contain the current date of create in the payload if no date is provided', function(){
        const action = actions.placeOrder({})

        expect(typeof action.payload.createdAt).toEqual('number')
    });

    it('should contain the cone/cup option in the payload', function(){
        const action = actions.placeOrder({
            cone: false
        })

        expect(action.payload.cone).toEqual(false)
    });


    it('should contain the a cone if no cone option is given', function(){
        const action = actions.placeOrder({})

        expect(action.payload.cone).toEqual(true)
    });


    it('should contain the scoops object in the payload', function(){
        const action = actions.placeOrder({
            scoops: 5
        })

        expect(action.payload.scoops).toEqual(5)
    });
});