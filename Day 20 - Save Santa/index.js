const dangerArray = [
  ['🎅', '👺'],
  [
    ['🎅', '🦁'],
    ['👹', '🎅'],
  ],
  [
    [
      ['🎅', '🐻'],
      ['🧌', '🎅'],
    ],
    [
      ['🐯', '🎅'],
      ['🎅', '😈'],
    ],
  ],
];

function saveSanta(arr) {
  if (arr === '🎅' || Array.isArray(arr)) {
    return Array.isArray(arr) ? arr.map(saveSanta).filter(Boolean) : arr;
  }

  return arr === '🎅' ? arr : undefined;
}

console.log(saveSanta(dangerArray));
