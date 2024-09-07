import Footer from "./Footer.js";
import ImageReplacer from "../utils/ImageReplacer.js";

const Homepage = {
    view: function () {
        ImageReplacer.start();
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
                m("h1", "Mantra Rota"),
                m("p", { class: "main-page-text" }, [
                    m("strong", "Straight outta Madalena. "),
                    " We are ready to perform anytime anywhere. Group of young musicians with a passion for their craft - started in October 2023."
                ]),
                m("img", { id :"mainImage", class: "main-page-image" , src: "/src/imageComponents/band.jpeg", alt: "Main Page Image." })
        
            ]),
            m(Footer)
        ]);
    }
};

export default Homepage;
