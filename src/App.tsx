import React, { useState, useMemo } from 'react';
import { Search, Pill, Calendar, Store, Truck, FlaskRound as Flask, Factory, Package, Thermometer, IndianRupee, Shield, CheckCircle2, Clock, MapPin, AlertTriangle } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { medicines } from './data/medicines';
import { verifyMedicine } from './utils/contract';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const filteredMedicine = useMemo(() => {
    if (!searchTerm) return null;
    return medicines.find(med => 
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleVerification = async () => {
    if (!filteredMedicine) return;

    setIsVerifying(true);
    try {
      const isVerified = await verifyMedicine(
        filteredMedicine.name,
        filteredMedicine.batchNumber
      );
      
      if (isVerified) {
        toast.success('Medicine verified on blockchain!');
      } else {
        toast.error('Medicine verification failed. This could be counterfeit.');
      }
    } catch (error) {
      toast.error('Error verifying medicine. Please make sure MetaMask is connected.');
    } finally {
      setIsVerifying(false);
    }
  };

  const supplyChainSteps = filteredMedicine ? [
    {
      title: 'Manufacturing',
      description: `Manufactured by ${filteredMedicine.manufacturer}`,
      date: new Date(filteredMedicine.manufacturingDate).toLocaleDateString(),
      icon: Factory,
      status: 'completed'
    },
    {
      title: 'Quality Check',
      description: 'Quality assurance and batch certification',
      date: new Date(filteredMedicine.manufacturingDate).toLocaleDateString(),
      icon: CheckCircle2,
      status: 'completed'
    },
    {
      title: 'Distribution',
      description: `Distributed by ${filteredMedicine.supplier}`,
      date: '---',
      icon: Truck,
      status: 'completed'
    },
    {
      title: 'Retail',
      description: `Available at ${filteredMedicine.retailer}`,
      date: '---',
      icon: Store,
      status: 'current'
    }
  ] : [];

  const isTemperatureInRange = (temp: number) => {
    return temp >= 20 && temp <= 25;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">
            Drug Supply Chain Management System
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track and verify pharmaceutical products throughout the supply chain using blockchain technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Enter medicine name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {filteredMedicine ? (
            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
              <div className="border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Pill className="text-indigo-600" size={24} />
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {filteredMedicine.name}
                    </h2>
                  </div>
                  <button
                    onClick={handleVerification}
                    disabled={isVerifying}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Shield size={20} />
                    {isVerifying ? 'Verifying...' : 'Verify on Blockchain'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Supply Chain Timeline</h3>
                  <div className="space-y-8">
                    {supplyChainSteps.map((step, index) => (
                      <div 
                        key={index} 
                        className="flex gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={() => setSelectedEvent(index)}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`p-2 rounded-full ${
                            step.status === 'completed' ? 'bg-green-100 text-green-600' :
                            step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            <step.icon size={20} />
                          </div>
                          {index < supplyChainSteps.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-200 my-2" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredMedicine.temperatureLog && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Temperature Monitoring</h3>
                      <div className="space-y-4">
                        {filteredMedicine.temperatureLog.map((log, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Thermometer 
                                  className={isTemperatureInRange(log.temperature) ? 'text-green-600' : 'text-red-600'} 
                                  size={20} 
                                />
                                <span className="font-medium">{log.temperature}°C</span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {new Date(log.timestamp).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>Humidity: {log.humidity}%</span>
                              <span>{log.location}</span>
                            </div>
                            {!isTemperatureInRange(log.temperature) && (
                              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                                <AlertTriangle size={16} />
                                <span>Temperature outside recommended range (20-25°C)</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
                    <div className="space-y-4">
                      <InfoItem
                        icon={<Calendar className="text-indigo-600" size={20} />}
                        label="Manufacturing Date"
                        value={new Date(filteredMedicine.manufacturingDate).toLocaleDateString()}
                      />
                      <InfoItem
                        icon={<Calendar className="text-red-600" size={20} />}
                        label="Expiry Date"
                        value={new Date(filteredMedicine.expiryDate).toLocaleDateString()}
                      />
                      <InfoItem
                        icon={<Package className="text-orange-600" size={20} />}
                        label="Batch Number"
                        value={filteredMedicine.batchNumber}
                      />
                      <InfoItem
                        icon={<Thermometer className="text-cyan-600" size={20} />}
                        label="Storage Conditions"
                        value={filteredMedicine.storageConditions}
                      />
                      <InfoItem
                        icon={<IndianRupee className="text-emerald-600" size={20} />}
                        label="Price"
                        value={`₹${filteredMedicine.price}`}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Flask className="text-indigo-600" size={20} />
                      <h3 className="text-lg font-semibold text-gray-700">Raw Materials</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filteredMedicine.rawMaterials.map((material, index) => (
                        <span
                          key={index}
                          className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : searchTerm ? (
            <div className="text-center text-gray-600 py-8">
              No medicine found with that name
            </div>
          ) : (
            <div className="text-center text-gray-600 py-8">
              Enter a medicine name to see its supply chain details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value}</p>
      </div>
    </div>
  );
}

export default App;