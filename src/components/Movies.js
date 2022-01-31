import React from 'react';

const Movies = ({movie}) => {
  return (
    <div className="movie-card">
        <table>
            <thead>
                <tr>
                    <th>Movie Actor</th>
                    <th>Director Name</th>
                    <th>Movie Name</th>
                    <th>Release Year</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>{movie.name}</td>
                    <td>{movie.directorName}</td>
                    <td>{movie.name}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default Movies;
