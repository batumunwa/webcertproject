import { Link } from 'react-router-dom';
import React from 'react'
import { useGetMoviesQuery } from '../features/APISlice'
import Moment from 'moment';

export default function LatestMovies() {
    const {data, error, isLoading} = useGetMoviesQuery()
  return (
    <div>
      <div className="text-center">
        <h1>Latest Movies</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data?.map((item) => (
            <div className="col mb-4" key={item.id}>
              <div className="card p-2 h-100">
                <img src={item?.image} className="card-img-top" style={{height:"300px"}} alt="Movie Poster" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Released on: {Moment(item.releaseddate).format('YYYY-MM-DD')}</p>
                  <Link class="btn btn-primary" to={'/movie-details/'+item.id}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}