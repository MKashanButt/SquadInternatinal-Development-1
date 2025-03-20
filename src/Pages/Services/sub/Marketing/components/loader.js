const componentContext = require.context(".", false, /\.jsx$/);
const components = {};

componentContext.keys().forEach((key) => {
  if (key !== "./index.js") {
    const componentName = key.replace(/\.\/|\.js/g, "");
    components[componentName] = componentContext(key).default;
  }
});

export default components;
