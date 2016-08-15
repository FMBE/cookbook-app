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
    this.route('recipes');
    this.route('ingredients');
  });
  this.route('login');
  this.route('register');
});

export default Router;
