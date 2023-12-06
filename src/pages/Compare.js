import React from 'react';
import { useLoaderData } from 'react-router';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";
    // to be replaced with the real data

    const characters = useLoaderData();

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>
            <p style={centerStyle}>
            {characters[option1.value].thumbnail && 
            <img src={`${characters[option1.value].thumbnail.path}/standard_large.${characters[option1.value].thumbnail.extension}`} alt={characters[option1.value].name}/>
            }
            {characters[option1.value].thumbnail && 
            <img src={`${characters[option2.value].thumbnail.path}/standard_large.${characters[option2.value].thumbnail.extension}`} alt={characters[option2.value].name}/>
            }
            </p>
            <p style={centerStyle}>
                {characters[option1.value].name} vs {characters[option2.value].name}
            </p>
        </>
    );
};

export default CompareCharactersPage;