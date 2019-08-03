import React, { Component } from 'react'
import data from './data/Agencies.csv'
import { csv } from 'd3'

class App extends Component {
  componentDidMount() {
    csv(`${data}`).then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className="flex-box">
        <div className="left-cell">
          <div className="flexed-header">
            <span>Input</span>
            <span>Agency Finder</span>
          </div>
          <div className="search-area">
            <label>Enter Zip Code</label>
            <input className="input" type="search box" />
          </div>
          <br />
          <button className="button">Search</button>
        </div>
        <div>
          <hr width="1" size="350" />
        </div>
        <div className="right-cell">
          <div>Return</div>
          <div className="description">
            The agency for zipcode 78532 Santa Cruz is
          </div>
          <tbody className="table">
            <tr>
              <td>Type</td>
              <td>Agency</td>
              <td>Phone Number</td>
            </tr>
            <tr>
              <td>Police</td>
              <td>Agency Name</td>
              <td>Their Number</td>
            </tr>
            <tr>
              <td>Fire</td>
              <td>Agency Name</td>
              <td>Their number</td>
            </tr>
            <tr>
              <td>Medical</td>
              <td>Agency Name</td>
              <td>Their number</td>
            </tr>
          </tbody>
        </div>
      </div>
    )
  }
}

export default App
