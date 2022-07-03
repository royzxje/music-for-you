import React from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';
import { useState } from "react";
import clsx from 'clsx'
const Hero = () => {
  const [password, setPassword] = useState('')
  const [check,setCheck] = useState(false)
  const [link, setLink] = useState('')
  const handlePassword = (e) => {
      setPassword(e.target.value)
      console.log(e.target.value);
  }
  const handleSubmit = () => {
    if(password === '22022022') {
      setCheck(false)
      setLink('/music')
    } else if (password !== '22022022') {
      setCheck(true)
      
      setLink('')
    }
  }
    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="//www.youtube.com/embed/TGan48YE9Us?autoplay=1&mute=1&start=20"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
              s
            />
          </div>
        </div>
        <div className="titleContainer">
          {/* <img className="heroLogo" src={logo} alt="" /> */}
          <i className="fa-solid fa-heart heroLogo"></i>
          <h1 className="tracking-in-expand-fwd">Võ Thị Thu Trang</h1>
          <h3 className="subTitle">Trang web này là dành riêng cho em </h3>
          <div className="subPassword">
            Mật khẩu  
          </div>
          <input type='input' className="Password " style={{width:'200px'}} value={password} onChange={(e)=> {handlePassword(e)}}></input>
          <div className ={clsx( check === true? 'checkPass': 'd-none')}>Bé suy nghĩ lại đi!</div>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div class="wrap">
            <Link to={link}>
                <button class="button" onClick={() => handleSubmit()}>Bấm vào đây để nghe nè <i class="fa-solid fa-heart"></i></button>
            </Link>         
          </div>
        </div>
        <ReactPlayer 
              className="react-player"
              url="//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div>
    )
}

export default Hero