import { INCREMENT, INCREMENT_IF_ODD, DECREMENT } from '../actionTypes/'

export default function counter(state = 0, action) {
  const type = action.type
  if (type === INCREMENT) {
    return state + 1
  } else if (type === INCREMENT_IF_ODD) {
    return (state % 2 !== 0) ? state + 1 : state
  } else if (type === DECREMENT) {
    return state - 1
  } else {
    return state
  }
}
