import * as React from 'react'
import './Content.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

interface Props {
  selectedTab: number
}

export default class Content extends React.Component<Props> {
  render() {
    return (
      <div className="Content">
        {this.props.selectedTab === 0 &&
          <Page1 />
        }
        {this.props.selectedTab === 1 &&
          <Page2 />
        }
        {this.props.selectedTab === 2 &&
          <Page3 />
        }
        {this.props.selectedTab === 3 &&
          <Page4 />
        }
        {this.props.selectedTab === 4 &&
          <Page5 />
        }
      </div>
    )
  }
}
