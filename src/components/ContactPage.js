const ContactPage = {
    view: function () {
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
                m("h1", { class: "header-text" }, "Hit us up!"),
                m("p", [
                    "Have questions or want to get in touch? ",
                    m("strong", "Reach out to us at "),
                    m("a", { href: "mailto:mantrarotabanda@gmail.com", class: "mail-ref" }, "mantrarota.banda@gmail.com"),
                    m("h2", "Streaming and Socials:"),
                    m("div.social-icons", [
                        m("a", { href: "https://www.instagram.com/mantrarota/", target: "_blank", class: "social-icon" }, 
                            m("i", { class: "fab fa-instagram" })
                        ),
                        m("a", { href: "https://www.youtube.com/@MantraRota", target: "_blank", class: "social-icon" },
                            m("i", { class: "fab fa-youtube" })
                        )
                    ]),
                    m("h2", "Management team: "),
                    m("p", "We still have no management team, get in touch if you want to collaborate with us!"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("p", "Website made by:"), 
                    m("a", {href: "https://www.instagram.com/dcaldascardoso/"}, "Duarte Cardoso"),
                    m("p", "Open source, check the code at:"),
                    m("div.social-icons", [
                        m("a", { href: "https://github.com/duartecaldascardoso/MantraRotaWebsite", target: "_blank", class: "social-icon" },
                            m("i", { class: "fab fa-github" })
                        ),
                    ]),
                ]),
                
            ])
        ]);
    }
};

export default ContactPage;
