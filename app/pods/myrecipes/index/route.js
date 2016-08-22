import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('recipe');
  },

  actions: {

    deleteRecipe(recipe) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        recipe.destroyRecord();
      }
    }
  }

});
