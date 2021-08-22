import { createStore, applyMiddleware } from 'redux';
import reducer from '../weather/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import produce from 'immer';
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)
export default store;