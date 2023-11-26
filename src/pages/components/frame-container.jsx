import React  from "react"
import { useSpring, animated } from "react-spring";

const FrameContainer = () => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    return (
        <>
        <animated.div style={animation}  className="frame-container">
        <div className="trade-more-pay-less-parent">
          <b className="trade-more-pay-container">
            <span>{`Trade More. `}</span>
            <span className="pay-less">Pay Less.</span>
          </b>
          <div className="our-low-fees">
            Our low Fees Supercharge Your Profits
          </div>
        </div>
        <div className="frame-div">
          <div className="frame-parent1">
            <img className="frame-icon1" alt="" src="/frame1.svg" />
            <div className="parent1">
              <b className="b3">0.07</b>
              <div className="taker-fees">Taker Fees</div>
            </div>
            <div className="parent2">
              <b className="b3">0.025</b>
              <div className="taker-fees">Maker Fees</div>
            </div>
            <img className="image-92-icon" alt="" src="/image-92@2x.png" />
          </div>
          <div className="frame-parent2">
            <img className="frame-icon2" alt="" src="/frame2.svg" />
            <div className="parent3">
              <b className="b3">0.04</b>
              <div className="taker-fees1">Taker Fees</div>
            </div>
            <div className="parent4">
              <b className="b3">0.02</b>
              <div className="taker-fees1">Maker Fees</div>
            </div>
            <div className="frame-wrapper">
              <img className="frame-icon3" alt="" src="/frame3.svg" />
            </div>
            <img className="texture-icon" alt="" src="/texture@2x.png" />
          </div>
          <div className="frame-parent1">
            <img className="frame-icon1" alt="" src="/frame4.svg" />
            <div className="parent1">
              <b className="b3">0.05</b>
              <div className="taker-fees">Taker Fees</div>
            </div>
            <div className="parent2">
              <b className="b3">0.02</b>
              <div className="taker-fees">Maker Fees</div>
            </div>
            <img className="image-93-icon" alt="" src="/image-93@2x.png" />
          </div>
        </div>
      </animated.div>
      <animated.div style={animation}  className="frame-parent4">
      <div className="explore-the-markets-like-it-is-parent">
        <b className="trade-more-pay-container">
          <p className="its-time-to">Explore the Markets</p>
          <p className="its-time-to">
            <span>{`like it is your `}</span>
            <span className="pay-less">Playground.</span>
          </p>
        </b>
        <div className="our-low-fees">
          Search for your favorite coins and stay ahead of the market
        </div>
      </div>
      <div className="rectangle-parent">
        <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
        <img className="chart-icon" alt="" src="/chart.svg" />
        <img className="group-child11" alt="" src="/vector-1173.svg" />
        <img className="group-child12" alt="" src="/vector-1174.svg" />
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="group-parent3">
                <img
                  className="frame-child1"
                  alt=""
                  src="/group-626505.svg"
                />
                <div className="bitcoin-parent">
                  <div className="bitcoin">Bitcoin</div>
                  <div className="btcusdt">BTC/USDT</div>
                </div>
              </div>
              <img className="vector-icon5" alt="" src="/vector5.svg" />
            </div>
            <div className="frame-parent8">
              <div className="price-parent">
                <div className="price">Price</div>
                <a
                  className="a"
                  href="https://coinmarketcap.com/currencies/bitcoin/#markets"
                  target="_blank"
                >
                  $25,776.80
                </a>
              </div>
              <div className="frame-parent9">
                <div className="vol-parent">
                  <div className="price">VOL</div>
                  <div className="m">$8.5B</div>
                </div>
                <div className="vol-parent">
                  <div className="price">CHG</div>
                  <div className="div">23.1%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="group-parent3">
                <img
                  className="frame-child1"
                  alt=""
                  src="/group-6265051.svg"
                />
                <div className="bitcoin-parent">
                  <div className="bitcoin">Solana</div>
                  <div className="btcusdt">SOL/USDT</div>
                </div>
              </div>
              <img className="vector-icon6" alt="" src="/vector6.svg" />
            </div>
            <div className="frame-parent8">
              <div className="price-parent">
                <div className="price">Price</div>
                <div className="div1">$18.07</div>
              </div>
              <div className="frame-parent9">
                <div className="vol-parent">
                  <div className="price">VOL</div>
                  <div className="m">$372.8M</div>
                </div>
                <div className="vol-parent">
                  <div className="price">CHG</div>
                  <div className="div">02.1%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="group-parent3">
                <img
                  className="frame-child1"
                  alt=""
                  src="/group-6265052.svg"
                />
                <div className="bitcoin-parent">
                  <div className="bitcoin">Ethereum</div>
                  <div className="btcusdt">ETH/USDT</div>
                </div>
              </div>
              <img className="vector-icon5" alt="" src="/vector5.svg" />
            </div>
            <div className="frame-parent8">
              <div className="price-parent">
                <div className="price">Price</div>
                <a
                  className="a"
                  href="https://coinmarketcap.com/currencies/ethereum/#markets"
                  target="_blank"
                >
                  $1,607.11
                </a>
              </div>
              <div className="frame-parent9">
                <div className="vol-parent">
                  <div className="price">VOL</div>
                  <div className="m">$4.6B</div>
                </div>
                <div className="vol-parent">
                  <div className="price">CHG</div>
                  <div className="div">12.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="texture-icon1" alt="" src="/texture1@2x.png" />
      </div>
      <div className="explore-markets-wrapper">
        <b className="trade-now">Explore Markets</b>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent18">
      <div className="unlock-new-frontiers-parent">
        <b className="unlock-new-frontiers-container">
          <span>Unlock</span>
          <span className="span">{` `}</span>
          <span className="new-frontiers">New Frontiers.</span>
        </b>
        <div className="are-you-a">
          Are you a stock trader looking for new opportunities to make money?
          We got you covered!
        </div>
      </div>
      <div className="frame-parent19">
        <div className="same-strategies-wrapper">
          <b className="career">
            <p className="its-time-to">Same</p>
            <p className="its-time-to">Strategies</p>
          </b>
        </div>
        <img className="frame-child4" alt="" src="/vector-11.svg" />
        <div className="same-strategies-wrapper">
          <b className="career">
            <p className="its-time-to">Same</p>
            <p className="its-time-to">Indicators</p>
          </b>
        </div>
        <img className="frame-child4" alt="" src="/vector-11.svg" />
        <div className="same-strategies-wrapper">
          <b className="career">
            <p className="its-time-to">Better</p>
            <p className="its-time-to">Leverage</p>
          </b>
        </div>
        <img className="frame-child4" alt="" src="/vector-11.svg" />
        <div className="same-strategies-wrapper">
          <b className="career">
            <p className="its-time-to">24x7</p>
            <p className="its-time-to">Trading</p>
          </b>
        </div>
      </div>
      <div className="frame-parent20">
        <div className="frame-parent21">
          <div className="group-parent6">
            <div className="vector-container">
              <img className="group-child13" alt="" src="/vector-1176.svg" />
              <div className="group-parent7">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="career">Sell</div>
              </div>
              <div className="group-parent8">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="career">Sell</div>
              </div>
              <div className="group-parent9">
                <img
                  className="frame-child9"
                  alt=""
                  src="/group-10000038281.svg"
                />
                <div className="career">Sell</div>
              </div>
              <div className="group-parent10">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="career">Buy</div>
              </div>
              <div className="group-parent11">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="career">Buy</div>
              </div>
            </div>
            <div className="btcusdt1">BTCUSDT</div>
          </div>
          <img className="frame-child12" alt="" src="/vector-1178.svg" />
          <div className="group-parent12">
            <div className="vector-parent1">
              <img className="group-child14" alt="" src="/vector-1177.svg" />
              <div className="group-parent13">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="career">Buy</div>
              </div>
              <div className="group-parent14">
                <img
                  className="frame-child14"
                  alt=""
                  src="/group-10000038282.svg"
                />
                <div className="career">Sell</div>
              </div>
              <div className="group-parent15">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="career">Sell</div>
              </div>
              <div className="group-parent16">
                <img
                  className="frame-child14"
                  alt=""
                  src="/group-10000038282.svg"
                />
                <div className="career">Buy</div>
              </div>
              <div className="group-parent17">
                <img
                  className="frame-child7"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="career">Buy</div>
              </div>
            </div>
            <div className="nifty">nifty</div>
          </div>
        </div>
        <img className="texture-icon2" alt="" src="/texture2@2x.png" />
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent22">
      <div className="start-small-earn-big-parent">
        <b className="trade-more-pay-container">Start Small. Earn Big.</b>
        <div className="deposity-a-minimum">
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </div>
      </div>
      <div className="frame-parent23">
        <div className="as-someone-whos-always-lookin-parent">
          <img className="icon" alt="" src="/25-2.svg" />
          <div className="deposit-bonus-parent">
            <b className="deposit-bonus">
              <p className="its-time-to">Deposit</p>
              <p className="its-time-to">Bonus.</p>
            </b>
            <div className="our-assets-liquidity">
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img className="texture-icon3" alt="" src="/texture3@2x.png" />
          <img className="frame-icon5" alt="" src="/frame5.svg" />
        </div>
        <div className="as-someone-whos-always-lookin-parent">
          <div className="dedicated-relationship-manager-parent">
            <b className="dedicated-relationship-manager-container">
              <p className="its-time-to">Dedicated</p>
              <p className="its-time-to">Relationship Manager.</p>
            </b>
            <div className="our-assets-liquidity">
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img className="manager-1-icon" alt="" src="/manager-1.svg" />
          <img className="texture-icon4" alt="" src="/texture4@2x.png" />
          <img className="frame-icon5" alt="" src="/frame6.svg" />
        </div>
      </div>
    </animated.div>
    <animated.div style={animation}  className="derivates-made-simple-in-3-eas-parent">
      <b className="derivates-made-simple-container">
        <p className="its-time-to">Derivates made simple</p>
        <p className="its-time-to">
          <span>{`in `}</span>
          <span className="pay-less">3 Easy</span>
          <span className="new-frontiers"> Steps</span>
        </p>
      </b>
      <div className="frame-parent25">
        <div className="group-parent18">
          <img className="frame-child18" alt="" src="/group-626793.svg" />
          <div className="group-parent19">
            <img
              className="frame-child19"
              alt=""
              src="/group-1000003801.svg"
            />
            <div className="frame-parent26">
              <div className="create-an-account-parent">
                <div className="create-an-account">Create an Account</div>
                <div className="register-complete">{`Register & Complete your Verification in less than 2 minutes`}</div>
              </div>
              <div className="trade-now-container">
                <b className="trade-now">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child20" alt="" src="/vector-5.svg" />
        <div className="group-parent20">
          <img className="frame-child18" alt="" src="/group-626794.svg" />
          <div className="group-parent19">
            <img className="frame-child22" alt="" src="/group-626789.svg" />
            <div className="frame-parent26">
              <div className="create-an-account-parent">
                <div className="create-an-account">Deposit Funds</div>
                <div className="register-complete">
                  Add funds quickly using a variety of payment methods
                </div>
              </div>
              <div className="trade-now-container">
                <b className="trade-now">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child20" alt="" src="/vector-6.svg" />
        <div className="group-parent18">
          <img className="frame-child18" alt="" src="/group-6267941.svg" />
          <div className="group-parent19">
            <img
              className="frame-child25"
              alt=""
              src="/group-1000003802.svg"
            />
            <div className="frame-parent26">
              <div className="create-an-account-parent">
                <div className="create-an-account">Become a Trader</div>
                <div className="register-complete">{`Choose Your Trading Pair & Trade Seamlessly`}</div>
              </div>
              <div className="trade-now-container">
                <b className="trade-now">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-container">
      <div className="backed-by-the-best-wrapper">
        <div className="backed-by-the-best-wrapper">
          <b className="trade-more-pay-container">Backed by the Best.</b>
        </div>
      </div>
      <div className="frame-parent30">
        <div className="image-109-parent">
          <img className="image-109-icon" alt="" src="/image-109@2x.png" />
          <img className="image-110-icon" alt="" src="/image-110@2x.png" />
          <img className="image-111-icon" alt="" src="/image-111@2x.png" />
          <img className="image-112-icon" alt="" src="/image-112@2x.png" />
          <img className="image-113-icon" alt="" src="/image-113@2x.png" />
          <img className="image-114-icon" alt="" src="/image-114@2x.png" />
          <img className="image-115-icon" alt="" src="/image-115@2x.png" />
        </div>
        <div className="frame-parent31">
          <div className="utsavsomani-background-removed-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/20200117133556utsavsomani-background-removed-1@2x.png"
            />
            <b className="career">
              <p className="aditya-nagarsheth">Utsav Somani</p>
            </b>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/pica-background-removed-1@2x.png"
            />
            <div className="career">
              <p className="aditya-nagarsheth">
                <b>Aditya Nagarsheth</b>
              </p>
              <p className="perpetual-value-partners">
                Perpetual Value Partners
              </p>
            </div>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/6ihd3hia-400x400-background-removed-1@2x.png"
            />
            <b className="career">
              <p className="aditya-nagarsheth">Gokul Rajaram</p>
            </b>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/1675483650655-background-removed-1@2x.png"
            />
            <div className="career">
              <p className="aditya-nagarsheth">
                <b>Sajid Rehman</b>
              </p>
              <p className="perpetual-value-partners">My Asia VC</p>
            </div>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/image-116@2x.png"
            />
            <div className="career">
              <p className="aditya-nagarsheth">
                <b>Arjun Sethi</b>
              </p>
              <p className="perpetual-value-partners">Tribe Capital</p>
            </div>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/image-117@2x.png"
            />
            <b className="career">Kunal Shah</b>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="utsavsomani-background-removed"
              alt=""
              src="/img-20220825-085142-768-background-removed-1@2x.png"
            />
            <div className="career">
              <p className="aditya-nagarsheth">
                <b>Sandeep Nailawal</b>
              </p>
              <p className="perpetual-value-partners">Polygon Labs</p>
            </div>
          </div>
          <div className="pic-a-background-removed-1-parent">
            <img
              className="image-background-removed-1"
              alt=""
              src="/image-background-removed-1@2x.png"
            />
            <b className="career">Karn Vivek Nagpal</b>
          </div>
        </div>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent32">
      <div className="start-small-earn-big-parent">
        <b className="trade-more-pay-container">
          Don’t take our word for it.
        </b>
        <div className="deposity-a-minimum">
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </div>
      </div>
      <div className="frame-parent33">
        <div className="as-someone-whos-always-lookin-parent">
          <div className="as-someone-whos">
            As someone who's always looking for the next big thing, I was
            really excited to try out Density’s crypto futures trading
            platform. And I have to say, it definitely lived up to my
            expectations.
          </div>
          <b className="prakash-jamatia">
            <p className="its-time-to">Prakash</p>
            <p className="its-time-to">Jamatia.</p>
          </b>
          <div className="founder-tradeshala">Founder, Tradeshala</div>
          <img className="texture-icon5" alt="" src="/texture5@2x.png" />
          <img className="frame-icon7" alt="" src="/frame7.svg" />
          <img
            className="unsplashieebwgy-6la-icon"
            alt=""
            src="/unsplashieebwgy-6la@2x.png"
          />
          <img className="frame-child26" alt="" src="/group-1000003818.svg" />
        </div>
        <div className="as-someone-whos-always-lookin-parent">
          <div className="as-someone-whos">
            I'm not a seasoned trader, but this website has made it easy for
            me to get started with crypto futures trading. Their KYC was very
            fast and the educational resources were really helpful.
          </div>
          <b className="prakash-jamatia">
            <p className="its-time-to">Shambhavi</p>
            <p className="its-time-to">Nayak.</p>
          </b>
          <div className="founder-tradeshala">Commodity Trader</div>
          <img className="texture-icon5" alt="" src="/texture5@2x.png" />
          <img className="frame-icon7" alt="" src="/frame8.svg" />
          <img
            className="unsplasho5nbw8gtnmc-icon"
            alt=""
            src="/unsplasho5nbw8gtnmc@2x.png"
          />
          <img
            className="frame-child26"
            alt=""
            src="/group-10000038181.svg"
          />
        </div>
        <div className="as-someone-whos-always-lookin-parent">
          <div className="as-someone-whos">
            I've been using this platform for a few months now and it's been a
            great experience. I was delighted to see all the major crypto
            coins listed on Density Exchange.
          </div>
          <b className="prakash-jamatia">
            <p className="its-time-to">Arjun</p>
            <p className="its-time-to">Naik.</p>
          </b>
          <div className="founder-tradeshala">Equity Trader</div>
          <img className="texture-icon5" alt="" src="/texture5@2x.png" />
          <img className="frame-icon7" alt="" src="/frame9.svg" />
          <img
            className="frame-child26"
            alt=""
            src="/group-10000038182.svg"
          />
          <img
            className="unsplashzhvm3xiohoe-icon"
            alt=""
            src="/unsplashzhvm3xiohoe@2x.png"
          />
        </div>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent34">
      <div className="group-parent24">
        <img className="frame-child29" alt="" src="/group-1000003819.svg" />
        <div className="earn-money-the-easy-way-parent">
          <b className="trade-more-pay-container">
            <span>{`Earn Money. `}</span>
            <span className="pay-less">The Easy Way.</span>
          </b>
          <div className="no-complexity-of">
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className="frame-parent35">
        <div className="frame-parent36">
          <img className="frame-icon10" alt="" src="/frame10.svg" />
          <b className="share-your-your">Share your your referral link</b>
          <img className="frame-child30" alt="" src="/group-626834.svg" />
          <img className="texture-icon8" alt="" src="/texture6@2x.png" />
        </div>
        <div className="frame-parent36">
          <img className="frame-icon10" alt="" src="/frame11.svg" />
          <b className="invite-friends-to">
            Invite Friends to Trade on Density
          </b>
          <img className="frame-child31" alt="" src="/group-1000003822.svg" />
          <img className="texture-icon8" alt="" src="/texture6@2x.png" />
        </div>
        <div className="frame-parent36">
          <img className="frame-icon10" alt="" src="/frame12.svg" />
          <b className="share-your-your">
            <p className="its-time-to">{`Trade `}</p>
            <p className="its-time-to">and Earn</p>
          </b>
          <img className="frame-child32" alt="" src="/group-181459681.svg" />
          <img className="texture-icon8" alt="" src="/texture6@2x.png" />
        </div>
      </div>
      <div className="explore-markets-wrapper">
        <b className="trade-now">start earning now</b>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent39">
      <div className="frame-wrapper2">
        <div className="earn-money-the-easy-way-parent">
          <b className="trade-more-pay-container">
            <span>{`. `}</span>
            <span className="pay-less"> </span>
          </b>
          <div className="no-complexity-of">
             
          </div>
        </div>
      </div>
      <div className="frame-parent40">
        <div className="parent">
          <b className="career">10,000+</b>
          <div className="daily-volume-traded">Traders</div>
        </div>
        <img className="frame-child4" alt="" src="/vector-12.svg" />
        <div className="parent">
          <b className="career">100Mn</b>
          <div className="daily-volume-traded">Daily Volume Traded</div>
        </div>
        <img className="frame-child4" alt="" src="/vector-12.svg" />
        <div className="parent">
          <b className="career">Daily</b>
          <div className="daily-volume-traded">Trade Analysis</div>
        </div>
        <img className="frame-child4" alt="" src="/vector-12.svg" />
        <div className="parent">
          <b className="career">Live</b>
          <div className="daily-volume-traded">Signals</div>
        </div>
      </div>
      <div className="explore-markets-wrapper">
        <b className="trade-now">Join community</b>
      </div>
    </animated.div>
    <animated.div style={animation}  className="frame-parent41">
      <div className="backed-by-the-best-wrapper">
        <div className="earn-money-the-easy-way-parent">
          <b className="meet-the-visionaries-container">
            <span>{`Meet the `}</span>
            <span className="pay-less">Visionaries</span>
            <span> behind Density.</span>
          </b>
          <div className="no-complexity-of1">
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className="frame-parent42">
        <div className="frame-parent43">
          <img className="frame-icon10" alt="" src="/frame10.svg" />
          <b className="aakash-neeraj-mittal">Aakash Neeraj Mittal</b>
          <div className="ceo-density">CEO, Density</div>
          <img className="texture-icon8" alt="" src="/texture7@2x.png" />
          <img className="image-95-icon" alt="" src="/image-95@2x.png" />
          <img className="uillinkedin-icon" alt="" src="/uillinkedin.svg" />
        </div>
        <div className="frame-parent43">
          <img className="frame-icon10" alt="" src="/frame11.svg" />
          <b className="aakash-neeraj-mittal">
            <p className="its-time-to">{`Bhupendra `}</p>
            <p className="its-time-to">Bule</p>
          </b>
          <div className="ceo-density">CTO, Density</div>
          <img className="texture-icon8" alt="" src="/texture7@2x.png" />
          <img className="image-94-icon" alt="" src="/image-94@2x.png" />
          <img className="uillinkedin-icon" alt="" src="/uillinkedin.svg" />
        </div>
        <div className="frame-parent43">
          <img className="frame-icon10" alt="" src="/frame12.svg" />
          <b className="aakash-neeraj-mittal">
            <p className="its-time-to">Deepak</p>
            <p className="its-time-to">Vasman</p>
          </b>
          <div className="ceo-density">CBO, Density</div>
          <img className="texture-icon8" alt="" src="/texture7@2x.png" />
          <img className="image-96-icon" alt="" src="/image-96@2x.png" />
          <img className="uillinkedin-icon" alt="" src="/uillinkedin1.svg" />
        </div>
      </div>
    </animated.div>
    </>
    );
  };
  
  export default FrameContainer;