export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_BOOKS':
      return payload;
    case 'P_BOOK':
      return state.filter((b) => b.id !== payload);
    default:
      return state;
  }
};
