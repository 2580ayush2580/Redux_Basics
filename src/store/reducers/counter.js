const initialState={
    counter:0
}

const reducer = (state=initialState,action)=>{
    if(action.type==='increment'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type==='decrement'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type==='add'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type==='substract'){
        return {
            ...state,
            counter: state.counter - action.value 
        }
    }
  

    return state;
}

export default reducer;