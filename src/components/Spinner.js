import React, { Component } from 'react'
import a from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={a} alt="loading"></img>
      </div>
    )
  }
}
