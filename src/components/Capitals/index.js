import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}
  onChangeOption = event => {
    for (let i = 0; i < countryAndCapitalsList.length; i++) {
      if (event.target.value === countryAndCapitalsList[i].id) {
        this.setState({country: countryAndCapitalsList[i].country})
      }
    }
  }
  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="cc-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="drop-down-container">
            <select className="drop-down" onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option
                  key={eachCountryAndCapital.id}
                  value={eachCountryAndCapital.id}
                >
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is Capital of which country?</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
