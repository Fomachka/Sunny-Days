import React, { useState } from 'react';
import { Image, Video, FileText, Upload, Search, Filter, Grid, List, Play, Download, Share2, Trash2 } from 'lucide-react';

const ContentLibrary = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedType, setSelectedType] = useState('all');

  const contentTypes = [
    { id: 'all', label: 'All Content', icon: Grid },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'documents', label: 'Documents', icon: FileText }
  ];

  const mediaItems = [
    {
      id: 1,
      name: 'Product Hero Banner',
      type: 'image',
      size: '2.4 MB',
      dimensions: '1920x1080',
      format: 'JPG',
      uploadDate: '2024-06-10',
      tags: ['product', 'hero', 'banner'],
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2'
    },
    {
      id: 2,
      name: 'Team Meeting Video',
      type: 'video',
      size: '45.2 MB',
      dimensions: '1920x1080',
      format: 'MP4',
      duration: '2:34',
      uploadDate: '2024-06-08',
      tags: ['team', 'meeting', 'corporate'],
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2'
    },
    {
      id: 3,
      name: 'Brand Guidelines',
      type: 'document',
      size: '1.8 MB',
      format: 'PDF',
      uploadDate: '2024-06-05',
      tags: ['brand', 'guidelines', 'style'],
      url: null
    },
    {
      id: 4,
      name: 'Social Media Assets',
      type: 'image',
      size: '1.2 MB',
      dimensions: '1080x1080',
      format: 'PNG',
      uploadDate: '2024-06-12',
      tags: ['social', 'instagram', 'square'],
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2'
    },
    {
      id: 5,
      name: 'Product Demo Video',
      type: 'video',
      size: '78.5 MB',
      dimensions: '1920x1080',
      format: 'MP4',
      duration: '4:12',
      uploadDate: '2024-06-07',
      tags: ['product', 'demo', 'tutorial'],
      url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2'
    },
    {
      id: 6,
      name: 'Marketing Presentation',
      type: 'document',
      size: '3.1 MB',
      format: 'PPTX',
      uploadDate: '2024-06-03',
      tags: ['marketing', 'presentation', 'slides'],
      url: null
    }
  ];

  const filteredItems = selectedType === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => {
        if (selectedType === 'images') return item.type === 'image';
        if (selectedType === 'videos') return item.type === 'video';
        if (selectedType === 'documents') return item.type === 'document';
        return true;
      });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
          <div className="relative">
            {item.type === 'image' && (
              <div className="relative h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {item.type === 'video' && (
              <div className="relative h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-700 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {item.duration}
                </div>
              </div>
            )}
            
            {item.type === 'document' && (
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-xl flex items-center justify-center">
                <FileText className="h-16 w-16 text-gray-400" />
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2 truncate">{item.name}</h3>
            <div className="space-y-1 text-sm text-gray-500">
              <p>{item.format} • {item.size}</p>
              {item.dimensions && <p>{item.dimensions}</p>}
              <p>Uploaded {item.uploadDate}</p>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Size</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2">Actions</div>
      </div>
      
      {filteredItems.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <div className="col-span-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {item.type === 'image' && <Image className="h-5 w-5 text-gray-600" />}
              {item.type === 'video' && <Video className="h-5 w-5 text-gray-600" />}
              {item.type === 'document' && <FileText className="h-5 w-5 text-gray-600" />}
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 truncate">{item.name}</p>
              <p className="text-sm text-gray-500">{item.dimensions}</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full uppercase">
              {item.format}
            </span>
          </div>
          <div className="col-span-2 flex items-center text-sm text-gray-600">
            {item.size}
          </div>
          <div className="col-span-2 flex items-center text-sm text-gray-600">
            {item.uploadDate}
          </div>
          <div className="col-span-2 flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Library</h2>
          <p className="text-gray-600">Organize and manage your marketing assets</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Upload Content</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search content..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>All Tags</option>
              <option>Product</option>
              <option>Brand</option>
              <option>Social</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Type Filter */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {contentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedType === type.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'grid' ? <GridView /> : <ListView />}

      {/* Upload Zone */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="max-w-md mx-auto">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload new content</h3>
          <p className="text-gray-600 mb-4">
            Drag and drop your files here, or click to browse
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>JPG, PNG, MP4, PDF</span>
            <span>•</span>
            <span>Max 100MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLibrary;