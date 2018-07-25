#!/bin/sh

export GIT_ASKPASS=$PWD/scripts/git-askpass.sh
git config credential.helper 'cache --timeout=86400'
git ls-remote -ht https://github.com/aeternity/cordova-plugin-airgap-secure-storage.git

npm config set unsafe-perm true # https://github.com/npm/npm/issues/17346
npm install
npx cordova telemetry off

npm run build:cordova
npx cordova prepare android
npm run gen:cordova-resources
npx cordova build android -- --gradleArg=--no-daemon
