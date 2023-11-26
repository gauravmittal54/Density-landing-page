import React  from "react"
import { useSpring, animated } from "react-spring";

const GroupContainer = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <animated.div style={animation}  className="group-container">
        <div className="group-div">
          <img className="group-child" alt="" src="/group-1000003808.svg" />
          <div className="group-item" />
          <div className="group-inner" />
          <div className="group-parent1">
            <img className="group-icon" alt="" src="/group-18145967.svg" />
            <div className="one-app-endless-container">
              <p className="its-time-to">One App.</p>
              <p className="its-time-to">{`Endless `}</p>
              <p className="its-time-to">Possibilities</p>
            </div>
          </div>
        </div>
        <div className="group-div">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="group-child" alt="" src="/vector1.svg" />
          <div className="group-item" />
          <div className="group-inner" />
          <div className="group-parent2">
            <img className="group-child2" alt="" src="/group-18145968.svg" />
            <div className="future-of-derivative-container">
              <p className="its-time-to">{`Future of `}</p>
              <p className="its-time-to">{`Derivative `}</p>
              <p className="its-time-to">Trading.</p>
            </div>
          </div>
        </div>
        <div className="vector-group">
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
          <img className="vector-icon4" alt="" src="/vector4.svg" />
          <div className="group-child3" />
          <div className="group-child4" />
          <div className="group-child5" />
          <div className="group-child6" />
          <div className="group-child7" />
          <div className="group-child8" />
          <div className="group-child9" />
          <div className="is-now-here-for-you-parent">
            <div className="is-now-here-container">
              <p className="its-time-to">{`Is now here, `}</p>
              <p className="its-time-to">for you.</p>
            </div>
            <img className="group-child10" alt="" src="/group-626832.svg" />
          </div>
        </div>
      </animated.div>
    );
  };
  
  export default GroupContainer;