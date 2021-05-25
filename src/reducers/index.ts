import { combineReducers } from 'redux';
import CatsSlice from '../slices/catsSlice';

/**
 * The @appReducer specifies the top-level app reducer, which we used to combine reducers together.
 * 
 * @author jlee
 */
const appReducer = combineReducers({
    catsSlice: CatsSlice
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export type RootState = ReturnType<typeof appReducer>
export default rootReducer;