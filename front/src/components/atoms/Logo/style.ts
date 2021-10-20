import styled from "styled-components"

export const LogoText = styled.div`
    font-size: 65px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
    color:white;
    p{
        padding: 0;
        margin: 0 0 40px 0;
    }
    .Start{
        color: cyan;
        font-weight: bold;
        animation: startCycle 2s;
        @keyframes startCycle {
            0% {color: white}
            20% {color: white}
            100% {color: cyan}
        }
    }
    .Final{
        color: white;
        font-weight: bold;
        animation: endCycle 0.6s;
        @keyframes endCycle {
            0% {color: cyan}
            20% {color: cyan}
            100% {color: white}
        }
    }
    .Auth{
        color: cyan;
        font-weight: bold;
    }
`