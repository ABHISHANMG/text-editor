import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  TextArea,
} from './styleComponent'

import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => {
    const {bold, italic, underline} = this.state
    this.setState({bold: !bold})
  }

  changeItalic = () => {
    const {bold, italic, underline} = this.state
    this.setState({italic: !italic})
  }

  changeUnderline = () => {
    const {bold, italic, underline} = this.state
    this.setState({underline: !underline})
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <div className="bg-container">
        <div className="editor-container">
          <div className="details-container">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="editing-container">
            <ul className="buttons-container">
              <li>
                <ButtonBold
                  type="button"
                  onClick={this.changeBold}
                  buttonColor={bold}
                  data-testid="bold"
                >
                  <VscBold />
                </ButtonBold>
              </li>
              <li>
                <ButtonItalic
                  buttonColor={italic}
                  type="button"
                  onClick={this.changeItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </ButtonItalic>
              </li>
              <li>
                <ButtonUnderline
                  buttonColor={underline}
                  type="button"
                  onClick={this.changeUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </ButtonUnderline>
              </li>
            </ul>
            <TextArea
              boldText={bold}
              italicText={underline}
              underlineText={italic}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
