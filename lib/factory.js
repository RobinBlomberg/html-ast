/* eslint-disable sort-keys */
import * as AST from './ast.js';

/**
 * @param {AST.TagName} tagName
 * @return {AST.ElementFactory}
 */
const _createElementFactory = (tagName) => (...content) => element(tagName, ...content);

const _var = _createElementFactory('var');

/**
 * @param {AST.DocumentChildNode[]} childNodes
 * @return {AST.Document}
 */
export const document = (childNodes = []) => {
  return {
    type: 'Document',
    childNodes
  };
};

/**
 * @param {string} [name]
 * @param {string} [publicId]
 * @param {string} [systemId]
 * @return {AST.DocumentType}
 */
export const doctype = (name = 'html', publicId = '', systemId = '') => {
  return {
    type: 'DocumentType',
    name,
    publicId,
    systemId
  };
};

/**
 * @param {AST.TagName} tagName
 * @param {AST.ElementContent} content
 * @return {AST.Element}
 */
export const element = (tagName, ...content) => {
  /** @type {AST.Attributes} */
  const attributes = {};

  /** @type {AST.ElementChildNode[]} */
  const childNodes = [];

  for (const item of content) {
    if (typeof item === 'string') {
      childNodes.push(text(item));
    } else if (Array.isArray(item)) {
      for (const childNode of item) {
        if (typeof childNode === 'string') {
          childNodes.push(text(childNode));
        } else {
          childNodes.push(childNode);
        }
      }
    } else if (item instanceof Object) {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const value = item[key];

          if (value === true) {
            attributes[key] = '';
          } else if (Array.isArray(value)) {
            attributes[key] = value.join(' ');
          } else if (typeof value === 'number') {
            attributes[key] = String(value);
          } else if (typeof value === 'string') {
            attributes[key] = value;
          }
        }
      }
    }
  }

  return {
    type: 'Element',
    tagName,
    attributes,
    childNodes
  };
};

/**
 * @param {string} [data]
 * @return {AST.Text}
 */
export const text = (data = '') => {
  return {
    type: 'Text',
    data
  };
};

export const a = _createElementFactory('a');
export const abbr = _createElementFactory('abbr');
export const address = _createElementFactory('address');
export const area = _createElementFactory('area');
export const article = _createElementFactory('article');
export const aside = _createElementFactory('aside');
export const audio = _createElementFactory('audio');
export const b = _createElementFactory('b');
export const base = _createElementFactory('base');
export const bdi = _createElementFactory('bdi');
export const bdo = _createElementFactory('bdo');
export const blockquote = _createElementFactory('blockquote');
export const body = _createElementFactory('body');
export const br = _createElementFactory('br');
export const button = _createElementFactory('button');
export const canvas = _createElementFactory('canvas');
export const caption = _createElementFactory('caption');
export const cite = _createElementFactory('cite');
export const code = _createElementFactory('code');
export const col = _createElementFactory('col');
export const colgroup = _createElementFactory('colgroup');
export const data = _createElementFactory('data');
export const datalist = _createElementFactory('datalist');
export const dd = _createElementFactory('dd');
export const del = _createElementFactory('del');
export const details = _createElementFactory('details');
export const dfn = _createElementFactory('dfn');
export const dialog = _createElementFactory('dialog');
export const div = _createElementFactory('div');
export const dl = _createElementFactory('dl');
export const dt = _createElementFactory('dt');
export const em = _createElementFactory('em');
export const embed = _createElementFactory('embed');
export const fieldset = _createElementFactory('fieldset');
export const figcaption = _createElementFactory('figcaption');
export const figure = _createElementFactory('figure');
export const footer = _createElementFactory('footer');
export const form = _createElementFactory('form');
export const h1 = _createElementFactory('h1');
export const h2 = _createElementFactory('h2');
export const h3 = _createElementFactory('h3');
export const h4 = _createElementFactory('h4');
export const h5 = _createElementFactory('h5');
export const h6 = _createElementFactory('h6');
export const head = _createElementFactory('head');
export const header = _createElementFactory('header');
export const hgroup = _createElementFactory('hgroup');
export const hr = _createElementFactory('hr');
export const html = _createElementFactory('html');
export const i = _createElementFactory('i');
export const iframe = _createElementFactory('iframe');
export const img = _createElementFactory('img');
export const input = _createElementFactory('input');
export const ins = _createElementFactory('ins');
export const kbd = _createElementFactory('kbd');
export const label = _createElementFactory('label');
export const legend = _createElementFactory('legend');
export const li = _createElementFactory('li');
export const link = _createElementFactory('link');
export const main = _createElementFactory('main');
export const map = _createElementFactory('map');
export const mark = _createElementFactory('mark');
export const menu = _createElementFactory('menu');
export const meta = _createElementFactory('meta');
export const meter = _createElementFactory('meter');
export const nav = _createElementFactory('nav');
export const noscript = _createElementFactory('noscript');
export const object = _createElementFactory('object');
export const ol = _createElementFactory('ol');
export const optgroup = _createElementFactory('optgroup');
export const option = _createElementFactory('option');
export const output = _createElementFactory('output');
export const p = _createElementFactory('p');
export const param = _createElementFactory('param');
export const picture = _createElementFactory('picture');
export const pre = _createElementFactory('pre');
export const progress = _createElementFactory('progress');
export const q = _createElementFactory('q');
export const rb = _createElementFactory('rb');
export const rp = _createElementFactory('rp');
export const rt = _createElementFactory('rt');
export const rtc = _createElementFactory('rtc');
export const ruby = _createElementFactory('ruby');
export const s = _createElementFactory('s');
export const samp = _createElementFactory('samp');
export const script = _createElementFactory('script');
export const section = _createElementFactory('section');
export const select = _createElementFactory('select');
export const slot = _createElementFactory('slot');
export const small = _createElementFactory('small');
export const source = _createElementFactory('source');
export const span = _createElementFactory('span');
export const strong = _createElementFactory('strong');
export const style = _createElementFactory('style');
export const sub = _createElementFactory('sub');
export const summary = _createElementFactory('summary');
export const sup = _createElementFactory('sup');
export const table = _createElementFactory('table');
export const tbody = _createElementFactory('tbody');
export const td = _createElementFactory('td');
export const template = _createElementFactory('template');
export const textarea = _createElementFactory('textarea');
export const tfoot = _createElementFactory('tfoot');
export const th = _createElementFactory('th');
export const thead = _createElementFactory('thead');
export const time = _createElementFactory('time');
export const title = _createElementFactory('title');
export const tr = _createElementFactory('tr');
export const track = _createElementFactory('track');
export const u = _createElementFactory('u');
export const ul = _createElementFactory('ul');
export { _var as var };
export const video = _createElementFactory('video');
export const wbr = _createElementFactory('wbr');
