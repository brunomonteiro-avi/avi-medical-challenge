import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './actions';
import { Network, Endpoints } from '../../networking';

// watcher for practices
export function* watchPracticesSaga() {
    yield takeLatest(
        Actions.GET_PRACTICES_REQUEST,
        getPractices,
    );
}


export function* getPractices(action: any) {
    try {
        const response = yield call(getPracticesCall, action);
        if(response && response.data){
            yield put(Actions.getPracticesSuccess({ practices: response.data }));
        }
        else{
            yield put(Actions.getPracticesSuccess({ practices: [] }));
        }
    } catch (error) {
        yield put(Actions.getPracticesFailure(error));
       
    }
}

//Api call to get practices
export function getPracticesCall(action: any) {
    const url = Endpoints.GET_PRACTICES_ENDPOINT;
    const config: any = {
        method: 'GET',
        url,
    };
    return Network.makeNetworkCall(config);
}
