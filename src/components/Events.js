import React from 'react'
import { useGetEventsQuery } from '../features/APISlice'

export default function Events() {
    const {data, error, isLoading} = useGetEventsQuery()
  return (
    <div class="container">
      <h1>Events</h1>
      {data?.map((item) => (
        <div key={item.id} style={{borderBottom:"1px solid #cccccc"}}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  )
}