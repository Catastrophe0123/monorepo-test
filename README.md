# Monorepo Template
A simple fullstack application to try out yarn workspaces and lerna

This is a simple repo to try out working with mono repos  <br />
There are 3 packages - server, common and web.

* Web is a simple react application
* Server is a simple express application
* Common contains a simple function that is shared by both web and server

The react app listens in port `3000` and the express app listens in port `5000`

Use `docker-compose up` to boot up everything in development mode.

Alternatively, to work without docker, you can boot up the server in dev mode by running the `server-dev.sh` script
and the react app with the `web-dev.sh` script.

The `Dockerfile.server` is used to build/compile the server.
