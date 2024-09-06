import Footer from "./Footer.js";
import ImageReplacer from "./utils/ImageReplacer.js";

const Homepage = {
    oncreate: function() {
        ImageReplacer.start();
    },
    view: function () {
        ImageReplacer.start();
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News"))
                ])
            ]),
            m("div.content", [
                m("h1", "Mantra Rota"),
                m("p", [
                    m("strong", "Straight outta Madalena. "),
                    " Portuguese made - find out what we have been working on."
                ]),
                m("img", { id :"mainImage", class: "main-page-image" , src: "/src/components/imageComponents/band.jpeg", alt: "Main Page Image." })
        
            ]),
            m(Footer)
        ]);
    }
};

export default Homepage;
