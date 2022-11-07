import React, { Component } from 'react'
import './Header.scss'


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='header-btn'>
          <a href="https://www.google.com/">Home</a>
          <a href="https://www.google.com/">Telegram</a>
          <a href="https://www.google.com/">News</a>
        </div>
      </header>
    )
  }
}
