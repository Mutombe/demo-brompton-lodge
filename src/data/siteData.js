// Brompton Guest House — a residential boutique lodge in Harare, Zimbabwe
// Single source of truth for all page content.

export const business = {
  name: "Brompton Guest House",
  shortName: "Brompton",
  tagline: "A quiet house in Harare.",
  established: 2019,
  city: "Harare",
  country: "Zimbabwe",
  instagram: "https://instagram.com/brompton_guesthouse",
  instagramHandle: "@brompton_guesthouse",
  followers: "1,842",
  whatsapp: "+263785004120",
  whatsappDisplay: "+263 78 500 4120",
  email: "stay@bromptonguesthouse.co.zw",
  phone: "+263 242 885 410",
  address: "12 Brompton Close, Mount Pleasant, Harare",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Mount+Pleasant+Harare",
  hours: {
    reception: "07:00 – 21:00",
    checkIn: "14:00",
    checkOut: "10:00",
  },
  logo: "/logo.png",
  starRating: 4,
  rooms: 8,
};

const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
const mailHref = (subject, body) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Harare · Est. 2019",
  headlineTop: "A quiet house",
  headlineBottom: "in Mount Pleasant.",
  italic: "where the afternoons are slow.",
  sub:
    "Brompton is a small, residential guest house of eight rooms. Canopy beds, linen sheets, a morning breakfast laid out in the garden. The kind of place you come back to — not just to sleep, but to rest.",
  image: "/images/executive-suite.jpg",
  imageAlt: "Executive suite with king bed and white canopy at Brompton Guest House",
  ctaPrimary: { label: "Check availability", to: "/reservations" },
  ctaSecondary: {
    label: "WhatsApp the house",
    href: waHref(
      "Hello Brompton, I'd like to enquire about rooms and rates for a stay — could you share availability?"
    ),
  },
};

// ---------- A LINE FOR THE MARQUEE (subtle, under navbar) ----------
export const announcement = {
  items: [
    "Direct-booking benefit · Complimentary airport pick-up on stays of two nights or more",
    "Breakfast laid in the garden courtyard · Served daily from 07:30",
    "Eight rooms only · Reserve direct for the best rate",
    "Long-stay rates available · Weekly & monthly enquiries welcome",
  ],
};

// ---------- ROOMS ----------
// Photos mapped from the real lodge provision:
//   executive-suite.jpg  -> king, canopy, LED trim ceiling — the Executive Suite
//   deluxe-room.jpg      -> queen with canopy + warm lantern — the Deluxe Queen
//   deluxe-room-2.jpg    -> similar queen, alternate angle — paired with the above
//   tea-station.jpg      -> in-room tea station (amenity detail)
//   minibar.jpg          -> minibar corner (amenity detail)
//   wardrobe-bench.jpg   -> wardrobe + bench (craftsmanship detail)
//   corridor.jpg         -> guest corridor (spaces / wayfinding)
//   window-drapes.jpg    -> atmospheric detail

export const rooms = [
  {
    slug: "executive-suite",
    name: "The Executive Suite",
    subtitle: "Our largest room — a king bed under white canopy.",
    pricePerNight: 140,
    priceNote: "Breakfast for two included",
    sleeps: 2,
    bedType: "King",
    sizeSqm: 38,
    images: ["/images/executive-suite.jpg", "/images/executive-suite-2.jpg"],
    description:
      "A generous corner room in the main house. The mahogany four-poster is hung with a fine mosquito canopy; the ceiling is softly ringed by a cool recessed light. Open the french windows and the morning garden drifts in.",
    amenities: [
      "King-size bed with cotton linens",
      "Mosquito canopy",
      "Ensuite bath with walk-in shower",
      "Air-conditioning & ceiling fan",
      "Work desk with kettle & tea service",
      "Smart TV & fibre WiFi",
    ],
    featured: true,
  },
  {
    slug: "deluxe-queen",
    name: "The Deluxe Queen",
    subtitle: "Warmly-lit, double-aspect — our most-requested room.",
    pricePerNight: 110,
    priceNote: "Breakfast for two included",
    sleeps: 2,
    bedType: "Queen",
    sizeSqm: 28,
    images: ["/images/deluxe-room.jpg", "/images/deluxe-room-2.jpg"],
    description:
      "A quieter room at the back of the house. Paired brass lanterns cast a soft glow at either side of the bed; the polished floor catches the lamplight. A room made for unhurried evenings.",
    amenities: [
      "Queen bed with cotton linens",
      "Mosquito canopy",
      "Ensuite shower",
      "Air-conditioning",
      "Tea & coffee tray",
      "Smart TV & fibre WiFi",
    ],
    featured: true,
  },
  {
    slug: "garden-double",
    name: "The Garden Double",
    subtitle: "A ground-floor room with a private step onto the lawn.",
    pricePerNight: 95,
    priceNote: "Breakfast for two included",
    sleeps: 2,
    bedType: "Double",
    sizeSqm: 24,
    images: ["/images/deluxe-room-2.jpg"],
    description:
      "A calm double opening onto the courtyard — gardenia, jacaranda, a paved step. A favourite with early risers who like to drink their coffee in the grass.",
    amenities: [
      "Double bed",
      "Ensuite shower",
      "Air-conditioning",
      "Direct garden access",
      "Tea & coffee tray",
      "Fibre WiFi",
    ],
    featured: true,
  },
  {
    slug: "single-study",
    name: "The Single Study",
    subtitle: "A single room for the solo traveller — neat, quiet, well-lit.",
    pricePerNight: 70,
    priceNote: "Breakfast included",
    sleeps: 1,
    bedType: "Single",
    sizeSqm: 18,
    images: ["/images/tea-station.jpg"],
    description:
      "A compact room built for working away-days — a well-considered desk, good light, a proper kettle. A favourite of consultants and those passing through for meetings.",
    amenities: [
      "Single bed",
      "Ensuite shower",
      "Proper work desk",
      "Tea & coffee tray",
      "Air-conditioning",
      "Fibre WiFi",
    ],
    featured: false,
  },
  {
    slug: "twin-family",
    name: "The Twin Room",
    subtitle: "Two single beds, for family, colleagues, or friends.",
    pricePerNight: 115,
    priceNote: "Breakfast for two included",
    sleeps: 2,
    bedType: "Twin",
    sizeSqm: 26,
    images: ["/images/wardrobe-bench.jpg"],
    description:
      "A generous twin with two singles, mosquito nets, and the same warm finishes as the rest of the house — mahogany, linen, brass.",
    amenities: [
      "Two single beds",
      "Mosquito canopies",
      "Ensuite shower",
      "Air-conditioning",
      "Tea & coffee tray",
      "Fibre WiFi",
    ],
    featured: false,
  },
  {
    slug: "long-stay-studio",
    name: "The Long-stay Studio",
    subtitle: "For weekly and monthly stays — a studio with kitchenette.",
    pricePerNight: 130,
    priceNote: "Weekly & monthly rates",
    sleeps: 2,
    bedType: "Queen",
    sizeSqm: 32,
    images: ["/images/minibar.jpg"],
    description:
      "Our studio apartment — a self-contained space with kitchenette, separate sitting area, and its own entrance. A quiet base for longer visits to Harare.",
    amenities: [
      "Queen bed",
      "Kitchenette & fridge",
      "Separate sitting area",
      "Private entrance",
      "Weekly housekeeping",
      "Fibre WiFi",
    ],
    featured: false,
  },
];

// ---------- AMENITIES ----------
export const amenities = [
  {
    icon: "ForkKnife",
    title: "Breakfast in the garden",
    body:
      "A proper breakfast — fresh fruit, warm bread, eggs any way — served each morning in the courtyard from 07:30.",
  },
  {
    icon: "WifiHigh",
    title: "Uncapped fibre WiFi",
    body:
      "Reliable, fast fibre in every room and across the grounds. Take calls, send work, stream quietly.",
  },
  {
    icon: "Coffee",
    title: "Tea & coffee tray",
    body:
      "Every room comes with a proper kettle, good coffee, rooibos, and a small plate of something sweet for the afternoon.",
  },
  {
    icon: "Car",
    title: "Airport pick-up",
    body:
      "Complimentary transfer from Robert Mugabe International on stays of two nights or more. Arrange ahead by WhatsApp.",
  },
  {
    icon: "Leaf",
    title: "A mature garden",
    body:
      "A walled courtyard of jacaranda, bougainvillea and a lemon tree — for breakfasts, reading, and slow evenings.",
  },
  {
    icon: "Flower",
    title: "Housekeeping, daily",
    body:
      "Linen turned down, rooms tidied, towels refreshed — a quiet, unobtrusive service from our long-standing team.",
  },
  {
    icon: "Wine",
    title: "Honesty bar",
    body:
      "A small sitting room with a set tray — local gins, good Zimbabwean wine, bitters — on an honesty ledger.",
  },
  {
    icon: "Key",
    title: "Secure, gated grounds",
    body:
      "Gated 24-hour grounds with on-site security and covered parking. Come and go at your own pace.",
  },
];

// ---------- DINING ----------
export const dining = {
  heading: "Breakfast in the courtyard.",
  sub:
    "A simple, generous menu — seasonal fruit, warm sourdough from a Harare baker, eggs from a farm in Goromonzi, and a very good coffee. Served outside when the weather permits; at the long mahogany table inside when it doesn't.",
  image: "/images/tea-station.jpg",
  imageAlt: "An in-room tea and coffee station with wooden shelf and brass lantern",
  menu: [
    {
      course: "To begin",
      items: [
        "Sliced seasonal fruit with mint & honey",
        "Greek yoghurt with toasted oats and local wild honey",
        "Warm sourdough, good butter, jam by the spoonful",
      ],
    },
    {
      course: "Eggs, as you prefer",
      items: [
        "Poached on sourdough, with avocado",
        "Scrambled, slow, with chives",
        "A full Zimbabwean — bacon, boerewors, egg, beans, grilled tomato",
      ],
    },
    {
      course: "To finish",
      items: [
        "Espresso, filter, or a proper tea tray",
        "Fresh juice of the morning",
      ],
    },
  ],
  note:
    "Lunch and dinner are not served, but we'll gladly point you to the neighbourhood's best — from a curry house three minutes' walk away, to a riverside restaurant fifteen minutes down the road.",
};

// ---------- EXPERIENCES / AROUND ----------
export const experiences = [
  {
    title: "National Gallery of Zimbabwe",
    distance: "11 min drive",
    body:
      "A quiet afternoon among the country's finest sculpture and contemporary painting — a short run into town.",
  },
  {
    title: "Mukuvisi Woodlands",
    distance: "14 min drive",
    body:
      "265 hectares of indigenous miombo woodland and wildlife — giraffe, zebra, antelope — walking and horse-riding.",
  },
  {
    title: "Doon Estate & Sam Levy's",
    distance: "9 min drive",
    body:
      "Harare's best-kept shopping courtyards — local makers, tailors, leather, art — and a good coffee along the way.",
  },
  {
    title: "Chapungu Sculpture Park",
    distance: "22 min drive",
    body:
      "An open-air gallery of Shona stone sculpture in the gardens of the Dominican Convent — an essential Harare afternoon.",
  },
];

// ---------- STORY ----------
export const story = {
  eyebrow: "Our house",
  title: "A guest house that behaves like a home.",
  body: [
    "Brompton began in 2019, in a quiet lane in Mount Pleasant, when the family decided their large residential house was too generous to keep to themselves. They took out the family wing, kept the kitchen garden, and opened eight rooms to guests.",
    "The idea was a small one: that a guest house might feel less like a hotel and more like staying with a well-travelled aunt — the sort who makes you a real breakfast, knows the good restaurant down the road, and lets you read in the garden without anyone offering you anything.",
    "Six years on, Brompton is still run by the same family — still with the same handful of staff — and the logic of the house is the same. Quiet rooms, proper beds, unfussed service.",
  ],
  image: "/images/corridor.jpg",
  imageAlt: "A softly-lit corridor with french windows leading to the garden",
  signature: "— The Brompton Family",
};

// ---------- REVIEWS ----------
export const reviews = [
  {
    author: "Thandiwe M.",
    source: "Booking.com",
    rating: 10,
    title: "Felt like coming home",
    body:
      "I have stayed in three Harare hotels for work and none of them compare. The bed is proper, the breakfast is generous, and the staff remember your name by the second morning. I will not stay anywhere else.",
    date: "March 2026",
  },
  {
    author: "Peter & Clare R.",
    source: "Google",
    rating: 5,
    title: "A quiet, considered place",
    body:
      "We came for four nights and wished we had booked seven. The gardens are beautiful, the rooms are full of thoughtful detail, and the family who run it could not be more welcoming.",
    date: "February 2026",
  },
  {
    author: "Sipho N.",
    source: "Booking.com",
    rating: 9,
    title: "Best WiFi of any guest house in Harare",
    body:
      "I was on calls to London for the whole week — Brompton's fibre held up faultlessly. The Single Study is a dream for anyone travelling for work.",
    date: "January 2026",
  },
  {
    author: "Marieke V.",
    source: "TripAdvisor",
    rating: 5,
    title: "Perfect for a slow stay in Harare",
    body:
      "The breakfast in the garden is worth the stay alone. Generous portions of real food, beautiful fruit, and the best coffee I had in the country. Book the Deluxe Queen — you won't regret it.",
    date: "November 2025",
  },
  {
    author: "Farai C.",
    source: "Google",
    rating: 5,
    title: "Our go-to for visiting family",
    body:
      "We put up all our out-of-town relatives at Brompton. It has the dignity of a private home and the quiet attention of a very good hotel. Rare combination.",
    date: "October 2025",
  },
];

// ---------- GALLERY ----------
// Real lodge photos first, then tasteful verified Unsplash fillers for context.
export const gallery = [
  { src: "/images/executive-suite.jpg", alt: "Executive suite with king bed and white canopy", tag: "Rooms" },
  { src: "/images/deluxe-room.jpg", alt: "Deluxe queen room with warm lanterns", tag: "Rooms" },
  { src: "/images/deluxe-room-2.jpg", alt: "Deluxe queen — alternate view", tag: "Rooms" },
  { src: "/images/executive-suite-2.jpg", alt: "Executive suite — alternate view", tag: "Rooms" },
  { src: "/images/tea-station.jpg", alt: "In-room tea and coffee station with brass lantern", tag: "Details" },
  { src: "/images/minibar.jpg", alt: "Minibar and breakfast tray in the long-stay studio", tag: "Details" },
  { src: "/images/wardrobe-bench.jpg", alt: "Wardrobe and luggage bench of mahogany and black steel", tag: "Details" },
  { src: "/images/corridor.jpg", alt: "Guest corridor with marble floor and french windows to the garden", tag: "House" },
  { src: "/images/window-drapes.jpg", alt: "Soft grey drapes against early light", tag: "Details" },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    alt: "Garden courtyard with breakfast table at a boutique guest house",
    tag: "Garden",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
    alt: "Breakfast laid out on a garden table with linen runner",
    tag: "Breakfast",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
    alt: "White linen bed made up in morning light",
    tag: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=1400&q=80",
    alt: "Sunlit garden path with flowering plants",
    tag: "Garden",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "Afternoon coffee on a wooden tray",
    tag: "Breakfast",
  },
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
    alt: "Fresh pastries and jam at breakfast",
    tag: "Breakfast",
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "How do I reserve a room?",
    a: "We prefer direct bookings — either by WhatsApp, telephone, or our reservation form on this site. Reserving direct secures our best rate, a complimentary airport pick-up for stays over two nights, and a warm welcome on arrival.",
  },
  {
    q: "What time are check-in and check-out?",
    a: "Check-in is from 14:00 and check-out by 10:00. Early arrivals and late departures can almost always be arranged — please ask us on the day.",
  },
  {
    q: "Is breakfast included?",
    a: "Yes — a generous, made-to-order breakfast is included with every room, served in the garden courtyard from 07:30 to 10:00.",
  },
  {
    q: "Do you offer long-stay rates?",
    a: "Yes. The Long-stay Studio and several other rooms are available at weekly and monthly rates — please enquire by WhatsApp or email.",
  },
  {
    q: "Is parking secure?",
    a: "The grounds are gated and staffed 24 hours with covered parking for guests. We ask that you let reception know when you plan to come and go late at night.",
  },
  {
    q: "Can you arrange an airport transfer?",
    a: "Yes. Pick-ups are complimentary on bookings of two nights or more; otherwise at a modest flat fee. Please share your flight details at the time of booking.",
  },
  {
    q: "Do you take walk-ins?",
    a: "When we have rooms, yes — but Brompton has only eight, so we strongly recommend you reserve ahead.",
  },
];

// ---------- HELPERS exposed ----------
export const helpers = { waHref, mailHref };

export default {
  business,
  hero,
  announcement,
  rooms,
  amenities,
  dining,
  experiences,
  story,
  reviews,
  gallery,
  faqs,
  helpers,
};
