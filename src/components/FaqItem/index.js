import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? `minusImage` : `plusImage`
    const altText = isActive ? `minus` : `plus`
    return (
      <button type="button" onClick={this.onToggleisActive}>
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questiontext} = faqDetails
    return (
      <li className="list">
        <div className="faq-container">
          <h1 className="heading">{questiontext}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
