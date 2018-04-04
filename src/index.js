import React from 'react'
import {render} from 'react-dom'
import Greeter from './components/Greeter.jsx'

let rootElement = document.getElementById('root')

render(<Greeter />, rootElement)