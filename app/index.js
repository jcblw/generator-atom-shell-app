'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AtomShellAppGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            // if (!this.options['skip-install']) {
            //     this.installDependencies();
            // }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Atom Shell App generator!'));

        var prompts = [{
            name: 'appName',
            message: 'What is the name of your app',
            default: 'Atom App'
        },{
            name: 'version',
            message: 'What verison is your app',
            default: '0.0.1'
        },{
            name: 'repo',
            message: 'What is the repository url'
        },{
            name: 'author',
            message: 'What is your name',
            default: ''
        },{
            type: 'checkbox',
            name: 'fetchBinaries',
            message: 'Would you like to download atom-shell binaries',
            choices: ['MacOSX', /*'Linux (ia32)', 'Linux (x64)',*/ 'Windows']
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.version = props.version;
            this.author = props.author;
            if ( props.repo ) {
                this.repo = props.repo;
            }
            this.fetchBinaries = props.fetchBinaries;

            done();
        }.bind(this));
    },

    _dashize: function( name ) {
        return ('' + name)
            .trim()
            .toLowerCase()
            .replace(/ /g, '-');
    },

    app: function () {
        this._appName = this._dashize( this.appName );
        this.mkdir( this._appName );
        this.mkdir( this._appName + '/src');
        this.template('src/main.js', this._appName + '/src/main.js');
        this.template('src/package.json', this._appName + '/src/package.json');
        this.template('src/index.html', this._appName + '/src/index.html');
        this.template('package.json', this._appName + '/package.json');
        this.template('README.md', this._appName + '/README.md');

        if (!this.fetchBinaries.length) {
            return;
        }

        // Get the binaries and extract them
        // TODO: Should be able to pass versions
        this.fetchBinary();

        // TODO: sh should check the platform. For now only MacOSX is supported
        this.template('run.sh', this._appName + '/run.sh');

        // TODO: Build with minify, uglify and standalone creation
    },

    fetchBinary: function (i) {
        i = i || 0;

        var binariesDir = this._appName + '/binaries/',
            binariesBase = 'https://github.com/atom/atom-shell/releases/download/v0.13.3/',
            binariesUrls = {
                'MacOSX': {
                    zip: 'atom-shell-v0.13.3-darwin-x64.zip',
                    extension: '.app'
                },
                'Linux (ia32)': {
                    zip: 'atom-shell-v0.13.3-linux-ia32.zip',
                    extension: ''
                },
                'Linux (x64)': {
                    zip: 'atom-shell-v0.13.3-linux-x64.zip',
                    extension: ''
                },
                'Windows': {
                    zip: 'atom-shell-v0.13.3-win32-ia32.zip',
                    extension: ''
                }
            },
            binary = binariesUrls[this.fetchBinaries[i]],
            finalDir = binariesDir + binary.zip.replace('.zip', binary.extension);

        // TODO: Linux is giving problems with folder creation

        this.extract(binariesBase + binary.zip, finalDir, function (err) {
            if (err) {
                throw new Error('Error extracting: ' + err);
            }

            i += 1;

            if (i < this.fetchBinaries.length) {
                this.fetchBinary(i);
            }
        }.bind(this));
    }
});

module.exports = AtomShellAppGenerator;
