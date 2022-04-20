import React from 'react'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import "./home.css"

export default function Home() {
  return (
    <div>
        <Header />
        <main className="main-container">
            <Sidebar />
            <Feed />
            <Rightbar />
        </main>
    </div>
  )
}
