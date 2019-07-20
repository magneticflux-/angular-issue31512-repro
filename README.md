To reproduce [angular/angular#31512](https://github.com/angular/angular/issues/31512), follow these steps:

1. Start the CLI Server
2. View the page and observe it renders correctly (includes the extra bottom text)
3. Modify `app.component.html` in some trivial way so that it is recompiled
4. View the page and observe it now does not render correctly (and errors are printed to the console)

# AngularIssue31512Repro

[![Greenkeeper badge](https://badges.greenkeeper.io/magneticflux-/angular-issue31512-repro.svg)](https://greenkeeper.io/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0-next.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
