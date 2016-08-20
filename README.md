# angular2-webpack2-typescript2
Simple Angular2 starter using Webpack2/Typescript2. 
The sample application features Angular2-Material demos

You can use this repo locally or with Docker (recommended).



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
