import React from 'react'
import { Link } from 'react-router-dom' 
import Head from './head'

const First = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>            
          <div> <Link to="/dashboard/profile/880c92c6-3cf5-45bd-9160-7524a11ec7cb">Go To Profile</Link> </div>
          <div> <Link to="/dashboard/main">Go To Main</Link> </div>
        </div>
      </div>
    </div>
  )
}

First.propTypes = {}

export default First
