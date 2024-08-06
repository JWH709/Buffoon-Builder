/* eslint-disable react/prop-types */
import { IMAGES } from "./config/assetImports";

const IntroPage = ({ setHelpPageVisible, isMobile }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "balatro",
        color: "aliceblue",
        width: "90%",
        height: "90%",
        backgroundImage: `url(${IMAGES.builderBackground})`,
        imageRendering: "pixelated",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          fontFamily: "balatro",
          color: "aliceblue",
          width: "100%",
          height: isMobile ? "98.5%" : "100%",
          overflow: isMobile ? "scroll" : "hidden",
        }}
      >
        <div
          style={{
            margin: "3%",
            width: "97%",
          }}
        >
          <div
            style={{
              margin: "1%",
              width: "97%",
            }}
          >
            <h1>Welcome to Buffon Builder!</h1>
            <h3>What do I need to install to use mods?</h3>
            <p>
              Buffon Builder uses Balamod, a Balatro modding tool for
              developers, to inject custom content into Balatro. In order to
              make use of any of the mods made using Buffon Builder, you need to
              visit{" "}
              <a
                href="https://github.com/UwUDev/balamod"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              site and download Balamod. That may sound a little overwhelming if
              you&apos;re new to this kind of stuff, but don&apos;t worry! An
              in-depth guide on how to download and set up Balamod can be found{" "}
              <a
                href="https://balamod.github.io/installation.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              ! If you run into any trouble, make sure that your version of
              Balatro and the version of Balamod you&apos;re trying to install
              are compatible.
            </p>
            <h3>How do I use Buffon Builder?</h3>
            <p>
              Buffon Builder has been designed to be as user-friendly as
              possible. Inside, you&apos;ll find two distinct sections, a
              section for editing all of the details of your joker, and a
              section for adding all of the logic that will be used by it.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: "97%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: isMobile ? "98%" : "48%",
                margin: "1%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4>The Details Section:</h4>
                <p>
                  Let&apos;s start by explaining the details section. The
                  details section pertains to all information that will be
                  displayed on your joker in the game, such as its name,
                  description, cost, rarity, and what it actually looks like.
                  This is the more straightforward of the two sections. A useful
                  thing to remember here is that any info you put in here will
                  not affect the actual code of your joker, i.e., if you give it
                  a description of &quot;This joker gives 100x mult on any
                  played 2 of spades,&quot; unless you set that logic in the
                  logic section of Buffon Builder, it won&apos;t give you that
                  effect, it will only display that on the card when you inspect
                  it in the game. If you want to check how your card will look
                  in the game, you can hover over the image you&apos;ve uploaded
                  to see what it will look like! The second section is the logic
                  section.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginBottom: isMobile ? "4%" : "0%",
                  marginLeft: isMobile ? "0%" : "4%",
                }}
              >
                <img
                  src={IMAGES.jokerInfoExample}
                  alt=""
                  style={{ maxWidth: "301px", height: "333px" }}
                />
                <h6>(Details for a Joker named Even Keegan)</h6>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: isMobile ? "98%" : "48%",
                margin: "1%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4>The Logic Section:</h4>
                <p>
                  Here is where all the under-the-hood technical stuff happens
                  (if that interests you, check out the docs{" "}
                  <a
                    href="https://github.com/JWH709/Buffoon-Builder/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here!
                  </a>
                  ) and where you&apos;ll be building the in-game effect for
                  your joker. To assemble a joker here, simply drag blocks from
                  the corresponding tab into one of the lists in the logic
                  section. As of right now, Buffon Builder uses three tabs to
                  create a joker. These are context, conditions, and results.
                  Context lets you choose where/when your desired effect is
                  triggered, conditions reflect the conditions that need to be
                  met within the correct context in order for the effect to
                  trigger, and results will determine what happens when those
                  conditions are met within the correct context. If you need
                  more help in understanding these, you can always check the
                  info buttons on each tab in the logic section, or check the
                  documentation{" "}
                  <a
                    href="https://github.com/JWH709/Buffoon-Builder/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here!
                  </a>
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginBottom: isMobile ? "4%" : "0%",
                  marginLeft: isMobile ? "0%" : "4%",
                }}
              >
                <img
                  src={IMAGES.buildingSpaceExample}
                  alt=""
                  style={{ width: "302px", height: "335px" }}
                />
                <h6>
                  (Blocked needed to make a joker that gives +100 chips on an
                  even card being played)
                </h6>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="mobile-switch-button"
              style={{
                width: "20%",
                height: "10%",
              }}
              onClick={() => {
                setHelpPageVisible(false);
              }}
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
