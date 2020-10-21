import React from 'react'
import { Link } from 'react-router-dom'

const Addbut = (props) =>{
  if (props.flag)
  return <Link id="go-repository-list" to={`/${props.link}`}>Back to List</Link>
  return null;
} 

const Header = (props) => {
  let inf =`${props.head.userName}`
  let flag = false
  if (typeof(props.head.repositoryName) !== "undefined"){
    inf =`${props.head.repositoryName}`
    flag=true
   }  
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6" id="repository-name">
        {inf}        
      </div>
      <Addbut flag={flag} link={props.head.userName} />
      <Link id="go-back" to="/">Back</Link>
            
    </nav>
  )
}

export default React.memo(Header)
