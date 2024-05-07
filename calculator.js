// Solar irradiance data for each state (kWh/m2/day)
const solarIrradianceData = {
  'Acre': 4.8,
  'Alagoas': 5.5,
  'Amapá': 4.5,
  'Amazonas': 4.9,
  'Bahia': 5.4,
  'Ceará': 5.7,
  'Distrito Federal': 5.2,
  'Espírito Santo': 4.9,
  'Goiás': 5.6,
  'Maranhão': 5.5,
  'Mato Grosso': 5.8,
  'Mato Grosso do Sul': 5.7,
  'Minas Gerais': 5.4,
  'Pará': 4.8,
  'Paraíba': 5.3,
  'Paraná': 4.7,
  'Pernambuco': 5.6,
  'Piauí': 5.5,
  'Rio de Janeiro': 4.9,
  'Rio Grande do Norte': 5.4,
  'Rio Grande do Sul': 4.7,
  'Rondônia': 5.3,
  'Roraima': 4.7,
  'Santa Catarina': 4.6,
  'São Paulo': 5.1,
  'Sergipe': 5.6,
  'Tocantins': 5.4
};

// Electricity rates for each state (R$/kWh) - Residential and Commercial/Industrial
const electricityRates = {
  'Acre':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Alagoas':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Amapá':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Amazonas': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Bahia':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Ceará': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Distrito Federal':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Espírito Santo':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Goiás':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Maranhão':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Mato Grosso':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Mato Grosso do Sul':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Minas Gerais':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Pará':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Paraíba':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Paraná':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Pernambuco':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Piauí':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Rio de Janeiro': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Rio Grande do Norte': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Rio Grande do Sul': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Rondônia': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Roraima': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Santa Catarina': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'São Paulo': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Sergipe': {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
  'Tocantins':  {
    'residential': {
      'monofasico': {
        'rate': 0.733,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
    'commercial': {
      'monofasico': {
        'rate': 0.47,
        'minimumFee': 10.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 30 // kWh
      },
      'bifasico': {
        'rate': 0.61,
        'minimumFee': 15.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 50 // kWh
      },
      'trifasico': {
        'rate': 0.61,
        'minimumFee': 20.00,
        'publicIlluminationFee': 2.00,
        'minimumConsumption': 100 // kWh
      }
    },
  },
};

// Minimum consumption for different installation types
const installationTypes = {
  'monofasico': {
    'minimumConsumption': 30 // kWh
  },
  'bifasico': {
    'minimumConsumption': 50 // kWh
  },
  'trifasico': {
    'minimumConsumption': 100 // kWh
  }
};

// Function to calculate monthly savings
function calculateMonthlySavings(systemCapacity, solarIrradiance, electricityRate, state, customerType, monthlyEnergyBill) {
  // Calculate solar energy generation
  const solarEnergyGeneration = systemCapacity * solarIrradiance;

  // Get the rates for the selected state and customer type
  const rates = electricityRates[state][customerType];

  // Calculate the installation type based on electricity rate and public illumination fee
  let installationType;
  if (electricityRate >= rates.monofasico.rate + rates.monofasico.publicIlluminationFee) {
    installationType = 'monofasico';
  } else if (electricityRate >= rates.bifasico.rate + rates.bifasico.publicIlluminationFee) {
    installationType = 'bifasico';
  } else {
    installationType = 'trifasico';
  }

  // Get the minimum consumption for the selected installation type
  const minimumConsumption = installationTypes[installationType].minimumConsumption;

  // Calculate the total minimum fee
  const minimumFee = (minimumConsumption * electricityRate) + rates[installationType].publicIlluminationFee;

  // Calculate monthly savings
  const savings = (solarEnergyGeneration * electricityRate) - monthlyEnergyBill - minimumFee;

  return savings;
}

// Form submission event handler
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const customerType = document.getElementById('customerType').value;
  const state = document.getElementById('state').value;
  const consumoMensal = parseFloat(document.getElementById('consumoMensal').value);
  const monthlyEnergyBill = parseFloat(document.getElementById('monthlyEnergyBill').value);

  // Calculate savings
  const solarIrradiance = solarIrradianceData[state];
  const electricityRate = electricityRates[state][customerType].monofasico.rate; // Access electricity rate based on state and customer type
  const systemCapacity = consumoMensal;
  const monthlySavings = calculateMonthlySavings(systemCapacity, solarIrradiance, electricityRate, state, customerType, monthlyEnergyBill);
  const annualSavings = monthlySavings * 12;

  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>Economia mensal estimada: R$${monthlySavings.toFixed(2)}</p>
    <p>Economia anual estimada: R$${annualSavings.toFixed(2)}</p>
  `;
});