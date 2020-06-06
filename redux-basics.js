 const redux = require('redux')
 const createStore = redux.createStore;

 const initialState = {
     counter: 0
 }

 const rootReducer = (state = initialState, action) => {
     if(action.type==='incCounter'){
         return{
             ...state,
             counter:state.counter + 1
         }
     }
     if(action.type==='addCounter'){
         return{
             ...state,
             counter:state.counter + action.value
         }
     }
       
     return state;
 }

 const store = createStore(rootReducer)
 console.log(store.getState())
 store.subscribe(()=>{
     console.log('subscription running',store.getState())
 })

 store.dispatch({
     type:'incCounter'
 })

 store.dispatch({
     type:'addCounter',
     value:10
 })

 console.log(store.getState())

   