const gulp = require('gulp');
const metadata = require('./package');
const tasks = require('gulp-tasks');

tasks.init({
    metadata: metadata,
    libs: [
        'node_modules/base-component/dist/base-component.bundle.js'
    ]
});