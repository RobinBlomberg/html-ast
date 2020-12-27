/* eslint-disable sort-keys */
import Chai from 'chai';
import * as h from './factory.js';

describe('@robinblomberg/html-ast', () => {
  describe('factory', () => {
    describe('document', () => {
      it('should be able to create a Document node', () => {
        Chai.assert.deepStrictEqual(
          h.document(),
          {
            type: 'Document',
            childNodes: []
          }
        );

        Chai.assert.deepStrictEqual(
          h.document([
            h.html()
          ]),
          {
            type: 'Document',
            childNodes: [
              {
                type: 'Element',
                tagName: 'html',
                attributes: {},
                childNodes: []
              }
            ]
          }
        );
      });
    });

    describe('doctype', () => {
      it('should be able to create a DocumentType node', () => {
        Chai.assert.deepStrictEqual(
          h.doctype(),
          {
            type: 'DocumentType',
            name: 'html',
            publicId: '',
            systemId: ''
          }
        );

        Chai.assert.deepStrictEqual(
          h.doctype(
            'html',
            '-//W3C//DTD XHTML 1.0 Transitional//EN',
            'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'
          ),
          {
            type: 'DocumentType',
            name: 'html',
            publicId: '-//W3C//DTD XHTML 1.0 Transitional//EN',
            systemId: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'
          }
        );
      });
    });

    describe('element', () => {
      it('should resolve content nodes', () => {
        Chai.assert.deepStrictEqual(
          h.button(),
          {
            type: 'Element',
            tagName: 'button',
            attributes: {},
            childNodes: []
          }
        );

        Chai.assert.deepStrictEqual(
          h.button({ foo: 'bar' }, 'Click ', { baz: 'qux' }, [
            'me!',
            h.i({ class: 'fa icon' })
          ]),
          {
            type: 'Element',
            tagName: 'button',
            attributes: {
              foo: 'bar',
              baz: 'qux'
            },
            childNodes: [
              {
                type: 'Text',
                data: 'Click '
              },
              {
                type: 'Text',
                data: 'me!'
              },
              {
                type: 'Element',
                tagName: 'i',
                attributes: {
                  class: 'fa icon'
                },
                childNodes: []
              }
            ]
          }
        );
      });

      it('should serialize a string-array attribute value as a space-delimited string', () => {
        Chai.assert.deepStrictEqual(
          h.i({ class: ['fa', 'icon'] }),
          {
            type: 'Element',
            tagName: 'i',
            attributes: {
              class: 'fa icon'
            },
            childNodes: []
          }
        );
      });

      it('should serialize a true attribute value as an empty string', () => {
        Chai.assert.deepStrictEqual(
          h.button({ disabled: true }),
          {
            type: 'Element',
            tagName: 'button',
            attributes: {
              disabled: ''
            },
            childNodes: []
          }
        );
      });

      it('should serialize a number attribute value as a string', () => {
        Chai.assert.deepStrictEqual(
          h.td({ colspan: 2 }),
          {
            type: 'Element',
            tagName: 'td',
            attributes: {
              colspan: '2'
            },
            childNodes: []
          }
        );
      });

      it('should ignore falsy attribute values except for numbers and strings', () => {
        Chai.assert.deepStrictEqual(
          h.div({ a: '', b: 0, c: false, d: true, e: null, f: undefined }),
          {
            type: 'Element',
            tagName: 'div',
            attributes: {
              a: '',
              b: '0',
              d: ''
            },
            childNodes: []
          }
        );
      });
    });

    describe('text', () => {
      it('should be able to create a Text node', () => {
        Chai.assert.deepStrictEqual(
          h.text(),
          {
            type: 'Text',
            data: ''
          }
        );

        Chai.assert.deepStrictEqual(
          h.text('Hello world!'),
          {
            type: 'Text',
            data: 'Hello world!'
          }
        );
      });
    });
  });
});
