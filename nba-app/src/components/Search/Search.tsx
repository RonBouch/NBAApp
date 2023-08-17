import React, { useCallback, useState } from 'react'
// import './Search.css'
import { TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { debounce } from "lodash";
import { useDispatch } from 'react-redux';
import { setPlayersAfterFilter } from '../../stores/nbaStore';

const Search = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('')

    const getDataWithFilter = (e: string) => {
        console.log(e)
        dispatch(setPlayersAfterFilter(e))
    }
    const handleNewDataWithDebounce: any = useCallback(debounce(getDataWithFilter, 500), []);

    const handleChangeText = useCallback((e: any) => {
        setSearchValue(e.target.value)
        if (e.target.value.length > 1) {
            handleNewDataWithDebounce(e.target.value);
        } else {
            handleNewDataWithDebounce();
        }
    }, [searchValue]);

    return (
        <div >
            <TextField
                className='search'
                fullWidth
                placeholder='Search Players'
                id="standard-bare"
                variant="outlined"
                value={searchValue}
                onChange={handleChangeText}
                InputProps={{
                    endAdornment: (
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                    ),
                }}
            />
        </div>
    )
}

export default Search