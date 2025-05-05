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

const identities = {
  tech: {
    colors: ["#0F172A", "#3B82F6", "#1E293B", "#93C5FD", "#F8FAFC"],
    fonts: ["Inter", "Roboto Mono", "Space Grotesk"],
    mood: ["futuristic", "clean", "bold"]
  },
  food: {
    colors: ["#F97316", "#FACC15", "#FDE68A", "#DC2626", "#F3F4F6"],
    fonts: ["Pacifico", "Quicksand", "Raleway"],
    mood: ["appetizing", "friendly", "inviting"]
  },
  luxury: {
    colors: ["#1F2937", "#D1D5DB", "#F9FAFB", "#A855F7", "#FCD34D"],
    fonts: ["Playfair Display", "Cormorant Garamond", "Cinzel"],
    mood: ["premium", "stylish", "refined"]
  },
  gaming: {
    colors: ["#1E1B4B", "#7C3AED", "#E11D48", "#F43F5E", "#A78BFA"],
    fonts: ["Orbitron", "Press Start 2P", "Audiowide"],
    mood: ["intense", "dynamic", "futuristic"]
  },
  finance: {
    colors: ["#1E3A8A", "#3B82F6", "#A7F3D0", "#1E293B", "#10B981"],
    fonts: ["IBM Plex Sans", "Montserrat", "DM Sans"],
    mood: ["trustworthy", "stable", "professional"]
  },
  health: {
    colors: ["#34D399", "#10B981", "#E0F2FE", "#60A5FA", "#ECFDF5"],
    fonts: ["Poppins", "Noto Sans", "Lato"],
    mood: ["clean", "natural", "energizing"]
  },
  pets: {
    colors: ["#FBBF24", "#FCD34D", "#FDBA74", "#F9A8D4", "#FEF9C3"],
    fonts: ["Fredoka", "Baloo 2", "Comic Neue"],
    mood: ["cute", "playful", "friendly"]
  },
  eco: {
    colors: ["#34D399", "#059669", "#D9F99D", "#BBF7D0", "#F0FDF4"],
    fonts: ["Open Sans", "Work Sans", "Ubuntu"],
    mood: ["green", "organic", "sustainable"]
  },
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(theme = "tech") {
  const { prefixes, roots, suffixes } = themes[theme] || themes.tech;
  return `${getRandom(prefixes)}${getRandom(roots)}${getRandom(suffixes)}`;
}

function generateIdentity(name, theme = "tech") {
  const identity = identities[theme] || identities.tech;
  return {
    name,
    theme,
    colors: identity.colors,
    fonts: identity.fonts,
    mood: identity.mood
  };
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { count: 1, theme: "tech", identity: false };

  if (args.includes("--help")) {
    console.log(`
mockup-name-gen

Usage:
  node mockup-name-gen.js --theme [theme] --count [number] [--identity]

Options:
  --theme     Theme to use (default: "tech")
              Available themes: ${Object.keys(themes).join(", ")}
  --count     Number of names to generate (default: 1)
  --identity  Show branding identity details (colors, fonts, mood)
  --help      Show this help message

Example:
  node mockup-name-gen.js --theme food --count 3 --identity
    `);
    process.exit(0);
  }

  args.forEach((arg, i) => {
    if (arg === "--count" && args[i + 1]) options.count = parseInt(args[i + 1]);
    if (arg === "--theme" && args[i + 1]) options.theme = args[i + 1];
    if (arg === "--identity") options.identity = true;
  });

  if (!themes[options.theme]) {
    console.warn(`Unknown theme "${options.theme}". Defaulting to "tech".`);
    console.log(`Available themes: ${Object.keys(themes).join(", ")}`);
    options.theme = "tech";
  }

  return options;
}

if (require.main === module) {
  const { count, theme, identity } = parseArgs();
  for (let i = 0; i < count; i++) {
    const name = generateName(theme);
    if (identity) {
      console.log(JSON.stringify(generateIdentity(name, theme), null, 2));
    } else {
      console.log(name);
    }
  }
} else {
  module.exports = { generateName, generateIdentity, themes, identities };
}
