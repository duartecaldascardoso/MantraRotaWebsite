const SingleCharacter = {
    view: function(vnode) {
            const { characterName, characterImage, characterDescription } = vnode.attrs;
            return m("div", { class: "choose-your-character" }, [
                m("img", { src: characterImage, alt: characterName, class: "character-image" }),
                m("div", { class: "character-details" }, [
                    m("h2", characterName),
                    m("p", characterDescription)
                ])
            ]);
        }
    }
    export default SingleCharacter 