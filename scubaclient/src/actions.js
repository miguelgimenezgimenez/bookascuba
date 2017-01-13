import { CALL_API } from './middlewares/api'

export const getEvents = () => ({
    type: 'GET_EVENTS',
    [CALL_API]: {
      endpoint: '/events'
    }
  })


export const createEvent = (title, details, date, time) => ({
  type: 'CREATE_EVENT',
  [CALL_API]: {
    endpoint: '/events',
    method: 'POST',
    data: {
      title,
      details,
      date,
      time
    },
  },
  success: getEvents
})

export const deleteAll = (data) => ({
  type: 'DELETE_ALL',
  [CALL_API]: {
    method: 'DELETE',
    endpoint: '/deleteAll'
  },
  success: getEvents
})

export const deleteEvent = (data) => ({
  type: 'DELETE_EVENT',
  [CALL_API]: {
    method: 'DELETE',
    endpoint: '/events',
    data: data.id
  },
  success: getEvents
})
