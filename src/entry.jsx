import React from 'react'
import ReactDom from 'react-dom'
import App from './components/productBox'

console.warn(App)
ReactDom.render(
  <App />,
  document.getElementById('app')
)