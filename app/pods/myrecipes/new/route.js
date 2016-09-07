import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var test = Ember.RSVP.hash({
      recipe: this.store.createRecord('recipe'),
      categories: this.store.findAll('category'),
      ingredients: this.store.findAll('ingredient')
    });
    return test;
  },

  setupController(controller, model) {
    controller.set('categories', model.categories);
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

/*App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      roles: this.store.findAll('role'),
      permissions: this.store.findAll('permission')
    });  }
});

App.PermissionCheckboxComponent = Ember.Component.extend({
  tagName: '',
  checked: function(){
    var permission = this.get('permission.name');
    var rolePermissions = this.get('role.permissions').mapBy('name');

    return rolePermissions.contains(permission);
  }.property(),

  save: function(){
    var permissionChecked = this.get('checked');
    var role = this.get('role');
    var permission = this.get('permission');
    var permissions = role.get('permissions');

    if(permissionChecked){
       role.get('permissions').addObject(permission);
       permission.save();
       role.save();
    }
    else {
      role.get('permissions').removeObject(permission);
      role.save();
    }

  }.observes('checked')
});

App.Role = DS.Model.extend({
  name: DS.attr('string'),
  permissions: DS.hasMany('permission')
});

App.Role.FIXTURES = [
    {
       id: 1,
       name: 'Admin',
       permissions: [1, 2]
    }, {
        id: 2,
        name: 'User',
        permissions: [1]
    }
];

App.Permission = DS.Model.extend({
  name: DS.attr('string'),
  roles: DS.hasMany('permission')
});

App.Permission.FIXTURES = [
    {
       id: 1,
       name: 'Read',
       roles: [1, 2]
    }, {
        id: 2,
        name: 'Write',
        roles: [1]
    }
];
*/
