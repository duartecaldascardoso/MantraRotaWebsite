import Footer from "./Footer.js";
import Translation from "./utils/Translation.js"; 

const ContactPage = {
    oninit: async function() {
        await Translation.setLanguage('portuguese'); 
    },
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
                m("h1", Translation.translate("hit_us_up")),
                m("p", [
                    Translation.translate("contact_intro"),
                    m("strong", Translation.translate("reach_out")),
                    m("a", { href: "mailto:mantrarotabanda@gmail.com", class: "mail-ref" }, "mantrarota.banda@gmail.com")
                ]),
                
            ]),
            m(Footer)
        ]);
    }
};

export default ContactPage;
