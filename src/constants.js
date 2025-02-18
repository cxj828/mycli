const emojis = {
  error: '❌',
  recycle: '♻️ ',
  finger: '👉',
  star: '✨',
  warn: '⚠️',
};

const featuresEnum = {
  Vue: ['vue', 'webpack'],
  vueRouter: 'router',
  linter: 'linter',
  configFiles: {
    linter: {
      eslint: 'eslintConfig',
      eslintIgnore: 'eslintIgnoreConfig',
      prettier: 'prettierConfig',
    },
  },
};

const configFileTypes = {
  [featuresEnum.configFiles.linter.eslint]: '.eslintrc',
  [featuresEnum.configFiles.linter.eslintIgnore]: '.eslintignore',
  [featuresEnum.configFiles.linter.prettier]: '.prettierrc',
};

module.exports = { emojis, featuresEnum, configFileTypes };
