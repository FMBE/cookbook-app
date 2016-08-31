import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      recipe: this.store.createRecord('recipe'),
      categories: this.store.findAll('category'),
      ingredients: this.store.findAll('ingredient')
    });
  },

  setupController(controller, model) {
    controller.set('category', model.category);
    controller.set('ingredient', model.ingredient);
     this._super(controller, model);

   },

   renderTemplate() {
     this.render('myrecipes/form');
   },

  actions: {

    saveRecipe(newRecipe) {
      newRecipe.save().then(() => this.transitionTo('myrecipes/new'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
