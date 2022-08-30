const initialState = null;
const detailsReducer = (state=initialState, action) => {
    switch(action.type){
        case "CAR_SELECT":
        return {
             ...action.payload
        }
        default: return state;
    }
}

export default detailsReducer;