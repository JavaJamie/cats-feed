import { Box, Stack } from '@chakra-ui/layout';
import Link from 'next/link';
import { FC } from 'react';

const HomePage: FC = () => {

    return (
        <Box display="flex" alignItems="center" justifyContent="center" flex={1} w="full">
            <Stack direction="row" spacing={6}>
                <Link href="/exercises">Exercises</Link>
                <Link  href="/feed">Cats feed</Link>
            </Stack>
        </Box>
    );
}

export default HomePage;
