const SingleNews = {
    view: function(vnode) {
        const { imagePath, newsTitle, newsText, newsDate } = vnode.attrs;
        return m("div", { class: "single-news" }, [
            m("img", { src: imagePath, alt: newsTitle, class: "news-image" }),
            m("div", { class: "news-details" }, [
                m("p", `${newsTitle} - ${newsDate}`,), 
                m("p", newsText)
            ])
        ]);
    }
};

export default SingleNews;
