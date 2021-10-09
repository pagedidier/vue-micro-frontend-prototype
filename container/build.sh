#!/bin/sh -e

cd ../application-1
vue-cli-service build --target wc --inline-vue --name app1-app ./src/App.vue

cp dist/app1-app.min.js ../container/src/apps/

cd ../application-2
vue-cli-service build --target wc --inline-vue --name app2-app ./src/App.vue

cp dist/app2-app.min.js ../container/src/apps/
