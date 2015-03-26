// Router.configure({
//   layoutTemplate:'layout'
// });

Router.map(function(){
  this.route('/about', {
    name:'tAbout',
    // layoutTemplate:'layout'
  }),
  this.route('/', {
    name:'tHome',
    // layoutTemplate:'layout'
  })
});