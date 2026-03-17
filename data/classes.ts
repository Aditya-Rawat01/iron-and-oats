export type ScheduleItem = {
  day: string;
  time: string;
  name: string;
  type: string;
  duration: string;
  trainer: string;
  spots: number;
  am: boolean;
};

export const classSchedule: ScheduleItem[] = [
  { day: "Mon", time: "05:30", name: "DARK IRON", type: "Powerlifting", duration: "60 min", trainer: "Arjun S.", spots: 3, am: true },
  { day: "Mon", time: "18:30", name: "HUSTLE", type: "Functional Training", duration: "45 min", trainer: "Dev K.", spots: 9, am: false },
  { day: "Tue", time: "06:30", name: "IGNITE", type: "HIIT Cardio", duration: "45 min", trainer: "Priya M.", spots: 8, am: true },
  { day: "Tue", time: "19:30", name: "NIGHT OWL", type: "Yoga + Stretch", duration: "60 min", trainer: "Kavya R.", spots: 14, am: false },
  { day: "Wed", time: "07:00", name: "IRON YOGA", type: "Mobility + Strength", duration: "60 min", trainer: "Kavya R.", spots: 12, am: true },
  { day: "Wed", time: "17:30", name: "POWER HOUR", type: "Powerlifting", duration: "60 min", trainer: "Arjun S.", spots: 2, am: false },
  { day: "Thu", time: "09:00", name: "GRIND", type: "Functional Training", duration: "50 min", trainer: "Dev K.", spots: 0, am: true },
  { day: "Thu", time: "12:00", name: "LUNCH BURN", type: "HIIT Cardio", duration: "30 min", trainer: "Priya M.", spots: 5, am: false },
  { day: "Fri", time: "05:45", name: "BARBELL CLUB", type: "Powerlifting", duration: "75 min", trainer: "Arjun S.", spots: 4, am: true },
  { day: "Fri", time: "18:00", name: "SPRINT LAB", type: "HIIT Cardio", duration: "45 min", trainer: "Priya M.", spots: 6, am: false },
  { day: "Sat", time: "08:00", name: "FOUNDATION", type: "Mobility + Strength", duration: "60 min", trainer: "Kavya R.", spots: 10, am: true },
  { day: "Sat", time: "10:00", name: "TEAM CIRCUIT", type: "Functional Training", duration: "50 min", trainer: "Dev K.", spots: 7, am: true },
];

export const typeColors: Record<string, string> = {
  Powerlifting: "var(--gold)",
  "HIIT Cardio": "#FF3E3E",
  "Mobility + Strength": "var(--lime)",
  "Functional Training": "#5B8FFF",
  "Yoga + Stretch": "var(--cream-dim)",
};

export const calendarDays = [
  { day: "Mon", date: "17", focus: "Strength Focus", classes: ["05:30 Dark Iron", "18:30 Hustle"] },
  { day: "Tue", date: "18", focus: "Conditioning", classes: ["06:30 Ignite", "19:30 Night Owl"] },
  { day: "Wed", date: "19", focus: "Mobility + Lift", classes: ["07:00 Iron Yoga", "17:30 Power Hour"] },
  { day: "Thu", date: "20", focus: "Hybrid Engine", classes: ["09:00 Grind", "12:00 Lunch Burn"] },
  { day: "Fri", date: "21", focus: "Heavy Day", classes: ["05:45 Barbell Club", "18:00 Sprint Lab"] },
  { day: "Sat", date: "22", focus: "Community Sessions", classes: ["08:00 Foundation", "10:00 Team Circuit"] },
  { day: "Sun", date: "23", focus: "Open Recovery", classes: ["Mobility pods", "Coach consultations"] },
];

export const classPillars = [
  {
    title: "Skill-Led Programming",
    text: "Classes balance measurable progression with enough variation to keep regulars challenged week after week.",
  },
  {
    title: "Small Room Energy",
    text: "Caps stay tight so coaching feels personal and the room never turns into anonymous group exercise.",
  },
  {
    title: "Recovery Is Part Of The Plan",
    text: "Mobility, breath work, and fueling support sit alongside the hard sessions so performance keeps compounding.",
  },
];
