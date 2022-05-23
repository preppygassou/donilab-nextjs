import './assets/css/vendor/bootstrap.min.css';

const render = () => {
  import(`./assets/css/sass/themes/donilab.dark.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();