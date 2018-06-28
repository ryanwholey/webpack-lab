window.cache = {};

function require(moduleId, code) {
  if (cache[moduleId]) {
    cache[moduleId]();
  } else {
    fetch(`http://localhost:8080/${moduleId}.js`)
      .then((data) => data.text())
      .then((mod) => Promise.resolve(cache[moduleId] = eval(mod)))
      .then(() => {
        code(cache[moduleId]);
      });
  }
}
