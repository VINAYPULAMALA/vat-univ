import React, { useState } from 'react';
import { BookOpenCheck, FileText, CheckCircle, CircleDollarSign, GraduationCap, Mail, Plane } from 'lucide-react';

interface TabContent {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface ApplicationTabsProps {
  tabs?: TabContent[];
  defaultActiveTab?: string;
}

const ApplicationTabs: React.FC<ApplicationTabsProps> = ({ 
  tabs = defaultTabs,
  defaultActiveTab = 'international'
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex border-b-2 border-gray-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 px-6 text-lg font-medium ${
                activeTab === tab.key
                  ? 'border-b-2 border-orange-600 text-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tabs.map((tab) => (
          activeTab === tab.key && (
            <div key={tab.key} className="animate-fadeIn">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

// Default configuration
const defaultTabs: TabContent[] = [
  {
    key: 'international',
    label: 'International',
    content: (
      <div className="space-y-12">
        {/* International tab content from original implementation */}
      </div>
    )
  },
  {
    key: 'domestic',
    label: 'Domestic',
    content: (
      <div className="text-center py-12 group hover:shadow-lg transition-all duration-300 p-6 rounded-xl border hover:border-orange-500">
        {/* Domestic tab content from original implementation */}
      </div>
    )
  }
];

export default ApplicationTabs;