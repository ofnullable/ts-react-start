import { AppState } from '../store/reducers';
import { Context } from '../server/ssrMiddleware';
import * as React from 'react';

declare global {
  interface Window {
    __REDUX_STATE__: AppState;
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
  type fetchData<T> = (ctx: Context<T>) => Promise<unknown>;
  type Container<T> = React.ComponentType<T> & { fetchData?: fetchData<T> };
}
