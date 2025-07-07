import React, { useState, useEffect } from 'react';
import { Calendar, Target, DollarSign, TrendingUp, Users, Mail, Instagram, Play, BarChart3, Eye, Zap, CheckCircle, ArrowRight, Star, Award, Lightbulb, Clock, Globe, Heart, Sparkles, Sun, Shield, Camera, MessageCircle, Share2, ThumbsUp, MousePointer, Upload, Image } from 'lucide-react';
import tubeImg from './assets/tube.png';

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    interval = setInterval(() => {
      setTimelineProgress(prev => {
        if (prev >= 100) {
          if (interval) clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Faster animation, adjust as needed
    return () => { if (interval) clearInterval(interval); };
  }, []);

  const HoverCard = ({ children, hoverContent, className = "", index, position = "right", wide = false }: { children: React.ReactNode; hoverContent: React.ReactNode; index: number; position?: 'left' | 'center' | 'right'; wide?: boolean; className?: string }) => (
    <div 
      className={`relative group ${className} `}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {children}
      {hoveredCard === index && (
        <div className={`absolute z-[999] bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-3xl sm:min-w-[400px] min-w-0 transform scale-100 opacity-100 overflow-visible ${
          position === 'left' ? '-right-2 top-0' : 
          position === 'center' ? 'left-1/2 transform -translate-x-1/2 -top-2' :
          'left-full ml-4 -top-2'
        }`}>
          <div className={`absolute top-4 w-0 h-0 border-t-4 border-b-4 ${
            position === 'left' 
              ? 'right-0 border-l-4 border-transparent border-l-gray-900 -mr-1' 
              : position === 'center'
              ? 'left-1/2 transform -translate-x-1/2 border-r-4 border-l-4 border-transparent border-b-gray-900 -mt-1 top-0'
              : 'left-0 border-r-4 border-transparent border-r-gray-900 -ml-1'
          }`}></div>
          <div className="relative">
            {hoverContent}
          </div>
        </div>
      )}
    </div>
  );

  const timelineData = [
    {
      week: 1,
      phase: "Teaser & Anticipation",
      date: "Jul 10-14",
      actions: ["Teaser IG Story", "Pre-order email", "Countdown campaign"],
      channels: ["Instagram Stories", "Email"],
      goals: "Awareness + lead collection",
      budget: "₩200,000",
      expectedReach: "50K+",
      color: "from-blue-400 to-blue-600",
      icon: Eye,
      details: {
        strategy: "Create mystery and anticipation around the product launch",
        tactics: ["Behind-the-scenes content", "Countdown stickers", "Exclusive preview for subscribers"],
        kpis: ["Story completion rate: 70%+", "Email sign-ups: 2,000+", "Engagement rate: 8%+"]
      }
    },
    {
      week: 2,
      phase: "Launch & Educate",
      date: "Jul 15-21",
      actions: ["TikTok UV Test Video", "Product Launch IG Carousel", "Influencer partnerships"],
      channels: ["TikTok", "Instagram Feed", "Website"],
      goals: "Traffic + engagement",
      budget: "₩500,000",
      expectedReach: "150K+",
      color: "from-purple-400 to-purple-600",
      icon: Sparkles,
      details: {
        strategy: "Showcase product benefits through visual demonstrations",
        tactics: ["UV camera reveals", "Before/after comparisons", "Expert testimonials"],
        kpis: ["Video completion rate: 65%+", "Website traffic: +40%", "Product page views: 10K+"]
      }
    },
    {
      week: 3,
      phase: "Engage & Convert",
      date: "Jul 22-28",
      actions: ["UGC collection", "Paid Ads launch", "Educational email series"],
      channels: ["Instagram Feed", "Paid Ads", "Email"],
      goals: "Conversion + education",
      budget: "₩800,000",
      expectedReach: "300K+",
      color: "from-green-400 to-green-600",
      icon: Target,
      details: {
        strategy: "Convert interest into sales through targeted advertising",
        tactics: ["Lookalike audiences", "Retargeting campaigns", "Limited-time offers"],
        kpis: ["Conversion rate: 12%+", "ROAS: 3.5x+", "Email CTR: 6%+"]
      }
    },
    {
      week: 4,
      phase: "Community Building",
      date: "Jul 29-Aug 4",
      actions: ["UGC reposts", "Blog article", "SEO optimization"],
      channels: ["Instagram Stories", "Blog", "Organic search"],
      goals: "Community + SEO",
      budget: "₩300,000",
      expectedReach: "200K+",
      color: "from-yellow-400 to-orange-500",
      icon: Users,
      details: {
        strategy: "Build community and improve organic discoverability",
        tactics: ["Customer spotlights", "Educational content", "SEO-optimized articles"],
        kpis: ["UGC submissions: 500+", "Blog traffic: 15K+", "Organic reach: +25%"]
      }
    },
    {
      week: 5,
      phase: "Viral Push",
      date: "Aug 5-18",
      actions: ["#SunnyDaysChallenge", "Giveaway campaign", "Influencer collaborations"],
      channels: ["TikTok", "Instagram Feed", "Stories"],
      goals: "Viral reach + community",
      budget: "₩700,000",
      expectedReach: "500K+",
      color: "from-pink-400 to-red-500",
      icon: TrendingUp,
      details: {
        strategy: "Maximize reach through viral content and challenges",
        tactics: ["Hashtag challenges", "Prize giveaways", "Micro-influencer network"],
        kpis: ["Challenge participation: 1K+", "Hashtag reach: 2M+", "Follower growth: +15%"]
      }
    },
    {
      week: 6,
      phase: "Final Push & Analysis",
      date: "Aug 19-25",
      actions: ["Final promotions", "Wrap-up content", "Performance analysis"],
      channels: ["All channels", "Analytics"],
      goals: "Final conversions + insights",
      budget: "₩500,000",
      expectedReach: "400K+",
      color: "from-indigo-400 to-purple-600",
      icon: BarChart3,
      details: {
        strategy: "Capture last-minute conversions and gather insights",
        tactics: ["Flash sales", "Customer testimonials", "Performance review"],
        kpis: ["Final conversion surge: +20%", "Customer satisfaction: 90%+", "Campaign ROI: 3x+"]
      }
    }
  ];

  const TimelineGraph = () => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-2 sm:p-8 border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Interactive Campaign Timeline</h3>
      
      {/* Timeline visualization */}
      <div className="relative mb-16 px-2 sm:px-8">
        <div className="absolute left-8 right-8 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-yellow-200 via-pink-200 to-indigo-200 rounded-full"></div>
        <div 
          className="absolute left-8 top-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `calc(${timelineProgress}% - 64px)` }}
        ></div>
        
        <div className="relative flex justify-between items-center px-0">
          {timelineData.map((item, index) => (
            <div className="relative flex flex-col items-center w-full">
              <HoverCard
                key={index}
                index={index}
                position="right"
                wide={true}
                hoverContent={
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5 text-blue-400" />
                      <h4 className="font-bold text-lg">{item.phase}</h4>
                    </div>
                    <div className="space-y-3 text-left">
                      <p className="text-sm text-gray-300"><strong>Strategy:</strong> {item.details.strategy}</p>
                      <div>
                        <p className="text-sm font-medium text-blue-300 mb-2">Key Tactics:</p>
                        <ul className="text-xs text-gray-300 space-y-1 text-left">
                          {item.details.tactics.map((tactic, i) => (
                            <li key={i}>• {tactic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-300 mb-2">Success Metrics:</p>
                        <ul className="text-xs text-gray-300 space-y-1 text-left">
                          {item.details.kpis.map((kpi, i) => (
                            <li key={i}>• {kpi}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-gray-600">
                        <span className="text-yellow-300">Budget: {item.budget}</span>
                        <span className="text-green-300">Reach: {item.expectedReach}</span>
                      </div>
                    </div>
                  </div>
                }
              >
                <div 
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg cursor-pointer transform transition-all `}
                  onMouseEnter={() => setActiveWeek(index)}
                  onMouseLeave={() => setActiveWeek(null)}
                >
                  <div className="w-full h-full rounded-full bg-white bg-opacity-20"></div>
                </div>
              </HoverCard>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                <div className="text-[10px] sm:text-xs font-medium text-gray-600">Week {item.week}</div>
                <div className="text-[8px] sm:text-xs text-gray-500">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Week details cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`p-4 rounded-xl border-2 transition-all  cursor-pointer ${
              activeWeek === index 
                ? `bg-gradient-to-r ${item.color} text-white border-transparent shadow-lg transform scale-105` 
                : 'bg-white border-gray-200 border-gray-300 shadow-md'
            }`}
            onMouseEnter={() => setActiveWeek(index)}
            onMouseLeave={() => setActiveWeek(null)}
          >
            <div className="flex items-center space-x-2 mb-2">
              <item.icon className={`h-4 w-4 ${activeWeek === index ? 'text-white' : 'text-gray-600'}`} />
              <span className={`text-sm font-bold ${activeWeek === index ? 'text-white' : 'text-gray-900'}`}>
                Week {item.week}
              </span>
            </div>
            <h4 className={`font-medium text-sm mb-1 ${activeWeek === index ? 'text-white' : 'text-gray-900'}`}>
              {item.phase}
            </h4>
            <p className={`text-xs ${activeWeek === index ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
              {item.goals}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // In ExamplePostSection, when open, render the button (always visible), then the header (icon and h4) above the orange dashed border, and only the video inside the border. The order should be: button, then (if open) header, then orange border with video inside.
  const ExamplePostSection = ({
    platform,
    icon: Icon,
    color,
    bgColor,
  }: {
    platform: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
  }) => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="mt-8">
        <button
          onClick={() => setOpen(o => !o)}
          className="mb-4 w-full bg-gray-200 text-gray-800 rounded-md py-2 font-semibold shadow-sm hover:bg-gray-300 hover:text-gray-900 transition"
        >
          {open ? 'Hide Example Video' : 'Show Example Video'}
        </button>
        {open && (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <Icon className="h-5 w-5 text-gray-600" />
              <h4 className="font-medium text-gray-900">Example {platform} Post</h4>
            </div>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-0">
              <div className="p-2">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  className="w-full rounded-lg h-full"
                  style={{ maxHeight: 320 }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const [openVideo, setOpenVideo] = React.useState<{[key: string]: boolean}>({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Animated Header */}
      <header className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0  pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white opacity-10 rounded-full" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white opacity-10 rounded-full" style={{ animationDelay: '0.7s' }}></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 sm:py-20">
          <div className="text-center text-white ">
            <HoverCard
              index={0}
              wide={true}
              className="w-fit mx-auto"
              hoverContent={
                <div>
                  <h4 className="font-bold mb-2">Campaign Duration</h4>
                  <p className="text-sm text-gray-300 mb-2">6-week intensive marketing campaign targeting peak summer season</p>
                  <div className="text-xs text-gray-400">
                    <p>• Pre-summer launch timing</p>
                    <p>• Peak UV awareness period</p>
                    <p>• Back-to-school preparation</p>
                  </div>
                </div>
              }
            >
              <div className=" inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-4 text-sm font-medium mb-8 bg-opacity-30 cursor-pointer group">
                <Zap className="h-5 w-5 group" />
                <span>Summer Campaign 2025</span>
                <Star className="h-5 w-5 text-yellow-200 " />
        
              </div>
              </HoverCard>

            
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Protect With Confidence
            </h1>
            <p className="text-3xl mb-12 text-white text-opacity-90 font-light">
              SunnyDays (써니데이즈) Summer Campaign Marketing Strategy
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 text-white text-opacity-80">
              <HoverCard
                index={1}
                wide={true}
                hoverContent={
                  <div>
                    <h4 className="font-bold mb-2">Campaign Timeline</h4>
                    <p className="text-sm text-gray-300 mb-2">Strategically timed for maximum impact during peak sunscreen season</p>
                    <div className="text-xs text-gray-400">
                      <p>• 6 weeks of intensive marketing</p>
                      <p>• Multi-phase approach</p>
                      <p>• Data-driven optimization</p>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="px-4 py-2 rounded-xl  bg-transparent group-bg-white group-bg-opacity-30 group-shadow-lg flex items-center space-x-3">
                    <Calendar className="h-6 w-6" />
                    <span className="text-lg font-medium">July 10 – August 25, 2025</span>
                  </div>
                </div>
              </HoverCard>
              
              <HoverCard
                index={2}
                wide={true}
                hoverContent={
                  <div>
                    <h4 className="font-bold mb-2">Budget Breakdown</h4>
                    <p className="text-sm text-gray-300 mb-2">Optimized allocation across high-performing channels</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      <p>• Instagram Ads: 40% (₩1.2M)</p>
                      <p>• TikTok Influencers: 27% (₩800K)</p>
                      <p>• Email Marketing: 17% (₩500K)</p>
                      <p>• Content Creation: 16% (₩500K)</p>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="px-4 py-2 rounded-xl  bg-transparent group-bg-white group-bg-opacity-30 group-shadow-lg flex items-center space-x-3">
                    <DollarSign className="h-6 w-6" />
                    <span className="text-lg font-medium">₩3,000,000 Budget</span>
                  </div>
                </div>
              </HoverCard>
              
              <HoverCard
                index={3}
                wide={true}
                hoverContent={
                  <div>
                    <h4 className="font-bold mb-2">ROI Projection</h4>
                    <p className="text-sm text-gray-300 mb-2">Conservative estimate based on historical performance</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      <p>• 3x return on investment</p>
                      <p>• Break-even at 1,000 units</p>
                      <p>• Target: 1,500+ units sold</p>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="px-4 py-2 rounded-xl  bg-transparent group-bg-white group-bg-opacity-30 group-shadow-lg flex items-center space-x-3">
                    <Target className="h-6 w-6" />
                    <span className="text-lg font-medium">₩9,000,000+ Revenue Goal</span>
                  </div>
                </div>
              </HoverCard>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Product Overview with enhanced interactivity */}
        <section className="bg-white rounded-3xl border border-gray-200 p-12 shadow-xl shadow-2xl duration-500">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Overview</h2>
            <p className="text-xl text-[#ff5a08]">Meet the star of our summer campaign</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col justify-center h-full min-h-[340px] bg-white rounded-2xl shadow-lg p-8 items-center text-center">
              {/* Product image */}
              <div className="flex justify-center mb-6">
                <img
                  src={tubeImg}
                  alt="SunnyDays (써니데이즈) UV Cream"
                  className="w-48 h-48 object-contain drop-shadow-lg"
                />
              </div>
              {/* Product title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SunnyDays (써니데이즈) UV Cream</h3>
              {/* Product description */}
              <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center">
                Lightweight, no-white-cast sunscreen designed for daily protection. SPF 50+ PA++++, 
                fast absorption, and non-sticky finish — perfect for hot, humid Korean summers.
              </p>
              <p className="text-[#fbaf00] font-semibold mb-8 text-lg text-center">
                Now featuring the new SunnyDays (써니데이즈) formula for radiant, protected skin all summer long.
              </p>
            </div>
            
            <div className="flex flex-col justify-center h-full min-h-[340px] bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl border-2 border-orange-200 border-orange-300 items-center text-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-scale-110 transition-transform ">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-xl">Unique Selling Proposition</h4>
                <p className="text-[#ff5a08] font-bold text-2xl mb-4 group-scale-105 transition-transform ">
                  "Invisible Protection. Naturally Radiant Skin."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Protects skin from sun damage while leaving it radiant and smooth. 
                  Ideal under makeup with nourishing, skin-barrier-strengthening ingredients.
                </p>
              </div>
            </div>
          </div>

          {/* Four feature cards below product description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
            <HoverCard
              index={10}
              wide={true}
              hoverContent={
                <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Sun className="h-6 w-6 text-yellow-500" />
                    <span className="font-bold text-gray-900">Broad-spectrum SPF50+/PA++++</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Provides comprehensive protection against UVA and UVB rays, ensuring long-lasting sun protection.
                  </p>
                </div>
              }
            >
              <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Sun className="h-6 w-6 text-yellow-500" />
                  <span className="font-bold text-gray-900">Broad-spectrum SPF50+/PA++++</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Provides comprehensive protection against UVA and UVB rays, ensuring long-lasting sun protection.
                </p>
              </div>
            </HoverCard>

            <HoverCard
              index={11}
              wide={true}
              hoverContent={
                <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-red-500" />
                    <span className="font-bold text-gray-900">Nourishing & Hydrating</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Enriched with nourishing ingredients like hyaluronic acid and ceramides to keep skin hydrated and protected.
                  </p>
                </div>
              }
            >
              <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="font-bold text-gray-900">Nourishing & Hydrating</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Enriched with nourishing ingredients like hyaluronic acid and ceramides to keep skin hydrated and protected.
                </p>
              </div>
            </HoverCard>

            <HoverCard
              index={12}
              wide={true}
              hoverContent={
                <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-6 w-6 text-purple-500" />
                    <span className="font-bold text-gray-900">Long-lasting Protection</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Offers a non-sticky, long-lasting finish that doesn't leave a white cast or feel heavy on the skin.
                  </p>
                </div>
              }
            >
              <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                  <span className="font-bold text-gray-900">Long-lasting Protection</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Offers a non-sticky, long-lasting finish that doesn't leave a white cast or feel heavy on the skin.
                </p>
              </div>
            </HoverCard>

            <HoverCard
              index={13}
              wide={true}
              hoverContent={
                <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-500" />
                    <span className="font-bold text-gray-900">Safe for Sensitive Skin</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Formulated with gentle, hypoallergenic ingredients to be safe for even the most sensitive skin types.
                  </p>
                </div>
              }
            >
              <div className="p-8 text-lg min-h-[120px] w-full bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="font-bold text-gray-900">Safe for Sensitive Skin</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Formulated with gentle, hypoallergenic ingredients to be safe for even the most sensitive skin types.
                </p>
              </div>
            </HoverCard>
          </div>
        </section>

        {/* Enhanced Campaign Strategy */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campaign Strategy</h2>
            <p className="text-xl text-gray-600">Multi-channel approach for maximum impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Target Audience",
                subtitle: "Korean women (18-35)",
                description: "Beauty-conscious consumers active on social media",
                color: "from-blue-400 to-blue-600",
                details: {
                  primary: "Korean women aged 18-35 interested in skincare & beauty",
                  secondary: "GenZ consumers engaged with beauty trends on TikTok and Instagram",
                  psychographics: "Health-conscious, social media savvy, brand loyal",
                  behaviors: "Regular skincare routine, follows beauty influencers, shops online"
                }
              },
              {
                icon: Target,
                title: "Core Message",
                subtitle: "Feel confident in the sun",
                description: "Protection you can trust, skin you'll love",
                color: "from-purple-400 to-purple-600",
                details: {
                  emotional: "Confidence, beauty, protection",
                  rational: "SPF 50+, lightweight, no white cast",
                  social: "Instagram-worthy, influencer-approved",
                  functional: "Daily use, makeup-friendly, long-lasting"
                }
              },
              {
                icon: TrendingUp,
                title: "Primary Goal",
                subtitle: "Drive seasonal sales",
                description: "Increase brand awareness & customer acquisition",
                color: "from-green-400 to-green-600",
                details: {
                  sales: "30% increase in sunscreen sales MoM",
                  awareness: "65% brand awareness lift in target demo",
                  acquisition: "2,000+ new customers",
                  retention: "40% repeat purchase rate"
                }
              },
              {
                icon: BarChart3,
                title: "Expected ROI",
                subtitle: "3x return on investment",
                description: "₩3M spend → ₩9M revenue target",
                color: "from-orange-400 to-red-500",
                details: {
                  investment: "₩3,000,000 total budget",
                  revenue: "₩9,000,000+ target revenue",
                  profit: "₩6,000,000+ projected profit",
                  breakeven: "1,000 units sold"
                }
              }
            ].map((item, index) => (
              <HoverCard
                key={index}
                index={200 + index}
                wide={true}
                hoverContent={
                  <div className="space-y-3 text-left">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      {Object.entries(item.details).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-blue-300 font-medium capitalize">{key}:</span>
                          <span className="ml-2">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              >
                <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-xl duration-500 cursor-pointer group scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-rotate-12 transition-transform `}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-text-orange-600 transition-colors ">
                    {item.title}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">{item.subtitle}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Interactive Timeline */}
        <TimelineGraph />

        {/* Enhanced Channel Strategy with Example Posts */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Channel Strategy</h2>
            <p className="text-xl text-gray-600">Platform-specific content and tactics</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {[
              {
                platform: "Instagram",
                icon: Instagram,
                color: "from-pink-400 to-purple-500",
                bgColor: "from-pink-50 to-purple-50",
                content: [
                  {
                    type: "Carousel Posts",
                    description: "UV cream intro, SPF benefits, testimonials, shop CTA",
                    metrics: "Expected reach: 100K+, Engagement rate: 8%+",
                    details: "4-slide educational carousels with strong visual hierarchy and clear CTAs. Each slide focuses on a specific benefit with compelling visuals and social proof."
                  },
                  {
                    type: "Stories",
                    description: "Countdown teasers, polls, behind-the-scenes, UGC reposts",
                    metrics: "Story completion rate: 70%+, Swipe-ups: 2K+",
                    details: "Interactive content with polls, questions, and countdown stickers. Behind-the-scenes content builds authenticity and trust with audience."
                  },
                  {
                    type: "Reels",
                    description: "UV camera comparison, GRWM routines, challenge content",
                    metrics: "Video completion rate: 65%+, Shares: 500+",
                    details: "Trending audio with educational and entertaining content. UV camera reveals show dramatic before/after protection results."
                  }
                ]
              },
              {
                platform: "TikTok",
                icon: Play,
                color: "from-gray-700 to-black",
                bgColor: "from-gray-50 to-gray-100",
                content: [
                  {
                    type: "UV Camera Demo",
                    description: "Before/after protection using trending audio",
                    metrics: "Video views: 200K+, Completion rate: 70%+",
                    details: "Satisfying reveal content with educational value. Shows invisible sunscreen protection becoming visible under UV camera for dramatic effect."
                  },
                  {
                    type: "Educational Content",
                    description: "Sunscreen myths, POV content, how-to tutorials",
                    metrics: "Engagement rate: 12%+, Saves: 1K+",
                    details: "Expert-led content debunking common sunscreen myths. POV videos showing daily application routine and makeup compatibility."
                  },
                  {
                    type: "#SunnyDaysChallenge",
                    description: "User-generated summer radiant transformations",
                    metrics: "Challenge participation: 1K+, Hashtag reach: 2M+",
                    details: "Branded hashtag challenge with prizes and influencer participation. Users show their summer radiant transformation using the product."
                  }
                ]
              },
              {
                platform: "Email",
                icon: Mail,
                color: "from-blue-400 to-blue-600",
                bgColor: "from-blue-50 to-indigo-50",
                content: [
                  {
                    type: "Pre-Order (Jul 13)",
                    description: "Be the First to Protect – Exclusive Early Access!",
                    metrics: "Open rate: 28%+, CTR: 8%+",
                    details: "Exclusive preview with early bird discount for subscribers. Creates FOMO and rewards loyal email subscribers with first access."
                  },
                  {
                    type: "Launch (Jul 18)",
                    description: "Protect With Confidence – Now Available! Check out the store!",
                    metrics: "Open rate: 25%+, Conversion rate: 12%+",
                    details: "Product launch announcement with social proof and reviews. Features customer testimonials and limited-time launch offer."
                  },
                  {
                    type: "Tips (Aug 1)",
                    description: "3 simple skincare rules for sunny days. Must know tips!",
                    metrics: "Open rate: 22%+, Blog traffic: 5K+",
                    details: "Educational content driving traffic to blog and building authority. Provides value while subtly promoting product benefits."
                  }
                ]
              }
            ].map((channel, channelIndex) => (
              <div key={channelIndex} className={`bg-gradient-to-br ${channel.bgColor} rounded-2xl border border-gray-200 p-8 shadow-xl duration-500`}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center`}>
                    <channel.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{channel.platform}</h3>
                </div>
                
                <div className="space-y-6">
                  {channel.content.map((item, itemIndex) => {
                    const key = `${channelIndex}-${itemIndex}`;
                    return (
                      <div key={itemIndex} className="bg-white rounded-xl border border-gray-200 p-6 shadow-md">
                        <h4 className="font-bold text-lg text-gray-900">{item.type}</h4>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <div className="text-xs text-gray-700 pt-2 border-t border-gray-600">
                          <strong>Expected Performance:</strong> {item.metrics}
                        </div>
                        <ExamplePostSection 
                          platform={channel.platform}
                          icon={channel.icon}
                          color={channel.color}
                          bgColor={channel.bgColor}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Example Post Section */}
                {/* This section is now moved inside the dropdown */}
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced KPIs & Budget with interactive elements */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* KPIs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg shadow-xl duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Performance Indicators</h3>
            <div className="space-y-6">
              {[
                { 
                  metric: "Sunscreen Sales Increase", 
                  target: "+30% MoM", 
                  icon: TrendingUp,
                  color: "text-green-600",
                  details: "Month-over-month growth in sunscreen category sales, tracked through e-commerce analytics and compared to previous year performance"
                },
                { 
                  metric: "Website Traffic Boost", 
                  target: "+20% vs June", 
                  icon: Eye,
                  color: "text-blue-600",
                  details: "Increase in unique visitors and page views compared to previous month baseline, with focus on product page engagement"
                },
                { 
                  metric: "Social Engagement Rise", 
                  target: "+50% on IG + TikTok", 
                  icon: Users,
                  color: "text-purple-600",
                  details: "Combined engagement rate improvement across Instagram and TikTok platforms, including likes, comments, shares, and saves"
                },
                { 
                  metric: "Email Open Rate", 
                  target: "25%", 
                  icon: Mail,
                  color: "text-orange-600",
                  details: "Average open rate across all email campaigns, above industry average of 21%, with segmented targeting for better performance"
                }
              ].map((kpi, index) => (
                <HoverCard
                  key={index}
                  index={400 + index}
                  wide={true}
                  hoverContent={
                    <div>
                      <h4 className="font-bold mb-2">{kpi.metric}</h4>
                      <p className="text-sm text-gray-300">{kpi.details}</p>
                    </div>
                  }
                >
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl bg-orange-50  cursor-pointer group scale-105">
                    <div className="flex items-center space-x-4">
                      <kpi.icon className={`h-6 w-6 ${kpi.color} group`} />
                      <span className="text-gray-900 font-medium">{kpi.metric}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900 group-text-orange-600 transition-colors ">
                      {kpi.target}
                    </span>
                  </div>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg shadow-xl duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Budget Allocation</h3>
            <div className="space-y-6">
              {[
                { 
                  channel: "Instagram Ads", 
                  amount: "₩1,200,000", 
                  percentage: 40, 
                  roas: "3.8x",
                  details: "Carousel ads, story ads, and reels promotion targeting lookalike audiences based on existing customers and website visitors"
                },
                { 
                  channel: "TikTok Influencers", 
                  amount: "₩800,000", 
                  percentage: 27, 
                  roas: "2.9x",
                  details: "Mid-tier beauty influencers and micro-influencer network for authentic reviews and product demonstrations"
                },
                { 
                  channel: "Email Marketing", 
                  amount: "₩500,000", 
                  percentage: 17, 
                  roas: "4.5x",
                  details: "Automated sequences, segmentation, and personalized product recommendations using customer data and behavior"
                },
                { 
                  channel: "Content Creation", 
                  amount: "₩500,000", 
                  percentage: 16, 
                  roas: "Brand equity",
                  details: "Professional photography, video production, and graphic design assets for use across all marketing channels"
                }
              ].map((item, index) => (
                <HoverCard
                  key={index}
                  index={500 + index}
                  wide={true}
                  hoverContent={
                    <div>
                      <h4 className="font-bold mb-2">{item.channel}</h4>
                      <p className="text-sm text-gray-300 mb-2">{item.details}</p>
                      <div className="text-xs text-green-300">
                        Expected ROAS: {item.roas}
                      </div>
                    </div>
                  }
                >
                  <div className="space-y-3 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium group-text-orange-600 transition-colors ">
                        {item.channel}
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{item.amount}</div>
                        <div className="text-sm text-gray-500">{item.roas} ROAS</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 ">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-yellow-500 h-3 rounded-full duration-1000 ease-out group-from-orange-500 group-to-yellow-600"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 text-right">{item.percentage}% of total budget</div>
                  </div>
                </HoverCard>
              ))}
            </div>
            
            <HoverCard
              index={6}
              wide={true}
              hoverContent={
                <div>
                  <h4 className="font-bold mb-2">ROI Calculation</h4>
                  <p className="text-sm text-gray-300 mb-2">Conservative estimate based on historical performance and industry benchmarks</p>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>• Break-even: 1,000 units @ ₩3,000 each</p>
                    <p>• Target: 1,500 units @ ₩6,000 average</p>
                    <p>• Profit margin: 67% after campaign costs</p>
                  </div>
                </div>
              }
            >
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 border-green-300  cursor-pointer group">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 group-scale-110 transition-transform ">3x ROI</div>
                  <div className="text-gray-600 mt-2">₩3M spend → ₩9M revenue target</div>
                  <div className="text-sm text-green-700 mt-1">Conservative projection</div>
                </div>
              </div>
            </HoverCard>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Analytics & Tracking</h3>
              <div className="space-y-4">
                {[
                  { 
                    tool: "Google Analytics 4", 
                    purpose: "Website traffic and conversion tracking",
                    icon: BarChart3,
                    details: "Enhanced e-commerce tracking, custom events, and audience insights with detailed funnel analysis and attribution modeling"
                  },
                  { 
                    tool: "Meta Pixel", 
                    purpose: "Facebook & Instagram ad optimization",
                    icon: Eye,
                    details: "Conversion tracking, lookalike audiences, and retargeting campaigns with advanced audience segmentation"
                  },
                  { 
                    tool: "TikTok Pixel", 
                    purpose: "TikTok ad performance measurement",
                    icon: Play,
                    details: "Video engagement tracking and TikTok-specific conversion optimization with creative performance insights"
                  }
                ].map((item, index) => (
                  <HoverCard
                    key={index}
                    index={600 + index}
                    wide={true}
                    hoverContent={
                      <div>
                        <h4 className="font-bold mb-2">{item.tool}</h4>
                        <p className="text-sm text-gray-300">{item.details}</p>
                      </div>
                    }
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 border-orange-300 shadow-md  cursor-pointer group">
                      <item.icon className="h-6 w-6 text-orange-500 group" />
                      <div>
                        <span className="font-medium text-gray-900 group-text-orange-600 transition-colors ">
                          {item.tool}
                        </span>
                        <p className="text-sm text-gray-600">{item.purpose}</p>
                      </div>
                    </div>
                  </HoverCard>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Design Direction</h3>
              <div className="space-y-4">
                <HoverCard
                  index={7}
                  wide={true}
                  hoverContent={
                    <div>
                      <h4 className="font-bold mb-2">Primary Color Psychology</h4>
                      <p className="text-sm text-gray-300">Sunshine yellow evokes warmth, happiness, and energy - perfect for summer campaigns and appeals to young, optimistic consumers</p>
                    </div>
                  }
                >
                  <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-200 border-yellow-300  cursor-pointer group">
                    <span className="font-bold text-gray-900 group-text-orange-700 transition-colors ">
                      Primary: Sunshine Yellow (#FFE27A)
                    </span>
                  </div>
                </HoverCard>
                
                <HoverCard
                  index={8}
                  wide={true}
                  hoverContent={
                    <div>
                      <h4 className="font-bold mb-2">Accent Color Strategy</h4>
                      <p className="text-sm text-gray-300">Coral peach adds warmth and femininity, appealing to our target demographic while maintaining summer vibes</p>
                    </div>
                  }
                >
                  <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl border-2 border-orange-200 border-orange-300  cursor-pointer group">
                    <span className="font-bold text-gray-900 group-text-red-700 transition-colors ">
                      Accent: Coral Peach (#FFB199)
                    </span>
                  </div>
                </HoverCard>
                
                <HoverCard
                  index={9}
                  wide={true}
                  hoverContent={
                    <div>
                      <h4 className="font-bold mb-2">Visual Language</h4>
                      <p className="text-sm text-gray-300">Clean, modern aesthetic that appeals to young, beauty-conscious consumers with Instagram-worthy visuals</p>
                    </div>
                  }
                >
                  <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 border-gray-300  cursor-pointer group">
                    <span className="text-gray-900 group-text-gray-700 transition-colors ">
                      Summer tones, airy layout, soft gradients, bold CTAs
                    </span>
                  </div>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Campaign Summary</h3>
            <p className="text-gray-300 text-lg">
              Comprehensive 6-week marketing strategy for SunnyDays (써니데이즈) UV Cream
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Multi-channel approach</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Data-driven optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>ROI-focused execution</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>Created by: Man Khi Kim | Email: mankhi.marketing@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;