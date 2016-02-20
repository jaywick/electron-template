import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, PipeTransform} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({ selector: "app", templateUrl: "./app.html" })
export class App {
    public message = "Hello Electron Boilerplate!";
    constructor() { }
}

bootstrap(App);