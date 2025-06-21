'use client';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * JsonLd component for adding structured data to pages
 * @param data The structured data object to be serialized as JSON-LD
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
