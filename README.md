# angular2-webpack2-typescript2
Simple Angular2 starter using Webpack2/Typescript2. 

# Table of Contents
* [Introduction](#introduction)
   * [Quick Start Docker](#quick-start)
* [Features](#features)
  * [Tech Stack] (#tech-stack)
  * [Application] (#application)
  * [Build Optimizations] (#build-optimizations)
* [Getting Started](#getting-started)
  * [Dependencies] (#dependencies)
  * [Global Dependencies] (#global-dependencies)
* [Commands] (#commands)
   * [Development] (#development)
   * [Build] (#build)
   * [Serve Production Build] (#serve-production-build)
   * [Linting] (#linting)
* [Omissions] (#omissions)
* [Acknowledgements] (#acknowledgements)
* [Todo] (#todo)


# Introduction
The sample application features Angular2-Material demos

You can use this repo locally or with `Docker` (recommended).

* For MacOS, please use `Docker for Mac`
* For Windows, please use `Docker for Windows`
* For Linux, just use `Docker` :)

## Quick Start
If you're using `Docker`, life is easier:
```bash
# Clone repo and enter folder
git clone https://github.com/spock123/angular2-webpack2-typescript2.git
cd angular2-webpack2-typescript2

# Initialize project
npm run clean

# Serve and start development!
npm run docker:serve

# Open localhost:8080 and enjoy the show
```


# Features

## Tech Stack
The repo uses the following technologies:

* Angular2 RC5
* Webpack 2.1
* Typescript 2.x
* Angular2 Material alpha 7-4
* Docker container for workflows
* SASS for styling
* Code checking with Tslint and Codelyzer

## Application
The demo application showcases:

* Angular2 module composition using shared modules. 
* Angular2 module routing
* Angular2-Material components gathered in one shared module
* Application demos the material components as of current version
* Uses ServiceWorker or AppCache for static caching

## Build Optimizations
The build process performs the following optimizations:

* Bundles application into `app`, `vendor` and `polyfills` bundles
* Minifys/Uglify bundles
* Creates gzipped versions of bundles/asset files
* Creates ServiceWorker and AppCache (booh!) files with bundled assets as static cache


# Getting Started
## Dependencies

* `node` and `npm` 
* Ensure you're running the latest versions Node (v.4 or higher)  and NPM (v.3 or higher)
* If you use `Docker`, have latest version installed which supports `docker-compose` v2

## Global Dependencies
If you want to run locally without `Docker`, you should install the following global dependencies: typescript2.x, webpack2.x, webpack-devel-server, http-server:

```bash
# Install global dependencies (not needed if you use Docker)
npm install --progress=false -g typescript@beta webpack-cli webpack-dev-server webpack@2.1.0-beta http-server
```


# Commands

## Dependencies
Update dependencies if you add/remove packages in package.json
```bash
# Docker
npm run docker:install

# Local
npm install
```

## Development
Serve development build with livereload on `localhost:8080`
```bash
# Docker
npm run docker:serve

# Local
npm run serve
```

## Build
Create production build in `dist/frontend`
```bash
# Docker
npm run docker:build

# Local
npm run build
```

## Serve production build
Serve the production built application on `localhost:8080`
```bash
# Docker
npm run docker:serve-dist

# Local
npm run serve-dist
```

## Linting
Check your coding styles with with TsLint and Codelyzer:

```bash
# Docker
npm run docker:tslint

# Local
npm run tslint
```

# Omissions
Vital parts of a real world application setup have been omitted due to various reasons:

* Testing: No testing, as Angular2 testing has still not matured to a point I would dare to use it
* Deployment/Staging: How we deploy our applications is very individual
* Code coverage: No testing => no coverage :)
* Linting: Typescript 2.0 doesn't yet play nice with `tslint`
* AoT template compilation


# Acknowledgements
This repo has been created with great inspiration from

* <a href="https://github.com/gdi2290" target="_new">Patrick Stableton</a> 
* <a href="https://github.com/AngularClass/angular2-webpack-starter" target="_new">Angular2-Webpack-Starter</a>

# Todo
I don't want to pollute the repo with lots of unneeded code, but I'd like to add some of the following features:

* Code splitting and lazy loading of an ngModule
* Ahead-of-Time template compilation
