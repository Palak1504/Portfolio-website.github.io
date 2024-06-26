import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {VscFolderLibrary} from 'react-icons/vsc'
const Nav = () => {
  const[activeNav,setActiveNav]=useState("#");
  return (
    <nav>
      <a href="src\components\Header\Header.jsx" onClick={()=>setActiveNav('#')}className={activeNav==='#'?"active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav==='#about'?"active":""}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')}className={activeNav==='#skills'?"active":""} ><BiBook/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')}className={activeNav==='#projects'?"active":""} ><VscFolderLibrary/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}className={activeNav==='#contact'?"active":""} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav