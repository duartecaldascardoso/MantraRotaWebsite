import Footer from "./Footer.js";
import  SingleNews from "../utils/SingleNews.js";

const NewsPage = {
    view: function() {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News")),
                    //m("li", m(m.route.Link, { href: "/chooseYourCharacter" }, "Members"))
                ])
            ]),
            m("div.content", [
                m("h1", "Check our news!"),
                m(SingleNews, {
                    imagePath: "docs/assets/band.jpeg",
                    newsTitle: "Mantra Rota's Website was just released",
                    newsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus velit nec ultrices viverra. Nullam finibus risus elit, vitae accumsan libero placerat vel. Vivamus non tellus sagittis dolor dictum malesuada vel a est. Aliquam congue libero at faucibus euismod. Donec placerat nulla felis, sed consectetur nisi vestibulum eu. Sed mattis ornare mauris a fermentum. Phasellus rhoncus varius vehicula. Praesent tempor lorem risus, vel feugiat dolor dapibus nec. Donec tincidunt nunc vel lectus pretium feugiat. Ut ut venenatis leo. Phasellus orci tellus, pretium vel dapibus at, dapibus eget erat. ",
                    newsDate: "September 6, 2024."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band.jpeg",
                    newsTitle: "Mantra Rota's Website was just released",
                    newsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus velit nec ultrices viverra. Nullam finibus risus elit, vitae accumsan libero placerat vel. Vivamus non tellus sagittis dolor dictum malesuada vel a est. Aliquam congue libero at faucibus euismod. Donec placerat nulla felis, sed consectetur nisi vestibulum eu. Sed mattis ornare mauris a fermentum. Phasellus rhoncus varius vehicula. Praesent tempor lorem risus, vel feugiat dolor dapibus nec. Donec tincidunt nunc vel lectus pretium feugiat. Ut ut venenatis leo. Phasellus orci tellus, pretium vel dapibus at, dapibus eget erat. ",
                    newsDate: "September 6, 2023."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band.jpeg",
                    newsTitle: "Mantra Rota's Website was just released",
                    newsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus velit nec ultrices viverra. Nullam finibus risus elit, vitae accumsan libero placerat vel. Vivamus non tellus sagittis dolor dictum malesuada vel a est. Aliquam congue libero at faucibus euismod. Donec placerat nulla felis, sed consectetur nisi vestibulum eu. Sed mattis ornare mauris a fermentum. Phasellus rhoncus varius vehicula. Praesent tempor lorem risus, vel feugiat dolor dapibus nec. Donec tincidunt nunc vel lectus pretium feugiat. Ut ut venenatis leo. Phasellus orci tellus, pretium vel dapibus at, dapibus eget erat. ",
                    newsDate: "September 6, 2023."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band.jpeg",
                    newsTitle: "Mantra Rota's Website was just released",
                    newsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus velit nec ultrices viverra. Nullam finibus risus elit, vitae accumsan libero placerat vel. Vivamus non tellus sagittis dolor dictum malesuada vel a est. Aliquam congue libero at faucibus euismod. Donec placerat nulla felis, sed consectetur nisi vestibulum eu. Sed mattis ornare mauris a fermentum. Phasellus rhoncus varius vehicula. Praesent tempor lorem risus, vel feugiat dolor dapibus nec. Donec tincidunt nunc vel lectus pretium feugiat. Ut ut venenatis leo. Phasellus orci tellus, pretium vel dapibus at, dapibus eget erat. ",
                    newsDate: "September 6, 2023."
                }),
                m(Footer)
            ]),

        ]);
    }
};

export default NewsPage;
