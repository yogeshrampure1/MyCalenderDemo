import {createAction} from '@reduxjs/toolkit'

export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

export const getEvents = createAction<Date | null>(GET_EVENTS)
export const getEventsSuccess = createAction<Date | null>(GET_EVENTS_SUCCESS)
export const getEventsFailure = createAction<Date | null>(GET_EVENTS_FAILURE)


