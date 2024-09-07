import Footer from "./Footer.js";

const ContactPage = {
    view: function () {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News"))
                ])
            ]),
            m("div.content", [
                m("h1", "Hit us up!"),
                m("p", [
                    "Have questions or want to get in touch? ",
                    m("strong", "Reach out to us at "),
                    m("a", { href: "mailto:mantrarotabanda@gmail.com", class: "mail-ref" }, "mantrarota.banda@gmail.com")
                ]),
                
            ]),
            m(Footer)
        ]);
    }
};

export default ContactPage;
