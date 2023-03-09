import styled from 'styled-components'

export const ButtonBold = styled.button`
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  font-weight: bold;
  color: ${props => (props.buttonColor ? '#faff00' : '#f1f5f9')};
`

export const ButtonItalic = styled.button`
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  font-weight: bold;
  color: ${props => (props.buttonColor ? '#faff00' : '#f1f5f9')};
`
export const ButtonUnderline = styled.button`
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.buttonColor ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
  width: 100%;
  height: 93%;
  padding: 10px;
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  text-decoration: ${props => (props.italicText ? 'underline' : 'normal')};
  font-style: ${props => (props.underlineText ? 'italic' : 'normal')};
`
