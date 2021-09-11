import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { increment, incrementSaga, incrementSagaSucccess } from './counterSlice';


// export function* log(action: PayloadAction){
//     console.log('Log_takeEvery: ', action );
// };
export function* handleIncrementSaga(action: PayloadAction<number>){
    // console.log('handleIncrementSaga ', action.payload );
    console.log('Waiting 2s');

    yield delay(2000);

    console.log('Waiting done, dispatch action');

    //Dispatch action success
    yield put(incrementSagaSucccess(action.payload));
};

export default function* counterSaga(){
    console.log('Counter Saga');

    // Lắng nghe bất cứ 1 type dispatch action nào , mình sẽ log ra
    // yield takeEvery('*' , log ); 
    // yield takeEvery('counter/increment' , log ); 

    yield takeEvery( incrementSaga.toString() , handleIncrementSaga );  
    // yield takeLatest( incrementSaga.toString() , handleIncrementSaga );  
}