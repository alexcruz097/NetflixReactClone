import React from 'react'
import "./cards.css"
function StoryCard(props) {
  return (
    <div className='card-container'>
      <h1 className='card-header'>{props.title}</h1>
      <p className='card-subtitle'>{props.subtitle}</p>
      <div className='card-images'>
        <img className='card-img' src={props.cardIMG} alt={props.alt} />
        {/* terminary operation to display video if it is an animation or a regular image */}
        <video style={props.cardANIME === "" ? { display: "none" } : { display: "block" }} className='card-animation' autoPlay >
          <source src={props.cardANIME} type="video/mp4" />
        </video>
        <div  style={props.downloadANIME === "" ? { display: "block" } : { display: "none" }} className='downloadANIME'>
          <img className='downloadANIME-img'  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
          <p>Stranger Things <br />Downloading...</p>

        </div>
      </div>
    </div>
  )
}

export default StoryCard