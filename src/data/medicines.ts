interface Medicine {
  name: string;
  manufacturingDate: string;
  expiryDate: string;
  retailer: string;
  supplier: string;
  rawMaterials: string[];
  manufacturer: string;
  batchNumber: string;
  storageConditions: string;
  price: number;
  temperatureLog?: TemperatureLog[];
  supplyChainEvents?: SupplyChainEvent[];
}

interface TemperatureLog {
  timestamp: string;
  temperature: number;
  humidity: number;
  location: string;
}

interface SupplyChainEvent {
  timestamp: string;
  event: string;
  location: string;
  handler: string;
  details: string;
}

const mockTemperatureLogs: TemperatureLog[] = [
  {
    timestamp: '2024-01-15T08:00:00',
    temperature: 25.2,
    humidity: 45,
    location: 'Manufacturing Facility'
  },
  {
    timestamp: '2024-01-15T14:00:00',
    temperature: 24.8,
    humidity: 48,
    location: 'Manufacturing Facility'
  },
  {
    timestamp: '2024-01-16T10:00:00',
    temperature: 23.5,
    humidity: 50,
    location: 'Distribution Center'
  },
  {
    timestamp: '2024-01-17T09:00:00',
    temperature: 24.0,
    humidity: 47,
    location: 'Retail Store'
  }
];

const mockSupplyChainEvents: SupplyChainEvent[] = [
  {
    timestamp: '2024-01-15T08:00:00',
    event: 'Production Started',
    location: 'Manufacturing Facility',
    handler: 'Production Team A',
    details: 'Batch production initiated under standard conditions'
  },
  {
    timestamp: '2024-01-15T16:00:00',
    event: 'Quality Control',
    location: 'QC Lab',
    handler: 'QC Team',
    details: 'Batch passed all quality control tests'
  },
  {
    timestamp: '2024-01-16T09:00:00',
    event: 'Shipped to Distributor',
    location: 'Distribution Center',
    handler: 'Logistics Team',
    details: 'Batch shipped in temperature-controlled vehicle'
  },
  {
    timestamp: '2024-01-17T08:00:00',
    event: 'Received at Retail',
    location: 'Retail Store',
    handler: 'Store Manager',
    details: 'Batch received and stored as per guidelines'
  }
];

export const medicines: Medicine[] = [
  {
    name: "Paracetamol",
    manufacturingDate: "2024-01-15",
    expiryDate: "2026-01-15",
    retailer: "HealthCare Pharmacy",
    supplier: "MedSupply Corp",
    rawMaterials: ["Acetaminophen", "Starch", "Povidone"],
    manufacturer: "PharmaCare Ltd",
    batchNumber: "PCM2024001",
    storageConditions: "Store between 20-25°C",
    price: 29.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Ibuprofen",
    manufacturingDate: "2024-01-20",
    expiryDate: "2026-01-20",
    retailer: "Wellness Pharmacy",
    supplier: "PharmaDistribute Ltd",
    rawMaterials: ["Ibuprofen USP", "Microcrystalline Cellulose", "Croscarmellose Sodium"],
    manufacturer: "PainRelief Pharmaceuticals",
    batchNumber: "IBU2024002",
    storageConditions: "Store below 30°C",
    price: 35.50,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Aspirin",
    manufacturingDate: "2024-01-30",
    expiryDate: "2026-01-30",
    retailer: "HeartCare Pharmacy",
    supplier: "CardioMed Supply",
    rawMaterials: ["Acetylsalicylic Acid", "Corn Starch", "Triacetin"],
    manufacturer: "CardioHealth Pharma",
    batchNumber: "ASP2024001",
    storageConditions: "Store below 30°C",
    price: 22.50,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Cetirizine",
    manufacturingDate: "2024-02-05",
    expiryDate: "2026-02-05",
    retailer: "AllerCare Pharmacy",
    supplier: "AllergyCare Distribution",
    rawMaterials: ["Cetirizine Hydrochloride", "Lactose", "Magnesium Stearate"],
    manufacturer: "AllergyRelief Pharma",
    batchNumber: "CET2024002",
    storageConditions: "Store between 15-30°C",
    price: 25.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Phenylephrine",
    manufacturingDate: "2024-02-01",
    expiryDate: "2026-02-01",
    retailer: "CityMed Pharmacy",
    supplier: "DecongestCare Ltd",
    rawMaterials: ["Phenylephrine HCl", "Cellulose", "Silicon Dioxide"],
    manufacturer: "DecongestantPharma Inc",
    batchNumber: "PHE2024001",
    storageConditions: "Store below 25°C",
    price: 32.75,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Diphenhydramine",
    manufacturingDate: "2024-02-10",
    expiryDate: "2026-02-10",
    retailer: "SleepWell Pharmacy",
    supplier: "AllergyMed Supply",
    rawMaterials: ["Diphenhydramine HCl", "Calcium Phosphate", "Magnesium Stearate"],
    manufacturer: "SleepAid Pharmaceuticals",
    batchNumber: "DPH2024001",
    storageConditions: "Store at room temperature",
    price: 28.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Dolo 650",
    manufacturingDate: "2024-01-25",
    expiryDate: "2026-01-25",
    retailer: "MicroLabs Pharmacy",
    supplier: "MicroLabs Distribution",
    rawMaterials: ["Paracetamol", "Starch", "Povidone K30"],
    manufacturer: "Micro Labs Ltd",
    batchNumber: "DOL2024001",
    storageConditions: "Store below 30°C",
    price: 32.50,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Sinarest",
    manufacturingDate: "2024-02-15",
    expiryDate: "2026-02-15",
    retailer: "Centaur Pharmacy",
    supplier: "Centaur Distribution",
    rawMaterials: ["Paracetamol", "Phenylephrine", "Chlorpheniramine"],
    manufacturer: "Centaur Pharmaceuticals",
    batchNumber: "SIN2024001",
    storageConditions: "Store below 25°C",
    price: 45.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Benadryl",
    manufacturingDate: "2024-02-20",
    expiryDate: "2026-02-20",
    retailer: "Johnson Pharmacy",
    supplier: "J&J Distribution",
    rawMaterials: ["Diphenhydramine", "Glycerin", "Propylene Glycol"],
    manufacturer: "Johnson & Johnson",
    batchNumber: "BEN2024001",
    storageConditions: "Store below 25°C",
    price: 42.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Strepsils",
    manufacturingDate: "2024-02-25",
    expiryDate: "2026-02-25",
    retailer: "Reckitt Pharmacy",
    supplier: "Reckitt Distribution",
    rawMaterials: ["Amylmetacresol", "Dichlorobenzyl Alcohol", "Levomenthol"],
    manufacturer: "Reckitt Benckiser",
    batchNumber: "STR2024001",
    storageConditions: "Store in a cool place",
    price: 35.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Eno",
    manufacturingDate: "2024-03-01",
    expiryDate: "2026-03-01",
    retailer: "GSK Pharmacy",
    supplier: "GSK Distribution",
    rawMaterials: ["Sodium Bicarbonate", "Citric Acid", "Sodium Carbonate"],
    manufacturer: "GlaxoSmithKline",
    batchNumber: "ENO2024001",
    storageConditions: "Store in a dry place",
    price: 25.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Gelusil",
    manufacturingDate: "2024-03-05",
    expiryDate: "2026-03-05",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Aluminum Hydroxide", "Magnesium Hydroxide", "Simethicone"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "GEL2024001",
    storageConditions: "Store below 30°C",
    price: 28.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Loperamide",
    manufacturingDate: "2024-03-10",
    expiryDate: "2026-03-10",
    retailer: "Janssen Pharmacy",
    supplier: "Janssen Distribution",
    rawMaterials: ["Loperamide HCl", "Lactose", "Corn Starch"],
    manufacturer: "Janssen Pharmaceuticals",
    batchNumber: "LOP2024001",
    storageConditions: "Store below 25°C",
    price: 38.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "ORS",
    manufacturingDate: "2024-03-15",
    expiryDate: "2026-03-15",
    retailer: "WHO Pharmacy",
    supplier: "WHO Distribution",
    rawMaterials: ["Sodium Chloride", "Glucose", "Potassium Chloride"],
    manufacturer: "WHO Pharmaceuticals",
    batchNumber: "ORS2024001",
    storageConditions: "Store in a cool place",
    price: 15.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Betadine",
    manufacturingDate: "2024-03-20",
    expiryDate: "2026-03-20",
    retailer: "Mundipharma Pharmacy",
    supplier: "Mundipharma Distribution",
    rawMaterials: ["Povidone Iodine", "Purified Water", "Glycerin"],
    manufacturer: "Mundipharma Pharmaceuticals",
    batchNumber: "BET2024001",
    storageConditions: "Store below 25°C",
    price: 32.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Soframycin",
    manufacturingDate: "2024-03-25",
    expiryDate: "2026-03-25",
    retailer: "Sanofi Pharmacy",
    supplier: "Sanofi Distribution",
    rawMaterials: ["Framycetin Sulphate", "White Soft Paraffin", "Lanolin"],
    manufacturer: "Sanofi India Ltd",
    batchNumber: "SOF2024001",
    storageConditions: "Store below 25°C",
    price: 42.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Hydrocortisone",
    manufacturingDate: "2024-04-01",
    expiryDate: "2026-04-01",
    retailer: "USV Pharmacy",
    supplier: "USV Distribution",
    rawMaterials: ["Hydrocortisone", "Mineral Oil", "White Petrolatum"],
    manufacturer: "USV Private Limited",
    batchNumber: "HYD2024001",
    storageConditions: "Store below 25°C",
    price: 48.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Calamine Lotion",
    manufacturingDate: "2024-04-05",
    expiryDate: "2026-04-05",
    retailer: "Rexall Pharmacy",
    supplier: "Rexall Distribution",
    rawMaterials: ["Calamine", "Zinc Oxide", "Phenol"],
    manufacturer: "Rexall Pharmaceuticals",
    batchNumber: "CAL2024001",
    storageConditions: "Store in a cool place",
    price: 22.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Loratadine",
    manufacturingDate: "2024-04-10",
    expiryDate: "2026-04-10",
    retailer: "Schering Pharmacy",
    supplier: "Schering Distribution",
    rawMaterials: ["Loratadine", "Lactose", "Corn Starch"],
    manufacturer: "Schering-Plough",
    batchNumber: "LOR2024001",
    storageConditions: "Store below 25°C",
    price: 35.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Avomine",
    manufacturingDate: "2024-04-15",
    expiryDate: "2026-04-15",
    retailer: "Sanofi Pharmacy",
    supplier: "Sanofi Distribution",
    rawMaterials: ["Promethazine Theoclate", "Lactose", "Maize Starch"],
    manufacturer: "Sanofi India Ltd",
    batchNumber: "AVO2024001",
    storageConditions: "Store below 25°C",
    price: 38.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Metformin",
    manufacturingDate: "2024-02-01",
    expiryDate: "2026-02-01",
    retailer: "DiaCare Pharmacy",
    supplier: "HealthFirst Distribution",
    rawMaterials: ["Metformin Hydrochloride", "Hydroxypropyl Methylcellulose", "Polyethylene Glycol"],
    manufacturer: "DiabetesCare Pharma",
    batchNumber: "MET2024003",
    storageConditions: "Store at room temperature",
    price: 42.75,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Amoxicillin",
    manufacturingDate: "2024-01-10",
    expiryDate: "2025-01-10",
    retailer: "MedPlus Pharmacy",
    supplier: "GlobalMed Distributors",
    rawMaterials: ["Amoxicillin Trihydrate", "Magnesium Stearate", "Sodium Starch Glycolate"],
    manufacturer: "AntiBiotics Inc",
    batchNumber: "AMX2024001",
    storageConditions: "Store below 25°C",
    price: 45.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Azithromycin",
    manufacturingDate: "2024-04-20",
    expiryDate: "2026-04-20",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Azithromycin Dihydrate", "Pregelatinized Starch", "Calcium Phosphate"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "AZI2024001",
    storageConditions: "Store below 30°C",
    price: 52.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Ciprofloxacin",
    manufacturingDate: "2024-04-25",
    expiryDate: "2026-04-25",
    retailer: "Bayer Pharmacy",
    supplier: "Bayer Distribution",
    rawMaterials: ["Ciprofloxacin HCl", "Microcrystalline Cellulose", "Corn Starch"],
    manufacturer: "Bayer Pharmaceuticals",
    batchNumber: "CIP2024001",
    storageConditions: "Store below 30°C",
    price: 48.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Metronidazole",
    manufacturingDate: "2024-05-01",
    expiryDate: "2026-05-01",
    retailer: "Sanofi Pharmacy",
    supplier: "Sanofi Distribution",
    rawMaterials: ["Metronidazole", "Lactose", "Maize Starch"],
    manufacturer: "Sanofi India Ltd",
    batchNumber: "MET2024001",
    storageConditions: "Store below 25°C",
    price: 35.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Pantoprazole",
    manufacturingDate: "2024-05-05",
    expiryDate: "2026-05-05",
    retailer: "Sun Pharmacy",
    supplier: "Sun Distribution",
    rawMaterials: ["Pantoprazole Sodium", "Mannitol", "Sodium Carbonate"],
    manufacturer: "Sun Pharmaceutical Industries",
    batchNumber: "PAN2024001",
    storageConditions: "Store below 25°C",
    price: 42.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Omeprazole",
    manufacturingDate: "2024-01-25",
    expiryDate: "2026-01-25",
    retailer: "GastroHealth Pharmacy",
    supplier: "MedCore Distributors",
    rawMaterials: ["Omeprazole Magnesium", "Mannitol", "Hypromellose"],
    manufacturer: "GastroPharm Inc",
    batchNumber: "OMP2024001",
    storageConditions: "Store below 25°C, protect from moisture",
    price: 38.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Domperidone",
    manufacturingDate: "2024-05-10",
    expiryDate: "2026-05-10",
    retailer: "Torrent Pharmacy",
    supplier: "Torrent Distribution",
    rawMaterials: ["Domperidone Maleate", "Lactose", "Maize Starch"],
    manufacturer: "Torrent Pharmaceuticals",
    batchNumber: "DOM2024001",
    storageConditions: "Store below 25°C",
    price: 32.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Montelukast",
    manufacturingDate: "2024-05-15",
    expiryDate: "2026-05-15",
    retailer: "MSD Pharmacy",
    supplier: "MSD Distribution",
    rawMaterials: ["Montelukast Sodium", "Microcrystalline Cellulose", "Lactose Monohydrate"],
    manufacturer: "Merck Sharp & Dohme",
    batchNumber: "MON2024001",
    storageConditions: "Store below 25°C",
    price: 58.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Levocetirizine",
    manufacturingDate: "2024-05-20",
    expiryDate: "2026-05-20",
    retailer: "UCB Pharmacy",
    supplier: "UCB Distribution",
    rawMaterials: ["Levocetirizine Dihydrochloride", "Microcrystalline Cellulose", "Lactose"],
    manufacturer: "UCB India Private Limited",
    batchNumber: "LEV2024001",
    storageConditions: "Store below 25°C",
    price: 42.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Salbutamol",
    manufacturingDate: "2024-05-25",
    expiryDate: "2026-05-25",
    retailer: "Cipla Pharmacy",
    supplier: "Cipla Distribution",
    rawMaterials: ["Salbutamol Sulphate", "Lactose", "Magnesium Stearate"],
    manufacturer: "Cipla Ltd",
    batchNumber: "SAL2024001",
    storageConditions: "Store below 25°C",
    price: 45.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Atorvastatin",
    manufacturingDate: "2024-06-01",
    expiryDate: "2026-06-01",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Atorvastatin Calcium", "Microcrystalline Cellulose", "Lactose Monohydrate"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "ATO2024001",
    storageConditions: "Store below 25°C",
    price: 62.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Losartan",
    manufacturingDate: "2024-06-05",
    expiryDate: "2026-06-05",
    retailer: "MSD Pharmacy",
    supplier: "MSD Distribution",
    rawMaterials: ["Losartan Potassium", "Microcrystalline Cellulose", "Lactose"],
    manufacturer: "Merck Sharp & Dohme",
    batchNumber: "LOS2024001",
    storageConditions: "Store below 25°C",
    price: 48.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Amlodipine",
    manufacturingDate: "2024-06-10",
    expiryDate: "2026-06-10",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Amlodipine Besylate", "Microcrystalline Cellulose", "Calcium Phosphate"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "AML2024001",
    storageConditions: "Store below 25°C",
    price: 45.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Levothyroxine",
    manufacturingDate: "2024-06-15",
    expiryDate: "2026-06-15",
    retailer: "Abbott Pharmacy",
    supplier: "Abbott Distribution",
    rawMaterials: ["Levothyroxine Sodium", "Lactose", "Magnesium Stearate"],
    manufacturer: "Abbott India Ltd",
    batchNumber: "LEV2024002",
    storageConditions: "Store below 25°C",
    price: 52.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Sertraline",
    manufacturingDate: "2024-06-20",
    expiryDate: "2026-06-20",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Sertraline Hydrochloride", "Microcrystalline Cellulose", "Calcium Phosphate"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "SER2024001",
    storageConditions: "Store below 25°C",
    price: 58.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Escitalopram",
    manufacturingDate: "2024-06-25",
    expiryDate: "2026-06-25",
    retailer: "Lundbeck Pharmacy",
    supplier: "Lundbeck Distribution",
    rawMaterials: ["Escitalopram Oxalate", "Microcrystalline Cellulose", "Lactose"],
    manufacturer: "Lundbeck India Private Limited",
    batchNumber: "ESC2024001",
    storageConditions: "Store below 25°C",
    price: 65.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Alprazolam",
    manufacturingDate: "2024-07-01",
    expiryDate: "2026-07-01",
    retailer: "Pfizer Pharmacy",
    supplier: "Pfizer Distribution",
    rawMaterials: ["Alprazolam", "Microcrystalline Cellulose", "Lactose"],
    manufacturer: "Pfizer Ltd",
    batchNumber: "ALP2024001",
    storageConditions: "Store below 25°C",
    price: 42.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  },
  {
    name: "Clonazepam",
    manufacturingDate: "2024-07-05",
    expiryDate: "2026-07-05",
    retailer: "Roche Pharmacy",
    supplier: "Roche Distribution",
    rawMaterials: ["Clonazepam", "Lactose", "Magnesium Stearate"],
    manufacturer: "Roche Products (India) Pvt Ltd",
    batchNumber: "CLO2024001",
    storageConditions: "Store below 25°C",
    price: 48.99,
    temperatureLog: mockTemperatureLogs,
    supplyChainEvents: mockSupplyChainEvents
  }
];