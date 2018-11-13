#!/usr/bin/env node

// Adapted from:
// https://github.com/AllJoyn-Cordova/cordova-plugin-alljoyn/blob/master/scripts/beforePluginInstall.js

var path = require('path');
var exec = require('child_process').exec;

// XXX FUTURE TBD auto-detect:
var package_name = 'xml2js';

module.exports = function (context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    console.log('installing external dependencies via npm');

    exec(   'npm install xml2js',
            function (error, stdout, stderr) {
                if (error !== null) {
                    // XXX TODO SIGNAL FAILURE HERE.
                    console.log('npm install of external dependencies (xml2js) failed: ' + error);
                    deferral.resolve();
                } else {
                    console.log('npm install of external dependencies (xml2js) ok');
                    deferral.resolve();
                }
            }
    );
    exec(   'npm install lodash',
            function (error, stdout, stderr) {
                if (error !== null) {
                    // XXX TODO SIGNAL FAILURE HERE.
                    console.log('npm install of external dependencies (lodash) failed: ' + error);
                    deferral.resolve();
                } else {
                    console.log('npm install of external dependencies (lodash) ok');
                    deferral.resolve();
                }
            }
    );
    exec(   'npm install shelljs',
            function (error, stdout, stderr) {
                if (error !== null) {
                    // XXX TODO SIGNAL FAILURE HERE.
                    console.log('npm install of external dependencies (shelljs failed: ' + error);
                    deferral.resolve();
                } else {
                    console.log('npm install of external dependencies (shelljs) ok');
                    deferral.resolve();
                }
            }
    );

    return deferral.promise;
};