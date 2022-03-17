const articles = [
    {
        id: 1,
        title: 'whats is lorem ipsum?',
        body : 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        approverd: true,
    },
    {
        id: 2,
        title: 'whats do we use it?',
        body : 'it is a long etablished fact.',
        approverd: true,
    },
    {
        id: 3,
        title: 'Goodbye world!',
        body : 'cuma lorem ipsum aja kok',
        approverd: false,
    },
];

module.exports = {
    findAll:() => Promise.resolve(articles),
    create: ({title, body}) => {
        const id = articles[articles.length - 1].id + 1;
        const article = {id, title, body};
        articles.push(article);
        return Promise.resolve(article);
}
};