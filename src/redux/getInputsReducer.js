const initialState = {
    arr:[]
};


export const getInputsReducer = (state=initialState, action) => {

    switch (action.type) {
        case "GET_Obj":
            return {...state,};

        default:
            return state;
    }
};
