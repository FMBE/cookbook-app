import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  emailMessage: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('emailMessage.length', 6),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {

    register() {
    var _that = this;
    const auth = this.get('firebaseApp').auth();
    const email = this.get('email');
    const pass = this.get('password');
    console.log(email,pass);
    auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
    const user = this.store.createRecord('user', {
      id: userResponse.uid,
      email: userResponse.email
    });
    this.set('email', '');
    this.set('password', '');
    return user.save().then((response)=>{
      _that.set('responseMessage',`Register successful with id: ${response.get('id')}`);
      _that.set('emailAddress', '');
      _that.set('password','');
      _that.transitionToRoute('login');
    });
  });
  }
});
