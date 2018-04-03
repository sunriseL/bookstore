import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from 'router/router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

renderWithHotReload(getRouter());
if (module.hot) {
  module.hot.accept('./router/router', () => {
      const getRouter = require('./router/router').default;
      renderWithHotReload(getRouter());
  });
}

document.body.setAttribute('style', 'margin:0px;');

function renderWithHotReload(RootElement) {
    ReactDom.render(
      <div style={{margin:'0px'}}>
      <MuiThemeProvider  muiTheme={getMuiTheme()}>
        <AppContainer>
            {RootElement}
        </AppContainer>
      </MuiThemeProvider>
      </div>,
        document.getElementById('app')
    )
}
