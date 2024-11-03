export const customLoggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("Original state =======> ", store.getState());
  console.info("Dispatching =======> ", action);

  next(action);

  console.info("New updates state =======> ", store.getState());
  console.groupEnd();
};