import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 5.5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .FadeIn{
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
    }
`

export const Welcome = styled.p`
    color: white;
    font-size: 28px;
    margin: 0;
    padding: 0;
    b{
        color: cyan;
    }
`

export const Icon = styled.p`
    color: cyan;
    font-size: 120px;
    margin: 0;
    padding: 0;
`