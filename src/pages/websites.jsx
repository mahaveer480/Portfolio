import React from 'react'
import Navbar1 from '../components/Navbar'
import "../styles/wbsites.css"
import websites from "../assests/images/background 2.jpg"
import todolist from "../assests/images/todolist.png"
import bloodbank from "../assests/images/blood bank.png"
import complains from "../assests/images/complains.png"
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
export default function Websites() {
  return (
    <div>
      <Navbar1/>

<div id='allwebsites'>
<Link id='websites' target='_main' to="https://672729aa6efe65a12f82b21c--thriving-kangaroo-095236.netlify.app/">
<div >
<div><img src={todolist} alt="dsfsfs" id='website-images' /></div>
<h4>To-Do List  (Real-time)</h4>
</div>
</Link>






<Link id='websites' target='_main' onClick={()=>{alert("you can try dummy1@gmail.com password: mahaveer")}} to="https://final-hachathon.vercel.app/">
<div >
<div><img src={bloodbank} alt="dsfsfs" id='website-images' /></div>
<h4>Blood Bank(React)</h4>
</div>
</Link>






<Link id='websites' target='_main' to="complains-mmwlgrjfc-mahaveer480s-projects.vercel.app">
<div >
<div><img src={complains} alt="dsfsfs" id='website-images' /></div>
<h4>Complains(javascript)</h4>
</div>
</Link>






<Link id='websites' target='_main' to="https://672729aa6efe65a12f82b21c--thriving-kangaroo-095236.netlify.app/">
<div >
<div><img src={todolist} alt="dsfsfs" id='website-images' /></div>
<h4>To-Do List  (Real-time)</h4>
</div>
</Link>











</div>


<Footer/>
    </div>
  )
}
