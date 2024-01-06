var currentValue = 0
window.onload = function () {
  setTimeout(function () {
    currentValue = 50;
  }, 1000);
};

setTimeout(function () {
  currentValue = 100;
}, 12000);

export default currentValue