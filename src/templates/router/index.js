const { getFilesFormDir } = require('../../utils');

async function invokeRouter() {
  //__dirname是Node.js中的一个特殊变量，‌表示当前执行脚本所在的目录的绝对路径
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
