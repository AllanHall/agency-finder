import React, { useState, useEffect } from 'react'
import data from './data/Agencies.csv'
import { csv } from 'd3'

export default function App() {
  const [searchZip, setSearchZip] = useState('')
  const [currentAgency, setCurrentAgency] = useState({})
  const [agencyList, setAgencyList] = useState([])

  useEffect(() => {
    csv(`${data}`).then(data => {
      console.log(data)
      setAgencyList(data)
    })
  }, [])

  const search = e => {
    e.preventDefault()
  }

  return (
    <div className="flex-box">
      <form className="left-cell" onSubmit={search}>
        <div className="flexed-header">
          <span>Input</span>
          <span>Agency Finder</span>
        </div>
        <div className="search-area">
          <label>Enter Zip Code</label>
          <input
            className="input"
            type="search"
            value={searchZip}
            onChange={e => setSearchZip(e.target.value)}
          />
        </div>
        <br />
        <button className="button">Search</button>
      </form>
      <div>
        <hr width="1" size="350" />
      </div>
      <div className="right-cell">
        <div>Return</div>
        <div className="description">The agency for zip_code city_name is</div>
        <table className="table">
          <tbody>
            <tr>
              <td>Type</td>
              <td>Agency</td>
              <td>Phone Number</td>
            </tr>
            <tr>
              <td>Police</td>
              <td>agency_name</td>
              <td>phone1</td>
            </tr>
            <tr>
              <td>Fire</td>
              <td>agency_name</td>
              <td>phone1</td>
            </tr>
            <tr>
              <td>Medical</td>
              <td>agency_name</td>
              <td>phone1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
