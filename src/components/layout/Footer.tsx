import { Flex } from '@chakra-ui/layout';
import React, { FC } from 'react';

const Footer: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Flex p={4} w="full"  mt="auto" position="fixed" bottom={0} justifyContent="center">
            {children}
        </Flex>
    );
}

export default Footer;