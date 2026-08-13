/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * To add a new hackathon / competition / project:
 *   1. Copy any entry object below.
 *   2. Change the fields (keep `slug` unique, it becomes the page URL).
 *   3. Swap the `images` array: each item is { src, caption }.
 *      Upload photos, then replace `src: PLACEHOLDER[n]` with
 *      `src: myPhotoImport` (add `import myPhoto from "@/assets/my-photo.jpg"` at top).
 *   4. Nothing else to edit, cards, detail pages, galleries and the
 *      background slideshows all read from this file automatically.
 */

import p1 from "@/assets/photo-01.jpg";
import p2 from "@/assets/photo-02.jpg";
import p3 from "@/assets/photo-03.jpg";
import p4 from "@/assets/photo-04.jpg";
import p5 from "@/assets/photo-05.jpg";
import p6 from "@/assets/photo-06.jpg";

export type Category = "hackathon" | "competition" | "project";

export type EntryImage = {
  src: string;
  caption: string;
};

export type Entry = {
  slug: string;
  title: string;
  date: string; // ISO date, used for sorting
  dateLabel: string;
  location: string;
  category: Category;
  shortDescription: string;
  longDescription: string[];
  outcome: string;
  tech?: string[];
  team?: string[];
  images: EntryImage[];
};

const POOL = [p1, p2, p3, p4, p5, p6];

/** Builds 12 clearly labeled placeholder slots for an entry. */
let seedCounter = 0;
function placeholders(label: string, count = 12): EntryImage[] {
  const seed = seedCounter++;
  return Array.from({ length: count }, (_, i) => ({
    src: POOL[(i + seed) % POOL.length] as string,
    caption: `PLACEHOLDER ${String(i + 1).padStart(2, "0")}, ${label}`,
  }));
}

export const entries: Entry[] = [
  // ─────────────────────────────── HACKATHONS ───────────────────────────────
  {
    slug: "kigali-hardware-hack-2026",
    title: "Kigali Hardware Hack",
    date: "2026-06-14",
    dateLabel: "June 2026",
    location: "Norrsken House, Kigali",
    category: "hackathon",
    shortDescription:
      "36 hours to build a low-cost soil-probe rover. We shipped a working autonomous unit and took first place.",
    longDescription: [
      "The brief was blunt: a field-deployable sensing platform under $150, built and driving by the end of the weekend. We split into drivetrain, sensing and firmware from hour one and never renegotiated scope.",
      "The rover ran a differential drive on salvaged gearmotors, an ESP32 doing sensor fusion, and a capacitive soil probe on a servo arm that drops, samples, and retracts without stopping the chassis.",
      "By the final demo the unit had logged 40 samples across a mock plot with zero manual intervention. Judges flagged the retract mechanism as the reason we beat the field.",
    ],
    outcome: "1st place, Won",
    tech: ["ESP32", "C++ / PlatformIO", "Capacitive soil probe", "3D-printed chassis"],
    team: ["Drivetrain squad", "Firmware squad", "Sensing squad"],
    images: placeholders("Kigali Hardware Hack"),
  },
  {
    slug: "alu-build-sprint-2026",
    title: "ALU Build Sprint",
    date: "2026-03-08",
    dateLabel: "March 2026",
    location: "ALU Campus, Kigali",
    category: "hackathon",
    shortDescription:
      "Internal 24-hour sprint. Four teams, one constraint: every build had to move on its own by sunrise.",
    longDescription: [
      "Our own sprint, run to stress-test new members before competition season. No mentors on the floor after midnight.",
      "Winning build was a line-following delivery cart with a magnetic docking tray. Two other teams shipped working obstacle-avoidance bases; one drivetrain died at 4am and got rebuilt in ninety minutes.",
    ],
    outcome: "Hosted, 4 working builds shipped",
    tech: ["Arduino Nano", "IR array", "Li-ion packs", "Laser-cut acrylic"],
    images: placeholders("ALU Build Sprint"),
  },
  {
    slug: "east-africa-ai-hardware-jam-2025",
    title: "East Africa AI + Hardware Jam",
    date: "2025-11-22",
    dateLabel: "November 2025",
    location: "Nairobi, Kenya",
    category: "hackathon",
    shortDescription:
      "Vision-guided sorting arm built in 48 hours against 22 university teams. Placed second.",
    longDescription: [
      "We brought a pre-tested arm skeleton and spent the weekend on the perception stack instead of on brackets, the right trade.",
      "A quantised classifier on a Raspberry Pi drove a 4-DOF arm sorting waste into three bins at roughly 88% accuracy on the judges' unseen set.",
    ],
    outcome: "2nd place, Placed",
    tech: ["Raspberry Pi 4", "TensorFlow Lite", "PCA9685 servo driver", "OpenCV"],
    images: placeholders("East Africa AI + Hardware Jam"),
  },

  // ────────────────────────────── COMPETITIONS ──────────────────────────────
  {
    slug: "pan-african-robotics-league-2026",
    title: "Pan-African Robotics League",
    date: "2026-05-02",
    dateLabel: "May 2026",
    location: "Kigali Arena, Rwanda",
    category: "competition",
    shortDescription:
      "Autonomous navigation and payload delivery league. Finished 2nd overall out of 18 schools.",
    longDescription: [
      "Three rounds: timed maze, payload delivery, and a head-to-head arena. Our maze run held the fastest recorded time until the final heat.",
      "Payload delivery cost us the top step, a gripper compliance issue on uneven decking. The fix is already on the bench for next season.",
    ],
    outcome: "2nd of 18, Finalist",
    tech: ["ROS 2", "LiDAR", "Odrive BLDC", "Custom gripper"],
    images: placeholders("Pan-African Robotics League"),
  },
  {
    slug: "rwanda-national-robotics-championship-2025",
    title: "Rwanda National Robotics Championship",
    date: "2025-09-19",
    dateLabel: "September 2025",
    location: "Kigali Convention Centre",
    category: "competition",
    shortDescription:
      "National championship, autonomous track category. Won the category and the engineering documentation award.",
    longDescription: [
      "Our bot cleared the track in three of four heats without a touch penalty. The lab notebook we kept through build season won documentation outright.",
      "Judges specifically called out the wiring harness and the repeatability of our calibration routine.",
    ],
    outcome: "1st in category, Won",
    tech: ["STM32", "Encoder odometry", "PID tuning rig"],
    images: placeholders("Rwanda National Championship"),
  },
  {
    slug: "sumo-bot-open-2025",
    title: "Sumo Bot Open",
    date: "2025-04-12",
    dateLabel: "April 2025",
    location: "Kigali, Rwanda",
    category: "competition",
    shortDescription:
      "500g autonomous sumo class. Two bots entered, one reached semi-finals.",
    longDescription: [
      "Weight class discipline decided this one. Our lighter chassis had better edge detection but lost pushing matches against steel-plated opponents.",
      "Takeaway logged: traction beats torque at this scale. Next build runs a wider wheelbase and softer compound tyres.",
    ],
    outcome: "Semi-finalist, Participated",
    tech: ["Arduino Pro Mini", "IR edge sensors", "N20 gearmotors"],
    images: placeholders("Sumo Bot Open"),
  },

  // ──────────────────────────────── PROJECTS ────────────────────────────────
  {
    slug: "campus-delivery-rover",
    title: "Campus Delivery Rover",
    date: "2026-07-01",
    dateLabel: "Ongoing since 2026",
    location: "ALU Campus, Kigali",
    category: "project",
    shortDescription:
      "A four-wheel outdoor rover that carries documents between campus buildings on a fixed waypoint route.",
    longDescription: [
      "The rover navigates a surveyed waypoint route using GPS plus wheel odometry, with ultrasonic bumpers for pedestrian traffic. Payload bay takes 5kg.",
      "Currently in field trials on the library-to-hub run. Next milestone is unattended operation during class transitions.",
    ],
    outcome: "In field trials",
    tech: ["ROS 2", "GPS RTK", "Jetson Nano", "Aluminium extrusion frame"],
    team: ["Navigation", "Mechanical", "Power systems"],
    images: placeholders("Campus Delivery Rover"),
  },
  {
    slug: "agri-sensor-mesh",
    title: "Agri Sensor Mesh",
    date: "2026-02-10",
    dateLabel: "Ongoing since 2026",
    location: "Bugesera field site",
    category: "project",
    shortDescription:
      "A LoRa mesh of solar soil-moisture nodes streaming to a single campus gateway and dashboard.",
    longDescription: [
      "Each node is a sealed ESP32 with a capacitive probe and a 2W panel, reporting every fifteen minutes over LoRa to a gateway on campus.",
      "Twelve nodes deployed. Longest uninterrupted uptime so far is 94 days.",
    ],
    outcome: "12 nodes deployed",
    tech: ["ESP32", "LoRa SX1276", "Solar + LiFePO4", "Grafana"],
    images: placeholders("Agri Sensor Mesh"),
  },
  {
    slug: "prosthetic-hand-v2",
    title: "Prosthetic Hand v2",
    date: "2025-08-01",
    dateLabel: "Completed 2025",
    location: "ALU Robotics Lab",
    category: "project",
    shortDescription:
      "EMG-driven printed hand with three grip modes, built for under $90 in parts.",
    longDescription: [
      "Tendon-driven fingers on printed PETG, actuated by four micro servos and switched between grips by EMG thresholds on the forearm.",
      "Version two cut the part count by a third and doubled grip force over the original build.",
    ],
    outcome: "Completed, v2 shipped",
    tech: ["EMG sensor", "PETG printing", "Micro servos", "Arduino"],
    images: placeholders("Prosthetic Hand v2"),
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  hackathon: "Hackathon",
  competition: "Competition",
  project: "Project",
};

export const byCategory = (category: Category) =>
  entries
    .filter((entry) => entry.category === category)
    .sort((a, b) => b.date.localeCompare(a.date));

export const bySlug = (category: Category, slug: string) =>
  entries.find((entry) => entry.category === category && entry.slug === slug);

export const latest = (category: Category) => byCategory(category)[0];

export const allImages = () =>
  entries.flatMap((entry) =>
    entry.images.map((image) => ({ ...image, entry }))
  );

/** Distinct photos used for full-bleed section slideshows. */
export const slideshowPhotos = (category?: Category) => {
  const source = category ? byCategory(category) : entries;
  const seen = new Set<string>();
  const out: string[] = [];
  for (const entry of source) {
    for (const image of entry.images) {
      if (!seen.has(image.src)) {
        seen.add(image.src);
        out.push(image.src);
      }
    }
  }
  return out;
};

export const CLUB = {
  name: "ALU Robotics Club",
  tagline: "We build machines. We enter competitions. We come back with results.",
  founded: "2021",
  university: "African Leadership University",
  city: "Kigali, Rwanda",
  email: "robotics@alustudent.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};
