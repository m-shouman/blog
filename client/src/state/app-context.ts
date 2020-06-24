import { createContext } from 'react'
import { AppState } from './app-state';

export const initialState: AppState = { user: null }

export const AppContext = createContext(initialState);