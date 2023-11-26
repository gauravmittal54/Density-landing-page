import React  from "react"
import { useSpring, animated } from "react-spring";

const Hero = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <animated.div style={animation} className="hero">
        <div className="group-parent">
          <div className="its-time-to-trade-the-future-parent">
            <b className="its-time-to-container">
              <p className="its-time-to">It’s time to trade,</p>
              <p className="its-time-to">
                <span>{`the `}</span>
                <span className="future">future.</span>
              </p>
            </b>
            <b className="future1">future.</b>
          </div>
          <div className="derivates-made-simple">Derivates made simple!</div>
          <div className="trade-btc-eth">
            Trade BTC, ETH Futures with 125x leverage and earn rewards.
          </div>
        </div>
        <div className="iphone-14-pro-space-black-mock-parent">
          <div className="iphone-14-pro-space-black-mock">
            <img className="shadow-icon" alt="" src="/shadow@2x.png" />
            <img className="main-icon" alt="" src="/main@2x.png" />
            <img
              className="iphone-14-pro-space-black-mock1"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label@2x.png"
            />
          </div>
          <div className="iphone-14-pro-space-black-mock2">
            <img className="shadow-icon1" alt="" src="/shadow1@2x.png" />
            <img className="main-icon1" alt="" src="/main1@2x.png" />
            <img
              className="iphone-14-pro-space-black-mock3"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label1@2x.png"
            />
          </div>
          <div className="iphone-14-pro-space-black-mock4">
            <img className="shadow-icon2" alt="" src="/shadow2@2x.png" />
            <img className="main-icon2" alt="" src="/main2@2x.png" />
            <img
              className="iphone-14-pro-space-black-mock5"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label2@2x.png"
            />
          </div>
        </div>
        </animated.div>
    );
  };
  
  export default Hero;