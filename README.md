# React-Semantic.UI-Boilerplate

### Assignment Description

Create a React App with the help of this boilerplate code and render the list of online users on a separate page. The assignment is divided into three tasks. To read more about them, install the app as described below.

### Usage

#### Install:
```bash
git clone https://github.com/iflylabs/react-semantic.ui-boilerplate.git
cd react-semantic.ui-boilerplate
npm install
```

#### Run:

```bash
###############################################################
npm run dev # run app in dev mode
###############################################################
npm run db  # run mock db for app(from another terminal/process -- without this app won't work)
###############################################################
```

After this go to http://localhost:3000 and enter username as `test` and password as `test`. You should be able to review all the three tasks subsequently.

### FAQ

#### Where should I submit the assignment?
Please mail us the assignment at careers@iflylabs.com along with your resume.

#### Where are static assets?
You can store static assets (images, videos) in `/static` folder.

#### Where is manifest.json?
You can find it in `webpack_config/config.js`

#### How lazy-loading implemented:
Check `src/common/routing/index.js`. TL;DR: dynamic `import()`.

#### "You have a components folder and containers folder..and in the container you have another components folder?"

Components inside `containers/**/components` are components that are required by container.

For example, `Dashboard`(container) has `DashboardComponent`(component). You can think about `DashboardComponent` as "Isolated component", it isn't used in app anywhere except own parent-container.

Components in components are components that:
1. Don't have own logic and connection with state (as opposite to containers)
2. Aren't "isolated".(!)

#### Where are tests?
There are tests for actions and for reducers.
Each reducer/action has own folder, where you can find:
1. Reducer/action itself.
2. Tests for it.

### Also:

> Have a question? Ask it. :wink:

### LICENSE

MIT
