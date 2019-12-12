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
    agile: "Agile Methodology",
    api: "API",
    bootstrap : "Bootstrap CSS Framework",
    bulma : "Bulma CSS Framework",
    css : "CSS",
    css3 : "CSS3",
    ejs: "EJS(Embedded JavaScript templating)",
    fa: "Font-Awesome CSS",
    html: "HTML",
    html5: "HTML5",
    js: "JavaScript",
    jquery: "jQuery",
    moment: "moment.js",
    node: "node.js",
    openweather: "Open Weather API",
    ticketmaster: "Ticketmaster API"
};

const {
    agile,
    api,
    bootstrap,
    bulma,
    css,
    css3,
    ejs,
    fa,
    html,
    html5,
    js,
    jquery,
    moment,
    node,
    openweather,
    ticketmaster
} = TAG_NAMES;

const PORTFOLIO_DATA = [
    {
        name: "Searchy",
        images: [
            {
                url: "./assets/images/searchy.png",
                alt: "Searchy screenshot image"
            }
        ],
        githubURL: "https://github.com/cynwong/project-ACK",
        deployedURL: "https://cynwong.github.io/project-ACK/",
        summary: "A group project where I was responsible for rendition of the API's response data into the application data.",
        description: "Searchy is a single-page web application which allows users to search the desired events and keeps track of them. In this project, as a member of development team, I was responsible for rendition of the data for the application and assisted the teammates in both page design, development, and project management.",
        mainTags: [api, bulma, html5, js],
        otherTags: [html, css, css3, jquery, moment, ticketmaster,agile]
    },
    {
        name: "Day Planner",
        images: [
            {
                url: "./assets/images/day_planner.png",
                alt: "Day Planner screenshot image"
            }
        ],
        githubURL: "https://github.com/cynwong/day_planner",
        deployedURL: "https://cynwong.github.io/day_planner/",
        summary: "A planner application where users can save their daily tasks.",
        description: "Day Planner is a javascript application where users can store their calendar events for better time management.",
        mainTags: [html5, bootstrap, js],
        otherTags: [html, css, css3, fa, jquery, moment]
    },
    {
        name: "Weather Dashboard",
        images: [
            {
                url: "./assets/images/weather_dashboard.png",
                alt: "Weather Dashboard screenshot image"
            }
        ],
        githubURL: undefined, // private - so cannot view. 
        deployedURL: "https://cynwong.github.io/Weather_Dashboard/",
        summary: "Weather forecast application",
        description: 'Weather Dashboard is an one-page application where the user can search for weather by city name e.g. "Clayton", "Melbourne". \nWeather Dashboard display current weather information and next five days forecasts.',
        mainTags: [html5, bootstrap, js, api],
        otherTags: [html,css,css3,fa, jquery, moment, openweather]
    },
    {
        name: "Team Profile Generator",
        images: [
            {
                url: "./assets/images/team_summary.gif",
                alt: "Team Profile Generator screenshot image"
            }
        ],
        githubURL: "https://github.com/cynwong/Team-Summary",
        deployedURL: "",
        summary: "A command-line application to generate team summary",
        description: "Team profile generator is a command line application which generates a HTML page with the development team's information summary.",
        mainTags: [js, node],
        otherTags: [ejs]
    }
];