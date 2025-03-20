import { Product } from './types';

export const products: Product[] = [
  // Industrial Supplies
  {
    id: '1',
    name: 'Industrial Bearings',
    description: 'High-quality ball bearings for industrial machinery',
    price: '₹2,000 - ₹15,000',
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910',
    category: 'Industrial Supplies',
    seller: {
      name: 'Bearing Solutions Ltd',
      whatsapp: '+919876543210',
      location: 'Mumbai, Maharashtra'
    }
  },
  {
    id: '2',
    name: 'Pneumatic Tools Set',
    description: 'Professional-grade pneumatic tools for industrial use',
    price: '₹15,000 - ₹50,000',
    image: 'https://images.unsplash.com/photo-1581241729193-4a8223dcd024',
    category: 'Industrial Supplies',
    seller: {
      name: 'Industrial Tools Co',
      whatsapp: '+919876543211',
      location: 'Delhi, NCR'
    }
  },
  
  // Food & Agriculture
  {
    id: '3',
    name: 'Organic Turmeric Powder',
    description: 'Premium quality organic turmeric directly from farmers',
    price: '₹200 - ₹1,000 per kg',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5',
    category: 'Food & Agriculture',
    seller: {
      name: 'Organic Spice Traders',
      whatsapp: '+919876543212',
      location: 'Kochi, Kerala'
    }
  },
  {
    id: '4',
    name: 'Fresh Alphonso Mangoes',
    description: 'Premium Alphonso mangoes from Ratnagiri',
    price: '₹800 - ₹1,500 per dozen',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078',
    category: 'Food & Agriculture',
    seller: {
      name: 'Fruit Express',
      whatsapp: '+919876543213',
      location: 'Ratnagiri, Maharashtra'
    }
  },

  // Textiles & Garments
  {
    id: '5',
    name: 'Cotton Fabric Bundle',
    description: 'High-quality cotton fabric for garment manufacturing',
    price: '₹150 - ₹300 per meter',
    image: 'https://images.unsplash.com/photo-1596493712581-c108438e4187',
    category: 'Textiles & Garments',
    seller: {
      name: 'Textile Hub',
      whatsapp: '+919876543214',
      location: 'Surat, Gujarat'
    }
  },
  {
    id: '6',
    name: 'Denim Collection',
    description: 'Premium denim fabric for jeans manufacturing',
    price: '₹250 - ₹500 per meter',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    category: 'Textiles & Garments',
    seller: {
      name: 'Denim Masters',
      whatsapp: '+919876543215',
      location: 'Ahmedabad, Gujarat'
    }
  },

  // Building & Construction
  {
    id: '7',
    name: 'Portland Cement',
    description: 'High-grade cement for construction',
    price: '₹350 - ₹400 per bag',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3',
    category: 'Building & Construction',
    seller: {
      name: 'Build Materials Ltd',
      whatsapp: '+919876543216',
      location: 'Pune, Maharashtra'
    }
  },
  {
    id: '8',
    name: 'Steel Reinforcement Bars',
    description: 'TMT steel bars for construction',
    price: '₹45,000 - ₹55,000 per ton',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3',
    category: 'Building & Construction',
    seller: {
      name: 'Steel Industries',
      whatsapp: '+919876543217',
      location: 'Jamshedpur, Jharkhand'
    }
  },

  // Electronics & Electrical
  {
    id: '9',
    name: 'LED Panel Lights',
    description: 'Energy-efficient LED panel lights for commercial use',
    price: '₹500 - ₹2,000',
    image: 'https://images.unsplash.com/photo-1565858950942-5f32b2fae1c4',
    category: 'Electronics & Electrical',
    seller: {
      name: 'Lighting Solutions',
      whatsapp: '+919876543218',
      location: 'Noida, UP'
    }
  },
  {
    id: '10',
    name: 'Solar Panels 500W',
    description: 'High-efficiency solar panels with inverter',
    price: '₹25,000 - ₹35,000',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    category: 'Electronics & Electrical',
    seller: {
      name: 'Green Energy Systems',
      whatsapp: '+919876543219',
      location: 'Bangalore, Karnataka'
    }
  },

  // Chemicals & Solvents
  {
    id: '11',
    name: 'Industrial Cleaning Chemicals',
    description: 'Professional-grade cleaning solutions',
    price: '₹2,000 - ₹5,000 per drum',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    category: 'Chemicals & Solvents',
    seller: {
      name: 'Chemical Solutions',
      whatsapp: '+919876543220',
      location: 'Vadodara, Gujarat'
    }
  },
  {
    id: '12',
    name: 'Industrial Solvents',
    description: 'High-purity solvents for industrial use',
    price: '₹1,500 - ₹3,000 per liter',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    category: 'Chemicals & Solvents',
    seller: {
      name: 'Pure Chemicals Ltd',
      whatsapp: '+919876543221',
      location: 'Mumbai, Maharashtra'
    }
  },

  // Packaging Materials
  {
    id: '13',
    name: 'Corrugated Boxes Bulk',
    description: 'High-quality corrugated boxes for shipping',
    price: '₹20 - ₹50 per piece',
    image: 'https://images.unsplash.com/photo-1530049478161-0780526f2260',
    category: 'Packaging Materials',
    seller: {
      name: 'Pack Right',
      whatsapp: '+919876543222',
      location: 'Delhi, NCR'
    }
  },
  {
    id: '14',
    name: 'Bubble Wrap Rolls',
    description: 'Premium bubble wrap for safe packaging',
    price: '₹500 - ₹1,000 per roll',
    image: 'https://images.unsplash.com/photo-1530049478161-0780526f2260',
    category: 'Packaging Materials',
    seller: {
      name: 'Packaging Solutions',
      whatsapp: '+919876543223',
      location: 'Chennai, Tamil Nadu'
    }
  },

  // Healthcare & Medical
  {
    id: '15',
    name: 'Surgical Masks Box',
    description: '3-ply surgical masks, box of 100',
    price: '₹500 - ₹1,000',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5',
    category: 'Healthcare & Medical',
    seller: {
      name: 'Medical Supplies Co',
      whatsapp: '+919876543224',
      location: 'Hyderabad, Telangana'
    }
  },
  {
    id: '16',
    name: 'Digital BP Monitor',
    description: 'Automatic digital blood pressure monitor',
    price: '₹2,000 - ₹5,000',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5',
    category: 'Healthcare & Medical',
    seller: {
      name: 'Healthcare Equipment Ltd',
      whatsapp: '+919876543225',
      location: 'Pune, Maharashtra'
    }
  },

  // Auto Parts & Accessories
  {
    id: '17',
    name: 'Car Battery 12V',
    description: 'Maintenance-free car battery',
    price: '₹5,000 - ₹8,000',
    image: 'https://images.unsplash.com/photo-1620285327296-88ac965a2b28',
    category: 'Auto Parts & Accessories',
    seller: {
      name: 'Auto Battery House',
      whatsapp: '+919876543226',
      location: 'Chennai, Tamil Nadu'
    }
  },
  {
    id: '18',
    name: 'Premium Brake Pads',
    description: 'High-performance brake pads for cars',
    price: '₹2,000 - ₹5,000 per set',
    image: 'https://images.unsplash.com/photo-1620285327296-88ac965a2b28',
    category: 'Auto Parts & Accessories',
    seller: {
      name: 'Auto Parts Hub',
      whatsapp: '+919876543227',
      location: 'Delhi, NCR'
    }
  },

  // Home & Office Supplies
  {
    id: '19',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair for office use',
    price: '₹8,000 - ₹15,000',
    image: 'https://images.unsplash.com/photo-1505797149-35ebcb05a6ae',
    category: 'Home & Office Supplies',
    seller: {
      name: 'Office Furniture Pro',
      whatsapp: '+919876543228',
      location: 'Bangalore, Karnataka'
    }
  },
  {
    id: '20',
    name: 'Smart LED Desk Lamp',
    description: 'Adjustable LED desk lamp with USB charging',
    price: '₹1,500 - ₹3,000',
    image: 'https://images.unsplash.com/photo-1534281368625-f738746dae39',
    category: 'Home & Office Supplies',
    seller: {
      name: 'Smart Home Solutions',
      whatsapp: '+919876543229',
      location: 'Mumbai, Maharashtra'
    }
  }
];

export const categories = [
  'Industrial Supplies',
  'Food & Agriculture',
  'Textiles & Garments',
  'Building & Construction',
  'Electronics & Electrical',
  'Chemicals & Solvents',
  'Packaging Materials',
  'Healthcare & Medical',
  'Auto Parts & Accessories',
  'Home & Office Supplies'
];