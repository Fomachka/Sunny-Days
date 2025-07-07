import React, { useState } from 'react';
import { Mail, Copy, Edit, Eye, Send, Image, Type, Palette } from 'lucide-react';

const EmailTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Welcome Series',
      type: 'Onboarding',
      subject: 'Welcome to our community!',
      previewText: 'Get started with your new account',
      status: 'active',
      opens: '68%',
      clicks: '12%'
    },
    {
      id: 2,
      name: 'Product Launch',
      type: 'Announcement',
      subject: 'Introducing our latest innovation',
      previewText: 'Be the first to experience the future',
      status: 'draft',
      opens: '0%',
      clicks: '0%'
    },
    {
      id: 3,
      name: 'Monthly Newsletter',
      type: 'Newsletter',
      subject: 'Your monthly update is here',
      previewText: 'Industry insights and company news',
      status: 'scheduled',
      opens: '45%',
      clicks: '8%'
    }
  ];

  const EmailBuilder = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Email Builder</h3>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Preview
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Save Template
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        {/* Tools Panel */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Design Elements</h4>
            <div className="space-y-2">
              {[
                { icon: Type, label: 'Text Block' },
                { icon: Image, label: 'Image' },
                { icon: Palette, label: 'Button' },
                { icon: Mail, label: 'Social Links' }
              ].map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <tool.icon className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Settings</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Subject Line</label>
                <input 
                  type="text" 
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter subject line"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Preview Text</label>
                <input 
                  type="text" 
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter preview text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Email Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-gray-50 p-6 rounded-lg min-h-[600px]">
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
              {/* Email Header */}
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">LOGO</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Your Company</h3>
                      <p className="text-sm text-gray-500">company@email.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Newsletter</p>
                    <p className="text-xs text-gray-400">June 2024</p>
                  </div>
                </div>
              </div>

              {/* Email Content */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Our Community!</h1>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for joining us. We're excited to have you on board and can't wait to share amazing content with you.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center">
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Image className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-500">Drop your image here</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">What's Next?</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete your profile setup</li>
                    <li>• Explore our product features</li>
                    <li>• Join our community discussions</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Email Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                    <div className="w-8 h-8 bg-pink-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500">
                    © 2024 Your Company. All rights reserved.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Unsubscribe | Update preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Email Templates</h2>
          <p className="text-gray-600">Design and manage your email campaigns</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Import Template
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Create New
          </button>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.type}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                template.status === 'active' ? 'bg-green-100 text-green-700' :
                template.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {template.status}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-900">{template.subject}</p>
                <p className="text-sm text-gray-500">{template.previewText}</p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{template.opens} opens</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Send className="h-3 w-3" />
                  <span>{template.clicks} clicks</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Email Builder */}
      <EmailBuilder />
    </div>
  );
};

export default EmailTemplates;