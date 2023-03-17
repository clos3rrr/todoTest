import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../store/action-creators/'

export const useActions = (): ReturnType<typeof bindActionCreators> => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
