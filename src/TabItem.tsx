import * as React from 'react'
import './TabItem.css'
import * as classnames from 'classnames'

interface Props {
  id: number,
  title: string,
  onTabChange: Function,
  isSelected: boolean
}

export default class TabItem extends React.Component<Props> {
  onTabClick = () => {
    this.props.onTabChange(this.props.id)
  }

  render() {
    const classNames = classnames('TabItem', { 'TabItem--selected': this.props.isSelected })
    return (
      <li
      className={classNames}
        onClick={this.onTabClick}
      >
        {this.props.title}
      </li>
    )
  }
}
