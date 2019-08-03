import React, { Component } from 'react'

class App extends Component {
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
          <table className="table">
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
          </table>
        </div>
      </div>
    )
  }
}

export default App
