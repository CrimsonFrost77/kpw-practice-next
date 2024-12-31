"use client";
import React from 'react';

const MunicipalityDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <header className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
           {/* <img 
              src="/api/placeholder/60/60" 
              alt="Municipality Logo" 
              className="w-16 h-16 rounded-full"
            />*/}
           {/* <h1 className="text-2xl text-white font-bold">Kaliakair Municipality</h1>*/}
          </div>
    { /*  <nav className="hidden lg:flex items-center gap-6 text-white">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Employees/Members</a>
            <a href="#" className="hover:text-gray-200">Forms</a>
            <a href="#" className="hover:text-gray-200">Project/Budgets</a>
            <a href="#" className="hover:text-gray-200">Notice</a>
            <a href="#" className="hover:text-gray-200">Contacts</a>
            <a href="#" className="hover:text-gray-200">More</a>
          </nav>*/}
         {/* <div className="flex gap-2">
            <button className="px-4 py-1 bg-teal-500 text-white rounded">বাংলা</button>
            <button className="px-4 py-1 bg-teal-500 text-white rounded">English</button>
          </div>*/}
        </div>
      </header>

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

        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">About Kaliakair Municipality</h2>
            <p className="mb-4">
              Kaliakair Municipality, established in 2003, stands as a testament to urban development in the Gazipur District. Our municipality has grown from its humble beginnings to become a vital center of commerce and community life.
            </p>
            <p className="mb-4">
              Located at a strategic point in Gazipur District, Kaliakair Municipality serves as an important hub connecting various major urban centers. The municipality's location has played a crucial role in its development as both a residential and commercial center.
            </p>
            <p className="mb-4">
              The jurisdiction of Kaliakair Municipality covers various important areas including residential zones, commercial districts, and industrial areas. Each ward has been carefully planned to ensure balanced development and efficient service delivery to all residents.
            </p>
            <p className="mb-4">
              Our municipality takes pride in its systematic approach to urban planning, with dedicated zones for commercial activities, residential areas, and industrial development. This planned development has helped maintain a balance between urban growth and environmental sustainability.
            </p>
            <p className="mb-4">
              The future development plans for Kaliakair Municipality focus on enhancing infrastructure, improving public services, and creating more green spaces for residents. These initiatives aim to make Kaliakair an even more livable and sustainable urban center.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/maps/Map_1_1.jpg"
              alt="Municipality Map"
              className="w-full h-auto rounded-lg border-2 border-gray-200"
             
            />
            <img 
              src="/maps/Map_2_1.jpg"
              alt="Municipality Map"
              className="w-full h-auto rounded-lg border-2 border-gray-200"
             
            />
             <img 
              src="/maps/map_jurisdiction2.jpg"
              alt="Municipality Map"
              className="w-full h-auto rounded-lg border-2 border-gray-200"
             
            />
            <div className="absolute left-0 right-0 flex justify-between p-2">
              <button className="bg-gray-800 text-white p-2 rounded-full">&lt;</button>
              <button className="bg-gray-800 text-white p-2 rounded-full">&gt;</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>Last Updated: 2024-11-01 23:59:53</p>
          <p>Planning and Implementation: Cabinet Division, a2i, BCC, DoICT & BASIS</p>
        </div>
      </footer>
    </div>
  );
};


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

export default MunicipalityDashboard;