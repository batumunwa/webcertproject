import React from 'react'
import { useGetMovieByIDQuery } from '../features/APISlice'
import { useParams } from 'react-router-dom'
import Moment from 'moment';

export default function MovieDetails() {
    const {id} = useParams()
    const {data, error, isLoading} = useGetMovieByIDQuery(id)
    
  return (
    <div class="container p-1">
      <div class="row">
      <div class="col-md-3">
      <img src={data?.image} className="card-img-top" style={{height:"450px"}} alt="Movie Poster" />
      </div>
      <div class="col-md-9">
        <div class="row p-4" style={{borderBottom:"1px solid #cccccc"}}>
            <div class="col-md-6">
                <h3>Movie Name: {data?.name}</h3>
            </div>
            <div class="col-md-6">
            <h3>Realsed Date: {Moment(data?.releaseddate).format('YYYY-MM-DD')}</h3>
            </div>
        </div>
        <div class="row p-4" style={{borderBottom:"1px solid #cccccc"}}>
        <h3>Duration: {data?.duration} (Minutes)</h3>
        </div>
        <div class="row p-4" style={{borderBottom:"1px solid #cccccc"}}>
        <h3>Rating: {data?.rating}</h3>
        </div>
      </div>
      </div>
      <div class="row" style={{ borderBottom:"1px solid #ccc"}}>
        <div class="col-12 p-4">
        <a class="btn btn-primary float-end" href='/booking'>Book Now</a>
        </div>
      </div>
    </div>
  )
}