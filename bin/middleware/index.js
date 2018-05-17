import { resolve, join } from 'path';
import { readFileSync } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router';

import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

import CleanCSS from 'clean-css';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { createGenerateClassName } from 'material-ui/styles';

import App from '../../isomorphic/src/App';
import Theme from '../../isomorphic/src/components/theme';

import reducer from '../../isomorphic/src/api/reducers';
import routes from '../../isomorphic/src/routes';

function renderFullPage(html, css) {
    const indexHtml = readFileSync(resolve(join('isomorphic', 'build', 'index.html')));
    return indexHtml.toString()
                    .replace(
                        '<div id="root"></div>',
                        `<div id="root">${html}</div>
                        <style id="jss-server-side">${css}</style>
                        `
                    );
}

export default (req, res, next) => {
    const branch = matchRoutes(routes, req.url);
    if (branch.length) {
        const sheetsRegistry = new SheetsRegistry();

        const generateClassName = createGenerateClassName();

        const store = createStore(reducer, {});

        const context = {}
        const html = renderToString(
            <StaticRouter location={req.url} context={context}>
                <ReduxProvider store={store}>
                    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                        <Theme sheetsManager={new Map()}>
                            <App />
                        </Theme>
                    </JssProvider>
                </ReduxProvider>
            </StaticRouter>
        );

        const css = (new CleanCSS({})).minify(sheetsRegistry.toString()).styles;
        const page = renderFullPage(html, css);
        res.send(page);
    } else {
        next();
        return;
    }

}