// @ts-check

const { description } = require('./config');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "cours/rencontre1.1", // Doit matcher le nom du document qui est dans docs/01-cours/. Les chiffres au début (ex : 01-) sont ignorés.
      customProps: { // Attention, il faut recompiler à chaque modification dans sidebar.js pour que les modifications s'appliquent.
        calendrier: {
          "Groupe": [
            {"1010": "2026-01-27"},  // Date du cours pour le groupe 1010 du le Prof 1
            {"1020": "2026-01-27"}
          ]
        },
        tooltip: "visible", // Valeurs possibles visible ou cache, valeur par défaut "visible"
        
      }
    },
    {
      type: "doc",
      id: "cours/rencontre1.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-01-29"},
            {"1020": "2026-01-29"}
          ]
        },
      }
    },
    {
      type: "doc",
      id: "cours/rencontre2.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-03"},
            {"1020": "2026-02-03"}
          ]
        },
        avancementLabel: "TP1 - Créé",
        avancement: 0.0
      }
    },
    {
      type: "doc",
      id: "cours/rencontre2.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-05"},
            {"1020": "2026-02-05"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      id: "cours/rencontre3.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-10"},
            {"1020": "2026-02-10"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.25
      }
    },
    {
      type: "doc",
      id: "cours/rencontre3.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-12"},
            {"1020": "2026-02-12"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.5
      }
    },
    {
      type: "doc",
      id: "cours/rencontre4.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-17"},
            {"1020": "2026-02-17"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 0.75
      }
    },
    {
      type: "doc",
      id: "cours/rencontre4.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-19"},
            {"1020": "2026-02-19"}
          ]
        },
        avancementLabel: "TP1",
        avancement: 1
      }
    },
    {
      type: "doc",
      id: "cours/rencontre5.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-24"},
            {"1020": "2026-02-24"}
          ]
        },
        avancementLabel: "TP2 - Créé",
        avancement: 0.0
      },
      "className": "remise-tp1"
    },
    {
      type: "doc",
      id: "cours/rencontre5.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-02-26"},
            {"1020": "2026-02-26"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      id: "cours/rencontre6.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-03"},
            {"1020": "2026-03-03"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.3
      }
    },
    {
      type: "doc",
      id: "cours/rencontre6.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-05"},
            {"1020": "2026-03-05"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      id: "cours/rencontre7.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-10"},
            {"1020": "2026-03-10"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      id: "cours/rencontre7.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-12"},
            {"1020": "2026-03-12"}
          ]
        },
      },
      "className": "examen"
    },
    {
      type: "doc",
      id: "cours/rencontre8.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-24"},
            {"1020": "2026-03-24"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.6
      }
    },
    {
      type: "doc",
      id: "cours/rencontre8.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-03-26"},
            {"1020": "2026-03-26"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.7
      }
    },
    {
      type: "doc",
      id: "cours/rencontre9.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-02"},
            {"1020": "2026-04-02"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 0.9
      }
    },
    {
      type: "doc",
      id: "cours/rencontre9.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-07"},
            {"1020": "2026-04-07"}
          ]
        },
        avancementLabel: "TP2",
        avancement: 1
      },
      "className": "remise-tp2"
    },
    {
      type: "doc",
      id: "cours/rencontre10.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-14"},
            {"1020": "2026-04-14"}
          ]
        },
        avancementLabel: "TP3 - Créé",
        avancement: 0.0
      }
    },
    {
      type: "doc",
      id: "cours/rencontre10.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-16"},
            {"1020": "2026-04-16"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.1
      }
    },
    {
      type: "doc",
      id: "cours/rencontre11.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-21"},
            {"1020": "2026-04-21"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.2
      }
    },
    {
      type: "doc",
      id: "cours/rencontre11.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-23"},
            {"1020": "2026-04-23"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.3
      }
    },
    {
      type: "doc",
      id: "cours/rencontre12.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-28"},
            {"1020": "2026-04-28"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.4
      }
    },
    {
      type: "doc",
      id: "cours/rencontre12.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-04-30"},
            {"1020": "2026-04-30"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.5
      }
    },
    {
      type: "doc",
      id: "cours/rencontre13.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-05"},
            {"1020": "2026-05-05"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.6
      }
    },
    {
      type: "doc",
      id: "cours/rencontre13.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-07"},
            {"1020": "2026-05-07"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.7
      }
    },
    {
      type: "doc",
      id: "cours/rencontre14.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-12"},
            {"1020": "2026-05-12"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 0.8
      }
    },
    {
      type: "doc",
      id: "cours/rencontre14.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-14"},
            {"1020": "2026-05-14"}
          ]
        },
        avancementLabel: "TP3",
        avancement: 1
      }
    },
    {
      type: "doc",
      id: "cours/rencontre15.1",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-21"},
            {"1020": "2026-05-21"}
          ]
        },
      },
      "className": "remise-tp3"
    },
    {
      type: "doc",
      id: "cours/rencontre15.2",
      customProps: {
        calendrier: {
          "Groupe": [
            {"1010": "2026-05-26"},
            {"1020": "2026-05-26"}
          ]
        },
      },
      "className": "examen"
    }
  ],
  "recettes": [
    {
      type: "autogenerated",
      "dirName": "02-recettes"
    }
  ],
  "documentation": [
    {
      type: "autogenerated",
      "dirName": "03-documentation"
    }
  ],
  "tp": [
    {
      type: "autogenerated",
      "dirName": "04-tp"
    }
  ],
  "extra": [
    {
      type: "autogenerated",
      "dirName": "05-extra"
    }
  ]
};

module.exports = sidebars;
