import styled from "styled-components";

export const InputContainer = styled.div`

    input{
        background: none;
        border: none;
        outline: none;
        padding: 6px;
        color: #75e8ff;
        font-size: 17px;
        transition: 0.3s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        ::placeholder {
        color: #75e8ff85;
        }
        :-ms-input-placeholder {
            color: #75e8ff85;
        }
        ::-ms-input-placeholder {
            color: #75e8ff85;
        }
        ::-webkit-input-placeholder {
            color: #75e8ff85;
            transition: 0.3s;
        }
        :focus{
            color: white;
            ::placeholder {
                color: #ffffff95;
            }
            :-ms-input-placeholder {
                color: #ffffff95;
            }
            ::-ms-input-placeholder {
                color: #ffffff95;
            }
            ::-webkit-input-placeholder {
                color: #ffffff95;
                transition: 0.3s;
            }
        }
    }

    svg{
        padding:6px;
        margin-left:4px;
    }

    :hover{        
        border: 1px solid #75e8ff;
        border-radius: 3px;
    }

    :focus-within{
        border: 1px solid white;
        border-radius: 3px;
        color: white;
    }

    color: #75e8ff;
    width: 240px;
    background-color: #241b82;
    border-radius: 2px;
    border: 1px solid #75e8ff00;
    outline: none;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    transition: 0.3s;
`