import * as React from 'react'
import TabItem from './TabItem'
import MediaQuery from 'react-responsive'
import './Menu.css'

interface Props {
  onTabChange: Function,
  selectedTab: number
}

export default class Menu extends React.Component<Props> {
  render() {
    return (
      <div className="Menu">
        <div className="Menu--content">
          <MediaQuery query="(min-width: 605px)">
            <div className="Menu--logo-container">
              <h3>Erin &amp; Daniel</h3>
            </div>
          </MediaQuery>
          <div className="Menu--links-container">
            <ul>
              <TabItem
                id={0}
                title={'Home'}
                onTabChange={this.props.onTabChange}
                isSelected={this.props.selectedTab === 0}
              />
              <TabItem
                id={1}
                title={'Location'}
                onTabChange={this.props.onTabChange}
                isSelected={this.props.selectedTab === 1}
              />
              <TabItem
                id={2}
                title={'Gifts & Registry'}
                onTabChange={this.props.onTabChange}
                isSelected={this.props.selectedTab === 2}
              />
              <TabItem
                id={3}
                title={'FAQs'}
                onTabChange={this.props.onTabChange}
                isSelected={this.props.selectedTab === 3}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
