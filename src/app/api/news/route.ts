// src/app/api/news/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  try {
    const feedUrls = [
      'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms',
      'https://news.google.com/rss/search?q=RBI+India&hl=en-IN&gl=IN&ceid=IN:en',
      'https://news.google.com/rss/search?q=SEBI+India&hl=en-IN&gl=IN&ceid=IN:en',
      'https://news.google.com/rss/search?q=financial+news+India&hl=en-IN&gl=IN&ceid=IN:en',
    ];

    const allItems = await Promise.all(feedUrls.map(async url => {
      try {
        // Fetch the RSS feed content
        const response = await fetch(url);
        
        if (!response.ok) {
          console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
          return [];
        }
        
        // Get the text content
        const feedContent = await response.text();
        
        // Parse the feed content
        const feed = await parser.parseString(feedContent);
        
        return feed.items.map(item => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || '',
          source: feed.title || '',
        }));
      } catch (err) {
        console.error(`Error processing feed ${url}:`, err);
        return []; // Return empty array for this feed to avoid breaking the whole request
      }
    }));

    const sorted = allItems.flat().sort(
      (a, b) => new Date(b.pubDate || '').getTime() - new Date(a.pubDate || '').getTime()
    );

    return NextResponse.json(sorted.slice(0, 10));
  } catch (error) {
    console.error('News fetch failed:', error);
    return NextResponse.json({ error: 'Failed to fetch news.' }, { status: 500 });
  }
}
