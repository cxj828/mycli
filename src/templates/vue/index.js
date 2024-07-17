const { getFilesFormDir } = require('../../utils');

async function invokeVue() {
  const vueTemplate = await getFilesFormDir(__dirname);

  return {
    ...vueTemplate,
    pkg: {
      dependencies: {
        "vue": "^3.2.25"
      },
    },
  };
}

module.exports = invokeVue;
