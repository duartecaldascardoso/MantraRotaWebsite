import Footer from "./Footer.js";

const SingleNews = {
    view: function(vnode) {
        const { imagePath, newsTitle, newsText, newsDate } = vnode.attrs;
        return m("div", { class: "single-news" }, [
            m("img", { src: imagePath, alt: newsTitle }),
            m("h1", newsTitle),
            m("p", newsText),
            m("p", newsDate)
        ]);
    }
};

const NewsPage = {
    view: function() {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News")),
                    m("li", m(m.route.Link, { href: "/chooseYourCharacter" }, "Members"))
                ])
            ]),
            m("div.content", [
                m("h1", "Check our news!")
            ]),
            m(SingleNews, {
                imagePath: "/src/imageComponents/band.jpeg",
                newsTitle: "Mantra Rota's Website was just released!",
                newsText: "After some development time, we finally present our website, which we are sure to represent our band in the best way possible.",
                newsDate: "September 6, 2024."
            }),
            m(Footer)
        ]);
    }
};

export default NewsPage;
