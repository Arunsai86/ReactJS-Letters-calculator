import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  calculateWord = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="myCalculator" className="labelParagraph">
            Enter the phrase
          </label>
          <input
            id="myCalculator"
            type="text"
            className="searchBar"
            placeholder="Enter the phrase"
            onChange={this.calculateWord}
          />
          <div className="result-container">
            <p className="res-para">No.of Letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
