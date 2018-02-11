import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";

createConnection().then(async connection => {

}).catch(error => console.log('Connection error:', error));