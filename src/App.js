import React from 'react'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'




export default [
  {
    path:"/",
    component:Index,
    //exact:true,
    key:'index'
  },
  {
    path:"/about",
    component:About,
    exact:true,
    key:'about'
  },
  {
    path:"/user",
    component:User,
    exact:true,
    key:'user'
  }
]