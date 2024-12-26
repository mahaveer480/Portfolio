import React from 'react'
import Navbar1 from '../components/Navbar'
import '../styles/home.css'
import mahaveerramani from "../assests/images/downloa110116-removebg-preview.png"
import textbackground from "../assests/images/text baground.png"
import MainSection from '../components/mainseaction'
import Rateme from '../components/rateme'
import AllReviews from '../components/allrevewes'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar1 />
    
       <MainSection/>
    <AllReviews/>
    <Footer/>
    </>
  );
}
