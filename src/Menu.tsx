import * as React from 'react'
import TabItem from './TabItem'
import './Menu.css'

interface Props {
  onTabChange: Function,
  selectedTab: number
}

export default class Menu extends React.Component<Props> {
  render() {
    return (
      <div className="Menu">
        <div className="Menu--logo-container">
          <h3>Logo/Title</h3>
        </div>
        <div className="Menu--links-container">
          <ul>
            <TabItem
              id={0}
              title={'Page 1'}
              onTabChange={this.props.onTabChange}
              isSelected={this.props.selectedTab === 0}
            />
            <TabItem
              id={1}
              title={'Page 2'}
              onTabChange={this.props.onTabChange}
              isSelected={this.props.selectedTab === 1}
            />
            <TabItem
              id={2}
              title={'Page 3'}
              onTabChange={this.props.onTabChange}
              isSelected={this.props.selectedTab === 2}
            />
            <TabItem
              id={3}
              title={'Page 4'}
              onTabChange={this.props.onTabChange}
              isSelected={this.props.selectedTab === 3}
            />
            <TabItem
              id={4}
              title={'Page 5'}
              onTabChange={this.props.onTabChange}
              isSelected={this.props.selectedTab === 4}
            />
          </ul>
        </div>
      </div>
    )
  }
}
