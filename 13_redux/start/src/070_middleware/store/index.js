import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger";

export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getMiddlewares) => getMiddlewares().concat(logger)
  // ↑省略形（意味は下のコードと同じ）
  // middleware: (getDefaultMiddleware) => {
  //   // const middlewares = getDefaultMiddleware();
  //   // console.log(middlewares);
  //   // const newMiddlewares = middlewares.concat(logger)
  //   // return newMiddlewares;
  // }
});
