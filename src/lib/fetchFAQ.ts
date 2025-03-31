import { contentfulClient } from './contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderOptions } from './renderOptions';
import type { EntryFieldTypes } from 'contentful';

interface FAQ {
  contentTypeId: 'faq';
  fields: {
    title: EntryFieldTypes.Symbol; // Changed from question to title and type to Symbol
    answer: EntryFieldTypes.RichText;
    category?: EntryFieldTypes.EntryLink<{ fields: { name: string }, contentTypeId: string }>;
  };
}

export const fetchFAQ = async () => {
  const entries = await contentfulClient.getEntries<FAQ>({
    content_type: 'faq',
  });

  return entries.items.map((item) => ({
    // Use title directly as it's already a string, not RichText
    question: item.fields.title,
    // Convert answer from RichText to HTML string
    answer: documentToHtmlString(item.fields.answer, renderOptions),
  }));
};