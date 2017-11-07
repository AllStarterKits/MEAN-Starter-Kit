# MEAN-Starter-Kit
_Made by Luciano Nooijen_
Version 1.0.0 (still in development)

[![Build Status](https://travis-ci.org/lucianonooijen/MEAN-Starter-Kit.svg?branch=master)](https://travis-ci.org/lucianonooijen/MEAN-Starter-Kit) 
[![Dependency Status](https://david-dm.org/lucianonooijen/MEAN-Starter-Kit.svg)](https://david-dm.org/lucianonooijen/MEAN-Starter-Kit)
[![devDependency Status](
https://david-dm.org/lucianonooijen/MEAN-Starter-Kit/dev-status.svg)](https://david-dm.org/lucianonooijen/MEAN-Starter-Kit#info=devDependencies)

## Why this starter kit?
I created this starter kit for all of my MEAN-stack projects to save time on setting everything up. Because of this the workflow can be different from what you're used to, for example. You can of course change the the complete workflow to suit your needs. If you are looking for a custom boiler plate with other functionalities or whatever, or a more complete starter kit, check out [Mega Boiler Plate](http://megaboilerplate.com/).

## Installation
This starter kit requires [Node.js](https://nodejs.org/) to run (duh).
```sh
$ npm install
```
```sh
$ bower install
```
```sh
$ nodemon
```
And in another terminal, run
```
$ npm run watch
```


## Useful notes
Just a handful of useful notes I would recommend using when you work with this starter kit.
* Don't add any files into the ./dist folder. Always put them in the ./src folder.
* If you are going to edit the Bower components like Bootstrap or Font Awesome, make sure to move them to the custom folder and edit the paths in .angular-cli.json


## To do before I would call it usable
* Add Mongoose/MongoDB integration
* Add Angular service for loading through the API
* Integrate scss for the styling
* Add browser sync for live styling updates
* Run everything in 1 command using npm concurrently
* Better default elements so that a header, a menu and a footer are included

## Features I am still working on (kind of a to do list for myself too)
* A form that you can use
* I might add some more pages, like about us, services, contact, etc.
* Maybe a login feature, although I am not sure yet about that
* Some sort of back-end panel would be nice with a couple of options
* I might add a blog function to the starter kit
* Move away from Bower and use Yarn or add them all by hand (scss instead of css)
* Update devDependencies

## Licence
MIT - so use it whenever, whereever and however you want it :)



## Readme from the Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5. (note: later upgraded to Angular CLI v1.5.0)

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Ports
For development I integrated the command `npm run dev`, that will start Nodemon, Angular build (watches files and then builds to ./dist) and Gulp for browser sync, listening for changes in the ./dist folder. For this scripts there are some ports set as default. The browser sync starts automatically but if you want to access the Nodemon or Angular watch urls, these are the default ports on localhost:
* Nodemon: port 3000
* Angular: port 4200
* Browser sync: port 5000

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Final notes
As this is my personal starter kit I left some things out you might use. From the package.json file I removed some lines of code from the "scripts"-part. If you like you can add these deleted lines:
```
"test": "ng test",
"pree2e": "webdriver-manager update --standalone false --gecko false --quiet",
"e2e": "ng e2e",
```

## Contributors
[lucianonooijen](https://github.com/lucianonooijen/)