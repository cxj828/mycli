const { getFilesFormDir } = require('../../utils');

async function invokeRouter() {
  const routerTemplate = await getFilesFormDir(__dirname);

  return {
    ...routerTemplate,
    pkg: {
      dependencies: {
        "vue-router": "4.3.0",
      },
    },
  };
}

module.exports = invokeRouter;
