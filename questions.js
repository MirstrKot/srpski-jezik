// Serbian language exercises — nouns and adjectives in various cases
// Each question: sentence with ___ blanks, placeholder base forms, correct answers
// To add more questions: append to the array and increment id (must be unique)

const QUESTIONS = [
  // === AKUZATIV — muški rod, živo (animate masculine, Acc = Gen) ===
  { id: 1,  sentence: "Vidim ___ ___ na ulici.",            placeholders: ["mlad",    "čovek"],     answers: ["mladog",      "čoveka"]      },
  { id: 2,  sentence: "Čekam ___ ___ na stanici.",          placeholders: ["dobar",   "drug"],      answers: ["dobrog",      "druga"]       },
  { id: 3,  sentence: "Zovem ___ ___ na telefon.",          placeholders: ["mali",    "brat"],      answers: ["malog",       "brata"]       },
  { id: 4,  sentence: "Volim ___ ___ veoma.",               placeholders: ["star",    "otac"],      answers: ["starog",      "oca"]         },
  { id: 5,  sentence: "Poznajem ___ ___ iz škole.",         placeholders: ["dobar",   "učitelj"],   answers: ["dobrog",      "učitelja"]    },
  { id: 6,  sentence: "Slušam ___ ___ svaki čas.",          placeholders: ["star",    "profesor"],  answers: ["starog",      "profesora"]   },
  { id: 7,  sentence: "Sreo sam ___ ___ na ulici.",         placeholders: ["poznat",  "glumac"],    answers: ["poznatog",    "glumca"]      },
  { id: 8,  sentence: "Pozdravljam ___ ___ svako jutro.",   placeholders: ["drag",    "komšija"],   answers: ["dragog",      "komšiju"]     },
  { id: 9,  sentence: "Posećujem ___ ___ svake nedelje.",   placeholders: ["bogat",   "ujak"],      answers: ["bogatog",     "ujaka"]       },
  { id: 10, sentence: "Gledam ___ ___ kako igra.",          placeholders: ["mlad",    "fudbaler"],  answers: ["mladog",      "fudbalera"]   },

  // === AKUZATIV — muški rod, neživo (inanimate masculine, Acc = Nom) ===
  { id: 11, sentence: "Čitam ___ ___ svake večeri.",        placeholders: ["dobar",   "roman"],     answers: ["dobar",       "roman"]       },
  { id: 12, sentence: "Kupujem ___ ___ u prodavnici.",      placeholders: ["nov",     "telefon"],   answers: ["nov",         "telefon"]     },
  { id: 13, sentence: "Gledam ___ ___ u bioskopu.",         placeholders: ["zanimljiv","film"],     answers: ["zanimljiv",   "film"]        },
  { id: 14, sentence: "Vozim ___ ___ svaki dan.",           placeholders: ["crven",   "auto"],      answers: ["crven",       "auto"]        },
  { id: 15, sentence: "Jedem ___ ___ za desert.",           placeholders: ["sladak",  "kolač"],     answers: ["sladak",      "kolač"]       },
  { id: 16, sentence: "Pišem ___ ___ za školu.",            placeholders: ["dug",     "tekst"],     answers: ["dug",         "tekst"]       },
  { id: 17, sentence: "Imam ___ ___ u centru.",             placeholders: ["velik",   "stan"],      answers: ["velik",       "stan"]        },
  { id: 18, sentence: "Tražim ___ ___ u ovoj firmi.",       placeholders: ["dobar",   "posao"],     answers: ["dobar",       "posao"]       },
  { id: 19, sentence: "Kupio sam ___ ___ juče.",            placeholders: ["lep",     "kaput"],     answers: ["lep",         "kaput"]       },
  { id: 20, sentence: "Pijem ___ ___ ujutru.",              placeholders: ["crn",     "čaj"],       answers: ["crn",         "čaj"]         },

  // === AKUZATIV — ženski rod ===
  { id: 21, sentence: "Vidim ___ ___ u parku.",             placeholders: ["mlada",       "devojka"],    answers: ["mladu",       "devojku"]     },
  { id: 22, sentence: "Volim ___ ___ tog pevača.",          placeholders: ["lepa",        "pesma"],      answers: ["lepu",        "pesmu"]       },
  { id: 23, sentence: "Čitam ___ ___ pred spavanje.",       placeholders: ["zanimljiva",  "priča"],      answers: ["zanimljivu",  "priču"]       },
  { id: 24, sentence: "Kupujem ___ ___ za proslavu.",       placeholders: ["nova",        "haljina"],    answers: ["novu",        "haljinu"]     },
  { id: 25, sentence: "Slušam ___ ___ u kolima.",           placeholders: ["tužna",       "muzika"],     answers: ["tužnu",       "muziku"]      },
  { id: 26, sentence: "Imam ___ ___ na polici.",            placeholders: ["dobra",       "knjiga"],     answers: ["dobru",       "knjigu"]      },
  { id: 27, sentence: "Gledam ___ ___ iz albuma.",          placeholders: ["stara",       "fotografija"],answers: ["staru",       "fotografiju"] },
  { id: 28, sentence: "Vidim ___ ___ na uglu.",             placeholders: ["visoka",      "zgrada"],     answers: ["visoku",      "zgradu"]      },
  { id: 29, sentence: "Kupujem ___ ___ na pijaci.",         placeholders: ["svež",        "jabuka"],     answers: ["svežu",       "jabuku"]      },
  { id: 30, sentence: "Gledam ___ ___ na televiziji.",      placeholders: ["nova",        "serija"],     answers: ["novu",        "seriju"]      },

  // === AKUZATIV — srednji rod (Acc = Nom) ===
  { id: 31, sentence: "Vidim ___ ___ u parku.",             placeholders: ["malo",   "dete"],      answers: ["malo",   "dete"]      },
  { id: 32, sentence: "Pijem ___ ___ posle posla.",         placeholders: ["hladno", "pivo"],      answers: ["hladno", "pivo"]      },
  { id: 33, sentence: "Čitam ___ ___ svaki dan.",           placeholders: ["kratko", "pismo"],     answers: ["kratko", "pismo"]     },
  { id: 34, sentence: "Kupujem ___ ___ za večeru.",         placeholders: ["belo",   "vino"],      answers: ["belo",   "vino"]      },
  { id: 35, sentence: "Volim ___ ___ i odmor.",             placeholders: ["toplo",  "leto"],      answers: ["toplo",  "leto"]      },

  // === GENITIV ===
  { id: 36, sentence: "Bojim se ___ ___.",                          placeholders: ["velik",    "pas"],        answers: ["velikog",    "psa"]         },
  { id: 37, sentence: "Nema ___ ___ kod kuće.",                     placeholders: ["star",     "čovek"],      answers: ["starog",     "čoveka"]      },
  { id: 38, sentence: "Pijem čašu ___ ___.",                        placeholders: ["hladan",   "sok"],        answers: ["hladnog",    "soka"]        },
  { id: 39, sentence: "Šetam oko ___ ___.",                         placeholders: ["malo",     "jezero"],     answers: ["malog",      "jezera"]      },
  { id: 40, sentence: "Živim blizu ___ ___.",                       placeholders: ["velik",    "grad"],       answers: ["velikog",    "grada"]       },
  { id: 41, sentence: "Idem kod ___ ___.",                          placeholders: ["dobar",    "prijatelj"],  answers: ["dobrog",     "prijatelja"]  },
  { id: 42, sentence: "Ne mogu bez ___ ___.",                       placeholders: ["svež",     "kafa"],       answers: ["sveže",      "kafe"]        },
  { id: 43, sentence: "Čekam ispred ___ ___.",                      placeholders: ["star",     "škola"],      answers: ["stare",      "škole"]       },
  { id: 44, sentence: "Dolazim iz ___ ___.",                        placeholders: ["malo",     "selo"],       answers: ["malog",      "sela"]        },
  { id: 45, sentence: "Ima puno ___ ___.",                          placeholders: ["slobodan", "vreme"],      answers: ["slobodnog",  "vremena"]     },
  { id: 46, sentence: "Uzimam lek zbog ___ ___.",                   placeholders: ["jak",      "bol"],        answers: ["jakog",      "bola"]        },
  { id: 47, sentence: "Vraćam se od ___ ___.",                      placeholders: ["dobar",    "lekar"],      answers: ["dobrog",     "lekara"]      },
  { id: 48, sentence: "Uzeo sam parče ___ ___.",                    placeholders: ["ukusan",   "torta"],      answers: ["ukusne",     "torte"]       },
  { id: 49, sentence: "Ispio je gutljaj ___ ___.",                  placeholders: ["topao",    "čaj"],        answers: ["toplog",     "čaja"]        },
  { id: 50, sentence: "Vraćam se sa ___ ___.",                      placeholders: ["dug",      "put"],        answers: ["dugog",      "puta"]        },
  { id: 51, sentence: "Plaši se ___ ___.",                          placeholders: ["visok",    "talas"],      answers: ["visokog",    "talasa"]      },
  { id: 52, sentence: "Nema više ___ ___.",                         placeholders: ["dobar",    "lekar"],      answers: ["dobrog",     "lekara"]      },
  { id: 53, sentence: "Čekam kraj ___ ___.",                        placeholders: ["dug",      "film"],       answers: ["dugog",      "filma"]       },
  { id: 54, sentence: "Uzeo je komad ___ ___.",                     placeholders: ["svež",     "hleb"],       answers: ["svežeg",     "hleba"]       },
  { id: 55, sentence: "Vratio se iz ___ ___.",                      placeholders: ["star",     "zemlja"],     answers: ["stare",      "zemlje"]      },

  // === DATIV ===
  { id: 56, sentence: "Dajem ___ ___ igračku.",             placeholders: ["mali",    "brat"],      answers: ["malom",    "bratu"]       },
  { id: 57, sentence: "Pišem ___ ___ pismo.",               placeholders: ["drag",    "prijatelj"], answers: ["dragom",   "prijatelju"]  },
  { id: 58, sentence: "Pomažem ___ ___ u kući.",            placeholders: ["star",    "baka"],      answers: ["staroj",   "baki"]        },
  { id: 59, sentence: "Govorim ___ ___ istinu.",            placeholders: ["malo",    "dete"],      answers: ["malom",    "detetu"]      },
  { id: 60, sentence: "Šaljem pismo ___ ___.",              placeholders: ["mlad",    "sestra"],    answers: ["mladoj",   "sestri"]      },
  { id: 61, sentence: "Zahvaljujem ___ ___ na pomoći.",     placeholders: ["dobar",   "doktor"],    answers: ["dobrom",   "doktoru"]     },
  { id: 62, sentence: "Verujem ___ ___ bezuslovno.",        placeholders: ["dobar",   "čovek"],     answers: ["dobrom",   "čoveku"]      },
  { id: 63, sentence: "Pridružujem se ___ ___.",            placeholders: ["veseo",   "grupa"],     answers: ["veseloj",  "grupi"]       },
  { id: 64, sentence: "Vraćam se ___ ___.",                 placeholders: ["rodni",   "kuća"],      answers: ["rodnoj",   "kući"]        },
  { id: 65, sentence: "Odgovaram ___ ___ na pitanje.",      placeholders: ["star",    "profesor"],  answers: ["starom",   "profesoru"]   },
  { id: 66, sentence: "Pošao je prema ___ ___.",            placeholders: ["nov",     "zgrada"],    answers: ["novoj",    "zgradi"]      },
  { id: 67, sentence: "Nosim poklon ___ ___.",              placeholders: ["mlada",   "devojka"],   answers: ["mladoj",   "devojci"]     },
  { id: 68, sentence: "Kažem ___ ___ da dođe.",            placeholders: ["dobar",   "drug"],      answers: ["dobrom",   "drugu"]       },

  // === INSTRUMENTAL ===
  { id: 69, sentence: "Razgovaram sa ___ ___.",             placeholders: ["dobar",    "prijatelj"], answers: ["dobrim",    "prijateljem"] },
  { id: 70, sentence: "Putuje sa ___ ___.",                 placeholders: ["mlad",     "sestra"],    answers: ["mladom",    "sestrom"]     },
  { id: 71, sentence: "Pišem ___ ___.",                     placeholders: ["crven",    "olovka"],    answers: ["crvenom",   "olovkom"]     },
  { id: 72, sentence: "Idem u školu sa ___ ___.",           placeholders: ["mali",     "brat"],      answers: ["malim",     "bratom"]      },
  { id: 73, sentence: "Sreo sam se sa ___ ___.",            placeholders: ["star",     "kolega"],    answers: ["starim",    "kolegom"]     },
  { id: 74, sentence: "Bavim se ___ ___.",                  placeholders: ["klasičan", "muzika"],    answers: ["klasičnom", "muzikom"]     },
  { id: 75, sentence: "Vozim se ___ ___.",                  placeholders: ["brz",      "voz"],       answers: ["brzim",     "vozom"]       },
  { id: 76, sentence: "Jede supu ___ ___.",                 placeholders: ["drvena",   "kašika"],    answers: ["drvenom",   "kašikom"]     },
  { id: 77, sentence: "Bavio se ___ ___.",                  placeholders: ["jak",      "sport"],     answers: ["jakim",     "sportom"]     },
  { id: 78, sentence: "Putovao je ___ ___.",                placeholders: ["star",     "brod"],      answers: ["starim",    "brodom"]      },
  { id: 79, sentence: "Razgovara sa ___ ___.",              placeholders: ["pametna",  "devojka"],   answers: ["pametnom",  "devojkom"]    },
  { id: 80, sentence: "Igra se sa ___ ___.",                placeholders: ["mali",     "pas"],       answers: ["malim",     "psom"]        },

  // === LOKATIV ===
  { id: 81, sentence: "Živim u ___ ___.",                   placeholders: ["mali",      "grad"],      answers: ["malom",      "gradu"]       },
  { id: 82, sentence: "Radim u ___ ___.",                   placeholders: ["velika",    "firma"],     answers: ["velikoj",    "firmi"]       },
  { id: 83, sentence: "Sedim na ___ ___.",                  placeholders: ["tvrd",      "stolica"],   answers: ["tvrdoj",     "stolici"]     },
  { id: 84, sentence: "Čitam o ___ ___.",                   placeholders: ["drevna",    "istorija"],  answers: ["drevnoj",    "istoriji"]    },
  { id: 85, sentence: "Razmišljam o ___ ___.",              placeholders: ["dobar",     "posao"],     answers: ["dobrom",     "poslu"]       },
  { id: 86, sentence: "Odsjeo sam u ___ ___.",              placeholders: ["lep",       "hotel"],     answers: ["lepom",      "hotelu"]      },
  { id: 87, sentence: "Učim u ___ ___.",                    placeholders: ["nova",      "škola"],     answers: ["novoj",      "školi"]       },
  { id: 88, sentence: "Stoji na ___ ___.",                  placeholders: ["hladan",    "pod"],       answers: ["hladnom",    "podu"]        },
  { id: 89, sentence: "Pričamo o ___ ___.",                 placeholders: ["zanimljiv", "film"],      answers: ["zanimljivom","filmu"]        },
  { id: 90, sentence: "Pronašao sam to na ___ ___.",        placeholders: ["stari",     "tavan"],     answers: ["starom",     "tavanu"]      },
  { id: 91, sentence: "Bio sam na ___ ___.",                placeholders: ["dobar",     "koncert"],   answers: ["dobrom",     "koncertu"]    },
  { id: 92, sentence: "Pisao je o ___ ___.",                placeholders: ["lep",       "priroda"],   answers: ["lepoj",      "prirodi"]     },
  { id: 93, sentence: "Govori o ___ ___.",                  placeholders: ["star",      "vreme"],     answers: ["starom",     "vremenu"]     },
  { id: 94, sentence: "Mislim o ___ ___.",                  placeholders: ["lepo",      "vreme"],     answers: ["lepom",      "vremenu"]     },

  // === MNOŽINA — nominativ ===
  { id: 95, sentence: "___ ___ su stigli na vreme.",        placeholders: ["novi",   "student"],     answers: ["novi",   "studenti"]    },
  { id: 96, sentence: "___ ___ su lepe.",                   placeholders: ["star",   "ulica (mn.)"], answers: ["stare",  "ulice"]       },

  // === MNOŽINA — akuzativ ===
  { id: 97, sentence: "Kupujem ___ ___.",                   placeholders: ["nova",   "knjiga (mn.)"], answers: ["nove",   "knjige"]      },
  { id: 98, sentence: "Gledam ___ ___ na nebu.",            placeholders: ["beo",    "oblak (mn.)"],  answers: ["bele",   "oblake"]      },

  // === MNOŽINA — genitiv, dativ, instrumental, lokativ ===
  { id: 99,  sentence: "Nema ___ ___ u gradu.",             placeholders: ["dobar",  "restoran (mn.)"], answers: ["dobrih",  "restorana"]   },
  { id: 100, sentence: "Mislim o ___ ___.",                 placeholders: ["prošli", "dan (mn.)"],      answers: ["prošlim", "danima"]      },
];
