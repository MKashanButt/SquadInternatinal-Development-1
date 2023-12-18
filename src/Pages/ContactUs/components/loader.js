const componentContext = require.context(".", false, /\.jsx$/);
const components = {};

componentContext.keys().forEach((key) => {
  if (key !== "./index.jsx") {
    const componentName = key.replace(/\.\/|\.jsx/g, "");
    components[componentName] = componentContext(key).default;
  }
});

export default components;
