export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  specifications: {
    element: string;
    range: string;
  }[];
  applications: string[];
  physicalState: string;
  standardSize: string;
  image: string;
  grades?: string[];
  note?: string;
}

export interface Facility {
  id: string;
  name: string;
  type: string;
  capacity: string;
  details: string;
  equipment: string[];
  features: string[];
}

export interface QualityTest {
  id: string;
  name: string;
  equipmentUsed: string;
  methodology: string;
  tolerance: string;
  importance: string;
}

export interface CountryPresence {
  name: string;
  code: string;
  marketShare: string;
  mainProducts: string[];
}

export interface Enquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  products: {
    productId: string;
    productName: string;
    quantityMT: number;
    customSpecNote?: string;
  }[];
  destinationCountry: string;
  urgency: 'low' | 'medium' | 'high';
  estimatedCostUSD?: number;
  status: 'Received' | 'Assigned to Sales' | 'Quoted' | 'Processing';
  timestamp: string;
}
