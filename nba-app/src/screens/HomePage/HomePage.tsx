import React, { useEffect } from 'react'
import './HomePage.css';
import { getPlayers } from '../../services/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { PlayerItem, Search } from '../../components';

const HomePage = () => {
    const dispatch = useDispatch();

    const { playersAfterFilter, favorites } = useSelector((state: RootState) => state.nbaStore);

    useEffect(() => {
        getPlayers(dispatch);
    }, [])

    return (
        <div className='homepage-container'>
            <Search />

            <div className='playersCon'>
                <div className='players-con'>
                    {playersAfterFilter.length > 0 && playersAfterFilter.map((p, i) =>
                        <PlayerItem item={p} index={i} />
                    )}
                </div>

                <div className='favorites-con'>
                    {favorites.length > 0 && favorites.map((f, i) =>
                        <PlayerItem item={f} index={i} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default HomePage;