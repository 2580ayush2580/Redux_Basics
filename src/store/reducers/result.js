const initialState={
    results:[]
}

const reducer = (state=initialState,action)=>{
    
    if(action.type==='show_result'){
        return {
            ...state,
           results:state.results.concat({
           value:action.result,
           id:new Date()
           })
        }
    }
    if(action.type==='delete_result'){
        const updatedArray=state.results.filter((result,index)=> action.resultID!==result.id  )
        return {
            ...state,
           results:updatedArray
        }
    }

    return state;
}

export default reducer;