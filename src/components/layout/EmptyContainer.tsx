import { Heading } from '@chakra-ui/layout';
import React, { FC } from 'react';

const EmptyContainer: FC<{ label: string }> = ({ label }) => {
    return (
        <Heading w="full" as="h4" size="md" textAlign="center">{label}</Heading>
    );
}

export default EmptyContainer;
