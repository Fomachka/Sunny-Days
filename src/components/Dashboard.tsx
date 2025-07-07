import React from 'react';
import { TrendingUp, Users, DollarSign, Eye, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { 
      title: 'Total Revenue', 
      value: '$284,502', 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    { 
      title: 'Active Campaigns', 
      value: '24', 
      change: '+3', 
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    { 
      title: 'Total Reach', 
      value: '1.2M', 
      change: '+8.3%', 
      trend: 'up',
      icon: Eye,
      color: 'text-purple-600'
    },
    { 
      title: 'Conversions', 
      value: '3,847', 
      change: '-2.1%', 
      trend: 'down',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const chartData = [
    { month: 'Jan', revenue: 45000, campaigns: 12 },
    { month: 'Feb', revenue: 52000, campaigns: 15 },
    { month: 'Mar', revenue: 48000, campaigns: 18 },
    { month: 'Apr', revenue: 61000, campaigns: 22 },
    { month: 'May', revenue: 55000, campaigns: 20 },
    { month: 'Jun', revenue: 67000, campaigns: 24 }
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-50`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
              <option>This year</option>
            </select>
          </div>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">${(data.revenue / 1000).toFixed(0)}k</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: 'Summer Sale 2024', performance: 94, budget: '$12,000', roi: '340%' },
              { name: 'Brand Awareness Q2', performance: 87, budget: '$8,500', roi: '280%' },
              { name: 'Product Launch', performance: 76, budget: '$15,000', roi: '220%' },
              { name: 'Holiday Campaign', performance: 65, budget: '$10,000', roi: '180%' }
            ].map((campaign, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                  <p className="text-sm text-gray-600">Budget: {campaign.budget}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{campaign.roi} ROI</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${campaign.performance}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{campaign.performance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Email campaign "Newsletter Q2" sent to 15,000 subscribers', time: '2 hours ago', type: 'email' },
            { action: 'Social media post scheduled for Instagram and Facebook', time: '4 hours ago', type: 'social' },
            { action: 'New lead captured from landing page', time: '6 hours ago', type: 'lead' },
            { action: 'Campaign budget increased by $2,000', time: '1 day ago', type: 'budget' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border-l-4 border-blue-500 bg-blue-50">
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;