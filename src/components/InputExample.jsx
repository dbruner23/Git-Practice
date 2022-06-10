import React from 'react'
import {useState, useEffect} from 'react'

const InputExample = (e) => {
    const [val, setVal] = useState('')
    const handleChange = (e) => {
        setVal(e.target.value)
    }

    useEffect(() => {
        console.log(val);
    })

    return (
        <div>
            <label>Input field</label>
            <div><input onChange={handleChange} /></div>
            {val}
        </div>

    )
}

export default InputExample
