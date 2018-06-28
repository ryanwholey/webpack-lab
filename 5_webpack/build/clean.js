(function(modules) {
  const cache = {};

  function loadModule(moduleId) {

    if (cache[moduleId]) {
      return cache[moduleId];
    }

    cache[moduleId] = {
      moduleId,
      loaded: false,
      exports: {},
    };

    const module = cache[moduleId];

    modules[moduleId].call(module.exports, module, module.exports, loadModule);

    module.loaded = true;

    return module.exports
  }

  return loadModule(0);

})([
  function a(_module, _exports, _loadModule) {
    const second = _loadModule(1);

    const obj = {
      a: 1,
      b: 2,
    };

    second['a'](obj);
  },
  function b(_module, _exports, _loadModule) {
    const printObject = (obj) => {
      console.log(obj)
    }
    _exports['a'] = printObject;

    const errorThrower = () => {
      throw new Error('new error');
    }
    const unused_dependency = errorThrower;
  }
])