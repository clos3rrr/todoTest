import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type RootState } from '../store/reducers'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
