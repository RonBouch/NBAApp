import axios from "axios";
import { setPlayers } from "../stores/nbaStore";
const URL = 'https://www.balldontlie.io/api/v1/players';


export const getPlayers = async (dispatch: any) => {

    const res = await axios.get(URL)
    if (res.status === 200) {
        dispatch(setPlayers((res?.data?.data)));
    }
}

