import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  ingredients: DS.hasMany('ingredient'),
  categories: DS.hasMany('category')
});
