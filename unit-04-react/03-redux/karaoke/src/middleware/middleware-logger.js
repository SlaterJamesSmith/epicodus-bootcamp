const middlewareLogger = store => next => action => {
  /* eslint-disable */
  console.log('ORIGINAL STATE: ', store.getState());
  console.log('CURRENT ACTION: ', action);
  next(action);
  console.log('NEW UPDATED STATE: ', store.getState());
  /* eslint-enable */
};

export default middlewareLogger;
