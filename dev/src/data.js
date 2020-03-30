export const BRAND_FA_CLASSES = {
    faAndroid: 'fab fa-android',
    faAngular: 'fab fa-angular',
    faBootstrap: 'fab fa-bootstrap',
    faCss3: 'fabfa-css3',
    faFontAwesome: 'fab fa-font-awesome',
    faHtml5: 'fab fa-html5',
    faGithub: 'fab fa-github',
    faGitlab: 'fab fa-gitlab',
    faJavascript: 'fab fa-js',
    faMarkdown: 'fab fa-markdown',
    faNodejs: 'fab fa-node-js',
    faNpm: 'fab fa-npm',
    faPython: 'fab fa-python',
    faStackOverflow: 'fab fa-stack-overflow',
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
	axios: {
		label:  'AJAX',
		category: 'js'
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
	cookie: {
		label: 'Cookie',
		category: 'database'
	},
	express: {
		label: 'Express.js',
		category: 'js'
	},
	eslint: {
		label: 'EsLint',
		category: 'testing'
	},
    ejs: {
		label: 'EJS (Embedded JavaScript templates)',
		category: 'template-engine'
	},
    fa: {
		label: 'Font-Awesome CSS',
		category: 'stylesheet'
	},
	fullCalendar: {
		label: 'FullCalendar.js',
		category: 'front-end'
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
	indexedDB: {
		label: 'IndexedDB API',
		category: 'database'
	}, 
    js: {
		label: 'Vanilla Javascript',
		category: 'js'
	},
    jquery: {
		label: 'jQuery',
		category: 'front-end'
	},
	moment: {
		label: 'Moment.js',
		category: 'js'
	},
	mysql: {
		label: 'MySQL',
		category: 'database'
	},
	mongoDB: {
		label: 'MongoDB',
		category: 'database'
	},
	mongoose: {
		label: 'Mongoose.js',
		category: 'database'
	},
	noSql: {
		label: 'NoSQL',
		category: 'database'
	},
	sequelize: {
		label: 'Sequelize.js',
		category: 'database'
	},
	materialUi: {
		label: 'Material UI',
		category: 'stylesheet'
	},
    node: {
		label: 'Node.js',
		category: 'js'
	},
	openWeather: {
		label: 'Open Weather API',
		category: 'api'
	},
	orm: {
		label: 'Object-Relational Mapping(ORM)',
		category: 'database'
	},
	quickEmailVerification: {
		label: 'QuickEmailVerification',
		category: 'api'
	},
	passport: {
		label: 'Passport.js',
		category: 'js'
	},
	react: {
		label: 'React.js',
		category: 'front-end'
	},
	scss: {
		label: 'SCSS',
		category: 'stylesheet'
	}, 
    ticketMaster: {
		label: 'Ticketmaster API',
		category: 'api'
	},
	typescript: {
		label: 'Typescript.js',
		category: 'js'
	}
};

const {
	agile,
	ajax,
	api,
	axios,
    bootstrap,
    bulma,
    css,
	css3,
	cookie,
	ejs,
	eslint,
	express,
	fa,
	fullCalendar,
	handlebars,
    html,
	html5,
	indexedDB,
    js,
	jquery,
	materialUi,
	moment,
	mysql,
	mongoose,
	mongoDB,
    node,
	noSql,
	openWeather,
	orm,
	passport,
	quickEmailVerification,
	react,
	scss,
	sequelize,
	ticketMaster,
	typescript
} = TAG_NAMES;

export const PORTFOLIO_DATA = {
	'calen': {
		name: 'Calen',
		imageUrl: './Calen.png',
		imageCaption: 'Calen screen image',
        githubUrl: 'https://github.com/cynwong/Calen',
        deployedUrl: 'https://calen-cw.herokuapp.com/',
        summary: 'Multi-purpose online organizer',
        description: 'Calen is a multi-purpose online organizer application. In this project, I was using multiple new technologies learning and developing as I went. Calen was a solo project and development duration was given as two week.',
        mainTags: [react, node, fullCalendar, typescript, materialUi, mongoose],
        otherTags: [mongoDB, express, axios, ajax, passport, agile, quickEmailVerification, moment, eslint, cookie, indexedDB]
    },
	'recipelover': {
		name: 'Recipe Lover',
		imageUrl: './RecipeLover.png',
		imageCaption: 'Recipe Lover screen image',
        githubUrl: 'https://github.com/cynwong/hhop',
        deployedUrl: 'https://hhop-recipe-blog.herokuapp.com/',
        summary: 'A group project where I was responsible for backend development.',
        description: 'Recipe Lover is  is a blogging application used to store recipes.',
        mainTags: [node, scss, express, mysql],
        otherTags: [sequelize, jquery, ajax, passport, agile, handlebars]
    },
    'searchy': {
		name: 'Searchy',
		imageUrl: './Searchy.png',
		imageCaption: 'Searchy image',
        githubUrl: 'https://github.com/cynwong/project-ACK',
        deployedUrl: 'https://cynwong.github.io/project-ACK/',
        summary: 'A group project where I was responsible for rendition of the API\'s response data into the application data.',
        description: 'Searchy is a single-page web application which allows users to search the desired events and keeps track of them. In this project, as a member of development team, I was responsible for rendition of the data for the application and assisted the teammates in both page design, development, and project management.',
        mainTags: [api, bulma, html5, js],
        otherTags: [html, css, css3, jquery, moment, ticketMaster,agile]
	},
	'workouttracker': {
		name: 'Workout Tracker',
		imageUrl: './Fitness Tracker.png',
		imageCaption: 'Workout Tracker image',
        githubUrl: 'https://github.com/cynwong/Workout-Tracker',
        deployedUrl: 'https://workout-tracker-cw.herokuapp.com/',
        summary: 'Logger for workout',
        description: 'Workout tracker is an application where user can log their workout schedule. I was responsible for the backend/server-side development for this application.',
        mainTags: [typescript, node, mongoose],
        otherTags: [express, mongoDB, noSql, ejs]
	},
	'employeetracker': {
		name: 'Employee Tracker',
		imageUrl: './Employee Tracker.png',
		imageCaption: 'Employee Tracker image',
        githubUrl: 'https://github.com/cynwong/EmployeeTracker',
        deployedUrl: 'https://employee-tracker-cw.herokuapp.com/',
        summary: 'A Human Resource Management Application',
        description: 'Employee Tracker is an application used for Human Resource Management to keep track of employee\'s information.',
        mainTags: [node, express, mysql],
        otherTags: [html,css,bootstrap, orm, js]
    },
    'dayplanner': {
		name: 'Day Planner',
		imageUrl: './Scheduler.png',
		imageCaption: 'Day Planner image',
        githubUrl: 'https://github.com/cynwong/day_planner',
        deployedUrl: 'https://cynwong.github.io/day_planner/',
        summary: 'A planner application where users can save their daily tasks.',
        description: 'Day Planner is a javascript application where users can store their calendar events for better time management.',
        mainTags: [html5, bootstrap, js],
        otherTags: [html, css, css3, fa, jquery, moment]
    },
    'weatherdashboard': {
		name: 'Weather Dashboard',
		imageUrl: './WeatherDashboard.png',
		imageCaption: 'Weather Dashboard image',
        githubUrl: 'https://github.com/cynwong/weather-dashboard-m',
        deployedUrl: 'https://cynwong.github.io/Weather_Dashboard/',
        summary: 'Weather forecast application',
        description: 'Weather Dashboard is an one-page application where the user can search for weather by city name e.g. \'Clayton\', \'Melbourne\'. \nWeather Dashboard display current weather information and next five days forecasts.',
        mainTags: [html5, bootstrap, js, api],
        otherTags: [html,css,css3,fa, jquery, moment, openWeather]
    },
};