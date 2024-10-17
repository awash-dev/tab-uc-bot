import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
const Tasks = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>

      <div className="hor">
        <div className="sub">
          <div className="st">
            <span>
              subscribe on <FaYoutube className="icon" fontSize="large" />
            </span>
            <a href="https://www.youtube.com/channel/UCGSroElDPOtCb8Wwhkae7qw">
              claim
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              follow on <FaInstagram className="icon" fontSize="large" />
            </span>
            <a href="https://www.instagram.com/awash_dev/">claim</a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              follow on <FaFacebook className="icon" fontSize="large" />
            </span>
            <a href="https://www.facebook.com/mgdstudio4242/">claim</a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              join on <FaTelegram className="icon" fontSize="large" />
            </span>
            <a href="https://t.me/awash_fx">claim</a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              join on <FaTelegram className="icon" fontSize="large" />
            </span>
            <a href="https://t.me/awash_claim">claim</a>
          </div>
        </div>
      </div>
    </div> //
  );
};

export default Tasks;
