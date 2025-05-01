const themes = {
  tech: {
    prefixes: ["Neo", "Hyper", "Cloud", "Smart", "Meta", "Cyber", "Quantum"],
    roots: ["Core", "Flow", "Logic", "Net", "AI", "Verse", "Shift"],
    suffixes: ["ify", "byte", "genix", "port", "hub", "stack", "spark"],
  },
  food: {
    prefixes: ["Fresh", "Tasty", "Yum", "Golden", "Sweet", "Snack", "Spicy"],
    roots: ["Bite", "Kitchen", "Feast", "Nosh", "Grill", "Pan", "Table"],
    suffixes: ["house", "bar", "spot", "works", "hut", "den", "lab"],
  },
  luxury: {
    prefixes: ["Velvet", "Royal", "Golden", "Elite", "Opal", "Silken", "Vogue"],
    roots: ["Aura", "Touch", "Essence", "Luxe", "Chic", "Maison", "Glow"],
    suffixes: ["ique", "line", "lux", "craft", "zone", "haus", "aria"],
  },
  gaming: {
    prefixes: ["Ultra", "Dark", "Cyber", "Mega", "Shadow", "Pixel", "Arcade"],
    roots: ["Quest", "Zone", "Arena", "Blade", "Nexus", "Rift", "Strike"],
    suffixes: ["X", "One", "Pro", "360", "Force", "Blast", "Edge"],
  },
  finance: {
    prefixes: ["Trust", "Safe", "Fin", "Cash", "Cred", "Wealth", "Alpha"],
    roots: ["Bank", "Ledger", "Fund", "Pay", "Capital", "Rate", "Vault"],
    suffixes: ["flow", "ly", "ify", "zone", "stack", "base", "wise"],
  },
  health: {
    prefixes: ["Fit", "Zen", "Glow", "Health", "Well", "Core", "Pure"],
    roots: ["Life", "Flex", "Form", "Mind", "Pulse", "Body", "Track"],
    suffixes: ["hub", "scape", "zone", "guide", "lab", "base", "gen"],
  },
  pets: {
    prefixes: ["Paw", "Fur", "Happy", "Bark", "Whisker", "Tail", "Woof"],
    roots: ["Buddy", "Haven", "Treat", "Den", "Nest", "Pet", "Pal"],
    suffixes: ["y", "topia", "club", "house", "ly", "verse", "nado"],
  },
  eco: {
    prefixes: ["Green", "Eco", "Nature", "Solar", "Clean", "Bio", "Pure"],
    roots: ["Flow", "Wave", "Root", "Planet", "Earth", "Sprout", "Bloom"],
    suffixes: ["loop", "mate", "ify", "zone", "scape", "lab", "base"],
  },
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(theme = "tech") {
  const { prefixes, roots, suffixes } = themes[theme] || themes.tech;
  return `${getRandom(prefixes)}${getRandom(roots)}${getRandom(suffixes)}`;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { count: 1, theme: "tech" };

  args.forEach((arg, i) => {
    if (arg === "--count" && args[i + 1]) options.count = parseInt(args[i + 1]);
    if (arg === "--theme" && args[i + 1]) options.theme = args[i + 1];
  });

  return options;
}

if (require.main === module) {
  const { count, theme } = parseArgs();
  for (let i = 0; i < count; i++) {
    console.log(generateName(theme));
  }
} else {
  module.exports = { generateName, themes };
}
