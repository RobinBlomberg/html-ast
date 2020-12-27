import * as AST from './ast.js';

const _var: AST.ElementFactory;

export const document: (childNodes?: AST.DocumentChildNode[]) => AST.Document;

export const doctype: (name?: string, publicId?: string, systemId?: string) => AST.DocumentType;

export const element: (tagName: AST.TagName, ...content: AST.ElementContent) => AST.Element;

export const text: (data?: string) => AST.Text;

export const a: AST.ElementFactory;
export const abbr: AST.ElementFactory;
export const address: AST.ElementFactory;
export const area: AST.ElementFactory;
export const article: AST.ElementFactory;
export const aside: AST.ElementFactory;
export const audio: AST.ElementFactory;
export const b: AST.ElementFactory;
export const base: AST.ElementFactory;
export const bdi: AST.ElementFactory;
export const bdo: AST.ElementFactory;
export const blockquote: AST.ElementFactory;
export const body: AST.ElementFactory;
export const br: AST.ElementFactory;
export const button: AST.ElementFactory;
export const canvas: AST.ElementFactory;
export const caption: AST.ElementFactory;
export const cite: AST.ElementFactory;
export const code: AST.ElementFactory;
export const col: AST.ElementFactory;
export const colgroup: AST.ElementFactory;
export const data: AST.ElementFactory;
export const datalist: AST.ElementFactory;
export const dd: AST.ElementFactory;
export const del: AST.ElementFactory;
export const details: AST.ElementFactory;
export const dfn: AST.ElementFactory;
export const dialog: AST.ElementFactory;
export const div: AST.ElementFactory;
export const dl: AST.ElementFactory;
export const dt: AST.ElementFactory;
export const em: AST.ElementFactory;
export const embed: AST.ElementFactory;
export const fieldset: AST.ElementFactory;
export const figcaption: AST.ElementFactory;
export const figure: AST.ElementFactory;
export const footer: AST.ElementFactory;
export const form: AST.ElementFactory;
export const h1: AST.ElementFactory;
export const h2: AST.ElementFactory;
export const h3: AST.ElementFactory;
export const h4: AST.ElementFactory;
export const h5: AST.ElementFactory;
export const h6: AST.ElementFactory;
export const head: AST.ElementFactory;
export const header: AST.ElementFactory;
export const hgroup: AST.ElementFactory;
export const hr: AST.ElementFactory;
export const html: AST.ElementFactory;
export const i: AST.ElementFactory;
export const iframe: AST.ElementFactory;
export const img: AST.ElementFactory;
export const input: AST.ElementFactory;
export const ins: AST.ElementFactory;
export const kbd: AST.ElementFactory;
export const label: AST.ElementFactory;
export const legend: AST.ElementFactory;
export const li: AST.ElementFactory;
export const link: AST.ElementFactory;
export const main: AST.ElementFactory;
export const map: AST.ElementFactory;
export const mark: AST.ElementFactory;
export const menu: AST.ElementFactory;
export const meta: AST.ElementFactory;
export const meter: AST.ElementFactory;
export const nav: AST.ElementFactory;
export const noscript: AST.ElementFactory;
export const object: AST.ElementFactory;
export const ol: AST.ElementFactory;
export const optgroup: AST.ElementFactory;
export const option: AST.ElementFactory;
export const output: AST.ElementFactory;
export const p: AST.ElementFactory;
export const param: AST.ElementFactory;
export const picture: AST.ElementFactory;
export const pre: AST.ElementFactory;
export const progress: AST.ElementFactory;
export const q: AST.ElementFactory;
export const rb: AST.ElementFactory;
export const rp: AST.ElementFactory;
export const rt: AST.ElementFactory;
export const rtc: AST.ElementFactory;
export const ruby: AST.ElementFactory;
export const s: AST.ElementFactory;
export const samp: AST.ElementFactory;
export const script: AST.ElementFactory;
export const section: AST.ElementFactory;
export const select: AST.ElementFactory;
export const slot: AST.ElementFactory;
export const small: AST.ElementFactory;
export const source: AST.ElementFactory;
export const span: AST.ElementFactory;
export const strong: AST.ElementFactory;
export const style: AST.ElementFactory;
export const sub: AST.ElementFactory;
export const summary: AST.ElementFactory;
export const sup: AST.ElementFactory;
export const table: AST.ElementFactory;
export const tbody: AST.ElementFactory;
export const td: AST.ElementFactory;
export const template: AST.ElementFactory;
export const textarea: AST.ElementFactory;
export const tfoot: AST.ElementFactory;
export const th: AST.ElementFactory;
export const thead: AST.ElementFactory;
export const time: AST.ElementFactory;
export const title: AST.ElementFactory;
export const tr: AST.ElementFactory;
export const track: AST.ElementFactory;
export const u: AST.ElementFactory;
export const ul: AST.ElementFactory;
export { _var as var };
export const video: AST.ElementFactory;
export const wbr: AST.ElementFactory;

export { AST };