import React  from "react"
import { useSpring, animated } from "react-spring";

const TopNav = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        
        <animated.div style={animation} className="top-nav">
        <img className="frame-icon" alt="" src="/frame.svg" />
        <div className="frame-parent">
          <div className="career-parent">
            <div className="career">Career</div>
            <div className="career">Blogs</div>
            <div className="career">Leaderboard</div>
            <div className="career">Fees</div>
          </div>
          <div className="trade-now-wrapper">
            <b className="trade-now">Trade Now</b>
          </div>
        </div>
        </animated.div>
    );
  };
  
  export default TopNav;