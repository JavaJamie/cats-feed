import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Divider, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

const Exercises = () => {

    return (
        <React.Fragment>
            <VStack spacing={4}>
                <ExerciseOne />
                <Divider />
                <ExerciseTwo />
                <Divider />
                <ExerciseThree />
                <Divider />
                <ExerciseFour />
            </VStack>
        </React.Fragment>
    );
}

const ExerciseOne = () => {
    return (
        <React.Fragment>
            <Heading as="h6" size="md">Exercise 1 (single button)</Heading>
            <ExerciseButton label="Exercise 1" />
        </React.Fragment>
    );
}

const ExerciseTwo = () => {
    const SAMPLE_DATA = Array.from(Array(6).keys());

    return (
        <React.Fragment>
            <Heading as="h6" size="md">Exercise 2 (list)</Heading>
            {SAMPLE_DATA.map((value, index) => <ExerciseButton key={index} label={`Button number: ${value}`} />)}
        </React.Fragment>
    );
}

const ExerciseThree = () => {
    const SAMPLE_DATA = Array.from(Array(6).keys());

    return (
        <React.Fragment>
            <Heading as="h6" size="md">Exercise 3 (grid) - responsive! Resize the window :)</Heading>
            <SimpleGrid columns={[1, null, 2, 3]} spacing={4}>
                {SAMPLE_DATA.map((value, index) => <ExerciseButton key={index} label={`Button number: ${value}`} />)}
            </SimpleGrid>
        </React.Fragment>
    );
}

const ExerciseFour = () => {
    const [gridMax, setGridMax] = useState(6);
    const [gridButtonsArray, setGridButtonsArray] = useState(Array.from(Array(gridMax).keys()));

    useEffect(() => {
        setGridButtonsArray(Array.from(Array(gridMax).keys()));
    }, [gridMax]);

    const addRandomButton = () => {
        const randomNumber = Math.floor(Math.random() * (gridButtonsArray.length)); // Generate a random integer using the array length as the total.
        /** Slice the array into parts. Firstly, slice from the beginning until the index of the random number, then add the random number, and then join back the
        remainder of the array. This is better than using splice as it creates a new array rather than modifying the original **/
        const arr = [...gridButtonsArray.slice(0, randomNumber + 1), randomNumber, ...gridButtonsArray.slice(-(gridButtonsArray.length - randomNumber - 1))];
        setGridButtonsArray(arr);
    }

    return (
        <React.Fragment>
            <Heading as="h6" size="md">Exercise 4 (grid) - click first to add random button</Heading>
            <SimpleGrid columns={[1, null, 2, 3]} spacing={4}>
                {gridButtonsArray.map((value, index) => <ExerciseButton key={index} label={index === 0 ? "Add random" : `Button number: ${value}`} onClick={() => index === 0 && addRandomButton()} />)}
            </SimpleGrid>
        </React.Fragment>
    );
}

interface ExerciseButtonProps {
    label: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ExerciseButton = ({ label, onClick }: ExerciseButtonProps ) => {

    return (
        <Button colorScheme="green" onClick={onClick}>
            {label}
        </Button>
    );
}

export default Exercises;