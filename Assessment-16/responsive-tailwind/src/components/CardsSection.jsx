import React, { useState, useCallback } from 'react';
import Card from './Card';
import Button from './Button';
import { HiX } from 'react-icons/hi';
import { 
  HiOutlineLightningBolt, 
  HiOutlineShieldCheck, 
  HiOutlineChartBar, 
  HiOutlineCloudUpload, 
  HiOutlineRefresh, 
  HiOutlineUserGroup 
} from 'react-icons/hi';

const cardsData = [
  {
    id: 'perf',
    icon: HiOutlineLightningBolt,
    title: 'Lightning Performance',
    description: 'Optimize processing workloads workloads at unmatched edge runtime velocities.',
    details: 'Our infrastructure sits directly on decentralized global edge environments. By eliminating server cold starts and caching queries automatically, routine transactional workflows execute inside a sub-15ms lifecycle globally.'
  },
  {
    id: 'sec',
    icon: HiOutlineShieldCheck,
    title: 'Bank-Grade Security',
    description: 'End-to-end payload cryptography safeguarding corporate data parameters.',
    details: 'Maintain pristine audit logging arrays with isolated SOC2 runtime wrappers. Data flows are encrypted at-rest via military-grade AES-GCM-256 blocks, with continuous network transport route pinning.'
  },
  {
    id: 'analyt',
    icon: HiOutlineChartBar,
    title: 'Advanced Analytics',
    description: 'Real-time telemetry and programmatic evaluation loops via interactive modules.',
    details: 'Stream real-time user event queues, backend computational constraints, and business-critical conversion funnels directly to unified command dashboards. Features customizable low-latency alerting rules.'
  },
  {
    id: 'cloud',
    icon: HiOutlineCloudUpload,
    title: 'Seamless Integrations',
    description: 'Unify ecosystem infrastructure pipelines across providers instantly using robust APIs.',
    details: 'Connect architectural clusters with unified API endpoints. Connect and synchronize cloud object buckets, multi-region databases, or cross-platform webhooks with minimal implementation delays.'
  },
  {
    id: 'sync',
    icon: HiOutlineRefresh,
    title: 'Automated Sync',
    description: 'Distributed persistence logic executing continuous background file backups seamlessly.',
    details: 'Utilizes lightweight stream delta change calculations. Only mutations and operational updates are parsed across network matrices, preserving pipeline bandwidth and preventing cluster congestion.'
  },
  {
    id: 'team',
    icon: HiOutlineUserGroup,
    title: 'Collaborative Spaces',
    description: 'Architect multi-tenant scopes with atomic user role constraints.',
    details: 'Enforce security compliance with fine-grained RBAC permissions. Audit modification logs via cryptographic ledger records, making multi-user global governance transparent and straightforward.'
  }
];

const CardsSection = () => {
  const [activeService, setActiveService] = useState(null);

  const handleOpenDetails = useCallback((service) => {
    setActiveService(service);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setActiveService(null);
  }, []);

  return (
    <section id="services" className="py-28 bg-slate-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Structural Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Core Utilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered around pure performance
          </h2>
          <p className="text-lg text-slate-400">
            A comprehensive stack of developer tools meticulously engineered to speed up deployment pipelines.
          </p>
        </div>

        {/* Responsive Flex/Grid Canvas Component Mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onLearnMore={() => handleOpenDetails(card)}
            />
          ))}
        </div>

      </div>

      {/* Upgraded Premium Details Modal Pop-up Display Window */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-800 relative animate-scaleUp">
            
            {/* Close Cross Trigger Button */}
            <button 
              onClick={handleCloseDetails}
              className="absolute top-5 right-5 text-slate-500 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
              aria-label="Close modal menu"
            >
              <HiX className="h-5 w-5" />
            </button>

            {/* Title Block Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <activeService.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
            </div>

            <hr className="border-slate-800 my-5" />

            {/* Explanatory Core Details Text Container */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">Structural Deep-Dive Overview</span>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeService.details}
              </p>
            </div>

            {/* Actions Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 flex justify-end">
              <Button variant="primary" onClick={handleCloseDetails} className="text-xs px-6">
                Dismiss Details
              </Button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(CardsSection);