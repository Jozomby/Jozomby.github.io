import * as React from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'

interface Props {
}

interface State {
  selectedTab: number
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  onTabChange = (newTab: number) => {
    this.setState({ selectedTab: newTab })
  }

  render() {
    return (
      <div className="App">
        <Menu
          onTabChange={this.onTabChange}
          selectedTab={this.state.selectedTab}
        />
        <Header />
        <Content
          selectedTab={this.state.selectedTab}
        />
      </div>
    )
  }
}

export default App
