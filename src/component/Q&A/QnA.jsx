import React, { useState } from "react";
import "./QnA.css";
function QnA() {
  const [btnClick, setbtnClick] = useState(false);

  let controlClick = (e) => {
    console.log(e.target);
    if (!e.target.nextElementSibling.classList.contains("show")) {
      e.target.nextElementSibling.classList.add("show");
      e.target.lastChild.classList.add("rotate");
      // rotate x effect
    } else {
      e.target.nextElementSibling.classList.remove("show");
      e.target.lastChild.classList.remove("rotate");
    }
  };

  return (
    <div className="QnA-outer">
      <div className="QnA-section-container">
        <h1 className="QnA-header">Frequently Asked Questions</h1>
        <ul className="Questions-container">
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">What is Netflix? </button>

              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </span>
            </div>
          </li>
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">How much does Netflix cost? </button>
              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from $9.99 to $19.99 a month. No extra costs, no contracts.
              </span>
            </div>
          </li>
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">Where can I watch? </button>
              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                <br />
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </span>
            </div>
          </li>
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">How do I cancel? </button>
              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </span>
            </div>
          </li>
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">
                What can I watch on Netflix?{" "}
              </button>
              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </span>
            </div>
          </li>
          <li>
            <div className="question-container" onClick={controlClick}>
              <button className="question">Is Netflix good for kids?</button>
              <img
                className="toggleIcon"
                src="https://www.svgrepo.com/show/77168/plus.svg"
                alt="plus sign"
              />
            </div>

            <div className="answer">
              <span>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </span>
            </div>
          </li>
        </ul>
        {/* Q and A form */}
        <form className="QnA-form">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <input type="email" placeholder="Email address" />
          <button>Get Started </button>
        </form>
      </div>
    </div>
  );
}

export default QnA;
