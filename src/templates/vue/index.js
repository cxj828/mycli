const { getFilesFormDir } = require('../../utils');

async function invokeVue() {
  //__dirname是Node.js中的一个特殊变量，‌表示当前执行脚本所在的目录的绝对路径
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
