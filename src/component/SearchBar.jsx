import { TextField } from '@material-ui/core'
import React from 'react'

function SearchBar({onHandleSearchTextChange}) {
    return (
        <TextField label="Search" onChange={onHandleSearchTextChange}></TextField>
    )
}

export default SearchBar