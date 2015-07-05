import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bd-pager');

test('showing/hiding the page buttons', function(assert) {
  var component = this.subject();
  component.setProperties({ page: 1, totalPages: 2 });
  this.render();

  assert.equal(component.$('.qa-pager-prev').size(), 0);
  assert.equal(component.$('.qa-pager-next').size(), 1);

  Ember.run(() => component.set('page', 2));

  assert.equal(component.$('.qa-pager-prev').size(), 1);
  assert.equal(component.$('.qa-pager-next').size(), 0);
});

test('clicking the next page button', function(assert) {
  var component = this.subject();

  var targetObject = {
    assertPage2(page) { assert.equal(page, 2); }
  };

  component.setProperties({ page: 1, totalPages: 2, targetObject: targetObject });
  this.render();

  Ember.run(() => component.set('onPageChange', 'assertPage2'));
  component.$('.qa-pager-next').click();
});

test('clicking the previous page button', function(assert) {
  var component = this.subject();

  var targetObject = {
    assertPage1(page) { assert.equal(page, 1); }
  };

  component.setProperties({ page: 2, totalPages: 2, targetObject: targetObject });
  this.render();

  Ember.run(() => component.set('onPageChange', 'assertPage1'));
  component.$('.qa-pager-prev').click();
});
