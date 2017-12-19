import * as React from 'react'
import firebase from './firebase'

interface Props {
}

interface State {
  name: string,
  address: string
}

export default class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      address: ''
    }
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    if (firebase && firebase.database) {
      const itemsRef = firebase.database().ref('items')
      const item = {
        name: this.state.name,
        address: this.state.address
      }
      itemsRef.push(item, (error) => {
        if (error) {
          window.alert("There was an error saving your information. Refresh the page and try again.  If that doesn't work, please contact Daniel.")
        } else {
          window.alert("Your information was received! Thank you!")
        }
      })
      this.setState({
        name: '',
        address: ''
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={this.handleChange}
          value={this.state.address}
        />
        <button>Submit</button>
      </form>
    )
  }
}
