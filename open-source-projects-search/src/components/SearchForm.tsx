import styled from "styled-components"
import { InputSelect } from "./ui/InputSelect"

export const SearchForm = () => {
    const technoConfig = {
        label: "Technology Languages",
        placeholder: "Javascript",
        options: [
            { value: "javascript", label: "Javascript" },
            { value: "php", label: "PHP" },
            { value: "python", label: "Python" }
        ]
    }

    const tagsConfig = {
        label: "Tags",
        placeholder: "Video games, Saas, ...",
        options: [
            { value: "foot", label: "foot" },
            { value: "moto", label: "moto" },
            { value: "histoire", label: "histoire" }
        ]
    }
    const spokenConfig = {
        label: "Spoken Languages",
        placeholder: "Français, Español, ...",
        options: [
            { value: "français", label: "français" },
            { value: "spanish", label: "spanish" },
            { value: "english", label: "english" }
        ]
    }

    return (
        <SearchFormStyled action="">
            <div className="inputs-container">
                <InputSelect
                    label={technoConfig.label}
                    optionValues={technoConfig.options}
                    placeholder={technoConfig.placeholder}
                />
                <InputSelect
                    label={tagsConfig.label}
                    optionValues={tagsConfig.options}
                    placeholder={tagsConfig.placeholder}
                />
                <InputSelect
                    label={spokenConfig.label}
                    optionValues={spokenConfig.options}
                    placeholder={spokenConfig.placeholder}
                />
            </div>
            <div className="button-container">
                <button>Search</button>
            </div>
        </SearchFormStyled>
    )
}

const SearchFormStyled = styled.form`
    .inputs-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .button-container {
        justify-content: center;
        display: flex;
        margin: 40px 0;

        button {
            min-width: 250px;
            height: 60px;
            background: #000;
            border: solid 1px #000;
            border-radius: 5px;
            color: #FFF;
            font-family: 'Josefin Sans';
            font-size: 20px;
            font-weight: 600;
        }

        button:hover {
            background: #FFF;
            color: #000;
            cursor: pointer;
        }

        button:active {
            border-width: 2px
        }
    }
`;