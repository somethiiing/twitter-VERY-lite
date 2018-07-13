run server with `node server.js`. located at localhost:8080 .

run dev front end with `yarn start`. can make changes to front end here.

run "production" by running `npm run build`, after building, run `node server.js`, located at localhost:8080



two different pages: home which is located at `'/'`. and "individual pages" at `'/:user'`.
- if going to a user page that isn't created, automatically creates one.
- home page lists all tweets in most recent tweet order.
- individual page allows for tweeting from their 'account'.

things I would do in a production:
- use sass so css classes don't overlap
- refactor out individual components for resusability, such as buttons, other things etc.
  - kind of like how `tweet.js` is refactored out.
- refactor out some helper functions
- use higher order components
- make header functionality actually work...

