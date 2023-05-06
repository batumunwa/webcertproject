import React from 'react'

export default function Booking() {
  return (
    <div class="container">
      <h1>Booking</h1>
      <form>
      <div class="form-row">
        <div class="form-group p-2">
          <label for="date">Date</label>
          <input type="type" class="form-control" id="datetxt" aria-describedby="txtHelp" placeholder="Date"/>
        </div>
        <div class="form-group p-2">
          <label for="timings">Timings</label>
          <input type="text" class="form-control" id="timingtxt" placeholder="Timings"/>
        </div>
        <div class="form-group p-2">
          <label for="numberOfSeats">Seats</label>
          <input type="text" class="form-control" id="noSeatstxt" placeholder="Number of Seats"/>
        </div>
        <div class="form-group p-2">
        <button type="submit" class="btn btn-primary float-end">Book</button>
        </div>
        
        </div>
</form>
    </div>
  )
}