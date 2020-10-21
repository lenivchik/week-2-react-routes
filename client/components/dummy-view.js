import React from 'react'
import { history } from '../redux'
import Head from './head'

const InputUserId  = (props) =>{
  const [value, setValue] = React.useState('1') 
  const onChange = (e) => {   
    const NewValue = e.target.value;
    setValue(NewValue)  
    props.onChange(NewValue)  
    }   
  return (
    <input
      id='input-field'  
      type="text"  
      value={value}  
      onChange={onChange}
    />)
}

const InputButton = (props) => {
  return (
    <button
      id="search-button"
      type="button"
      onClick={() => history.push(`/${props.text}`)}
    >+
    </button>
  )
}

const Dummy = () => {
  const [text, settext] = React.useState('1')

  
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10"> 
          <InputUserId onChange={settext} text={text} />
          <InputButton text={text} />
          This is dummy component {text}
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
