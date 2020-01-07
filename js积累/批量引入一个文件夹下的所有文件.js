const modulesFiles = require.context(
  './data',
  true,
  /\.js$/
);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath);
  modules[modulePath] = value.default;
  return modules;
}, {});

// modules={xx.js:data}