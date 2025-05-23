import { Patent } from "@services/Patent/Interfaces/PatentResponse";



export const patentMockData: Patent[] = [
  {
    author: 'Ana Rodríguez',
    patentId: 'P-001',
    name: 'Bicicleta plegable solar',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'approved',
    type: 'industrial',
    lastModified: '2024-05-01T10:00:00Z',
    revisionCount: 2,
    hasNewComments: true
  },
  {
    author: 'Luis Martínez',
    patentId: 'P-002',
    name: 'Zapato inteligente para diabéticos',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'pending',
    type: 'diseño',
    lastModified: '2024-04-21T12:30:00Z',
    revisionCount: 1,
    hasNewComments: false
  },
  {
    author: 'Sofía Jiménez',
    patentId: 'P-003',
    name: 'Sistema de recolección de agua pluvial',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'rejected',
    type: 'ecológico',
    lastModified: '2024-03-15T09:45:00Z',
    revisionCount: 3,
    hasNewComments: true
  },
  {
    author: 'Carlos Herrera',
    patentId: 'P-004',
    name: 'Termo con medidor de temperatura digital',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'approved',
    type: 'tecnología',
    lastModified: '2024-05-10T14:20:00Z',
    revisionCount: 5,
    hasNewComments: false
  },
  {
    author: 'María López',
    patentId: 'P-005',
    name: 'Espejo antiniebla para baños',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'pending',
    type: 'hogar',
    lastModified: '2024-05-16T08:00:00Z',
    revisionCount: 0,
    hasNewComments: true
  },
  {
    author: 'Javier Ortega',
    patentId: 'P-006',
    name: 'Panel solar portátil para mochilas',
    previewUrl: 'https://i.imgur.com/BDcHfIa.png',
    status: 'reviewing',
    type: 'energía',
    lastModified: '2024-05-18T17:30:00Z',
    revisionCount: 4,
    hasNewComments: false
  }
];

