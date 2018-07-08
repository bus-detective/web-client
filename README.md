![Codeship Build Status](https://www.codeship.io/projects/f48023f0-b7ba-0132-eb99-46fe72d3122e/status)
[![Code Climate](https://codeclimate.com/github/bus-detective/web-client/badges/gpa.svg)](https://codeclimate.com/github/bus-detective/web-client)

# Bus Detective - Web Client

Bus Detective allows you to see real-time data for the Cincinnati Metro busses.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [PhantomJS](http://phantomjs.org/)
* [Bus Detective Server](https://github.com/gaslight/bus-detective)
* [Redis](http://redis.io)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `cp .env.example .env`
** Modify the .env to match your environment
*** API_HOST should point to localhost for development
*** REDIS_* Should point to youre local config

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* You'll probably need to be running the server and redis. See the bus-detective app and use `foreman start -f Procfile.dev`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

[ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy) is used to deploy assets to S3 and
manage revisions of built `index.html` files (served through Redis). Make sure environment variables
are set in `.env.deploy.production` for S3 and Redis.

    ember deploy --environment=production (--activate=true)

The deploy command does the following:

  1. Builds and fingerprints assets
  2. Uploads built assets to S3
  3. Pushes a version of `index.html` to the Redis instance running on Heroku
  4. If used with the option `--activate=true`, automatically activate the current revision

To update the current revision of `index.html` served from the rails `IndexController`

    ember deploy:list --environment=production

This will list each revision of `index.html` stored in Redis. To deploy a revision, run:

    ember deploy:activate <revision-key> --environment=production

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
## License
This project rocks and uses (MIT-LICENSE).

## Contributing
GitHub's guide for [Contributing to Open Source](https://guides.github.com/activities/contributing-to-open-source/)
offer's the best advice.

#### tl;dr
1. [Fork it](https://help.github.com/articles/fork-a-repo/)!
1. Create your feature branch: `git checkout -b cool-new-feature`
1. Commit your changes: `git commit -am 'Added a cool feature'`
1. Push to the branch: `git push origin cool-new-feature`
1. [Create new Pull Request](https://help.github.com/articles/creating-a-pull-request/).
