import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LikedCat } from '../interfaces';

const initialState = {
    likedCats: [] as Array<LikedCat>
}

/**
 * The @catsSlice slice is the Redux state pertaining to the cat object. Currently we stored the cats a user has liked, and also allow them to
 * remove them also. This is using Redux Toolkit, which uses Immer under the hood so that we can update the state directly (under the hood Immer
 * will create a copy and update it for us) as oppose to using standard Redux actions/reducers whereby we would be forced to manually create a copy of
 * the state (@see Object.assign or {...props}) as the state should be immutable.
 * 
 * @author jlee
 */
const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
        addLikedCat(state, action: PayloadAction<{ likedCat: LikedCat }>) {
            const { likedCat } = action.payload;
            state.likedCats = [likedCat, ...state.likedCats];
        },
        removeLikedCat(state, action: PayloadAction<{ catId: string }>) {
            const { catId } = action.payload;
            state.likedCats = state.likedCats.filter(c => c.id !== catId);
        }
    }
});

export const { addLikedCat, removeLikedCat } = catsSlice.actions;
export default catsSlice.reducer;