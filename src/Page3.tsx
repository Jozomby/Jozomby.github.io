import * as React from 'react'
import './Page3.css'

export default class Page3 extends React.Component {
  render() {
    return (
      <div className="Page3">
        <div className="Page3--text-wrapper">
          <h3>Gifts are not required.</h3>
          <h3>For those who wish to give a gift, we have prepared registries at Amazon and Target.</h3>
          <h3>Please be aware that we do not need any kitchen supplies except for the items listed on the registries</h3>
          <h3>Thank you so much!</h3>
          <h3>
            <a href="https://www.amazon.com/wedding/daniel-lee-erin-jacobs-fort-collins-may-2018/registry/7MM024IP35P" target="_BLANK">Amazon Registry</a>
          </h3>
          <h3>
            <a href="http://tgt.gifts/erin-daniel" target="_BLANK">Target Registry</a>
          </h3>
        </div>
      </div>
    )
  }
}
