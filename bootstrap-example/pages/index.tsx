import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <nav className="nav">
      <a className="nav-link me-auto">
        Logo
      </a>
      <a className="nav-link" href="">Button #1</a>
      <a className="nav-link" href="">Button #2</a>
      <a className="nav-link" href="">Button #3</a>
      <a className="nav-link" href="">Button #4</a>
    </nav>
  )
}

export default Home
