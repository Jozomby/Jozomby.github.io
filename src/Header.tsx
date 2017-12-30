import * as React from 'react'
import './Header.css'

interface Props {
}

interface State {
  images: Array<string>
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      images: [
        "http://noahfineart.com/wp-content/uploads/2015/07/Star_Wars_header_v4.jpg"
      ]
    }
  }

  render() {
    return (
      <div className="Header">
        <img src='family.jpg' />
      </div>
    )
  }
}
