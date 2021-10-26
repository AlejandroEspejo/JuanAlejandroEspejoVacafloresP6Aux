import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  
  const [movies, setMovies] = useState([]);
  
  const [position, setPosition] = useState(0);

  useEffect(() => {
      getFilms();
  }, [])

  const getFilms = async () => {
      const resp = await axios.get('https://swapi.dev/api/films')
      setMovies(resp.data.results);
  }
  

  return (
      <div id="box">
        <main id="center">
          <h1>Peliculas de Star Wars</h1>
          {position < movies.length ? (<table>
            <thead>
              <tr>
                  <th>Movie Title</th>
                  <th>DESCRIPTION</th>
                  <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr key={movies.title}>
                <td >{movies[position].title}</td>
                <td >{movies[position].opening_crawl}</td>
                <td >{movies[position].release_date}</td>
              </tr>
            </tbody>
          </table>) : <p>LISTA TERMINADA</p>}
          <button type="button" onClick={()=>{setPosition(position+1)}}>click</button>
        </main>
      </div>
  )
}

export default App;