import React  from "react"
import { useSpring, animated } from "react-spring";

const LandingPageChild = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <animated.div style={animation} className="landing-page-child">
        <div className="get-started-now-parent">
          <b className="get-started-now">Get started now.</b>
          <img className="group-child15" alt="" src="/group-1000003804.svg" />
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="cta">
              <b className="career">Start Trading!</b>
            </div>
          </div>
        </div>
      </animated.div>
    );
  };
  
  export default LandingPageChild;