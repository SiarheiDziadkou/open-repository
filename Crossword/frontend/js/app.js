import Utils from './helpers/utils.js';

import Header from './views/shared/header.js';
import Footer from './views/shared/footer.js';

import Crossword from './views/pages/crossword/index.js';
import Home from './views/pages/home/index.js';
import About from './views/pages/about/index.js';
import Error404 from './views/pages/errors/error404.js';

const Routes = {
    '/': Home,
    '/about': About,
    '/crossword': Crossword
};

function router() {
    const headerContainer = document.getElementById('header'),
        contentContainer = document.getElementById('main'),
        footerContainer = document.getElementById('footer'),
        header = new Header(),
        footer = new Footer();

    header.render().then(html => {
        headerContainer.innerHTML = html;
    });

    const request = Utils.parseRequestURL(),
        parsedURL = `/${request.resource || ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();
    });

    footer.render().then(html => {
        footerContainer.innerHTML = html;
    });
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);