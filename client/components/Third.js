import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom' 
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Header from './header'

const Writeobj = ()=>{
  const {userName,repositoryName}=useParams()
  const [content, setcont] = React.useState('')
  useEffect(()=>{
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(it => setcont(it.data))
  },[repositoryName])
return <div id="description"><ReactMarkdown source={content} /></div>
}

const Third = () => {
  return (
    <div>
      <Header head={useParams()} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Writeobj />
        </div>
      </div>
    </div>
  )
}

Third.propTypes = {}

export default Third
