#!/bin/sh

export GIT_ASKPASS=scripts/git-askpass.sh

npm config set unsafe-perm true # https://github.com/npm/npm/issues/17346
npm install
npx cordova telemetry off

npm run build:cordova
npx cordova prepare android
npm run gen:cordova-resources
npx cordova build android -- --gradleArg=--no-daemon
