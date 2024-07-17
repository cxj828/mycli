const { featuresEnum } = require('../constants');

const hasVueFeature = (features) => features.includes(featuresEnum.Vue[0]);
const hasRouterFeature = (features) => features.includes(featuresEnum.vueRouter);

module.exports = { hasVueFeature, hasRouterFeature };
