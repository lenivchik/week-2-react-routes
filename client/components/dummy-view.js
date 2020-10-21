import React from 'react'
import { history } from '../redux'
import Head from './head'

const InputUserId  = (props) =>{
  const [value, setValue] = React.useState('') 
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
  const [text, settext] = React.useState('')

  
  return (
    <div>
      <Head title="Hello" />
      
      <div className="flex items-center justify-center h-screen">
        <form className="bg-indigo-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <InputUserId onChange={settext} text={text} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              <InputButton text={text} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

