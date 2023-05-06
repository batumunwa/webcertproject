import { Link } from 'react-router-dom';
import React from 'react'
import { useGetMoviesQuery } from '../features/APISlice'
import Moment from 'moment';

export default function Home() {
    const {data, error, isLoading} = useGetMoviesQuery()
  return (
    <div class="mt-1">
    <div class="container">
    <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
        {data?.map((item, i) => (
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} class="active" aria-current="true" aria-label={item.id}></button>
        ))}
    </div>
    <div class="carousel-inner">
        {data?.map((item, i) => (
          i == 0 ?
            <div class="carousel-item active">
            <img src={item?.image} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h1>{item.name}</h1>
                <p>Released on: {Moment(item.releaseddate).format('YYYY-MM-DD')}</p>
            </div>
            </div>
             :
            <div class="carousel-item">
            <img src={item?.image} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h1>{item.name}</h1>
                <p>Released on: {Moment(item.releaseddate).format('YYYY-MM-DD')}</p>
            </div>
            </div>
        ))}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
    <div className="text-center">
        <h3>Recommended Movies</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6">
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