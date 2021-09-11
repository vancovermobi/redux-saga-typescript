import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from "@redux-saga/core/effects";
import { increment } from './counterSlice';


export function* log(action: PayloadAction){
    console.log('Log_takeEvery: ', action );
};

export default function* counterSaga(){
    console.log('Counter Saga');

    // Lắng nghe bất cứ 1 type dispatch action nào , mình sẽ log ra
    yield takeEvery('*' , log ); 
    yield takeEvery('counter/increment' , log ); 
    yield takeEvery( increment().type , log ); 
}