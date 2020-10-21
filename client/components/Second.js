import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios'
import Header from './header'


 const Writeobj = () => {
  const {userName}=useParams()
  const [reps, set] = React.useState([])
  useEffect(()=>{
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => it.data).then (it => {set(it)})
  },[userName])
return <div>{reps.map(it => <li key={it.id}><Link to={`/${userName}/${it.name}`}>{it.name}</Link></li>)}</div>
}

const Second = () => {
  return (
    <div>
      <Header head={useParams()} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          <Writeobj />
        </div>
      </div>
    </div>
  )
}

Second.propTypes = {}

export default Second


