export const BRAND_FA_CLASSES = {
    android: 'fab fa-android',
    angular: 'fab fa-angular',
    bootstrap: 'fab fa-bootstrap',
    css3: 'fabfa-css3',
    'font-awesome': 'fab fa-font-awesome',
    html5: 'fab fa-html5',
    github: 'fab fa-github',
    gitlab: 'fab fa-gitlab',
    javascript: 'fab fa-js',
    markdown: 'fab fa-markdown',
    'node-js': 'fab fa-node-js',
    npm: 'fab fa-npm',
    python: 'fab fa-python',
    'stack-overflow': 'fab fa-stack-overflow',
};

/** Tag Names */
export const TAG_NAMES = {
	agile: {
		label: 'Agile Methodology',
		category: 'methodology'
	},
	ajax: {
		label:  'AJAX',
		category: 'technique'
	},
    api: {
		label: 'API',
		category: 'api'
	},
    bootstrap : {
		label: 'Bootstrap CSS Framework',
		category: 'stylesheet'
	},
    bulma : {
		label: 'Bulma CSS Framework',
		category: 'stylesheet'
	},
    css : {
		label: 'CSS',
		category: 'stylesheet'
	},
	css3 : {
		label: 'CSS3',
		category: 'stylesheet'
	},
	express: {
		label: 'Express.js',
		category: 'js'
	},
    ejs: {
		label: 'EJS (Embedded JavaScript templates)',
		category: 'template-engine'
	},
    fa: {
		label: 'Font-Awesome CSS',
		category: 'stylesheet'
	},
	handlebars: {
		label: 'Handlebars Template Engine',
		category: 'template-engine'
	},
    html: {
		label: 'HTML',
		category: 'language'
	},
    html5: {
		label: 'HTML5',
		category: 'language'
	},
    js: {
		label: 'Vanilla Javascript',
		category: 'js'
	},
    jquery: {
		label: 'jQuery',
		category: 'js'
	},
	moment: {
		label: 'Moment.js',
		category: 'js'
	},
	mysql: {
		label: 'MySQL',
		category: 'database'
	},
	mysql: {
		label: 'Sequelize.js',
		category: 'js'
	},
    node: {
		label: 'Node.js',
		category: 'js'
	},
	openWeather: {
		label: 'Open Weather API',
		category: 'api'
	},
	passport: {
		label: 'Passport.js',
		category: 'js'
	},
	scss: {
		label: 'SCSS',
		category: 'stylesheet'
	}, 
    ticketMaster: {
		label: 'Ticketmaster API',
		category: 'api'
	}
};

const {
	agile,
	ajax,
    api,
    bootstrap,
    bulma,
    css,
    css3,
	express,
	fa,
	handlebars,
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

export const PORTFOLIO_DATA = {
	'recipelover': {
		name: 'Recipe Lover',
		imageUrl: './image/projects/RecipeLover.png',
		imageCaption: 'Recipe Lover screen image',
        githubURL: 'https://github.com/cynwong/hhop',
        deployedURL: 'https://hhop-recipe-blog.herokuapp.com/',
        summary: 'A group project where I was responsible for backend development.',
        description: 'Recipe Lover is  is a blogging application used to store recipes.',
        mainTags: [node, scss, express, mysql],
        otherTags: [jquery, ajax, passport, agile, handlebars]
    },
    'searchy': {
		name: 'Searchy',
		imageUrl: './image/projects/Searchy.png',
		imageCaption: 'Searchy image',
        githubURL: 'https://github.com/cynwong/project-ACK',
        deployedURL: 'https://cynwong.github.io/project-ACK/',
        summary: 'A group project where I was responsible for rendition of the API\'s response data into the application data.',
        description: 'Searchy is a single-page web application which allows users to search the desired events and keeps track of them. In this project, as a member of development team, I was responsible for rendition of the data for the application and assisted the teammates in both page design, development, and project management.',
        mainTags: [api, bulma, html5, js],
        otherTags: [html, css, css3, jquery, moment, ticketMaster,agile]
    },
    'dayplanner': {
		name: 'Day Planner',
		imageUrl: './image/projects/Scheduler.png',
		imageCaption: 'Day Planner image',
        githubURL: 'https://github.com/cynwong/day_planner',
        deployedURL: 'https://cynwong.github.io/day_planner/',
        summary: 'A planner application where users can save their daily tasks.',
        description: 'Day Planner is a javascript application where users can store their calendar events for better time management.',
        mainTags: [html5, bootstrap, js],
        otherTags: [html, css, css3, fa, jquery, moment]
    },
    'weatherdashboard': {
		name: 'Weather Dashboard',
		imageUrl: './image/projects/WeatherDashboard.png',
		imageCaption: 'Weather Dashboard image',
        githubURL: 'https://github.com/cynwong/weather-dashboard-m',
        deployedURL: 'https://cynwong.github.io/Weather_Dashboard/',
        summary: 'Weather forecast application',
        description: 'Weather Dashboard is an one-page application where the user can search for weather by city name e.g. \'Clayton\', \'Melbourne\'. \nWeather Dashboard display current weather information and next five days forecasts.',
        mainTags: [html5, bootstrap, js, api],
        otherTags: [html,css,css3,fa, jquery, moment, openWeather]
    },
};