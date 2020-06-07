import * as actionTypes from '../actions/actionTypes'

const initialState={
    results:[]
}

const reducer = (state=initialState,action)=>{
    
    if(action.type===actionTypes.STORE_RESULT){
        return {
            ...state,
           results:state.results.concat({
           value:action.result,
           id:new Date()
           })
        }
    }
    if(action.type===actionTypes.DELETE_RESULT){
        const updatedArray=state.results.filter((result,index)=> action.resultID!==result.id  )
        return {
            ...state,
           results:updatedArray
        }
    }

    return state;
}

export default reducer;