/**
 * Data contracts and types for PardehNegar Serverless API & KV Storage
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: 'ethnomusicology' | 'radif_analysis' | 'violin_technique' | 'organology' | 'acoustics' | string;
  categoryLabelFa: string;
  tags: string[];
  coverImageUrl?: string;
  audioUrl?: string;
  audioTitle?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  readingTimeMinutes: number;
  likesCount: number;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Env {
  BLOG_KV?: any; // Cloudflare KVNamespace
  ASSETS?: any;  // Cloudflare Static Assets Fetcher
  MODIRIAT_ADMIN?: string;
  VITE_MODIRIAT_ADMIN?: string;
  [key: string]: any;
}
