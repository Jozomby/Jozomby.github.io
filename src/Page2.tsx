import * as React from 'react'
import './Page2.css'

export default class Page2 extends React.Component {
  render() {
    return (
      <div className="Page2">
        <div className="Page2--card">
          <h3>Reception</h3>
          <ul>
            <li>1415 Bon Homme Richard Dr<br />Fort Collins CO 80526</li>
            <li>May 5, 3:00 pm - 5:00 pm</li>
          </ul>
        </div>
        <div className="Page2--card">
          <h3>Open House</h3>
          <ul>
            <li>10259 Ouray St<br />Commerce City CO 80022</li>
            <li>May 12, 6:00 pm - 8:00 pm</li>
          </ul>
        </div>
      </div>
    )
  }
}
