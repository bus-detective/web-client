import Ember from 'ember';

export function bdIcon(name, options={}) {
  var params = options.hash || {};
  var classNames = [];

  classNames.push("bd-icon");
  classNames.push("bd-icon--" + name);

  var html = `<${params.tagName || 'i'} class="${classNames.join(' ')}"></${params.tagName || 'i'}>`;

  return Ember.String.htmlSafe(html);
}

export default Ember.Handlebars.makeBoundHelper(bdIcon);
