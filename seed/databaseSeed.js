'use strict';
const animalsSeed = [{
  'esperantoWord': 'fiŝ',
  'esperantoAnswer': 'fish',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'abel',
  'esperantoAnswer': 'bee',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'alk',
  'esperantoAnswer': 'elk',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'arane',
  'esperantoAnswer': 'spider',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'anser',
  'esperantoAnswer': 'goose',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const animalsTwoSeed = [{
  'esperantoWord': 'hundo',
  'esperantoAnswer': 'dog',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'kato',
  'esperantoAnswer': 'cat',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'gorilo',
  'esperantoAnswer': 'gorilla',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'falko',
  'esperantoAnswer': 'falcon',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'homa',
  'esperantoAnswer': 'human',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const placesSeed = [{
  'esperantoWord': 'biblioteko',
  'esperantoAnswer': 'library',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'cafe',
  'esperantoAnswer': 'kafejo',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'policejon',
  'esperantoAnswer': 'police station',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'bushaltejo',
  'esperantoAnswer': 'bus stop',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'vendejo',
  'esperantoAnswer': 'grocery store',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const foodSeed = [{
  'esperantoWord': 'hamburgero',
  'esperantoAnswer': 'hamburger',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'spagetoj',
  'esperantoAnswer': 'spaghetti',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'takto',
  'esperantoAnswer': 'taco',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'kukaĵo',
  'esperantoAnswer': 'pie',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'kuketo',
  'esperantoAnswer': 'cookie',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const phrasesSeed = [{
  'esperantoWord': 'La fromaĝo estas maljuna kaj moldeca',
  'esperantoAnswer': 'the cheese is old and moldy',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'kie estas la necesejo?',
  'esperantoAnswer': 'where is the bathroom?',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'Kie estas la plej proksima konsulejo',
  'esperantoAnswer': 'Where is the nearest consulate',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'Ĉu mi povas vin eltiri al la vespermanĝo?',
  'esperantoAnswer': 'can I take you out to dinner?',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'Ni absolute povas renversi la registaron',
  'esperantoAnswer': 'We can absolutely overthrow the government',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const technologySeed = [{
  'esperantoWord': 'komputilo',
  'esperantoAnswer': 'computer',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'Poŝtelefono',
  'esperantoAnswer': 'cell phone?',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'tekkomputilo',
  'esperantoAnswer': 'laptop',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'ltr',
  'esperantoAnswer': 'lyft',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'tranĉita pano',
  'esperantoAnswer': 'sliced bread',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const locationSeed = [{
  'esperantoWord': 'Francio',
  'esperantoAnswer': 'France',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'Usono',
  'esperantoAnswer': 'United States of America',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'Aŭstralio',
  'esperantoAnswer': 'Australia',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'Kazaĥio',
  'esperantoAnswer': 'Kazakhstan',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'Kanado',
  'esperantoAnswer': 'Canada',
  'score': 1,
  'next': 5,
  'index': 5
}
];

const directionsSeed = [{
  'esperantoWord': 'Norde',
  'esperantoAnswer': 'North',
  'score': 1,
  'next': 1,
  'index': 1
},
{
  'esperantoWord': 'Oriento',
  'esperantoAnswer': 'East',
  'score': 1,
  'next': 2,
  'index': 2
},
{
  'esperantoWord': 'Sude',
  'esperantoAnswer': 'South',
  'score': 1,
  'next': 3,
  'index': 3
},
{
  'esperantoWord': 'Okcidento',
  'esperantoAnswer': 'West',
  'score': 1,
  'next': 4,
  'index': 4
},
{
  'esperantoWord': 'Sude de sudokcidento',
  'esperantoAnswer': 'South by Southwest',
  'score': 1,
  'next': 5,
  'index': 5
}
];

module.exports = {
  placesSeed,
  animalsSeed,
  animalsTwoSeed,
  foodSeed,
  phrasesSeed,
  technologySeed,
  locationSeed,
  directionsSeed
};