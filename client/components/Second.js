import React from 'react'
import { Link } from 'react-router-dom' 
import Head from './head'

const Second = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <div> <Link to="/dashboard/profile/880c92c6-3cf5-45bd-9160-7524a11ec7cb">Go To Profile</Link> </div>
          <div><Link to="/dashboard">Go To Root</Link></div>
        </div>
      </div>
    </div>
  )
}

Second.propTypes = {}

export default Second
