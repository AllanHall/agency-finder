import React, { useState, useEffect } from 'react'
import data from './data/Agencies.csv'
import { csv } from 'd3'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentAgencies, setCurrentAgencies] = useState([])
  const [agencyList, setAgencyList] = useState([])

  useEffect(() => {
    csv(`${data}`).then(data => {
      setAgencyList(data)
      console.log(agencyList)
    })
  }, [])

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await csv(`${data}`)
  //     setAgencyList(result)
  //   }
  //   getData()
  //   console.log(agencyList)
  // }, [])

  const search = () => {
    console.log(agencyList)
    setCurrentAgencies(
      agencyList.filter(agency => agency.zip_code === searchTerm)
    )
    console.log(currentAgencies)
  }

  return (
    <div className="flex-box">
      <div className="left-cell">
        <div className="flexed-header">
          <span>Input</span>
          <span>Agency Finder</span>
        </div>
        <div className="search-area">
          <label>Enter Zip Code</label>
          <input
            className="input"
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <br />
        <button className="button" onClick={search}>
          Search
        </button>
      </div>
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
              <td>lol</td>
              <td>lol</td>
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
