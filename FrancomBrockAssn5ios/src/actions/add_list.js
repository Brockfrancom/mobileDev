export const createList = (title, icon) => ({
  type: 'CREATE_LIST',
  payload: {
    title,
    icon
  }
});
