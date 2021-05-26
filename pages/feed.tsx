import { Box, Flex, SimpleGrid } from '@chakra-ui/layout';
import { Button, SkeletonCircle, Spinner } from "@chakra-ui/react";
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import CatImage from '../src/components/CatImage';
import Footer from '../src/components/layout/Footer';
import { useSearchCats } from '../src/hooks';
import { ICat } from '../src/interfaces';
import { RootState } from '../src/reducers';
import { addLikedCat } from '../src/slices/catsSlice';
import { CatsQueryKeys } from '../src/util/QueryKeys';
 
const Feed: FC = () => {
    const dispatch = useDispatch();
    const { data, fetchNextPage, hasNextPage, isFetching } = useSearchCats();
    const likedCats = useSelector((state: RootState) => state.catsSlice.likedCats);
    const { ref, inView } = useInView({ threshold: 0.1 });
  
    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage]);

    const onLikedCatClick = (cat: ICat) => {
        console.log("Liked cat: ", JSON.stringify(cat));
        if (!likedCats.find(c => c.id === cat.id)) dispatch(addLikedCat({ likedCat: { id: cat.id, url: cat.url }}));
    }

    return (
        <Box>
            {data && (
                <SimpleGrid w="2xl" columns={[1, 2, null, 4]} spacing={4} justifyContent="center">
                    {data.pages.flat().map((cat: ICat) => (
                        <CatImage key={cat.id} cat={cat} onClick={onLikedCatClick} isLiked={likedCats.find(c => c.id === cat.id) ? true : false} />
                    ))}

                    {
                        isFetching ? (
                            [...new Array(4)].map((_, idx) => (<SkeletonCircle key={idx} boxSize="100px" />))
                        ) : (
                           hasNextPage && (
                            <Flex ref={ref} align="center" justify="center">
                                <Spinner size="md" />
                            </Flex>
                           ) 
                        )
                    }
                </SimpleGrid>
            )}
            
            <Footer>
                <Link href="/favourites">
                    <Button colorScheme="blue">Next</Button>
                </Link>
            </Footer>
        </Box>
    );
}

export default Feed;