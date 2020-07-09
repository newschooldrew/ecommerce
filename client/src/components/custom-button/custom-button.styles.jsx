import styled, {css} from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color:white;
    border:none;

    &:hover{
        background-color: white;
        color:black;
        border:1px solid black;  
    }
`

export const invertedButtonStyles = css`
  &.inverted{
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:hover{
    background-color: black;
    color: white;
    border: none;
  }
`

export const googleSignInStyles = css`
    &.google-sign-in{
        background-color: #4285f4;
        color:white;
        font-size:13px
    }
    &:hover{
        background-color: #357ae8;
        border:none;
    }
`

export const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles
    } 
    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    font-size:10px;
    min-width: 165px;
    width: auto;
    height: 50px;
    line-height: 40px;
    padding: 0 30px 0 30px;
    font-size: 12px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    ${getButtonStyles}    
`