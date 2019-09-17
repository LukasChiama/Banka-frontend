/**
 * @name errorReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} object containing state
 */
const errorReducer = (state, action) => {
  const { key } = action;
  switch (action.type) {
    case 'ERROR':
      return { ...state, [key]: key };
    default:
  }
  return state;
};


/**
 * @name userReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} object containing state
 */
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMITTING':
      return { ...state, loading: true };
    case 'SUCCESS': {
      const { data } = action;
      sessionStorage.setItem('newUser', JSON.stringify(data[0]));
      return { ...state, loading: false, data };
    }
    case 'FAILURE': {
      const { error } = action;
      const msg = error.response.data.error || error.response.data.errors[0];
      return { ...state, loading: false, error: msg };
    }
    default:
  }

  return state;
};

export { errorReducer, userReducer };
