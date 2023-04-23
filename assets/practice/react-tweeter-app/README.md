

## About
The create-react-app hosted on node but without the vulnerabilities and gimmicks.


## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run start` command. The app will be served at <http://localhost:8080/>.

## Dependencies
- npm i md5
- npm i timeago.js

## Layout
- `./server/index.js` is the main app page, sets Express, Port#
- `./server/routes/tweets.js` is the generation of the postman request
- `./server/data-files/initial-tweets.json` is the database
- `./public/index.html` lays out UI/UX design
- `./public/scripts/client.js` lays out the form to post a tweet. also contains loadTweets logic


## issues:
1. Remove external url in `initial-tweets.json`, `user-helper.js`, `index.html`
2. Write data to `initial-tweets.json`
3. Avatar gender + profileImage is auto-generated in `user-helper.js`