import * as React from 'react'
import ContactForm from './ContactForm'
import CountdownTimer from './CountdownTimer'

export default class Page1 extends React.Component {
  render() {
    return (
      <div>
        <ContactForm />
        <CountdownTimer />
      </div>
    )
  }
}
