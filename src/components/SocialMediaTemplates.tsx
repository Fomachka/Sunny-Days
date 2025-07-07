import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Play, Image, Hash, AtSign } from 'lucide-react';

// Add types for templates and PostPreview

type Template = {
  id: number;
  type: string;
  title: string;
  description: string;
  engagement: string;
  dimensions: string;
  media?: File | null;
};

type TemplatesMap = {
  [key: string]: Template[];
};

const templates: TemplatesMap = {
  instagram: [
    {
      id: 1,
      type: 'Story',
      title: 'Product Showcase',
      description: 'Highlight your latest products with style',
      engagement: '4.2K views',
      dimensions: '1080x1920',
      media: null // Add media field
    },
    {
      id: 2,
      type: 'Post',
      title: 'Behind the Scenes',
      description: 'Share your company culture and process',
      engagement: '2.8K likes',
      dimensions: '1080x1080',
      media: null
    },
    {
      id: 3,
      type: 'Reel',
      title: 'Tutorial Video',
      description: 'Educational content that drives engagement',
      engagement: '12.5K views',
      dimensions: '1080x1920',
      media: null
    }
  ],
  facebook: [
    {
      id: 1,
      type: 'Post',
      title: 'Event Promotion',
      description: 'Drive attendance to your events',
      engagement: '890 shares',
      dimensions: '1200x630'
    },
    {
      id: 2,
      type: 'Cover',
      title: 'Brand Header',
      description: 'Professional cover image template',
      engagement: '2.1K views',
      dimensions: '820x312'
    }
  ],
  twitter: [
    {
      id: 1,
      type: 'Tweet',
      title: 'Thread Template',
      description: 'Multi-tweet educational content',
      engagement: '456 retweets',
      dimensions: 'Text-based'
    },
    {
      id: 2,
      type: 'Header',
      title: 'Profile Banner',
      description: 'Professional Twitter header',
      engagement: '1.2K views',
      dimensions: '1500x500'
    }
  ],
  linkedin: [
    {
      id: 1,
      type: 'Post',
      title: 'Industry Insights',
      description: 'Thought leadership content',
      engagement: '234 comments',
      dimensions: '1200x627'
    },
    {
      id: 2,
      type: 'Article',
      title: 'Company Update',
      description: 'Professional announcement template',
      engagement: '567 views',
      dimensions: '1200x627'
    }
  ]
};

const SocialMediaTemplates = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'bg-blue-400' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' }
  ];

  const PostPreview = ({ platform }: { platform: string }) => {
    const previews: { [key: string]: JSX.Element } = {
      instagram: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-sm">
          {/* Instagram Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">your_company</p>
                <p className="text-xs text-gray-500">Sponsored</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Instagram Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-64 flex items-center justify-center">
              <Image className="h-12 w-12 text-white opacity-50" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-50 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Drop your product image here</p>
                <p className="text-xs opacity-75">Perfect for showcasing your latest offerings</p>
              </div>
            </div>
          </div>

          {/* Instagram Actions */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">1,234 likes</p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-medium">your_company</span> Excited to share our latest innovation! 
                <span className="text-blue-600"> #innovation #product #launch</span>
              </p>
            </div>
          </div>
        </div>
      ),
      facebook: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-lg">
          {/* Facebook Header */}
          <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">YC</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Your Company</p>
              <p className="text-xs text-gray-500">2 hours ago • 🌍</p>
            </div>
          </div>

          {/* Facebook Content */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-700">
              Join us for our upcoming product launch event! We're excited to introduce game-changing features that will transform how you work. 
              <span className="text-blue-600"> #ProductLaunch #Innovation</span>
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Image className="h-8 w-8 mx-auto mb-2 opacity-75" />
                <p className="text-sm font-medium">Upload your event banner</p>
              </div>
            </div>
          </div>

          {/* Facebook Actions */}
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>👍 💝 😊 89</span>
              <span>12 comments • 5 shares</span>
            </div>
          </div>
        </div>
      )
    };

    return previews[platform] || previews.instagram;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Social Media Templates</h2>
          <p className="text-gray-600">Create engaging content for all platforms</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg bg-gray-200 transition-colors">
            Content Calendar
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg bg-blue-700 transition-colors">
            Create Post
          </button>
        </div>
      </div>

      {/* Platform Selector */}
      <div className="flex space-x-2 bg-gray-100 p-2 rounded-lg">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlatform === platform.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 text-gray-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{platform.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Templates List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {platforms.find(p => p.id === selectedPlatform)?.name} Templates
          </h3>
          
          {templates[selectedPlatform]?.map((template: Template, idx: number) => (
            <div key={template.id} className="bg-[#ffffe7] p-6 rounded-xl shadow-xl border border-[#efccb6] shadow-2xl transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${selectedPlatform === 'instagram' ? 'bg-gradient-to-br from-[#ff5a08] to-[#fbaf00]' : platforms.find(p => p.id === selectedPlatform)?.color} rounded-lg flex items-center justify-center`}>
                    {template.type === 'Story' && <Image className="h-5 w-5 text-white" />}
                    {template.type === 'Post' && <Hash className="h-5 w-5 text-white" />}
                    {template.type === 'Reel' && <Play className="h-5 w-5 text-white" />}
                    {template.type === 'Cover' && <Image className="h-5 w-5 text-white" />}
                    {template.type === 'Tweet' && <AtSign className="h-5 w-5 text-white" />}
                    {template.type === 'Header' && <Image className="h-5 w-5 text-white" />}
                    {template.type === 'Article' && <Hash className="h-5 w-5 text-white" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-text-[#ff5a08] transition-colors duration-300">{template.title}</h4>
                    <p className="text-sm text-gray-500">{template.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{template.engagement}</p>
                  <p className="text-xs text-gray-500">{template.dimensions}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              {/* Media Embed/Dropzone */}
              {selectedPlatform === 'instagram' && (
                <div className="mb-4">
                  <label className="block text-xs font-medium text-[#ff5a08] mb-1">Media (Image/Video)</label>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#fbaf00] rounded-lg p-4 bg-[#efccb6] bg-opacity-30 bg-opacity-50 transition-colors duration-300 cursor-pointer">
                    <span className="text-[#ff5a08] text-sm mb-2">Drag & drop or click to upload</span>
                    <input type="file" accept="image/*,video/*" className="hidden" id={`media-upload-${idx}`} />
                    <label htmlFor={`media-upload-${idx}`} className="cursor-pointer px-3 py-1 bg-[#fbaf00] text-white rounded-lg font-medium bg-[#ff5a08] transition-colors duration-300">Upload</label>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-[#efccb6] text-[#ff5a08] text-xs rounded-full">
                    {template.dimensions}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm font-medium text-[#ff5a08] bg-[#fbaf00] rounded-lg bg-[#ff5a08] text-white transition-colors duration-300">
                    Preview
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-white bg-[#ff5a08] rounded-lg bg-[#fbaf00] text-[#ff5a08] transition-colors duration-300">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview */}
        <div className="sticky top-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
            <div className="flex justify-center">
              <PostPreview platform={selectedPlatform} />
            </div>
          </div>

          {/* Content Guidelines */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Guidelines</h3>
            <div className="space-y-3">
              {selectedPlatform === 'instagram' && (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Use high-quality, square images (1080x1080)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Include relevant hashtags (5-10 recommended)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Stories are vertical (1080x1920)</span>
                  </div>
                </>
              )}
              {selectedPlatform === 'facebook' && (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Optimal image size: 1200x630</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Posts with images get 2.3x more engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Keep text overlay under 20%</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTemplates;