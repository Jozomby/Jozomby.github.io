import * as React from 'react'
import './Header.css'

interface Props {
}

interface State {
  images: Array<string>,
  currentImage: number
}

export default class Header extends React.Component<Props, State> {
  tick() {
    let newImage = this.state.currentImage + 1
    if (newImage >= this.state.images.length) {
      newImage = 0
    }
    this.setState({ currentImage: newImage })
  }

  componentDidMount() {
    //window.setInterval(() => this.tick(), 5000)
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      images: [
        'family.jpg',
        'http://noahfineart.com/wp-content/uploads/2015/07/Star_Wars_header_v4.jpg'
      ],
      currentImage: 0
    }
  }

  render() {
    return (
      <div className="Header">
        <img src={this.state.images[this.state.currentImage]} />
      </div>
    )
  }
}
