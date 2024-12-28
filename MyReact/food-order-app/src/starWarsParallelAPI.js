import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function App() {
  // Install axios using: npm install axios
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Star Wars characters
        const response = await axios.get('https://swapi.dev/api/people/')
        const charactersData = response.data.results

        // Create an array of promises for fetching film and vehicle details
        const promises = charactersData.map(async (character) => {
          const filmsPromise = Promise.all(
            character.films.map((film) => axios.get(film)),
          )

          const vehiclesPromise = Promise.all(
            character.vehicles.map((vehicle) => axios.get(vehicle)),
          )

          const [filmsResponse, vehiclesResponse] = await Promise.all([
            filmsPromise,
            vehiclesPromise,
          ])

          const filmsData = filmsResponse.map((film) => film.data.title)
          const vehiclesData = vehiclesResponse.map(
            (vehicle) => vehicle.data.name,
          )

          return {
            ...character,
            films: filmsData,
            vehicles: vehiclesData,
          }
        })

        // Wait for all promises to resolve
        const charactersWithDetails = await Promise.all(promises)

        setCharacters(charactersWithDetails)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Films</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.films.join(', ')}</td>
              <td>{character.vehicles.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))