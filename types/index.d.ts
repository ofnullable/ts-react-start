/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'redux';
import { ComponentType } from 'react';
import { match } from 'react-router-dom';
import { RootState } from '../src/store';

declare global {
  interface NodeModule {
    hot?: any;
  }

  interface Window {
    __REDUX_STATE__?: RootState;
  }

  interface ErrorResponse {
    status: number;
    message: string;
    messageCode: string;
  }

  interface BaseState<T> {
    data: T | null;
    loading: boolean;
    error: ErrorResponse | null;
  }

  export interface Context<T> {
    store: Store<RootState>;
    match: match<T>;
    search: string;
  }

  type Preload<T> = (ctx: Context<T>) => Promise<unknown>;
  type Container<T> = ComponentType<T> & { preload?: Preload<T> };
}

declare module 'react' {
  interface Attributes {
    css?: any;
  }
}

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
