import { Button } from '@chakra-ui/button';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatImage from '../src/components/CatImage';
import EmptyContainer from '../src/components/layout/EmptyContainer';
import Footer from '../src/components/layout/Footer';
import { LikedCat } from '../src/interfaces';
import { RootState } from '../src/reducers';
import { removeLikedCat } from '../src/slices/catsSlice';

/**
 * The @Favourites page displays all the cats "liked" by the user.
 * 
 * @returns 
 * @author jlee
 */
const Favourites: FC = () => {
    const likedCats = useSelector((state: RootState) => state.catsSlice.likedCats);
    const router = useRouter();

    return (
        <Box>
            <Heading as="h3" size="md">{likedCats.length ?? 0} liked kitties</Heading>
            {likedCats.length ? <FavouritesGrid likedCats={likedCats} /> : <EmptyContainer label="No kitties...you must be more of a dog person?" />}
            <Footer>
                <Button colorScheme="blue" onClick={() => router.back()}>Back</Button>
            </Footer>
        </Box>
    );
}

const FavouritesGrid: FC<{ likedCats: Array<LikedCat> }> = ({ likedCats }) => {
    const dispatch = useDispatch();
    const onRemove = (cat: LikedCat) => {
        dispatch(removeLikedCat({ catId: cat.id }));
    }

    return (
        <SimpleGrid w="2xl" columns={[1, 2, null, 4]} spacing={4} justifyContent="center">
            {likedCats.map((cat: LikedCat) => <CatImage key={cat.id} cat={cat} onClick={onRemove} isLiked={true} />)}
        </SimpleGrid>
    );
}

export default Favourites;