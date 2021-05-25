import { Image } from '@chakra-ui/image';
import React, { FC, memo } from 'react';
import { ICat, LikedCat } from '../interfaces';

/**
 * The @CatImage renders the image of the cat, but also takes a callback which is fired on click. 
 * 
 * @param param0 
 * @returns 
 * @author jlee
 */
const CatImage : FC<{ cat: ICat | LikedCat, onClick: (cat: ICat | LikedCat) => void, isLiked: boolean }> = memo(({ cat, onClick, isLiked }) => {
    return (
        <Image
            borderRadius="full"
            boxSize="100px"
            src={cat.url}
            alt={cat.id}
            onClick={() => onClick(cat)}
            opacity={isLiked ? "1" : "0.5"}
            _hover={{ opacity: 1, cursor: 'pointer' }}
            fallbackSrc="https://via.placeholder.com/150"
        />
    );
});

export default CatImage;