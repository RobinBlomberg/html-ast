/*
 * Internal types
 * -------------------------------------------------------------------------------------------------
 */

export type Attributes = {
  [AttributeName: string]: boolean | number | string | string[] | null | undefined;
};

export type DocumentChildNode = DocumentType | Element;

export type ElementChildNode = Element | Text;

export type ElementContent = (Attributes | (ElementChildNode | Text | string)[] | string)[];

export type ElementFactory = (...content: ElementContent) => Element;

export type TagName =
  | 'a'
  | 'abbr'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'base'
  | 'bdi'
  | 'bdo'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dialog'
  | 'div'
  | 'dl'
  | 'dt'
  | 'em'
  | 'embed'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'head'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'label'
  | 'legend'
  | 'li'
  | 'link'
  | 'main'
  | 'map'
  | 'mark'
  | 'menu'
  | 'meta'
  | 'meter'
  | 'nav'
  | 'noscript'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'param'
  | 'picture'
  | 'pre'
  | 'progress'
  | 'q'
  | 'rb'
  | 'rp'
  | 'rt'
  | 'rtc'
  | 'ruby'
  | 's'
  | 'samp'
  | 'script'
  | 'section'
  | 'select'
  | 'slot'
  | 'small'
  | 'source'
  | 'span'
  | 'strong'
  | 'style'
  | 'sub'
  | 'summary'
  | 'sup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'template'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'title'
  | 'tr'
  | 'track'
  | 'u'
  | 'ul'
  | 'var'
  | 'video'
  | 'wbr';

/*
 * External types
 * -------------------------------------------------------------------------------------------------
 */

export type Document = {
  type: 'Document';
  childNodes: DocumentChildNode[];
};

export type DocumentType = {
  type: 'DocumentType';
  name: string;
  publicId: string;
  systemId: string;
};

export type Element = {
  type: 'Element';
  tagName: TagName;
  attributes: Attributes;
  childNodes: ElementChildNode[];
};

export type Node =
  | Document
  | DocumentType
  | Element
  | Text;

export type Text = {
  type: 'Text';
  data: string;
};
