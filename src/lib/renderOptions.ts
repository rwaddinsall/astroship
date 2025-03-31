import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    [BLOCKS.UL_LIST]: (node, next) => `<ul>${next(node.content)}</ul>`,
    [BLOCKS.OL_LIST]: (node, next) => `<ol>${next(node.content)}</ol>`,
    [BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
    [INLINES.HYPERLINK]: (node, next) => `<a href="${node.data.uri}">${next(node.content)}</a>`,
  },
};