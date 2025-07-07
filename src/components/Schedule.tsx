import React, { useState } from 'react';
import { Calendar, Clock, Plus, Edit, Trash2, Tag } from 'lucide-react';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('week');

  const campaigns = [
    {
      id: 1,
      title: 'Summer Sale Email Blast',
      type: 'email',
      date: '2024-06-15',
      time: '09:00',
      status: 'scheduled',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Instagram Story Campaign',
      type: 'social',
      date: '2024-06-15',
      time: '14:30',
      status: 'active',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Product Launch Announcement',
      type: 'press',
      date: '2024-06-16',
      time: '10:00',
      status: 'scheduled',
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Facebook Ad Campaign',
      type: 'ads',
      date: '2024-06-17',
      time: '08:00',
      status: 'scheduled',
      color: 'bg-orange-500'
    }
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentWeek = [15, 16, 17, 18, 19, 20, 21];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketing Schedule</h2>
          <p className="text-gray-600">Plan and manage your marketing campaigns</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('week')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'week' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'month' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Month
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Campaign</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">June 2024</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Calendar className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {weekDays.map((day) => (
            <div key={day} className="bg-gray-50 p-4 text-center">
              <span className="text-sm font-medium text-gray-700">{day}</span>
            </div>
          ))}
          
          {currentWeek.map((date, index) => (
            <div key={date} className="bg-white p-4 min-h-[120px] relative">
              <div className="text-sm font-medium text-gray-900 mb-2">{date}</div>
              <div className="space-y-1">
                {campaigns
                  .filter(campaign => new Date(campaign.date).getDate() === date)
                  .map((campaign) => (
                    <div key={campaign.id} className={`${campaign.color} text-white p-2 rounded text-xs font-medium truncate`}>
                      {campaign.title}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Campaigns</h3>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-4 h-4 rounded-full ${campaign.color}`}></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{campaign.title}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{campaign.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{campaign.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Tag className="h-3 w-3" />
                      <span className="capitalize">{campaign.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Types */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Distribution</h3>
          <div className="space-y-4">
            {[
              { type: 'Email Marketing', count: 12, percentage: 35, color: 'bg-blue-500' },
              { type: 'Social Media', count: 8, percentage: 25, color: 'bg-purple-500' },
              { type: 'Paid Advertising', count: 7, percentage: 20, color: 'bg-orange-500' },
              { type: 'Content Marketing', count: 5, percentage: 15, color: 'bg-green-500' },
              { type: 'PR & Events', count: 2, percentage: 5, color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{item.type}</span>
                    <span className="text-sm text-gray-500">{item.count} campaigns</span>
                  </div>
                  <div className="mt-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;