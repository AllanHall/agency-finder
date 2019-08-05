import React, { useState, useEffect } from 'react'
import data from './data/Agencies.csv'
import { csv } from 'd3'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentAgencies, setCurrentAgencies] = useState([])
  const [agencyList, setAgencyList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await csv(`${data}`)
      setAgencyList(result)
      console.log(agencyList)
    }
    fetchData()
  }, [])

  const search = () => {
    console.log(agencyList)
    setCurrentAgencies(
      agencyList.filter(agency => agency.zip_code === searchTerm)
    )
    console.log(currentAgencies)
  }

  return (
    <>
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
          <div className="description">
            The agency for zipcode{' '}
            {currentAgencies[0] && <span>{currentAgencies[0].zip_code}</span>}{' '}
            {currentAgencies[0] && <span>{currentAgencies[0].city_name}</span>}{' '}
            is
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Type</td>
                <td>Agency</td>
                <td>Phone Number</td>
              </tr>
              <tr>
                <td>Police</td>
                <td>
                  {currentAgencies[0] && (
                    <span>{currentAgencies[0].agency_name}</span>
                  )}
                </td>
                <td>
                  {currentAgencies[0] && (
                    <span>{currentAgencies[0].phone1}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Fire</td>
                <td>
                  {currentAgencies[1] && (
                    <span>{currentAgencies[1].agency_name}</span>
                  )}
                </td>
                <td>
                  {currentAgencies[1] && (
                    <span>{currentAgencies[1].phone1}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Medical</td>
                <td>
                  {currentAgencies[2] && (
                    <span>{currentAgencies[2].agency_name}</span>
                  )}
                </td>
                <td>
                  {currentAgencies[2] && (
                    <span>{currentAgencies[2].phone1}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
