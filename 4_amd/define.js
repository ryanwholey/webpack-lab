function define(moduleId, dependencies, definition) {

  if (window.cache[moduleId]) {
    return cache[moduleId];
  }

  const loadedDeps = dependencies.map((dep) => {
    return new Promise((resolve) => {
      if (cache[dep]) {
        resolve();
      } else {
        fetch(`http://localhost:8080/${dep}.js`)
          .then((data) => data.text())
          .then((mod) => {
            window.cache[dep] = eval(mod);
          })
          .then(resolve);
      }
    });
  });

  return Promise.all(loadedDeps).then(() => {
    const deps = dependencies.map((dep) => cache[dep]);

    cache[moduleId] = definition.apply(null, deps);

    return cache[moduleId];
  });
}
