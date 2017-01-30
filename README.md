# Isha Contacts

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Clone of ReactGo project.

#### Data Flow

A simplistic representation of data flow from server to client is:

```
Express app.use() receives a request
-> Calls a pre-built webpack file for the server
-> Runs matching of routes in react-router for server
-> Makes async data fetching request
-> Renders Route component to string
-> Construct HTML file (with Meta, Link tags using helmet)
-> Browser receives html file with initial state
-> Client side React.JS kicks in and initializes with given state
-> Continues where it left off
-> Everyone is happy :)
```

More TBD

#### Redux DevTools

You will have to install redux devtools extension from [here](https://github.com/zalmoxisus/redux-devtools-extension) and then everything should just work!

## Instructions

#### Database

We currently support MongoDB and Postgres, as well as the ability to not use any database. [Learn](docs/databases.md) about how to configure your app.

#### Development

Development is a breeze. Once you have installed all your dependencies all the configuration is done for you. using simple The process is outlined [here](docs/development.md).

#### Unit Tests

Testing with:
- `karma` as test runner
	- `karma.conf.js` for the main karma configuration (it has webpack configurations)
	- `tests.webpack.js` which is the single entry file. It uses `webpack`'s require API to find all the files we need that have a `-test.js` suffix.
- `mocha` as the test framework
- `jsdom` as my test environment

```bash
# Run test once
npm test

# Run in watch mode
npm test:watch
```

We have unit tests for async (redux) actions, reducers, and stateless components with [enzyme](http://airbnb.io/enzyme).

#### Deployment

Currently we support [Heroku](docs/deployment/Heroku.md) and [Digital Ocean](docs/deployment/DigitalOcean.md) and [AWS](docs/deployment/AWS.md)

#### Roadmap
We have an outline of our roadmap [here](https://github.com/reactGo/reactGo/blob/master/Roadmap.md)

## Yeoman Generator
If you like using yeoman generators, you could check out [this](https://github.com/iiegor/generator-react-webpack-node) cool yeoman generator by @iiegor!


## FAQ

We have assembled an FAQ [here](/docs/FAQ.md)

## Check out what people have done

We have a [list](/docs/apps.md) of projects that have been created with this boilerplate. Check
them out to see what can be done or to get some inspiration.

## How to Contribute:

Best way to keep up to date is check the [issues](https://github.com/choonkending/react-webpack-node/issues). I really welcome improvements for **all aspects** of an app.

1. Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines:
 - [Airbnb's Style Guide](https://github.com/airbnb/javascript)
 - [bendc's frontend guidelines](https://github.com/bendc/frontend-guidelines)


Credits to [webpack-server-side-example](https://github.com/webpack/react-webpack-server-side-example), [example-app](https://github.com/webpack/example-app), [flux-examples](https://github.com/facebook/flux/tree/master/examples), [node-express-mongo-demo](https://github.com/madhums/node-express-mongoose-demo), [hackathon-starter](https://github.com/sahat/hackathon-starter/), [web-starter-kit](https://github.com/google/web-starter-kit), [awesome material-ui](https://github.com/callemall/material-ui), [alt and iso](https://github.com/goatslacker/iso/tree/master/examples/react-router-flux), [react-starter](https://github.com/webpack/react-starter), [reap](https://github.com/choonkending/reap), [isomorphic-redux-app](https://github.com/caljrimmer/isomorphic-redux-app) and [mxstbr/react-boilerplate](https://github.com/mxstbr/react-boilerplate/blob/master/README.md)

**Easter Eggs** :egg:

This boilerplate has gone through an evolution
```
React.js -> Facebook Flux -> Alt -> Redux
```

We have two implementations of universal flux:
- **Redux** is on our active **master** branch
- [**Alt**](https://github.com/goatslacker/alt) (previously implemented) on [flux/alt](https://github.com/choonkending/react-webpack-node/tree/flux/alt) branch. It features [iso](https://github.com/goatslacker/iso), react-router and ImmutableJS.

> Note: If you have previously used an alt implementation of this repository, please refer to this branch. I will not be updating it as frequently as master, but definitely welcome suggestions!

License
===============
MIT
