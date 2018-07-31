/*eslint-disable no-unused-vars*/
import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from './sagaMonitor'

import Counter from './components/Counter'
import reducer from './reducers'
import rootSaga from './sagas'
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from './actionTypes/'

const sagaMiddleware = createSagaMiddleware(/* {sagaMonitor} */)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action(INCREMENT)}
      onDecrement={() => action(DECREMENT)}
      onIncrementIfOdd={() => action(INCREMENT_IF_ODD)}
      onIncrementAsync={() => action(INCREMENT_ASYNC)} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
