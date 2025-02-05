const Character = {
    view: function(vnode) {
        const { characterName, characterImage, characterDescription, funFact, characterUrl } = vnode.attrs;
        return m("div", { class: "choose-your-character" }, [
            m("img", { src: characterImage, alt: characterName, class: "character-image" }),
            m("div", { class: "character-details" }, [
                m("a", { href: characterUrl, class: "character-name", target: "_blank" }, characterName),
                m("p", { class: "character-description" }, characterDescription),
                m("p", { class: "fun-fact" }, `Fun fact: ${funFact}`)
            ])
        ]);
    }
}
export default Character