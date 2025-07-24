import { User, SocialSet, Platform, Post, AnalyticsData, Influencer, Message, MediaItem, Collaborator } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  businessName: 'Creative Studio Co.',
  role: 'Marketing Manager',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  isLoggedIn: false
};

export const mockPlatforms: Platform[] = [
  {
    id: '1',
    name: 'Instagram Business',
    type: 'instagram',
    isConnected: true,
    accountName: '@creativestudio',
    followers: 12500
  },
  {
    id: '2',
    name: 'Twitter',
    type: 'twitter',
    isConnected: true,
    accountName: '@creativestudio_co',
    followers: 8300
  },
  {
    id: '3',
    name: 'Facebook Page',
    type: 'facebook',
    isConnected: true,
    accountName: 'Creative Studio Co.',
    followers: 15200
  },
  {
    id: '4',
    name: 'LinkedIn Company',
    type: 'linkedin',
    isConnected: false,
    accountName: '',
    followers: 0
  }
];

export const mockSocialSets: SocialSet[] = [
  {
    id: '1',
    name: 'Main Brand',
    platforms: mockPlatforms.slice(0, 3),
    userId: '1'
  },
  {
    id: '2',
    name: 'Personal Brand',
    platforms: [mockPlatforms[1]],
    userId: '1'
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Summer Collection Launch',
    content: 'Excited to announce our new summer collection! ☀️ Fresh designs, vibrant colors, and sustainable materials. What do you think? #SummerCollection #Sustainable #Design',
    mediaUrls: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    platforms: ['instagram', 'facebook'],
    scheduledDate: new Date('2025-01-20T14:30:00').toISOString(),
    status: 'scheduled',
    socialSetId: '1',
    hashtags: ['#SummerCollection', '#Sustainable', '#Design'],
    location: 'New York, NY'
  },
  {
    id: '2',
    title: 'Behind the Scenes',
    content: 'Take a look behind the scenes at our design process. From sketch to final product! 🎨 #BehindTheScenes #DesignProcess #Creative',
    mediaUrls: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    platforms: ['instagram', 'twitter'],
    scheduledDate: new Date('2025-01-18T16:00:00').toISOString(),
    status: 'published',
    socialSetId: '1',
    hashtags: ['#BehindTheScenes', '#DesignProcess', '#Creative']
  },
  {
    id: '3',
    title: 'Monday Motivation',
    content: 'Start your week with creativity and passion! What are you working on today? 💪 #MondayMotivation #Creative #WorkLife',
    mediaUrls: [],
    platforms: ['twitter', 'linkedin'],
    scheduledDate: new Date('2025-01-22T09:00:00').toISOString(),
    status: 'draft',
    socialSetId: '1',
    hashtags: ['#MondayMotivation', '#Creative', '#WorkLife']
  }
];

export const mockAnalytics: AnalyticsData[] = [
  {
    platform: 'Instagram',
    followers: 12500,
    reach: 8900,
    impressions: 15600,
    engagement: 892,
    clicks: 234,
    sentiment: 'positive',
    date: '2025-01-15'
  },
  {
    platform: 'Twitter',
    followers: 8300,
    reach: 5200,
    impressions: 9800,
    engagement: 456,
    clicks: 123,
    sentiment: 'positive',
    date: '2025-01-15'
  },
  {
    platform: 'Facebook',
    followers: 15200,
    reach: 11200,
    impressions: 18900,
    engagement: 1234,
    clicks: 345,
    sentiment: 'neutral',
    date: '2025-01-15'
  }
];

export const mockInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Alex Creative',
    platform: 'Instagram',
    handle: '@alexcreative',
    followers: 45000,
    engagementRate: 4.2,
    category: 'Design',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    recentMentions: 3,
    sentiment: 'positive'
  },
  {
    id: '2',
    name: 'Design Guru',
    platform: 'Twitter',
    handle: '@designguru',
    followers: 28000,
    engagementRate: 3.8,
    category: 'Design',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    recentMentions: 1,
    sentiment: 'positive'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    platform: 'Instagram',
    from: 'john_doe_design',
    content: 'Love your latest collection! Where can I purchase?',
    timestamp: new Date('2025-01-16T10:30:00').toISOString(),
    isRead: false,
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    platform: 'Twitter',
    from: 'creative_mind',
    content: 'Your design process video was amazing! Thanks for sharing.',
    timestamp: new Date('2025-01-16T08:15:00').toISOString(),
    isRead: true,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockMediaItems: MediaItem[] = [
  {
    id: '1',
    name: 'summer-collection-hero.jpg',
    url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'image',
    size: 2345000,
    uploadedAt: new Date('2025-01-15T14:20:00').toISOString(),
    source: 'local'
  },
  {
    id: '2',
    name: 'behind-the-scenes.jpg',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'image',
    size: 1876000,
    uploadedAt: new Date('2025-01-14T16:45:00').toISOString(),
    source: 'gdrive'
  },
  {
    id: '3',
    name: 'product-showcase.mp4',
    url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    type: 'video',
    size: 5678000,
    uploadedAt: new Date('2025-01-13T11:30:00').toISOString(),
    source: 'dropbox'
  }
];

export const mockCollaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Michael Chen',
    email: 'michael@creativestudio.com',
    role: 'editor',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    lastActive: new Date('2025-01-16T15:30:00').toISOString()
  },
  {
    id: '2',
    name: 'Emma Wilson',
    email: 'emma@creativestudio.com',
    role: 'viewer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    lastActive: new Date('2025-01-16T09:15:00').toISOString()
  }
];