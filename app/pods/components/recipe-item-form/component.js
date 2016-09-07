import Ember from 'ember';

export default Ember.Component.extend({
  //isPicked: false,

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    },

    elementSelected(a, b){
        var x=0;
    }

  }
});
