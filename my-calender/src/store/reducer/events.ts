import { createReducer} from '@reduxjs/toolkit' 

export interface IEvent{
    eventTime: Date |null
}

export interface IEvents {

    eventsloading : boolean
    events : Array<IEvent> | null
    eventsError: Error | null
} 
const INITIAL_STATE={
    eventsLoading: true,
    events: [],
    eventsError: null
}

export const {selected, dispatch} = createReducer(INITIAL_STATE, reducer)

export const events = ()=>{

    e
}