const initialState = {
    status: 'SUCCESS',
    data: {
        temp: '',
        time: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'REQUST_PENDING':
            return{
                ...state,
                status: 'PENDING'
            }
        case 'REQUEST_SUCCESS':
            return{
                status: 'SUCCESS',
                data: action.payload
            }
        case 'REQUSET_FAILURE':
            return{
                ...state,
                status: 'REEOR'
            }
        default:
            return state;
        
    }
};

export default reducer;