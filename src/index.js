#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as utils from '@mcqj/npm-generator-core';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const projectName = 'react-app';

const __dirname = fileURLToPath(import.meta.url);
const templateRoot = path.resolve(__dirname, '../..', 'template');

// No need to add a help option as the npm-generator-lib will do that for us
const optionsDescriptor = {
  name: {
    type: 'string',
    short: 'n',
    placeholder: 'app name',
    message: 'The name of the app to create.',
  },
  description: {
    type: 'string',
    short: 'd',
    placeholder: 'description',
    message: 'A description of the app being created.',
  },
};

// Add template vars that are not prompted for
function augmentTemplateVars(templateVars) {
}

// Remove template vars that we don't want to save (typically the ones we added in augmentTemplateVars)
function cleanTemplateVars(templateVars) {
}

async function main() {
  let templateVars = {};
  try {
    templateVars = await utils.getTemplateVars(optionsDescriptor);
    augmentTemplateVars(templateVars);
    const projectRoot = await utils.createProject(`${templateVars.name}`);
    await utils.copyTemplateFiles({ 
      templateRoot, projectRoot, templateVars,
      patterns: [
        {
          glob: ['**/*.jsx', '**/*.js', '**/*.json', '**/*.md'],
          transformer: 'ejs'
        }
      ],
      renameFiles: {
        gitignore: '.gitignore',
      }
    });
    cleanTemplateVars(templateVars);
    await utils.saveDefaultVars(templateVars);
  } catch (err) {
    console.error(err.message);
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(`
      Normally, we don't save your answers to prompts when the command fails.
      Would you like to save your answers? (Yes/No)
    `);
    if (answer.toLowerCase() === 'yes') {
      await utils.saveDefaultVars(templateVars);
    }
    process.exit(1);
  }
}

main();
