import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('explore', function() {
    this.route('recipes', function() {
      this.route('details', { path: '/:recipe_id/details' });
    });
    this.route('ingredients');
  });
  this.route('login');
  this.route('register');

  this.route('myrecipes', function() {
    this.route('new');
    this.route('edit', { path: '/:recipe_id/edit' });
  });
});

export default Router;
