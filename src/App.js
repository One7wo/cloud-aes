import "./App.css";
import axios from "axios";

import access from "./assets/img/access.png";
import add from "./assets/img/add.png";
import copy from "./assets/img/copy.png";
import next from "./assets/img/next.png";
import refresh from "./assets/img/refresh.png";

import React from "react";

function App() {
  const authYandex = () => {
    document.location.href =
      "https://oauth.yandex.ru/authorize?response_type=token&client_id=34fd0faa7600411b8ae138b0b165bb51";
  };

  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <div className="header__logo">
            <img src={access} alt="access" />

            <div className="text-m">Pepega</div>
            <button onClick={authYandex}>Yandex</button>
          </div>
        </div>
        <div className="content">
          <div className="prev">
            <img src={next} alt="" className="next" />
          </div>
          <div className="content__space">
            <div className="tiket">
              <div className="tiket__name text-r">
                Name: <span className="text-l">Twitter</span>
              </div>
              <div className="tiket__key text-r">
                Key: <span className="text-l password">nfjasdnfans3</span>
              </div>
              <button className="tiket__button">Copy key</button>
            </div>

            <div className="tiket">
              <div className="tiket__name text-r">
                Name: <span className="text-l">Twitter</span>
              </div>
              <div className="tiket__key text-r">
                Key: <span className="text-l password">nfjasdnfans3</span>
              </div>
              <button className="tiket__button">Copy key</button>
            </div>

            <div className="add-tiket">
              <img src={add} alt="" />
            </div>
          </div>

          <div className="next">
            <img src="assets/img/next.png" alt="" />
          </div>
        </div>
        <hr className="hr" />

        <div className="tiket-info">
          <div className="tiket-info__name">
            <div className="text-r">Name:</div>
            <div className="name text-l">Twitter</div>
          </div>

          <div className="tiket-card">
            <div className="tiket-info__key">
              <div className="text-r">Key:</div>
              <div className="key">nfjasdnfans3np3pjnz1</div>
              <div className="copy">
                <img src={copy} alt="" />
              </div>
              <div className="refresh">
                <img src={refresh} alt="" />
              </div>
            </div>

            <div className="tiket-info__generate">
              <input type="password" placeholder="Your word" />
              <button className="generate">Create password</button>
            </div>
          </div>

          <div className="tiket-info__info">
            <div className="text-r">Additional Information:</div>
            <div className="info text-l">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
