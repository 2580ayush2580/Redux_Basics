import * as actionTypes from './actionTypes'

export const saveResult = (res)=>{
    return {
        type: actionTypes.STORE_RESULT,
        result:res
    }
}
 
export const storeResult = (res) =>{
  return (dispatch,getState) => {
    setTimeout(()=>{
        console.log(getState().ctr.counter)
    dispatch(saveResult(res))
    },2000)
  }
}
 
export const deleteResult = (resID) =>{
    return {
        type: actionTypes.DELETE_RESULT,
        resultID: resID
    }
}
 