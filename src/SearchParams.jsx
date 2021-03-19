import React, { useState, useEffect, useContext } from 'react';
import pet from '@frontendmasters/pet';
import useDropdown from './useDropdown.jsx';
import Results from './Results.jsx';
import ThemeContext from './ThemeContext.jsx';

const SearchParams = () => {
    const ANIMALS = ['Dog', 'Cat', 'Bird'];
    const [location, setLocation] = useState('Seattle, WA');
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown, setAnimal] = useDropdown(
        'Animal',
        'dog',
        ANIMALS,
    );
    const [breed, BreedlDropdown, setBreed] = useDropdown('Breed', '', breeds);
    const [pets, setPets] = useState([]);
    const [theme] = useContext(ThemeContext);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal,
        });

        setPets(animals);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed('');
        //     pet.breeds('dog').then(console.log, console.error);
        // });
        pet.breeds(animal).then(
            // eslint-disable-next-line no-shadow
            ({ breeds }) => {
                const breedStrings = breeds.map(({ name }) => name);
                setBreeds(breedStrings);
            },
            (error) => console.error(error),
        );
    }, [animal, setBreed, setBreeds]);

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    <input
                        type="text"
                        value={location}
                        id={'location'}
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}
                        placeholder={'Location'}
                    />
                </label>
                <AnimalDropdown />
                <BreedlDropdown />
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
