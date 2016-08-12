import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  emailMessage: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('emailMessage.length', 6),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('emailMessage');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then(() => {
      this.set('responseMessage', `We received your message! We'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('emailMessage', '');
    });
  }
}
});
