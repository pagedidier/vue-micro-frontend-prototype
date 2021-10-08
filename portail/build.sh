#!/bin/sh -e

cd ../mer
vue-cli-service build --target wc --inline-vue --name mer-app ./src/App.vue

cp dist/mer-app.js ../portail/src/apps/

cd ../per
vue-cli-service build --target wc --inline-vue --name per-app ./src/App.vue

cp dist/per-app.js ../portail/src/apps/
