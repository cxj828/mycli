const chalk = require('chalk');
const { prompt } = require('inquirer');
const { featuresEnum } = require('../constants');
const { hasVueFeature, hasRouterFeature, logWarnings } = require('../utils');

const Vue = {
  name: 'Vue',
  value: featuresEnum.Vue,
  checked: true,
  description: 'A JavaScript library for building user interfaces',
  link: 'https://cn.vuejs.org/',
};

const reactRouter = {
  name: 'React Router',
  value: featuresEnum.reactRouter,
  short: 'Router',
  description: 'React Router is a lightweight, fully-featured routing library for the React JavaScript library',
  link: 'https://reactrouter.com/',
};

const linter = {
  name: 'Linter add Prettier',
  value: featuresEnum.linter,
  short: 'Linter, Prettier',
  checked: true,
  description: 'Improve code quality with eslint and prettier',
  link: '',
};

/**
 * @param {string[]} features
 */
const getFormatFeatures = (features) => {
  const result = features.flat();
  const hasReact = hasVueFeature(features);
  const hasRouter = hasRouterFeature(features);

  if (hasRouter && !hasReact) {
    logWarnings(['If React router is selected, React feature needs to be selected']);
    result.push(featuresEnum.react);
  }

  return result;
};

/**
 * @returns {Promise<string[]>}
 */
const featuresPrompt = async () => {
  const { features = [] } = await prompt([
    {
      choices: [Vue, reactRouter, linter],
      name: 'features',
      type: 'checkbox',
      message: chalk.cyan('Check the features needed for your project:'),
      pageSize: 10,
    },
  ]);

  return getFormatFeatures(features.flat());
};

module.exports = { featuresPrompt };
