const myModule = (function () {
  function init() {
    // eslint-disable-next-line no-console
    console.log('The module has been initiated!');
  }

  return {
    init
  };
}());

myModule.init();
