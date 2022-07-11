module.exports = {
    title: 'gaoxiaoxin`blog',
    description: '高小兴的个人博客',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        category: {
            location: 2,
            text: 'Category'
        },
        // 配置git仓库
        repo: 'https://github.com/gaoxiaoxin/vuepressHexo',
        // 对应链接的名称
        repoLabel: 'Github',
        // 设置是否能进行搜索
        search: true,
        // 设置最多能搜索多少的结果
        searchMaxSuggestions: 10,
        // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
        lastUpdated: '最后更新时间',
        // 2.设置true，开启最后更新时间
        lastUpdated: true,
        // 3.设置false，不开启最后更新时间(默认)
        lastUpdated: false,
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: 'Tag' // 默认文案 “标签”
        },
        // 自动生成侧边栏
        sidebar: 'auto',
        sidebarDepth: 2,
        noFoundPageByTencent: false,
        logo: '/logo.png',
        nav: [{
                text: "首页",
                link: "/"
            },
            {
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            }, {
                text: "关于我",
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
                    link: "/sundry/capriccio"
                }]
            }
        ]
    },
}