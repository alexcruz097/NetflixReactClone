import React from "react";
import Hero from "./component/hero/Hero";
import Nav from "./component/Nav"
import StoryCard from "./component/cards/StoryCard";
import QnA from "./component/Q&A/QnA";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <Nav />
        <Hero />
      </div>
      <hr />
      <StoryCard 
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." 
        cardIMG="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
        cardANIME="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>

      <hr />
      <StoryCard 
        title="Download your shows to watch offline.."
        subtitle="Save your favorites easily and always have something to watch." 
        cardIMG="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        downloadANIME="" 
        downloadStyle="download-img-style"
        />

      <hr />
      <StoryCard 
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." 
        cardIMG="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        cardANIME="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
       customStyle="watch-everywhere-animation"
       />

      <hr />
      <StoryCard 
        title="Create profiles for kids."
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." 
        cardIMG="https://occ-0-3997-3996.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
     />
      <hr />
      <QnA />
      <hr />
<Footer />
    </div>
  );
}

export default App;
