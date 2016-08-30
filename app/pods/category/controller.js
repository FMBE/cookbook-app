import Ember from 'ember';

export default Ember.Controller.extend({

  categoryName: '',

  actions: {

    saveCategory() {
      const name = this.get('categoryName');

      const newCategory = this.store.createRecord('category', {
        name: name
      });

      newCategory.save().then(() => {
      this.set('responseMessage', `We received your message! We'll get in touch soon`);
      this.set('categoryName', '');
    });
  }
}
});
