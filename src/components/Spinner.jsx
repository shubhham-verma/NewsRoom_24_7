import React, { Component } from 'react'
import book from './Spinner-1s-200px.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='flex justify-center bg-slate-300 '> 
        <img src={book} alt="book" className='bg-slate-300 h-20'/>
      </div>
    )
  }
}



