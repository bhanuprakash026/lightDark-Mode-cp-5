// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onChangeLight = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
    console.log('clicked')
  }

  render() {
    const {isDark} = this.state
    const classMode = isDark ? 'dark' : 'light'
    const header = isDark ? 'white-header' : 'black-header'
    const text = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`${classMode}`}>
          <h1 className={`${header}`}>Click to Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChangeLight}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
