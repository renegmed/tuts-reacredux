export default store => next => action => {
    console.log('Next (2):', next); 
    next(action); 
}
// old form
// export default function (store) {
//     return function (next) {
//         return function (action) {
//             console.log('Action:', action);
//             console.log('State:', store.getState());
//             next(action);
//             console.log('New State:', store.getState());
//         };
//     };
// }