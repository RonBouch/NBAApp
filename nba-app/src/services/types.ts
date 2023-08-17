export interface PlayerProp {
    first_name: string;
    height_feet: string | null;
    height_inches: string | null
    id: number;
    last_name: string;
    position: string;
    team: TeamProp;
    weight_pounds: string | null;
}

export interface TeamProp {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface PlayerItemProp {
    item: PlayerProp;
    index: number;
}