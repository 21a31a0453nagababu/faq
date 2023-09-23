import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="app-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-list">
            {faqsList.map(eachitem => (
              <FaqItem key={eachitem.id} faqDetails={eachitem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
