import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

import "typeface-roboto";

injectGlobal`
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
`;

const ParallaxBackground = styled.div`
  background-image: url("https://images.pexels.com/photos/8724/pexels-photo-8724.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-color: white;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300vh;
  padding-top: 100vh;
`;

const ParallaxCurtain = styled.div`
  height: 100vh;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
`;

const HeaderTagline = styled.h2`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  line-height: 200%;
`;

const HeaderTaglineWrapper = styled.span`
  color: white;
  font: 24px/45px Roboto;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

const Spacer = styled.span`
  padding: 0 5px;
`;
class App extends Component {
  render() {
    return (
      <div>
        <ParallaxBackground>
          <ParallaxCurtain>
            <HeaderTagline>
              <HeaderTaglineWrapper>
                "The Most Exhilarating Experience <Spacer />
                <br />
                <Spacer />of my Life."
              </HeaderTaglineWrapper>
            </HeaderTagline>
          </ParallaxCurtain>
        </ParallaxBackground>
      </div>
    );
  }
}

export default App;
