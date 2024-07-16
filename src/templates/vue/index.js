const { getFilesFormDir } = require('../../utils');

async function invokeReact() {
  const reactTemplate = await getFilesFormDir(__dirname);

  return {
    ...reactTemplate,
    pkg: {
      dependencies: {
        "vue": "^3.2.25"
      },
    },
  };
}

module.exports = invokeReact;
