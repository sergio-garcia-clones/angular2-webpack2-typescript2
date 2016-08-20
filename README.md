# angular2-webpack2-typescript2
Simple Angular2 starter using Webpack2/Typescript2. 
The sample application features Angular2-Material demos

You can use this repo locally or with Docker (recommended).

# Features

## Tech Stack
The repo uses the following technologies:

* Angular2 RC5
* Webpack 2.1
* Typescript 2.x
* Angular2 Material alpha 0.7-4

## Application Features
The demo application showcases:

* Angular2 module composition using shared modules. 
* Angular2 module routing
* Angular2-Material components gathered in one shared module
* Application demos the material components as of current version
* Uses ServiceWorker or AppCache for static caching

## Build Features
The build process performs the following optimizations:

* Bundles application into `app`, `vendor` and `polyfills` bundles
* Minifys/Uglify bundles
* Creates gzipped versions of bundles/asset files
* Creates ServiceWorker and AppCache (booh!) files with bundled assets as static cache


# Getting Started
## Dependencies

* `node` and `npm` 
* Ensure you're running the latest versions Node (v.4 or higher)  and NPM (v.3 or higher)
* If you use Docker, have latest version installed which supports `docker-compose` v2

### Global Dependencies
If you want to run locally without Docker, you should install the following global dependencies: typescript2.x, webpack2.x, webpack-devel-server, http-server:

```bash
# Install global dependencies (not needed if you use Docker)
npm install --progress=false -g typescript@beta webpack-cli webpack-dev-server webpack@2.1.0-beta http-server
```


# Commands
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
