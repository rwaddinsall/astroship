import { contentfulClient } from './contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderOptions } from './renderOptions';
import type { EntryFieldTypes } from 'contentful';

interface Artist{
  contentTypeId: 'Artist';
  fields: {
    question: EntryFieldTypes.RichText;
    answer: EntryFieldTypes.RichText;
  };
}

export const fetchFAQ = async () => {
  const entries = await contentfulClient.getEntries<FAQ>({
    content_type: 'faq',
  });

  return entries.items.map((item) => ({
    question: documentToHtmlString(item.fields.question, renderOptions),
    answer: documentToHtmlString(item.fields.answer),
  }));
};