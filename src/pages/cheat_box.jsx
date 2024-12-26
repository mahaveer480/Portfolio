import React from 'react'
import Navbar1 from '../components/Navbar'
import '../styles/contact.css'
import { collection, addDoc } from "firebase/firestore"; 
import db from '../components/firebase';
import { useState } from 'react';
import Footer from '../components/footer';

export default function CheatBox() {

const [contact ,setcontact]=useState("")
const [massage ,setmassage]=useState("")
const [error ,seterror]=useState("")


  const sendmassage=()=>{
if(massage===""){

  seterror("please write massage")
}
 else if(contact===""){

  seterror("please write your number or email")
}
else{

    try {

        const docRef =  addDoc(collection(db, "massages"), {
          number:contact,
          massage:massage
        });
        seterror("")
        alert("your massage is sussecfuly send to Mahaveer Ramani .He will eply on your number or emaill");
      } catch (e) {
        seterror("Error adding document: ", e);
      }  




  }}
  return (
  
  
  
  
  <>
    <Navbar1/>
    <div id='contacts'>
      <br /><br /><br />
      <h1>hallo!!</h1>
      <p>if you want to work with me you can massage here<br />
I will reply you on your number or email 

      </p>
     

      <input type="text"  placeholder='Your Massage'onChange={(e)=>setmassage(e.target.value)}   />
      <div>
      <input type="text" placeholder='Your number OR Email' onChange={(e)=>setcontact(e.target.value)}/>
        <button onClick={sendmassage}>submit</button>
        </div>
      <p style={{color:"red"}}>{error}</p>
    </div>
    <Footer/>
    </>
  )
}
