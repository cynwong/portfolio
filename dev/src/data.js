export const BRAND_FA_CLASSES = {
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
export const TAG_NAMES = {
	agile: "Agile Methodology",
	ajax: "AJAX",
    api: "API",
    bootstrap : "Bootstrap CSS Framework",
    bulma : "Bulma CSS Framework",
    css : "CSS",
	css3 : "CSS3",
	express: "Express.js",
    ejs: "EJS (Embedded JavaScript templates)",
    fa: "Font-Awesome CSS",
    html: "HTML",
    html5: "HTML5",
    js: "JavaScript",
    jquery: "jQuery",
	moment: "moment.js",
	mysql: "MySQL",
    node: "node.js",
	openWeather: "Open Weather API",
	passport: "Passport.js",
	scss: "SCSS", 
    ticketMaster: "Ticketmaster API"
};

const {
	agile,
	ajax,
    api,
    bootstrap,
    bulma,
    css,
    css3,
	ejs,
	express,
    fa,
    html,
    html5,
    js,
    jquery,
	moment,
	mysql,
    node,
	openWeather,
	passport,
	scss,
    ticketMaster
} = TAG_NAMES;

export const PORTFOLIO_DATA = [
	{
        name: "Recipe Lover",
        images: {
			alt: "Recipe Lover screen image",
			url: './image/projects/RecipeLover.png'
		},
        githubURL: "https://github.com/cynwong/hhop",
        deployedURL: "https://hhop-recipe-blog.herokuapp.com/",
        summary: "A group project where I was responsible for backend development.",
        description: "Recipe Lover is  is a blogging application used to store recipes.",
        mainTags: [js, node, scss, express, mysql],
        otherTags: [jquery, ajax, passport, agile]
    },
    {
		name: "Searchy",
		images: {
			alt: "Searchy image",
			url: './image/projects/Searchy.png'
		},
        githubURL: "https://github.com/cynwong/project-ACK",
        deployedURL: "https://cynwong.github.io/project-ACK/",
        summary: "A group project where I was responsible for rendition of the API's response data into the application data.",
        description: "Searchy is a single-page web application which allows users to search the desired events and keeps track of them. In this project, as a member of development team, I was responsible for rendition of the data for the application and assisted the teammates in both page design, development, and project management.",
        mainTags: [api, bulma, html5, js],
        otherTags: [html, css, css3, jquery, moment, ticketMaster,agile]
    },
    {
		name: "Day Planner",
		images: {
			alt: "Day Planner image",
			url: './image/projects/Scheduler.png'
		},
        githubURL: "https://github.com/cynwong/day_planner",
        deployedURL: "https://cynwong.github.io/day_planner/",
        summary: "A planner application where users can save their daily tasks.",
        description: "Day Planner is a javascript application where users can store their calendar events for better time management.",
        mainTags: [html5, bootstrap, js],
        otherTags: [html, css, css3, fa, jquery, moment]
    },
    {
        name: "Weather Dashboard",
        images: {
			alt: "Weather Dashboard image",
			url: './image/projects/WeatherDashboard.png'
		},
        githubURL: "https://github.com/cynwong/weather-dashboard-m",
        deployedURL: "https://cynwong.github.io/Weather_Dashboard/",
        summary: "Weather forecast application",
        description: 'Weather Dashboard is an one-page application where the user can search for weather by city name e.g. "Clayton", "Melbourne". \nWeather Dashboard display current weather information and next five days forecasts.',
        mainTags: [html5, bootstrap, js, api],
        otherTags: [html,css,css3,fa, jquery, moment, openWeather]
    },
];