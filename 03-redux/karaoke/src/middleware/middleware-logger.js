const middlewareLogger = store => next => action => {
  console.log('ORIGINAL STATE: ', store.getState());
  console.log('CURRENT ACTION: ', action);
  next(action);
  console.log('NEW UPDATED STATE: ', store.getState());
};

export default middlewareLogger;
