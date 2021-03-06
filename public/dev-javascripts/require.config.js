require.config({
  baseUrl: 'javascripts',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': 'vender/angular/angular',
    'angular-route': 'vender/angular-route/angular-route',
    'angular-ui-router': 'vender/angular-ui-router/release/angular-ui-router',
    'angular-bootstrap': 'vender/angular-bootstrap/ui-bootstrap.min',
    'ngload': 'vender/angularAMD/ngload',
    'jquery': 'vender/jquery/dist/jquery',
    'bootstrap': 'vender/bootstrap/dist/js/bootstrap',
    'text' : 'vender/requirejs-text/text',
    'lodash': 'vender/lodash/lodash.min',
    'toastr': 'vender/toastr/toastr.min'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angular-bootstrap': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
    'bootstrap': ['jquery']
  }
});
