export interface User {
  id: string;
  name: string;
  email: string;
  businessName?: string;
  role?: string;
  avatar?: string;
  isLoggedIn: boolean;
}

export interface SocialSet {
  id: string;
  name: string;
  platforms: Platform[];
  userId: string;
}

export interface Platform {
  id: string;
  name: string;
  type: 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'tiktok' | 'youtube';
  isConnected: boolean;
  accountName?: string;
  followers?: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  mediaUrls: string[];
  platforms: string[];
  scheduledDate: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  socialSetId: string;
  hashtags: string[];
  location?: string;
  taggedUsers?: string[];
}

export interface AnalyticsData {
  platform: string;
  followers: number;
  reach: number;
  impressions: number;
  engagement: number;
  clicks: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  date: string;
}

export interface Influencer {
  id: string;
  name: string;
  platform: string;
  handle: string;
  followers: number;
  engagementRate: number;
  category: string;
  avatar: string;
  recentMentions: number;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface Message {
  id: string;
  platform: string;
  from: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  avatar?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video';
  size: number;
  uploadedAt: string;
  source: 'local' | 'gdrive' | 'dropbox';
}

export interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar?: string;
  lastActive: string;
}