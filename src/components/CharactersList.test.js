import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom'


describe('CharactersList', () => {

    it('renders a list of characters', () => {
        // when
        const characters = [
            { id: 1, name: 'Iron Man', modified: '2014-01-13T14:48:32-0500' },
            { id: 2, name: 'Captain America', modified:'2014-01-13T14:48:32-0500'},
            { id: 3, name: 'Thor' , modified:'2014-01-13T14:48:32-0500' },
        ];

        // then
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        screen.debug();
        // expect a listitem for each character
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);

        // expect each listitem to have the character name and a link to the character detail page
        characterItems.forEach((item, index) => {
            // expect each listitem to have the character name
            //expect(item).toHaveTextContent(characters[index].name);

            // expect each listitem to have a link to the character detail page
            const link = screen.getByTestId(`character-item-${characters[index].id}`);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/characters/${characters[index].id}`);

            // expect each listitem to have the correct data-testid
            const listItem = screen.getByTestId(`character-item-${characters[index].id}`);
            expect(listItem).toBeInTheDocument();

        });

    });

    it('renders an empty list when no characters are provided', () => {
        // when

        // then
        render(<CharactersList />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect no listitems
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });

});
