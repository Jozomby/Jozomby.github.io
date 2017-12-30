import * as React from 'react'
import './ContactForm.css'

const firebase = require('firebase')

interface Props {
}

interface State {
  name: string,
  address: string,
  email: string
}

export default class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      email: ''
    }
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    if (this.state.name === '' || this.state.address === '' || this.state.email === '') {
      window.alert("Please fill out all fields before submitting.")
      return
    }
    if (firebase && firebase.database) {
      const itemsRef = firebase.database().ref('items')
      const item = {
        name: this.state.name,
        address: this.state.address,
        email: this.state.email
      }
      itemsRef.push(item, (error: Error) => {
        if (error) {
          window.alert("There was an error saving your information. Refresh the page and try again.  If that doesn't work, please contact Daniel.")
        } else {
          window.alert("Your information was received! Thank you!")
        }
      })
      this.setState({
        name: '',
        address: '',
        email: ''
      })
    }
  }

  render() {
    return (
      <div className="ContactForm">
        <form onSubmit={this.handleSubmit}>
          <p>If you would like a physical invitation (in the mail) please fill out this form by March 1</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <textarea
            name="address"
            placeholder="Address"
            onChange={this.handleChange}
            value={this.state.address}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
