import {INCREASE_BURGER,DECREASE_BURGER} from './burgerActionTypes';

//initializing state
const initialState={
	numberOfBurger:10
}

const burgerReducer=(state=initialState,action)=>{
	switch(action.type){
		case INCREASE_BURGER:return{
			...state,
			numberOfBurger:state.numberOfBurger+action.payload
		}
		case DECREASE_BURGER:return{
			...state,
			numberOfBurger:state.numberOfBurger-1
		}
		default:return state
	}
}

export default burgerReducer;

