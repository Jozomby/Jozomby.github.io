import * as React from 'react'
import './CountdownTimer.css'

interface Props {
}

interface State {
  timeRemaining: number
}

export default class CountdownTimer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      timeRemaining: 1525536000000 - Date.now()
    }
  }

  tick() {
    this.setState({ timeRemaining: 1525536000000 - Date.now() })
  }

  componentDidMount() {
    window.setInterval(() => this.tick(), 1000)
  }

  pad = (num: number, size: number) => {
    const s = "000000000" + num;
    return s.substr(s.length-size);
  }

  formatTime = (milliseconds: number) => {
    const days = Math.floor(milliseconds / 86400000)
    const timeLessDays = milliseconds % 86400000
    const hours = Math.floor(timeLessDays / 3600000)
    const timeLessHours = timeLessDays % 3600000
    const minutes = Math.floor(timeLessHours / 60000)
    const timeLessMinutes = timeLessHours % 60000
    const seconds = Math.floor(timeLessMinutes / 1000)
    return {
      days: days,
      hours: hours,
      minutes: this.pad(minutes, 2),
      seconds: this.pad(seconds, 2)
    }
  }

  render() {
    const time = this.formatTime(this.state.timeRemaining)
    return (
      <div className='CountdownTimer'>
        <h2>Time remaining:</h2>
        <div className='CountdownTimer--time-wrapper'>
          <h1>{`${time.days} Days`}</h1>
          <h1>{`${time.hours}:${time.minutes}:${time.seconds}`}</h1>
        </div>
      </div>
    )
  }
}
