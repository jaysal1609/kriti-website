import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

// Define metadata for the EMI calculator page
export const metadata: Metadata = getPageMetadata(
  'EMI Calculator',
  'Calculate your loan EMI easily with our free EMI calculator. Plan your loans smartly with Kriti Systems.'
);
