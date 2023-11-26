import React  from "react"
import { useSpring, animated } from "react-spring";

const LandingPageInner = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <animated.div style={animation}  className="landing-page-inner">
        <div className="frame-group">
          <div className="parent">
            <b className="career">00%</b>
            <div className="conversion-fee">{`Conversion Fee `}</div>
          </div>
          <img className="frame-child" alt="" src="/vector-1.svg" />
          <div className="parent">
            <b className="career">500 Mn+</b>
            <div className="conversion-fee">Lifetime Volume Traded</div>
          </div>
          <img className="frame-child" alt="" src="/vector-2.svg" />
          <div className="parent">
            <b className="career">250+</b>
            <div className="conversion-fee">Total Tradable Pairs</div>
          </div>
          <img className="frame-child" alt="" src="/vector-1.svg" />
          <div className="parent">
            <b className="career">15,000+</b>
            <div className="conversion-fee">Traders</div>
          </div>
        </div>
      </animated.div>
    );
  };
  
  export default LandingPageInner;