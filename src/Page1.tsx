import * as React from 'react'
import ContactForm from './ContactForm'
import CountdownTimer from './CountdownTimer'
import './Page1.css'

export default class Page1 extends React.Component {
  render() {
    return (
      <div className="Page1">
        <div className="Page1--text-wrapper">
          <h3>We're getting married!!!</h3>
          <h3>The ceremony will be held at the Fort Collins temple, and everyone is invited to attend the reception and open house.</h3>
          <h3>Please see the tabs at the top of the page for details.</h3>
        </div>
        <ContactForm />
        <CountdownTimer />
      </div>
    )
  }
}
