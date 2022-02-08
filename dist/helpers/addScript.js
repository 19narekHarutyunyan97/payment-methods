"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const AddScript = (src, id, onLoad) => {
  const existIdOrNot = document.querySelector("#".concat(id));

  if (existIdOrNot) {
    existIdOrNot.remove();
  }

  const script = document.createElement("script");
  script.src = src;
  script.id = id;
  script.classList.add('payment-methods');
  script.async = true;

  script.onload = () => {
    if (onLoad) {
      onLoad();
    }
  };

  document.body.appendChild(script);
  return script;
};

var _default = AddScript;
exports.default = _default;