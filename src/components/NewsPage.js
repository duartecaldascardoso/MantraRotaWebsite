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
                m("h1", { class: "header-text" }, "Check our news!"),
                m(SingleNews, {
                    imagePath: "docs/assets/band4.jpeg",
                    newsTitle: "1 Year of Mantra Rota!",
                    newsText: "Today we celebrate our first year of existence. We hope to celebrate this day for many years to come. We are working hard to bring you new shows and surprises :)",
                    newsDate: "October 16, 2024."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band2.jpeg",
                    newsTitle: "Mantra Rota's Website was just released",
                    newsText: "We are providing it and you are seeing it right now! Our website aims the purpose of keeping everyone aware of our latest news and achievemnts, make sure to bookmark it so you do not miss any of our content.",
                    newsDate: "September 6, 2024."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band5.jpeg",
                    newsTitle: "Studio day and first recorded track",
                    newsText: "After a long time for preparation, we finally hit if off in the studio and recorded one of our songs. Any clue about which one? We recorded at ESMAE with the help of some of our friends. Stick around so that you hear it as soon as it is revealed. ",
                    newsDate: "June 29, 2024."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band3.jpeg",
                    newsTitle: "We had our first gig in Plano B",
                    newsText: "We had the pleasure to perform in our first gig in Plano B Porto - all because of the contest to perform in the Queima das Fitas festival. You can check bits of our performance in our instagram page - run!",
                    newsDate: "April 18, 2024."
                }),
                m(SingleNews, {
                    imagePath: "docs/assets/band4.jpeg",
                    newsTitle: "Mantra Rota is now a reality",
                    newsText: "This day marks the beggining of something good and a new era in each of our lives. We hope to celebrate this day for many years to come!",
                    newsDate: "October 16, 2023."
                }),
                m(Footer)
            ]),

        ]);
    }
};

export default NewsPage;
