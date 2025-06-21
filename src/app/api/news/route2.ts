// For app router: /app/api/news/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sampleNews = [
      {
        title: "RBI keeps repo rate unchanged at 6.5%",
        link: "https://rbi.org.in",
        source: "RBI",
      },
      {
        title: "SEBI eases norms for SME IPOs",
        link: "https://sebi.gov.in",
        source: "SEBI",
      },
      {
        title: "India's inflation under control at 4.8%",
        link: "https://economictimes.indiatimes.com",
        source: "ET Markets",
      },
    ];

    return NextResponse.json(sampleNews); // ✅ Always return array
  } catch (err) {
    console.error("❌ News fetch failed:", err);
    return NextResponse.json({ error: "Failed to fetch news." }, { status: 500 });
  }
}
