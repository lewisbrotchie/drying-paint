import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

import "typeface-roboto";

const HeaderBackground = styled.img`
  margin: 0;
  height: 55%;
  width: 95%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBackground src="https://images.pexels.com/photos/8724/pexels-photo-8724.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
    );
  }
}

export default App;
