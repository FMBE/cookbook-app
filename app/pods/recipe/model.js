import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),

  ingredients: hasMany('ingredient', {inverse: 'recipe', async: true}),
  categories: hasMany('category', {inverse 'recipe', async: true})
});
