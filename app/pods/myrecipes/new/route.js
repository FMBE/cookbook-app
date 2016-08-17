import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('recipe');
  },

  setupController(controller, model) {
     this._super(controller, model);

   },

   renderTemplate() {
     this.render('myrecipes/form');
   },

  actions: {

    saveRecipe(newRecipe) {
      newRecipe.save().then(() => this.transitionTo('myrecipes'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
