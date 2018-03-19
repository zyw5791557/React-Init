import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component) => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};
render(App);

if (module.hot) {
    module.hot.accept('./App', () => { render(App); });
}
