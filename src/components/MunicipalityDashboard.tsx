"use client";
import React from 'react';

interface StatsItemProps {
  label: string;
  value: string;
}

const StatsItem: React.FC<StatsItemProps> = ({ label, value }) => (
  <div className="bg-cyan-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
    <span className="font-medium text-teal-700">{label}</span>
    <span className="text-gray-800 mt-1 md:mt-0">{value}</span>
  </div>
);

const MunicipalityDashboard = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Dashboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-white bg-teal-500 p-4 rounded-t-lg">
            Pourashava At a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-b-lg shadow">
            <StatsItem label="Established" value="2003 (2001)" />
            <StatsItem label="Class" value="A" />
            <StatsItem label="Total Wards" value="09" />
            <StatsItem label="Area" value="28.02 sq. km" />
            <StatsItem label="Population" value="700,000" />
            <StatsItem label="No. of Holdings" value="19,150" />
            <StatsItem label="Tax Collected" value="Tk 5,12,42,483 and 78% of collection" />
            <StatsItem label="Density" value="25000 p/sq.km" />
            <StatsItem label="Literacy Rate" value="90.34%" />
            <StatsItem label="Road Network" value="270.0 km" />
            <StatsItem label="Drain Network" value="252.0 km" />
            <StatsItem label="Public Toilets" value="32" />
            <StatsItem label="Waste Collection Bins" value="24" />
            <StatsItem label="Municipal Facilities" value="Market, Park, etc." />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MunicipalityDashboard;