//model/article.js
const articles  = [
    {
        id: 1,
        title:  "What is Lorem Ipsum?",
        body: `Lorem Ipsum is simply dummy text`,
        approved: true
    },
    {
        id: 2,
        title:  "What is Lorem Ipsum?",
        body: `Lorem Ipsum is simply dummy text`,
        approved: true
    },
    {
        id: 3,
        title:  "What is Lorem Ipsum?",
        body: `Lorem Ipsum is simply dummy text`,
        approved: false
    }
];
module.exports = {
    findAll: () => Promise.resolve(articles),
    create: ({ title, body }) => {
        const id = articles[articles.length -1].id + 1;
        const article = { id, title, body };
        articles.push(article);
        return Promise.resolve(article);
    }
};