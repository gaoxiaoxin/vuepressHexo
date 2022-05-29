module.exports = {
    title: 'gaoxiaoxin`blog',
    description: '高小兴的个人博客',
    theme: 'reco',
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 2,
        nav: [{
                text: "Home",
                link: "/"
            },
            {
                text: "about",
                link: "/about/"
            },
            {
                text: "前端",
                items: [{
                    text: "JavaScript",
                    link: "/frontEnd/JavaScript/"
                }, {
                    text: "Webpack",
                    link: "/frontEnd/Webpack/"
                }]
            },
            {
                text: "后端",
                items: [{
                    text: "Node.js",
                    link: "/BackEnd/Node.js/"
                }, {
                    text: "Express",
                    link: "/BackEnd/Express/"
                }]
            },
            {
                text: "杂记",
                items: [{
                    text: "服务器",
                    link: "/sundry/server/"
                }, {
                    text: "个人随想",
                    link: "/sundry/"
                }]
            }
        ]
    },
}