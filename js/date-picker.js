function initDatepicker() {
  const inputElem = document.querySelector('input[name="date"]');
  const datepicker = new Datepicker(inputElem, {
    autohide: false,
    nextArrow: "→",
    prevArrow: "←",
    orientation: "top",
  });
}

setTimeout(initDatepicker, 500)