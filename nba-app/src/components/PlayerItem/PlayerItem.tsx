import React from 'react'
import { PlayerItemProp } from '../../services/types'
import { useDispatch, useSelector } from 'react-redux';
import { onSelectFavorite } from '../../stores/nbaStore';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import './PlayerItem.css'
import { IconButton } from '@material-ui/core';
import { RootState } from '../../stores/store';

const PlayerItem = ({ item, index }: PlayerItemProp) => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state: RootState) => state.nbaStore);
    const { first_name, height_feet, height_inches, id, last_name, position, team, weight_pounds } = item

    const isItemSelected = (favorites.findIndex(f => f.id == id)) == -1;

    return (
        <div className='playerCon' key={id + first_name + index}>
            <div>
                <p className='txt'>Name: {first_name + " " + last_name}</p>
                <p className='txt'>Position: {position}</p>
                <p className='txt'>Team Name: {team.full_name}</p>
            </div>
            <div>

                <IconButton onClick={() => dispatch(onSelectFavorite(item))}>
                    {isItemSelected ?
                        <FavoriteBorder style={{ fontSize: 34, color: 'black' }} />
                        :
                        <Favorite style={{ color: 'red', fontSize: 34 }} />}
                </IconButton>
            </div>
        </div>
    )
}

export default PlayerItem