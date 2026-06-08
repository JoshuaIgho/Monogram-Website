import { PortfolioItem, GalleryItem, Milestone, Testimonial, ProcessStep } from './types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'aurelia-estate',
    title: 'Aurelia Estate',
    category: 'Luxury',
    description: 'Bespoke high-contrast gold foil monogram crest on heavy-textured dark cardstock.',
    longDescription: 'An ultra-minimalist and editorial brand identity for an exclusive winemaking estate situated in Burgundy. We crafted a custom serif monogram displaying the interlaced initials of the founding families, utilizing dramatic low-key styling and real debossed gold leaf application.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPilaZ6HKjTReWviOAV-PASTeXPNi3ia321yDSQAdwYXfEh6kvx4W3Nbv9S3yzuBzZH4sUD9ei8orXKzTbbfbLo82nyb1XNM6FilhBfGrkvEUjdXc5AD25Yla9cq1UP6Hq5VYmFCWFuzuYTDmr_-D0GdtjUJoZGs2M_95OgR3lld4ET01eQZWuYEnSvdH9znhW7VgcDbWT2_AhqYoZnk5as0hB04pFBSDgygcv2Nq_afbmYdjHeg6T2OB7Bfy67bXmeG_vSp6zydBp',
    client: 'Aurelia Vineyards & Co.',
    year: '2025',
    services: ['Creative Direction', 'Monogram Design', 'Material Strategy', 'Gold Gilding'],
    challenge: 'Aurelia Estate wanted to merge the heavy inheritance of their historical Burgundy wine-making land with the modern, minimalist sensibilities of contemporary wine collectors. Traditional family crests were too cluttered, while modern flat logos lacked prestige.',
    solution: 'We simplified their multi-family heraldic crest into an interlocking three-letter serif monogram. By using geometric ratios combined with traditional calligraphic flourishes, we created an emblem that looks equally timeless pressed in heavy gold foil or engraved on a wax bottle-seal.',
    beforeImg: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPilaZ6HKjTReWviOAV-PASTeXPNi3ia321yDSQAdwYXfEh6kvx4W3Nbv9S3yzuBzZH4sUD9ei8orXKzTbbfbLo82nyb1XNM6FilhBfGrkvEUjdXc5AD25Yla9cq1UP6Hq5VYmFCWFuzuYTDmr_-D0GdtjUJoZGs2M_95OgR3lld4ET01eQZWuYEnSvdH9znhW7VgcDbWT2_AhqYoZnk5as0hB04pFBSDgygcv2Nq_afbmYdjHeg6T2OB7Bfy67bXmeG_vSp6zydBp'
  },
  {
    id: 'velvet-room',
    title: 'The Velvet Room',
    category: 'Fashion',
    description: 'Intricately embroidered silk thread monogram on deep-focus charcoal velvet.',
    longDescription: 'High-fashion editorial branding featuring a bespoke fabric tag with a hand-designed monogram. The tactile velvet texture and subdued side-lighting represent ultimate comfort, sensory indulgence, and luxury couture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05wzPuitawxBNNRG_WvLQ6fxApzMcHr8tvQ1vY1QfiublbqtEID8zpS8lgbsZQEZ4iQE7an2CjnOMeJDF5poY898f9aa-VlHSfGAa8GIpjC_Wg7OJtpytNh4w4sUg9xajl8GcpLHlWhejKymErea8hkCADmg-izmhc3GrHWXvWQILyQD_ndGCUDWMTYnKlKA2evNYRrepnXQm3vOHBskvarCGGgTWjG-ubbI7Bm2oFgJo-pnlS3sAkCQfPXEF370TZktGmotx7z83',
    client: 'Velvet Room Couture',
    year: '2024',
    services: ['Bespoke Typography', 'Couture Sizing Cards', 'Textile Strategy', 'Production Consultation'],
    challenge: 'A luxury underground salon in Milan required an identifier that could be embroidered onto soft silk and velvet linings without snagging, lose none of its readability, and evoke secret members-only prestige.',
    solution: 'Designed with continuous vector curves mimicking physical silk threads, the V-R monogram loops elegantly, creating a structural emblem. We calibrated a custom weight specifically for high-speed embroidery machines.',
    beforeImg: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05wzPuitawxBNNRG_WvLQ6fxApzMcHr8tvQ1vY1QfiublbqtEID8zpS8lgbsZQEZ4iQE7an2CjnOMeJDF5poY898f9aa-VlHSfGAa8GIpjC_Wg7OJtpytNh4w4sUg9xajl8GcpLHlWhejKymErea8hkCADmg-izmhc3GrHWXvWQILyQD_ndGCUDWMTYnKlKA2evNYRrepnXQm3vOHBskvarCGGgTWjG-ubbI7Bm2oFgJo-pnlS3sAkCQfPXEF370TZktGmotx7z83'
  },
  {
    id: 'monolith-capital',
    title: 'Monolith Capital',
    category: 'Corporate',
    description: 'Backlit metal monogram plaque on deep structured basalt slate.',
    longDescription: 'Geometric and symmetrical architectural branding celebrating security, endurance, and elite corporate power. Warm golden highlights offset the raw, rough-textured graphite slate background.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY4WI65BRkjWi3JDXXpyWy9Od0ESX0zhB9whbUyQ83vatC0RPAlQr8uDLVrFE-75mbq5Fdkk6UpADUVskn1M3h42IR6tTdE7mdt4N6nRNiiL83489vtrlAS5iXBAbirtyqSMXmRPSfRQZzaV5sgFB3U2AqHdYfl-pGfHvsqx-NBHoq_CmeCdHQjddUAuA4R0GZiJmcdpZkSY3Eh0KNUs8_5lyiQo-KUquuUAVa8XR43WfshUmrSAFG9SAx_1D8cjNpc-ywfHgTsQB9',
    client: 'Monolith Private Banking',
    year: '2025',
    services: ['Architectural Identity', 'Slab Serif Custom font', 'Environmental Design'],
    challenge: 'To redefine wealth management for a new generation, shifting away from wooden, dusty bank boards into high-end minimalist materiality without sacrificing trust and legacy.',
    solution: 'An architectural monogram of the initials "M" and "C" forged in solid brushed bronze, highlighted with integrated soft 2700K backlight against dark vertical slate, echoing strength and digital refinement.',
    beforeImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY4WI65BRkjWi3JDXXpyWy9Od0ESX0zhB9whbUyQ83vatC0RPAlQr8uDLVrFE-75mbq5Fdkk6UpADUVskn1M3h42IR6tTdE7mdt4N6nRNiiL83489vtrlAS5iXBAbirtyqSMXmRPSfRQZzaV5sgFB3U2AqHdYfl-pGfHvsqx-NBHoq_CmeCdHQjddUAuA4R0GZiJmcdpZkSY3Eh0KNUs8_5lyiQo-KUquuUAVa8XR43WfshUmrSAFG9SAx_1D8cjNpc-ywfHgTsQB9'
  },
  {
    id: 'lumiere-nuptials',
    title: 'Lumiere Nuptials',
    category: 'Wedding',
    description: 'Gold foil flat lay stationery suite detailed with traditional calligraphic wax seals.',
    longDescription: 'Exquisite, romantic editorial wedding stationery designed for an open-air ceremony under the stars. Dried florals, bespoke hand-made paper, and a heavy-gauge brass seal complete this timeless, dreamy identity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZg04T32bbadlnKho4IQYJlUD_TjcskdBCq2HbpbLno0aKF3NNm0BIhhuUhtlRBbQH06XGzMK2lHuMc5yonzvBeE0Y9hTLC5ljJ6QC6xHMqUYb-LGHHqmCqB_Y-XzTS67SahtIp5QNb3zHF68WK2l5gbwhH7HLqUuR0PUFEYeSn_YgJ_m9UmKSBc2uMeK0NCI9AC_RXqoLkFj_apeRQmHiHZVOgy2BdRbWPAEu-n-QF_a9NBWeLsKZk2TWp1EvGp0OaN9plQKQ7jA2',
    client: 'The Lumiere Family',
    year: '2024',
    services: ['Custom Heraldry', 'Wedding Stationery Design', 'Calligraphy', 'Wax Seal Crafting'],
    challenge: 'A high-profile couple desired an heirloom-quality monogram that was deeply romantic, with elegant ligatures and fluid lines, that could connect multiple heritage materials: fine Italian cotton paper, wax seals, and digital animations.',
    solution: 'We synthesized their family initials with stylized laurel wreaths and thin star ligatures, establishing a custom monogram. Hand-carved onto a custom brass matrix, it allowed rapid hot-wax stamping of invitations.',
    beforeImg: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZg04T32bbadlnKho4IQYJlUD_TjcskdBCq2HbpbLno0aKF3NNm0BIhhuUhtlRBbQH06XGzMK2lHuMc5yonzvBeE0Y9hTLC5ljJ6QC6xHMqUYb-LGHHqmCqB_Y-XzTS67SahtIp5QNb3zHF68WK2l5gbwhH7HLqUuR0PUFEYeSn_YgJ_m9UmKSBc2uMeK0NCI9AC_RXqoLkFj_apeRQmHiHZVOgy2BdRbWPAEu-n-QF_a9NBWeLsKZk2TWp1EvGp0OaN9plQKQ7jA2'
  },
  {
    id: 'sovereign-gin',
    title: 'Sovereign Gin',
    category: 'Luxury',
    description: 'Gold-alloy wax seal holding an intricately engraved historic crown monogram.',
    longDescription: 'High-end spirits packaging concept focusing on heritage, artisanal distilling, and Royal appointment. The wax-dripped cap acts as a tactile guarantee of premium, untouched liquid culinary art.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdXxlZmWpF78jhPuCjenSF8DT-CxYW1eXwtiHojDUTqCVUsQ4ffU8poSXOazyXFQks2vf0zE-uK_lbz7pu01izzmYvsbcgm80NcXcjXjkqgwOirbD9lMHXr8zhvXRl4D48PwGE_tKoFijwUonnPoDhEAOwx_94PX3Z5A258EjIL-l0-QwPsrbOiYtxg1OPFcdjd0hWKTaAFg039X0Szrq7vzmHSgyxTT8pN2ZhI22KVwXyG4QgHpOQMwzQnw9pgAv-KkpF185kAJ5S',
    client: 'Sovereign Spirits Distillery',
    year: '2025',
    services: ['Packaging Strategy', 'Engraving', 'Hardware Prototyping', 'Visual Identity'],
    challenge: 'A bespoke small-batch gin maker wanted to command a premium price on the global boutique market. The bottle had to feel like it came from an royal apothecary collection, displaying both heritage and design brilliance.',
    solution: 'We engineered a heavy gold wax mixture and designed an engraved royal stamp that displays the distillery monogram. Positioned right on the dark basalt neck, the gold wax becomes a stunning visual anchor on the retail shelf.',
    beforeImg: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdXxlZmWpF78jhPuCjenSF8DT-CxYW1eXwtiHojDUTqCVUsQ4ffU8poSXOazyXFQks2vf0zE-uK_lbz7pu01izzmYvsbcgm80NcXcjXjkqgwOirbD9lMHXr8zhvXRl4D48PwGE_tKoFijwUonnPoDhEAOwx_94PX3Z5A258EjIL-l0-QwPsrbOiYtxg1OPFcdjd0hWKTaAFg039X0Szrq7vzmHSgyxTT8pN2ZhI22KVwXyG4QgHpOQMwzQnw9pgAv-KkpF185kAJ5S'
  },
  {
    id: 'private-label',
    title: 'The Private Label',
    category: 'Personal',
    description: 'Sleek translucent dashboard displaying real-time responsive monogram motion graphics.',
    longDescription: 'A custom, elite personal concierge application built around a glowing, procedural monogram. Merging vector elegance and technological premium architecture, it adapts dynamically to touch.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS-ifV1WXpAiDuUcKYiQ_IjQ1U9Vbd4sfXSxSVbiniiyID6uw4ZLQDj7rN-1U_eT9ar_mGHBAk4DVYDvbTrFhpQ7sHQIFDiiVEbTRSKLg1IXkP51GWnzuZi78yroDK1BizTWkdE44lGJRWvaXh0NeHo-rgxSS-VjhkiBlefKR40ZyZXkI1iEI7G2yQnfp2873OjuAfbCsxRNXP4aCx_ogJJZwXOPGdel2qMO2FtRmVojdOyPvPmstGIZuuP8LhY7L0MrmbT-qKoj4l',
    client: 'The Private Label International',
    year: '2024',
    services: ['Digital Branding', 'Real-time Vector Motion', 'UI & UX Design', 'Exclusive Application System'],
    challenge: 'A bespoke lifestyle manager wanted their application to feel like entering a five-star hotel lobby. Standard app navigation icons felt cheap, distracting, and cluttered.',
    solution: 'Designed an interactive monogram at the core of the experience. Upon opening the application, the signature monogram dynamically draws itself on screen using custom SVG animations, guiding the client smoothly into the service menu.',
    beforeImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS-ifV1WXpAiDuUcKYiQ_IjQ1U9Vbd4sfXSxSVbiniiyID6uw4ZLQDj7rN-1U_eT9ar_mGHBAk4DVYDvbTrFhpQ7sHQIFDiiVEbTRSKLg1IXkP51GWnzuZi78yroDK1BizTWkdE44lGJRWvaXh0NeHo-rgxSS-VjhkiBlefKR40ZyZXkI1iEI7G2yQnfp2873OjuAfbCsxRNXP4aCx_ogJJZwXOPGdel2qMO2FtRmVojdOyPvPmstGIZuuP8LhY7L0MrmbT-qKoj4l'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Engraving',
    description: 'A macro close-up of our signature brass matrix being hand-carved in our studio.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByazScbuf-auAC3ecexMuzsnT648F8FvdXuMe5jx2sHO63r7DKpTaxFJTpSkgtcBz6fvxFccypxQYmzcs2KnvseQYeBRlRAw4xS8ydQUdeAviPsxXHUjytOV_4vfJrMIqPQvpgvvs64Q-2wym7ruKJLWcoplQ0k_iogc6QbOtzmkoN1mqG3B8LjjxH4Jo06VuQSgES30tulE5eaoNnRoI91i4AiCPoJMEsQK5aNKjnyc8ILlH8hXjcUbALjCTZKrzsKXtNSItGoWbH',
    category: 'Sketch'
  },
  {
    id: 'gal-2',
    title: 'Textured Gilded Cardstock',
    description: 'Light playing on heavy cotton paper, showing the deep indentation of an Aurelia monogram.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPilaZ6HKjTReWviOAV-PASTeXPNi3ia321yDSQAdwYXfEh6kvx4W3Nbv9S3yzuBzZH4sUD9ei8orXKzTbbfbLo82nyb1XNM6FilhBfGrkvEUjdXc5AD25Yla9cq1UP6Hq5VYmFCWFuzuYTDmr_-D0GdtjUJoZGs2M_95OgR3lld4ET01eQZWuYEnSvdH9znhW7VgcDbWT2_AhqYoZnk5as0hB04pFBSDgygcv2Nq_afbmYdjHeg6T2OB7Bfy67bXmeG_vSp6zydBp',
    category: 'Paper'
  },
  {
    id: 'gal-3',
    title: 'Embroidered Velvet Detail',
    description: 'Gold silk fibers perfectly aligning to define a refined luxury menswear crest.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05wzPuitawxBNNRG_WvLQ6fxApzMcHr8tvQ1vY1QfiublbqtEID8zpS8lgbsZQEZ4iQE7an2CjnOMeJDF5poY898f9aa-VlHSfGAa8GIpjC_Wg7OJtpytNh4w4sUg9xajl8GcpLHlWhejKymErea8hkCADmg-izmhc3GrHWXvWQILyQD_ndGCUDWMTYnKlKA2evNYRrepnXQm3vOHBskvarCGGgTWjG-ubbI7Bm2oFgJo-pnlS3sAkCQfPXEF370TZktGmotx7z83',
    category: 'Textile'
  },
  {
    id: 'gal-4',
    title: 'Sovereign Melted Gold',
    description: 'The golden wax sealant solidifying, capturing a traditional crest forever.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdXxlZmWpF78jhPuCjenSF8DT-CxYW1eXwtiHojDUTqCVUsQ4ffU8poSXOazyXFQks2vf0zE-uK_lbz7pu01izzmYvsbcgm80NcXcjXjkqgwOirbD9lMHXr8zhvXRl4D48PwGE_tKoFijwUonnPoDhEAOwx_94PX3Z5A258EjIL-l0-QwPsrbOiYtxg1OPFcdjd0hWKTaAFg039X0Szrq7vzmHSgyxTT8pN2ZhI22KVwXyG4QgHpOQMwzQnw9pgAv-KkpF185kAJ5S',
    category: 'Metal'
  },
  {
    id: 'gal-5',
    title: 'Monolithic Architectural Slate',
    description: 'A brushed bronze metal monogram gleaming softly from hidden indirect slate ledges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY4WI65BRkjWi3JDXXpyWy9Od0ESX0zhB9whbUyQ83vatC0RPAlQr8uDLVrFE-75mbq5Fdkk6UpADUVskn1M3h42IR6tTdE7mdt4N6nRNiiL83489vtrlAS5iXBAbirtyqSMXmRPSfRQZzaV5sgFB3U2AqHdYfl-pGfHvsqx-NBHoq_CmeCdHQjddUAuA4R0GZiJmcdpZkSY3Eh0KNUs8_5lyiQo-KUquuUAVa8XR43WfshUmrSAFG9SAx_1D8cjNpc-ywfHgTsQB9',
    category: 'Detail'
  },
  {
    id: 'gal-6',
    title: 'Heirloom Inks',
    description: 'A hand-ground ink pigments well combined for bespoke calligraphy creation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZg04T32bbadlnKho4IQYJlUD_TjcskdBCq2HbpbLno0aKF3NNm0BIhhuUhtlRBbQH06XGzMK2lHuMc5yonzvBeE0Y9hTLC5ljJ6QC6xHMqUYb-LGHHqmCqB_Y-XzTS67SahtIp5QNb3zHF68WK2l5gbwhH7HLqUuR0PUFEYeSn_YgJ_m9UmKSBc2uMeK0NCI9AC_RXqoLkFj_apeRQmHiHZVOgy2BdRbWPAEu-n-QF_a9NBWeLsKZk2TWp1EvGp0OaN9plQKQ7jA2',
    category: 'Detail'
  }
];

export const studioMilestones: Milestone[] = [
  {
    year: '2018',
    title: 'Founding in Lagos',
    description: 'Founded by Ijituyi Idowu Temitope as a boutique lettering and calligraphy workspace, serving custom requests and bespoke wedding brandmarks in Lagos.'
  },
  {
    year: '2020',
    title: 'Prestige Branding Focus',
    description: 'Expanded into premium brandmarks and crest design, blending classic hand-drawn rules with modern precision vector models.'
  },
  {
    year: '2022',
    title: 'Nationwide Expansion',
    description: 'Began consulting for high-end boutique hotels, distinguished family estates, and premium developments across Abuja, Lagos, and Port Harcourt.'
  },
  {
    year: '2024',
    title: 'Legacy Design Recognition',
    description: 'Established as a creative standard for luxury design, crafting custom multi-substrate monograms and identity systems for premium local enterprises.'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    quote: "The monogram crafted for our resort is more than a logo; it is the soul of our identity. Guests often comment on its mathematical purity and timeless grace.",
    author: "Constantine Aurelia",
    role: "Proprietor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    brand: "Aurelia Estates"
  },
  {
    quote: "Ijituyi & his team possess a rare understanding of luxury heritage. They avoided typical corporate clichés and gave us a crest that feels older than our company.",
    author: "Maximilian Vane",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    brand: "The Velvet Room"
  },
  {
    quote: "Sovereign Gin's bottle design is now a masterpiece. The heavy gold-dripped seal bearing IJITUYI SIGNATURE's monogram is what turns everyday buyers into collectors.",
    author: "Beatriz d'Anjou",
    role: "Principal Distiller",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    brand: "Sovereign Spirits"
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We explore your identity, vision, and branding needs.',
    detail: 'Every project begins with a 1-on-1 consultation in our Lagos design studio, or via video conferencing. We deep-dive into your personal history, company vision, layout preferences, and brand goals to establish a clear design strategy.'
  },
  {
    number: '02',
    title: 'Concept & Pen Sketching',
    description: 'Classic pencil and ink drafts that reveal organic balance.',
    detail: 'Our design team sketches entirely distinct concepts by hand, using premium ink and paper. This stage allows the dynamic loops, ligatures, and typographic weight to form naturally and with human warmth before we transition to digital design.'
  },
  {
    number: '03',
    title: 'Digital Refinement & Vector Geometry',
    description: 'Precision digital modeling ensuring perfect vector scales.',
    detail: 'The chosen sketch is converted into high-fidelity digital vectors. We meticulously refine every anchor point and bezier curve, implementing precise layouts and visual ratios for perfect scalability and crisp, clean display.'
  },
  {
    number: '04',
    title: 'Medium Application & Testing',
    description: 'Testing designs across different digital and physical mediums.',
    detail: 'We prepare the designs for letterpress printing, gold hot-stamping, embroidery, or engraving. We coordinate with elite printing partners to ensure the final physically debossed or embroidered products feel as pristine as the on-screen digital versions.'
  },
  {
    number: '05',
    title: 'Final Delivery & Brand Assets',
    description: 'A unified high-resolution asset kit ready for immediate use.',
    detail: 'Your custom design is delivered in all scalable digital and vector formats. Along with the master files, we provide a clean, modern brand guide outlining how to use and preserve your new identity across different digital platforms and print materials.'
  }
];
