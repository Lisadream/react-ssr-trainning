import React from 'react'
import ReactDom from 'react-dom'

import App from '../src/App'
//不能做render 即做dom初始化，又做事件监听
//所以用注水
ReactDom.hydrate(App,document.getElementById('root'))