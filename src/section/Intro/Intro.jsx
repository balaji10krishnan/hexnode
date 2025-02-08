import classes from "./Intro.module.css";
//img
import darkImg from "../../assets/png/user-dark.webp";
import lightImg from "../../assets/png/user-light.webp";
import blog1 from "../../assets/png/blog-1.webp";
import blog2 from "../../assets/png/blog-2.webp";
import blog3 from "../../assets/png/blog-3.webp";
import { Tick } from "../../assets/svg/svg";
const Intro = () => {
  return (
    <section>
      <div className={`${classes["intro-bg"]}`}>
        <div className={`container ${classes["intro"]}`}>
          <div className={`${classes["intro-content"]}`}>
            <p className={`${classes["intro-label"]} f-xm fw-s`}>
              Unified Endpoint Management
            </p>
            <p className={`${classes["intro-title"]} f-xxxl fw-s`}>
              Gain control and visibility over your endpoints
            </p>
            <p className={`${classes["intro-text"]} f-xxm fw-s`}>
              Hexnode's UEM solution allows you to simplify endpoint management
              and free up IT. Focus on the big picture while Hexnode works on
              the details.
            </p>
            <div className={`${classes["email"]}`}>
              <div className={`${classes["email-input"]}`}>
                <input placeholder="Email" />
              </div>
              <button className={`f-m f-b btn-red ${classes["submit-btn"]}`}>
                LET'S TRY IT OUT!
              </button>
            </div>
          </div>
          <div className={`${classes["intro-img"]}`}>
            <div className={`${classes["black-img"]}`}>
              <img src={darkImg} />
            </div>
            <div className={`${classes["light-img"]}`}>
              <img src={lightImg} />
            </div>
            <div className={`${classes["tag-1"]}`}>
              <button className="tag tag-orange">
                <span>
                  <div className="tag-lable">
                    <div className="tick-circle">
                      <Tick stroke="#fcd499" />
                    </div>
                    <div>Password policy applied</div>
                  </div>
                </span>
              </button>
            </div>
            <div className={`${classes["tag-2"]}`}>
              <button className="tag tag-blue">
                <span>
                  <div className="tag-lable">
                    <div className="tick-circle">
                      <Tick stroke="#c2e1e6" />
                    </div>
                    <div>TvOS Kiosk Active</div>
                  </div>
                </span>
              </button>
            </div>
            <div className={`${classes["tag-3"]}`}>
              <button className="tag tag-green">
                <span>
                  <div className="tag-lable">
                    <div className="tick-circle">
                      <Tick stroke="#bcdcbe" />
                    </div>
                    <div>Device Enrolled</div>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes["blog-bg"]}`}>
        <div className={`container ${classes["blog"]}`}>
          <div className={`${classes["blog-item"]}`}>
            <img src={blog1} />
            <p className={`${classes["blog-text"]}`}>
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>
          <div className={`${classes["blog-div"]}`}></div>
          <div className={`${classes["blog-item"]}`}>
            <img src={blog2} />
            <p className={`${classes["blog-text"]}`}>
              Hexnode was recognized in the 2023 Gartner® Market Guide for
              Unified Endpoint Management Tools.{" "}
            </p>
          </div>
          <div className={`${classes["blog-div"]}`}></div>
          <div className={`${classes["blog-item"]}`}>
            <img src={blog3} />
            <p className={`${classes["blog-text"]}`}>
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
