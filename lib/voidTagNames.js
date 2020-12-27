/**
 * @typedef {import('./ast').TagName} TagName
 */

/**
 * @type {TagName[]}
 */
export const VoidTagNames = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

export const VoidTagNameSet = new Set(VoidTagNames);
