const SingleNews = {
    view: function(vnode) {
        const { imagePath, newsTitle, newsText, newsDate } = vnode.attrs;
        return m("div", { class: "single-news" }, [
            m("img", { src: imagePath, alt: newsTitle, class: "news-image" }),
            m("p", newsTitle),
            m("p", newsText),
            m("p", newsDate)
        ]);
    }
};
export default SingleNews;