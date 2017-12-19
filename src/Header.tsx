import * as React from 'react'
import './Header.css'


export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src="http://noahfineart.com/wp-content/uploads/2015/07/Star_Wars_header_v4.jpg" style={{'height':'100%', 'width':'100%'}}/>
      </div>
    )
  }
}
