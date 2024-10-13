import {createClient} from '@sanity/client';
import {fetchQuery} from './utils/supports';

//fetching the data from sanity//
const client = createClient({
  projectId: 'ueycdpee',
  dataset: 'production',
  apiVersion: 'v2022-03-07',
  useCdn: true,
});

export const fetchFeeds = async () => {
  let data = await client.fetch(fetchQuery).then(feeds => {
    return feeds;
  });
  return data;
};
