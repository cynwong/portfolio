const BRAND_FA_CLASSES = {
    android: "fab fa-android",
    angular: "fab fa-angular",
    bootstrap: "fab fa-bootstrap",
    css3: "fabfa-css3",
    "font-awesome": "fab fa-font-awesome",
    html5: "fab fa-html5",
    github: "fab fa-github",
    gitlab: "fab fa-gitlab",
    javascript: "fab fa-js",
    markdown: "fab fa-markdown",
    "node-js": "fab fa-node-js",
    npm: "fab fa-npm",
    python: "fab fa-python",
    "stack-overflow": "fab fa-stack-overflow",


};

/** Tag Names */
const TAG_NAMES = {
    api: "API",
    bootstrap : "Bootstrap CSS Framework",
    bulma : "Bulma CSS Framework",
    css : "CSS",
    css3 : "CSS3",
    fa: "Font-Awesome CSS",
    html: "HTML",
    html5: "HTML5",
    js: "JavaScript",
    jquery: "jQuery",
    moment: "moment.js",
    openweather: "Open Weather API",
    ticketmaster: "Ticketmaster API"
};

const {
    api,
    bootstrap,
    bulma,
    css,
    css3,
    fa,
    html,
    html5,
    js,
    jquery,
    moment,
    openweather,
    ticketmaster
} = TAG_NAMES;

const PORTFOLIO_DATA = [
    {
        name: "Searchy",
        imgAlt: "Searchy screenshot image",
        imgURL: "./assets/images/searchy.png",
        githubURL: "",
        deployedURL: "https://cynwong.github.io/day_planner/",
        description: "A group project where I was responsible for rendition of the API's repsonse data into the application data.",
        mainTags: [api, bulma, html5, js],
        otherTags: [html, css, css3, jquery, moment, ticketmaster]
    },
    {
        name: "Day Planner",
        imgAlt: "Day Planner screenshot image",
        imgURL: "./assets/images/day_planner.png",
        githubURL: "",
        deployedURL: "https://cynwong.github.io/day_planner/",
        description: "A mini project where users can save their daily tasks.",
        mainTags: [html5, bootstrap, js],
        tags: [html, css, css3, fa, js, jquery, moment]
    },
    {
        name: "Weather Dashboard",
        imgAlt: "Weather Dashboard screenshot image",
        imgURL: "./assets/images/weather_dashboard.png",
        githubURL: "",
        deployedURL: "https://cynwong.github.io/Weather_Dashboard/",
        description: "A mini project - weather forecast application",
        mainTags: [html5, bootstrap, js, api],
        tags: [html,css,css3,fa, jquery, moment, openweather]
    },
];