import ContactPage from './components/ContactPage.js';
import NewsPage from './components/NewsPage.js';
import Homepage from './components/Homepage.js';

const root = document.getElementById('app');

m.route(root, "/", {
    "/": Homepage,
    "/home": Homepage,
    "/contact": ContactPage,
    "/news": NewsPage
});
