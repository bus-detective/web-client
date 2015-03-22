# Bus Detective - Web Client

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

[ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy) is used to deploy assets to S3 and
manage revisions of built `index.html` files (served through Redis). Make sure environment variables
are set in `.env` for S3 and Redis.

    ember deploy --environment production

The deploy command does the following:

  1. Builds and fingerprints assets
  2. Uploads built assets to S3
  3. Pushes a version of `index.html` to the Redis instance running on Heroku

To update the current revision of `index.html` served from the rails `IndexController`

    ember deploy:list --environment production

This will list each revision of `index.html` stored in Redis. To deploy a revision, run:

    ember deploy:activate --revision bus-detective:<REVISION KEY> --environment production

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

