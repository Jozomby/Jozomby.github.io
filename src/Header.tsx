import * as React from 'react'
import './Header.css'


export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src="./starwars.jpg" style={{'height':'100%', 'width':'100%'}}/>
      </div>
    )
  }
}
