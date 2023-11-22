import {INCREMENT,DECREMENT,RESET} from './CountActionTypes';

const intialState={
    count:0
}
const countReducer=(state=intialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {count:state.count+1};
        case DECREMENT:
            return {count:state.count-1};
        case RESET:
            return{count:state.count=0};
        default:
            return state;    

    }
}
export default countReducer;