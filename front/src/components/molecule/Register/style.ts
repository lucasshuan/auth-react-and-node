import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    p{
        color:white;
        margin-top: 6px;
    }
    
    .End{
        animation: FadeOut 0.6s;
        @keyframes FadeOut{
            from{
                top: 0;
                opacity: 1;
            }
            to{
                top: -30px;
                -moz-transform: translateY(-30px);
                -webkit-transform: translateY(-30px);
                transform: translateY(-30px);
                opacity: 0;
            }
        }
    }
`

export const LoginForm = styled.div`
    animation: FadeIn 0.6s;
    @keyframes FadeIn{
        from{
            top: -30px;
            -moz-transform: translateY(-30px);
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            top: 0;
            opacity: 1;
        }
    }
`

export const Signin = styled.button`
    color:cyan;
    text-decoration: none;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    padding: 0;
    margin: 0 0 0 4px;
    :hover{
        color:white;
    }
`