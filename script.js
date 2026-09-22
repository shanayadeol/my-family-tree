const familyTree = [
  // Generation 1
  {
    id: "rachpal_atwal",
    name: "Rachpal Atwal",
    birthYear: 1941,
    deathYear: 2015,
    spouseId: "nashatar_atwal",
    marriageYear: 1961,
    children: [
      "kuldip_rai",
      "jagdish_boparai",
      "balwinder_atwal",
      "rajwant_mahal",
      "rajinder_deol",
      "gurinder_atwal"
    ]
  },
  {
    id: "nashatar_atwal",
    name: "Nashatar Atwal",
    birthYear: 1946,
    deathYear: null,
    spouseId: "rachpal_atwal",
    marriageYear: 1961,
    children: [
      "kuldip_rai",
      "jagdish_boparai",
      "balwinder_atwal",
      "rajwant_mahal",
      "rajinder_deol",
      "gurinder_atwal"
    ]
  },

  // Generation 2: Aunt 1 Family
  {
    id: "kuldip_rai",
    name: "Kuldip Rai",
    birthYear: 1962,
    deathYear: null,
    spouseId: "talbinder_rai",
    marriageYear: 1984,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["amandeep_rai", "gurdeep_rai", "sandeep_rai", "taldeep_rai"]
  },
  {
    id: "talbinder_rai",
    name: "Talbinder Rai",
    birthYear: 1961,
    deathYear: null,
    spouseId: "kuldip_rai",
    marriageYear: 1984,
    children: ["amandeep_rai", "gurdeep_rai", "sandeep_rai", "taldeep_rai"]
  },

  // Generation 2: Aunt 2 Family
  {
    id: "jagdish_boparai",
    name: "Jagdish Boparai",
    birthYear: 1966,
    deathYear: null,
    spouseId: "bhupinder_boparai",
    marriageYear: 1994,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["harvey_boparai", "jasjit_boparai"]
  },
  {
    id: "bhupinder_boparai",
    name: "Bhupinder Boparai",
    birthYear: 1966,
    deathYear: null,
    spouseId: "jagdish_boparai",
    marriageYear: 1994,
    children: ["harvey_boparai", "jasjit_boparai"]
  },

  // Generation 2: Uncle 1 Family
  {
    id: "balwinder_atwal",
    name: "Balwinder Atwal",
    birthYear: 1968,
    deathYear: null,
    spouseId: "parminder_atwal",
    marriageYear: 1995,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["simranpreet_atwal", "gurraman_atwal", "gavin_atwal"]
  },
  {
    id: "parminder_atwal",
    name: "Parminder Atwal",
    birthYear: 1970,
    deathYear: null,
    spouseId: "balwinder_atwal",
    marriageYear: 1995,
    children: ["simranpreet_atwal", "gurraman_atwal", "gavin_atwal"]
  },

  // Generation 2: Aunt 3 Family
  {
    id: "rajwant_mahal",
    name: "Rajwant Mahal",
    birthYear: 1969,
    deathYear: null,
    spouseId: "jagtar_mahal",
    marriageYear: 1994,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["taranvir_mahal", "jaspreet_mahal"]
  },
  {
    id: "jagtar_mahal",
    name: "Jagtar Mahal",
    birthYear: 1966,
    deathYear: null,
    spouseId: "rajwant_mahal",
    marriageYear: 1994,
    children: ["taranvir_mahal", "jaspreet_mahal"]
  },

  // Generation 2: Aunt 4 Family
  {
    id: "rajinder_deol",
    name: "Rajinder Deol",
    birthYear: 1976,
    deathYear: null,
    spouseId: "gurmukh_deol",
    marriageYear: 1999,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["serena_deol", "shanaya_deol"]
  },
  {
    id: "gurmukh_deol",
    name: "Gurmukh Deol",
    birthYear: 1976,
    deathYear: null,
    spouseId: "rajinder_deol",
    marriageYear: 1999,
    children: ["serena_deol", "shanaya_deol"]
  },

  // Generation 2: Uncle 2 Family
  {
    id: "gurinder_atwal",
    name: "Gurinder Atwal",
    birthYear: 1977,
    deathYear: null,
    spouseId: "harjit_atwal",
    marriageYear: 2005,
    parents: ["rachpal_atwal", "nashatar_atwal"],
    children: ["gagan_atwal", "aashvir_atwal"]
  },
  {
    id: "harjit_atwal",
    name: "Harjit Atwal",
    birthYear: 1985,
    deathYear: null,
    spouseId: "gurinder_atwal",
    marriageYear: 2005,
    children: ["gagan_atwal", "aashvir_atwal"]
  },

  // Generation 3 & 4: Children of Aunt 1
  {
    id: "amandeep_rai",
    name: "Amandeep Rai",
    birthYear: 1985,
    deathYear: null,
    parents: ["kuldip_rai", "talbinder_rai"]
  },
  {
    id: "gurdeep_rai",
    name: "Gurdeep Rai",
    birthYear: 1989,
    deathYear: null,
    spouseId: "harby_rai",
    marriageYear: 2020,
    parents: ["kuldip_rai", "talbinder_rai"],
    children: ["niam_rai"]
  },
  {
    id: "harby_rai",
    name: "Harby Rai",
    birthYear: 1990,
    deathYear: null,
    spouseId: "gurdeep_rai",
    marriageYear: 2020,
    children: ["niam_rai"]
  },
  {
    id: "niam_rai",
    name: "Niam Rai",
    birthYear: 2022,
    deathYear: null,
    parents: ["gurdeep_rai", "harby_rai"]
  },
  {
    id: "sandeep_rai",
    name: "Sandeep Rai",
    birthYear: 1990,
    deathYear: null,
    parents: ["kuldip_rai", "talbinder_rai"]
  },
  {
    id: "taldeep_rai",
    name: "Taldeep Rai",
    birthYear: 1993,
    deathYear: null,
    spouseId: "aneet_rai",
    marriageYear: 2021,
    parents: ["kuldip_rai", "talbinder_rai"],
    children: ["rowan_rai"]
  },
  {
    id: "aneet_rai",
    name: "Aneet Rai",
    birthYear: 1992,
    deathYear: null,
    spouseId: "taldeep_rai",
    marriageYear: 2021,
    children: ["rowan_rai"]
  },
  {
    id: "rowan_rai",
    name: "Rowan Rai",
    birthYear: 2024,
    deathYear: null,
    parents: ["taldeep_rai", "aneet_rai"]
  },

  // Generation 3: Children of Aunt 2
  {
    id: "harvey_boparai",
    name: "Harvey Boparai",
    birthYear: 1996,
    deathYear: null,
    parents: ["jagdish_boparai", "bhupinder_boparai"]
  },
  {
    id: "jasjit_boparai",
    name: "Jasjit Boparai",
    birthYear: 1998,
    deathYear: null,
    parents: ["jagdish_boparai", "bhupinder_boparai"]
  },

  // Generation 3: Children of Uncle 1
  {
    id: "simranpreet_atwal",
    name: "Simranpreet Atwal",
    birthYear: 1996,
    deathYear: null,
    parents: ["balwinder_atwal", "parminder_atwal"]
  },
  {
    id: "gurraman_atwal",
    name: "Gurraman Atwal",
    birthYear: 1997,
    deathYear: null,
    parents: ["balwinder_atwal", "parminder_atwal"]
  },
  {
    id: "gavin_atwal",
    name: "Gavin Atwal",
    birthYear: 2005,
    deathYear: null,
    parents: ["balwinder_atwal", "parminder_atwal"]
  },

  // Generation 3: Children of Aunt 3
  {
    id: "taranvir_mahal",
    name: "Taranvir Mahal",
    birthYear: 1999,
    deathYear: null,
    parents: ["rajwant_mahal", "jagtar_mahal"]
  },
  {
    id: "jaspreet_mahal",
    name: "Jaspreet Mahal",
    birthYear: 2000,
    deathYear: null,
    parents: ["rajwant_mahal", "jagtar_mahal"]
  },

  // Generation 3: Children of Aunt 4
  {
    id: "serena_deol",
    name: "Serena Deol",
    birthYear: 2003,
    deathYear: null,
    parents: ["rajinder_deol", "gurmukh_deol"]
  },
  {
    id: "shanaya_deol",
    name: "Shanaya Deol",
    birthYear: 2014,
    deathYear: null,
    parents: ["rajinder_deol", "gurmukh_deol"]
  },

  // Generation 3: Children of Uncle 2
  {
    id: "gagan_atwal",
    name: "Gagan Atwal",
    birthYear: 2007,
    deathYear: null,
    parents: ["gurinder_atwal", "harjit_atwal"]
  },
  {
    id: "aashvir_atwal",
    name: "Aashvir Atwal",
    birthYear: 2009,
    deathYear: null,
    parents: ["gurinder_atwal", "harjit_atwal"]
  }
];