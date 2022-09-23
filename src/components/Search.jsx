import React, {useState} from 'react'
import '../styles/Search.css'

const Search = ({handleSubmit} ) => {
   const [input,setInput] = useState("")

 
   const handleChange = (e) => {
     const {value} = e.target;
     setInput(value);
   }

  return (
    <> 
    <h3>Enter Pokemon Name</h3>
    <div className="search-form">
        <form onSubmit={(e)=> {
                        handleSubmit(e,input)
                        setInput("")
                        }} > 
            <input 
                type='text' 
                placeholder='Search pokemon'
                value={input}
                onChange={handleChange}></input>
            <button>Search</button>
        </form>

    </div>
    </>
  )
}

export default Search