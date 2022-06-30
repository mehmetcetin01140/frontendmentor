import React from 'react'
import MainTop from './MainTop'
import MainCenter from './MainCenter'
import MainBottom from './MainBottom'
export default function Main() {
  return (
    <div className='main-container'>
      <MainTop/>
      <MainCenter/>
      <MainBottom/>
    </div>
  )
}
