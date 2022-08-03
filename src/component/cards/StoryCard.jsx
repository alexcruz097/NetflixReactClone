import React from "react";
import "./cards.css";
function StoryCard(props) {
  return (
    <div className="card-outer">
    <div className="card-container">
        <div
          className={
            props.order === "true"
              ? "card-description change-order"
              : "card-description"
          }
        >
          <h1 className="card-header">{props.title}</h1>
          <p className="card-subtitle">{props.subtitle}</p>
        </div>
        <div className="card-images">
          <div className="video-img-animation-container">
            <img
              className={
                props.downloadStyle === "download-img-style"
                  ? "card-img download-img-style"
                  : "card-img"
              }
              style={
                props.watchImgStyle === "custom" ? { marginTop: "1rem" } : {}
              }
              src={props.cardIMG}
              alt={props.alt}
            />
            {/* terminary operation to display video if it is an animation or a regular image */}
            <video
              style={
                props.cardANIME === ""
                  ? { display: "none" }
                  : { display: "block" }
              }
              // if watch everywhere then do this custom class
              className={
                props.customStyle === "watch-everywhere-animation"
                  ? "watch-animation-video card-animation"
                  : "card-animation"
              }
              autoPlay
              muted
              loop
            >
              <source src={props.cardANIME} type="video/mp4" />
            </video>
          </div>
          <div
            style={props.downloadANIME === "" ? {} : { display: "none" }}
            className="downloadANIME"
          >
            <img
              className="downloadANIME-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
            <p className="download-animation-action">
              Stranger Things <br />
              <spam className="download-blue">Downloading...</spam>
            </p>
            <img
              className="download-gif"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="download animation"
            />
          </div>
        </div>
      </div>
      </div>
  );
}

export default StoryCard;
