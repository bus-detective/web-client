import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function bdIcon(name, options={}) {
  var params = options.hash || {};
  var classNames = [];

  classNames.push("bd-icon");
  classNames.push("bd-icon--" + name);

  var html = `<${params.tagName || 'i'} class="${classNames.join(' ')}"></${params.tagName || 'i'}>`;

  return htmlSafe(html);
}

export default buildHelper(bdIcon);
