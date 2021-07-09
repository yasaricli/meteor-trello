import { FastRender } from 'meteor/communitypackages:fast-render';

FastRender.onAllRoutes(function() {
  this.subscribe('boards');
});

FastRender.route('/b/:id/:slug', function({ id }) {
  this.subscribe('board', id, false);
});
