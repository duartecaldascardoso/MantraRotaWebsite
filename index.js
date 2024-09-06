import ContactPage from './src/components/ContactPage.js';
import NewsPage from './src/components/NewsPage.js';
import Homepage from './src/components/Homepage.js';

const root = document.getElementById('app');

m.route(root, "/", {
    "/": Homepage,
    "/home": Homepage,
    "/contact": ContactPage,
    "/news": NewsPage
});
