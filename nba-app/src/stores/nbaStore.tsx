import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlayerProp } from '../services/types';
import { toast } from 'react-toastify';

export interface NBAState {
    players: PlayerProp[],
    playersAfterFilter: PlayerProp[],
    favorites: PlayerProp[]
}

const initialState: NBAState = {
    players: [],
    playersAfterFilter: [],
    favorites: []
}

export const nbaSlice = createSlice({
    name: 'nbaStore',
    initialState,
    reducers: {

        setPlayersAfterFilter: (state: NBAState, action: PayloadAction<string>) => {
            if (action.payload) {
                state.playersAfterFilter = state.players.slice().filter(f => action.payload.toLocaleLowerCase().includes(f.first_name.toLocaleLowerCase()))
            } else {
                state.playersAfterFilter = state.players;
            }
        },

        setPlayers: (state: NBAState, action: PayloadAction<PlayerProp[]>) => {
            state.players = action.payload;
            state.playersAfterFilter = state.players;
        },


        onSelectFavorite: (state: NBAState, action: PayloadAction<PlayerProp>) => {
            const isAlreadySelected = state.favorites?.findIndex((f: PlayerProp) => f.id == action.payload?.id)
            if (isAlreadySelected == -1) {
                toast.success("Player Added Successfully");
                state.favorites.push({ ...action.payload })
            } else {
                toast.warning("Player Deleted Successfully");
                state.favorites.splice(isAlreadySelected, 1)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPlayers, onSelectFavorite, setPlayersAfterFilter } = nbaSlice.actions

export default nbaSlice.reducer