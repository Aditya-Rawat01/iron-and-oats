export const menuCategories = [
  "All",
  "Pre-Workout",
  "Post-Recovery",
  "Cold Brew",
  "Power Bowls",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  name: string;
  cat: Exclude<MenuCategory, "All">;
  desc: string;
  cal: number;
  protein: number;
  tag: string;
  tagColor: string;
  emoji: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "DARK MATTER",
    cat: "Cold Brew",
    desc: "24hr cold brew concentrate, oat milk, MCT oil",
    cal: 180,
    protein: 4,
    tag: "Bestseller",
    tagColor: "var(--gold)",
    emoji: "☕",
  },
  {
    name: "THUNDER BOWL",
    cat: "Power Bowls",
    desc: "Acai, hemp seeds, banana, almond butter, granola",
    cal: 520,
    protein: 22,
    tag: "High Protein",
    tagColor: "var(--lime)",
    emoji: "🥣",
  },
  {
    name: "IGNITE SHOT",
    cat: "Pre-Workout",
    desc: "Beet juice, ginger, B12, natural caffeine complex",
    cal: 45,
    protein: 1,
    tag: "Pre-WOD",
    tagColor: "var(--red, #FF3E3E)",
    emoji: "⚡",
  },
  {
    name: "REPAIR SHAKE",
    cat: "Post-Recovery",
    desc: "Whey isolate, tart cherry, turmeric, almond milk",
    cal: 340,
    protein: 40,
    tag: "40g Protein",
    tagColor: "var(--lime)",
    emoji: "🥤",
  },
  {
    name: "CORTADO NOIR",
    cat: "Cold Brew",
    desc: "Double ristretto, macadamia milk, demerara foam",
    cal: 90,
    protein: 2,
    tag: "New",
    tagColor: "var(--cream)",
    emoji: "🫙",
  },
  {
    name: "THE SLAB",
    cat: "Power Bowls",
    desc: "Grilled salmon, farro, edamame, miso ginger dressing",
    cal: 680,
    protein: 48,
    tag: "Chef's Pick",
    tagColor: "var(--gold)",
    emoji: "🐟",
  },
  {
    name: "BEAST MODE",
    cat: "Pre-Workout",
    desc: "Mango, coconut water, creatine, pink Himalayan salt",
    cal: 120,
    protein: 0,
    tag: "Pre-WOD",
    tagColor: "#FF3E3E",
    emoji: "🥭",
  },
  {
    name: "CLOUD NINE",
    cat: "Post-Recovery",
    desc: "Greek yogurt, honey, blueberries, chia, collagen",
    cal: 280,
    protein: 28,
    tag: "Recovery",
    tagColor: "var(--lime)",
    emoji: "🫐",
  },
];

export const menuPrinciples = [
  {
    title: "Built Around Training Windows",
    text: "Pre-lift, post-class, or long-workday refuel, every dish is timed around how members actually move through the space.",
  },
  {
    title: "Ingredient-Led Performance",
    text: "Whole produce, functional fats, quality proteins, and no filler ingredients pretending to be healthy.",
  },
  {
    title: "Fast Enough For Real Life",
    text: "Quick ordering, clear macros, and cafe service designed for people catching breath between sets and meetings.",
  },
];
