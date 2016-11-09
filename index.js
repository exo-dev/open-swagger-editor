#!/usr/bin/env node
'use strict';
const editor = require('swagger-editor-server');
const commander = require('commander');

commander
  .version('1.0.0')
  .option('-s --swaggerFile <swaggerFile>', 'Path to the swagger file.')
  .parse(process.argv);

editor.edit(commander.swaggerFile);
