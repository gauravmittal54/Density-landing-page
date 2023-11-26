import React  from "react"
import { useSpring, animated } from "react-spring";

const Footer = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <animated.div style={animation}  className="footer">
        <img className="footer-child" alt="" src="/group-626657.svg" />
        <div className="unlock-new-frontiers-parent">
          <div className="fees-parent">
            <div className="fees1">Fees</div>
            <div className="blog">Blog</div>
            <div className="leaderboard1">Leaderboard</div>
            <div className="contact-us">Contact Us</div>
            <div className="careers">Careers</div>
            <div className="privacy-policy">Privacy Policy</div>
          </div>
          <div className="lrem-ipsum-od">{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</div>
        </div>
        <img className="footer-item" alt="" src="/group-2007.svg" />
      </animated.div>
    );
  };
  
  export default Footer;