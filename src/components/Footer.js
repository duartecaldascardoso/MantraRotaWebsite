const Footer = {
    view: function () {
        return m("footer", [
            m("p", "Copyright © 2024 Mantra Rota"),
            m("div.social-icons", [
                m("a", { href: "https://www.instagram.com/mantrarota/", target: "_blank", class: "social-icon" }, 
                    m("i", { class: "fab fa-instagram" })
                ),
                m("a", { href: "https://www.youtube.com/@MantraRota", target: "_blank", class: "social-icon" },
                    m("i", { class: "fab fa-youtube" })
                )
            ])
        ]);
    }
};

export default Footer;
