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

class Capitals extends Component {
  state = {
    selectedCountry: countryAndCapitalsList[0].country,
    selectedId: countryAndCapitalsList[0].id,
  }

  onChangeOptions = event => {
    const selectedId = event.target.value
    const capital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === selectedId,
    )
    this.setState({selectedCountry: capital.country, selectedId})
  }

  render() {
    const {selectedCountry, selectedId} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="options-container">
            <select
              className="country"
              onChange={this.onChangeOptions}
              value={selectedId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <h1>{selectedCountry}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
