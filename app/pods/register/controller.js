import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  emailAddress2: '',
  password: '',
  password2: '',
  name: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isPasswordValid: Ember.computed.match('password',/^[a-zA-z0-9]+$/),
  arePasswordValid: Ember.computed('password', 'password2', function(){
    if(this.get('password') === this.get('password2')){
      return true;
    }else{
      return false;
    }
  }),
  areEmailValid: Ember.computed('emailAddress', 'emailAddress2', function(){
    if(this.get('emailAddress') === this.get('emailAddress2')){
      return true;
    }else{
      return false;
    }
  }),
  isPassword: Ember.computed.and('arePasswordValid', 'isPasswordValid'),
  isEmail: Ember.computed.and('isEmailValid', 'areEmailValid'),
  isValid: Ember.computed.and('isEmail', 'isPassword'),

  isDisabled: Ember.computed.not('isValid'),

  firebase: Ember.inject.service(),
  actions: {

    register() {
    var _that = this;
    const auth = this.get('firebase').auth();
    const email = this.get('emailAddress');
    const password = this.get('password');
    const name = this.get('name');
    console.log(email,password);
    auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
    const user = this.store.createRecord('user', {
      id: userResponse.uid,
      email: userResponse.email,
      name : name,
      password : password
    });
    this.set('email', '');
    this.set('password', '');
    return user.save().then((response)=>{
      _that.set('responseMessage',`Register successful with id: ${response.get('id')}`);
      _that.set('name', '');
      _that.set('emailAddress', '');
      _that.set('password','');
      _that.transitionToRoute('login');
    });
  });
}
}
});
