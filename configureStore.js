import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleWare from 'redux-saga';
import dataSaga from './saga';

const sagaMiddleWare = createSagaMiddleWare();

export default function configureStore() {
    const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
    sagaMiddleWare.run(dataSaga);
    return store;
}