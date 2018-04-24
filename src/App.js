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
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderTagline = styled.h2`
  /* position: absolute; 
  top: 200px;
  */
  left: 0;
  width: 100%;
`;

const HeaderTaglineWrapper = styled.span`
  color: white;
  font: bold 24px/45px Roboto, Sans-Serif;
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
        <ParallaxBackground />
        <div style={{ height: "500px", backgroundColor: "spacegrey" }}>
          <HeaderTagline>
            <HeaderTaglineWrapper>
              "The most exhilarating experience <Spacer />
              <br />
              <Spacer />of my life."
            </HeaderTaglineWrapper>
          </HeaderTagline>
        </div>
        <ParallaxBackground />
      </div>
    );
  }
}

export default App;
