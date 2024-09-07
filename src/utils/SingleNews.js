const SingleNews = {
    view: function(vnode) {
        const { imagePath, newsTitle, newsText, newsDate } = vnode.attrs;
        return m("div", { class: "single-news" }, [
            m("img", { src: imagePath, alt: newsTitle }),
            m("div", { class: "news-details" }, [
                m("strong", newsTitle),
                m("span", { class: "news-date" }, newsDate), 
                m("p", newsText) 
            ])
        ]);
    }
};

export default SingleNews;
