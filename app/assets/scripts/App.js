import '../styles/styles.css';

// Handler when the DOM is fully loaded
var onDocReadyCallback = function () {
  let storageValue = window.localStorage.getItem('theme');
  const toggle = document.getElementById('dn');

  if (storageValue === 'dark') {
    toggle.setAttribute('checked', 'checked');
    document.body.setAttribute('data-theme', 'dark');
  } else {
    toggle.removeAttribute('checked');
    document.body.removeAttribute('data-theme');
  }
};

//Run function when document is ready
if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  onDocReadyCallback();
} else {
  document.addEventListener('DOMContentLoaded', onDocReadyCallback);
}

//Theme Toggle Switch
document.getElementById('dn').addEventListener('change', function (e) {
  if (e.target.checked) {
    document.body.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    window.localStorage.setItem('theme', 'light');
  }
});

if (module.hot) {
  module.hot.accept();
}
