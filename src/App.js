import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

import "typeface-roboto";

injectGlobal`
body {
  margin: 0;
}
`;

const HeaderBackgroundWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const HeaderBackground = styled.img`
  margin: -100px 0 0 -100px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBackgroundWrapper>
          <HeaderBackground src="https://images.pexels.com/photos/8724/pexels-photo-8724.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </HeaderBackgroundWrapper>
      </div>
    );
  }
}

export default App;
