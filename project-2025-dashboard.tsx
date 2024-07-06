import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const agencyData = [
  { name: 'State', budget: 52.5, staff: 69000 },
  { name: 'Defense', budget: 842.0, staff: 2870000 },
  { name: 'Homeland Security', budget: 97.3, staff: 240000 },
  { name: 'USAGM', budget: 0.8, staff: 3500 },
];

const reformData = [
  { category: 'Personnel', completed: 20, remaining: 80 },
  { category: 'Budget', completed: 35, remaining: 65 },
  { category: 'Policy', completed: 45, remaining: 55 },
];

const Dashboard = () => {
  const [selectedAgency, setSelectedAgency] = useState(agencyData[0]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Project 2025 Dashboard</h1>
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Key Priorities</AlertTitle>
        <AlertDescription>
          1. Restore family as centerpiece of American life
          2. Dismantle administrative state
          3. Defend sovereignty and borders
          4. Secure individual rights and liberties
        </AlertDescription>
      </Alert>

      <Tabs className="mt-4">
        <TabList>
          <Tab>Agency Overview</Tab>
          <Tab>Reform Progress</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-semibold mb-2">Agency Comparison</h2>
          <div className="flex mb-4">
            {agencyData.map(agency => (
              <button 
                key={agency.name}
                className={`mr-2 px-3 py-1 rounded ${selectedAgency.name === agency.name ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedAgency(agency)}
              >
                {agency.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Budget (Billions USD)</h3>
              <p className="text-3xl">${selectedAgency.budget}</p>
            </div>
            <div>
              <h3 className="font-semibold">Staff</h3>
              <p className="text-3xl">{selectedAgency.staff.toLocaleString()}</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl font-semibold mb-2">Reform Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reformData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#4CAF50" name="Completed" />
              <Bar dataKey="remaining" stackId="a" fill="#FFA000" name="Remaining" />
            </BarChart>
          </ResponsiveContainer>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
