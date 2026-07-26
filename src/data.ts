import { PortfolioItem, GalleryItem, Milestone, Testimonial, ProcessStep } from './types';

import radonImg from './assets/images/radon_monogram_font_1785057971442.jpg';
import brownAgbadaImg from './assets/images/brown_agbada_garment_1785057984405.jpg';
import whiteBubaImg from './assets/images/white_buba_silver_1785057996493.jpg';
import birdcageImg from './assets/images/white_birdcage_agbada_1785058007927.jpg';
import patternCardImg from './assets/images/pattern_template_card_1785058025918.jpg';
import collageImg from './assets/images/embroidery_master_collage_1785058037943.jpg';
import blackGoldCapImg from './assets/images/black_gold_cap_1785058049655.jpg';
import whiteHexagonImg from './assets/images/white_hexagon_agbada_1785058060517.jpg';
import blueBubaImg from './assets/images/blue_buba_flatlay_1785058076317.jpg';
import sageTunicImg from './assets/images/sage_minimal_tunic_1785058087727.jpg';
import dustBlueAgbadaImg from './assets/images/dust_blue_agbada_1785058097884.jpg';
import palmCrestImg from './assets/images/palm_oval_crest_1785058108484.jpg';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'radon-monogram',
    title: 'RADON Monogram Font Family',
    category: 'Luxury',
    description: 'Modern geometric line font family designed for bespoke corporate and personal monograms.',
    longDescription: 'An ultra-refined monogram typography family featuring interlocking geometric line structures on a deep crimson backdrop. Designed for high-fashion labels, bespoke stationery, and luxury personal signatures.',
    image: radonImg,
    client: 'Radon Luxury Typography',
    year: '2025',
    services: ['Monogram Font Design', 'Vector Ligatures', 'Type System', 'Digital Identity'],
    challenge: 'Creating a modern monogram font family that seamlessly merges angular geometric lines with fluid curve ligatures, suitable for physical hot-stamping and high-resolution screen displays.',
    solution: 'Designed five weight variations featuring continuous vector paths and dual-line parallel stems, giving each monogram character an architectural, high-end feel.',
    beforeImg: radonImg,
    afterImg: radonImg
  },
  {
    id: 'royal-brown-agbada',
    title: 'Royal Camel Agbada',
    category: 'Fashion',
    description: 'High-fashion African luxury menswear with intricate geometric woven brown chest embroidery.',
    longDescription: 'A bespoke grand Agbada robe crafted from premium camel wool-blend cloth, featuring complex geometric lattice embroidery across the chest placket and shoulders in rich mahogany and earth tones.',
    image: brownAgbadaImg,
    client: 'Buba Classic Couture',
    year: '2025',
    services: ['High Couture Embroidery', 'Textile Strategy', 'Agbada Tailoring', 'Pattern Drafting'],
    challenge: 'Designing a traditional grand robe pattern that maintains weight and structural drape while incorporating high-density geometric embroidery across the wide chest panel.',
    solution: 'We engineered a reinforced canvas backing behind the embroidery panel, ensuring the geometric lattice motif lays flat and crisp without distortion during movement.',
    beforeImg: brownAgbadaImg,
    afterImg: brownAgbadaImg
  },
  {
    id: 'white-buba-classic',
    title: 'Buba Classic Diamond Stitch',
    category: 'Fashion',
    description: 'Crisp tailored white cotton Buba with delicate silver diamond lattice geometric embroidery.',
    longDescription: 'A pristine white cotton Buba shirt featuring hand-guided silver metallic thread embroidery along the central button placket and breast pocket, crafted in our Lagos atelier.',
    image: whiteBubaImg,
    client: 'Buba Classic Menswear',
    year: '2024',
    services: ['Atelier Embroidery', 'Placket & Pocket Stitching', 'Couture Sizing', 'Metallic Thread Work'],
    challenge: 'Applying metallic silver thread on lightweight white cotton without puckering the fabric or causing tension stiffness along the chest placket.',
    solution: 'Calibrated machine tension and thread elasticity to allow the silver diamond lattice stitch to flex naturally with the cotton weave.',
    beforeImg: whiteBubaImg,
    afterImg: whiteBubaImg
  },
  {
    id: 'aves-birdcage-agbada',
    title: 'Aves Freedom Suite',
    category: 'Personal',
    description: 'Modern luxury white Agbada suit featuring a stylized birdcage & flying birds embroidery motif.',
    longDescription: 'An iconic two-piece white short-sleeve resort Agbada set showcasing an artistic birdcage center emblem with black silhouetted birds escaping into flight, paired with tailored trousers.',
    image: birdcageImg,
    client: 'El-Khaleel Collection',
    year: '2025',
    services: ['Custom Symbol Embroidery', 'Resort Agbada Design', 'Illustrative Stitching'],
    challenge: 'Translating a delicate illustrative drawing of a birdcage and flying birds into threadwork that remains sharp on clean white linen.',
    solution: 'Utilized high-density black satin stitch vectors to define the cage geometry and tapered bird wings, creating striking contrast against the crisp white silhouette.',
    beforeImg: birdcageImg,
    afterImg: birdcageImg
  },
  {
    id: 'pattern-spec-23nl',
    title: 'Pattern Spec 23NL-0224',
    category: 'Corporate',
    description: 'Technical cross-stitch embroidery template card specifying placket and pocket dimensions.',
    longDescription: 'A technical embroidery specification chart used in our production workshop, defining precise millimeter grid layouts for plackets (3*49cm) and pockets (11.5*15cm) in grey and gold threads.',
    image: patternCardImg,
    client: 'IJITUYI Technical Atelier',
    year: '2024',
    services: ['Pattern Specification', 'Embroidery Drafting', 'Atelier Blueprints', 'Technical Cards'],
    challenge: 'Standardizing custom embroidery measurements across multi-city artisan workshops to maintain 100% precision.',
    solution: 'Created digital vector blueprint specification cards that map stitch density, width, and placement ratios for seamless atelier execution.',
    beforeImg: patternCardImg,
    afterImg: patternCardImg
  },
  {
    id: 'master-embroidery-grid',
    title: 'Master Embroidery Showcase',
    category: 'Wedding',
    description: 'Multi-medium catalog collage highlighting computerized embroidery, caps, and monograms.',
    longDescription: 'A comprehensive brand showcase collage displaying IJITUYI SIGNATURE embroidery capabilities: from computerized multi-head embroidery machines ("Worlden") to custom embroidered caps, MN laurel logos, and SM gold monograms.',
    image: collageImg,
    client: 'Black Man Couture & Buba Classic',
    year: '2025',
    services: ['Atelier Direction', 'Multi-Substrate Branding', 'Caps & Agbada', 'Crest Design'],
    challenge: 'Presenting a wide portfolio of custom menswear, embroidery machinery, and crest designs in a unified luxury presentation.',
    solution: 'Curated a multi-frame editorial grid highlighting high-magnification thread details alongside finished bespoke garments and machinery.',
    beforeImg: collageImg,
    afterImg: collageImg
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Fila Cap & Pattern No. 23',
    description: 'Close-up of a hand inspecting a bespoke black and gold woven houndstooth traditional Fila cap and matching fabric swatch.',
    image: blackGoldCapImg,
    category: 'Textile'
  },
  {
    id: 'gal-2',
    title: '3D Hexagon Optical Agbada',
    description: 'A bespoke white luxury Agbada robe featuring complex 3D optical geometric hexagon maze embroidery on the chest.',
    image: whiteHexagonImg,
    category: 'Detail'
  },
  {
    id: 'gal-3',
    title: 'Sky Blue Damask Buba',
    description: 'Flat lay of a sky-blue textured Buba shirt with intricate diamond cross-stitch embroidery along the placket and pocket.',
    image: blueBubaImg,
    category: 'Paper'
  },
  {
    id: 'gal-4',
    title: 'Sage Wingsball Tunic',
    description: 'Tailored sage grey luxury tunic featuring minimal black geometric cross embroidery down the center placket.',
    image: sageTunicImg,
    category: 'Metal'
  },
  {
    id: 'gal-5',
    title: 'Syari Slate Maze Agbada',
    description: 'Dusty slate blue Agbada robe displaying a bold architectural maze woven embroidery panel on a dark studio mannequin.',
    image: dustBlueAgbadaImg,
    category: 'Detail'
  },
  {
    id: 'gal-6',
    title: 'Palm Frond Heirloom Crest',
    description: 'Minimalist black oval monogram symbol featuring interlocking palm frond leaves on fine off-white linen texture.',
    image: palmCrestImg,
    category: 'Sketch'
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
