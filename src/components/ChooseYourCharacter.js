import Footer from "./Footer.js";
import Character from "./Character.js";

const ChooseYourCharacter = {
    view: function () {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, {href: "/home"}, "Home")),
                    m("li", m(m.route.Link, {href: "/contact"}, "Contact")),
                    m("li", m(m.route.Link, {href: "/news"}, "News")),
                    m("li", m(m.route.Link, {href: "/chooseYourCharacter"}, "Members"))
                ])
            ]),
            m("div.content", [
                m("h1", {class: "header-text"}, "Choose your character"),
                m(Character, {
                    characterName: "Catarina",
                    characterImage: "docs/assets/catarina.png",
                    characterDescription: "Our singer - the voice of the band and the one who keeps us in check.",
                    funFact: "Likes throwing red scarves at concerts.",
                    characterUrl: "https://www.instagram.com/catarina.d.vieira/"
                }),
                m(Character, {
                    characterName: "Lucas",
                    characterImage: "docs/assets/lucas.png",
                    characterDescription: "Guitarist and tall dude. Always has a smile on his face. Will never deny a solo.",
                    funFact: "Has too many picks and badges on his guitar strap. Has cool custom shirts.",
                    characterUrl: "https://www.instagram.com/lucascortezcosta/"
                }),
                m(Character, {
                    characterName: "Manel",
                    characterImage: "docs/assets/manolo.png",
                    characterDescription: "Neighbors hate him - he is our drummer and makes sure to bring the place down.",
                    funFact: "He always looses his shirt on stage.",
                    characterUrl: "https://www.instagram.com/manuel.tomas.mg/"
                }),
                m(Character, {
                    characterName: "Pedro",
                    characterImage: "docs/assets/pedro.png",
                    characterDescription: "Guitarist and lumberjack. Definition of a chill guy points to him.",
                    funFact: "Has 23 guitars, and counting.. (may be addicted)",
                    characterUrl: "https://www.instagram.com/pedro1991999/"
                }),
                m(Character, {
                    characterName: "Caldas",
                    characterImage: "docs/assets/caldas.png",
                    characterDescription: "Our bassist - not really sure what he does, but he's always there.",
                    funFact: "Really cool yellow bass. Beer.",
                    characterUrl: "https://www.instagram.com/dcaldascardoso/"
                }),
            ]),
        ]);
    }
};
export default ChooseYourCharacter