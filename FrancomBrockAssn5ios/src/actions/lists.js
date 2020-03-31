import Constants from './constants'

export const constants = new Constants({
  ADD_ITEM: 'ADD_ITEM',
  CREATE_LIST: 'CREATE_LIST',
  GET_LISTS: 'GET_LISTS',
  GET_LISTS_DONE: 'GET_LISTS_DONE'
})

export const createItem = (list, item) => ({
  type: 'ADD_ITEM',
  payload: {
    list,
    item
  }
});

export const createList = (title, icon, items=[]) => ({
  type: 'CREATE_LIST',
  payload: {
    title,
    icon,
    items,
  }
});

export const getLists = () => ({
  type: constants.get('GET_LISTS'),
})
