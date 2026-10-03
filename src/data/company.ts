export const company = {
  name: "VAYU INDIA ROADWAYS PVT. LTD.",
  phone: "+91 7988142428",
  email: "VAYUINDIAROADWAYS@GMAIL.COM",
  address: "Building No. 1882, Near Library, Pai, District Kaithal, Haryana - 136043",
  location: "Pai, Kaithal, Haryana, India",
  primaryColor: "#0B2A6F", // Deep Navy Blue
  secondaryColor: "#1455C0", // Royal Blue
  accentOrange: "#F47B20", // Accent Orange
  accentGreen: "#169447", // Accent Green
  white: "#FFFFFF",
  lightBg: "#F5F7FA",
  darkText: "#172033",
  border: "#E5EAF0"
};

// Business statistics shown in the animated counter section on the Home page.
// Update `value` (a plain number) to change what the counters animate up to.
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Our Branches",
    description: "Extensive networks covering major industrial centers"
  },
  {
    value: 5500000,
    label: "Work Done (In Ton)",
    description: "Cargo safely transported across state boundaries"
  },
  {
    value: 300,
    suffix: "+",
    label: "Our Clients",
    description: "Industrial and commercial business partners"
  },
  {
    value: 200,
    suffix: "+",
    label: "Owned Vehicles",
    description: "Diverse road transportation fleet"
  }
];

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  image: string;
  path: string;
  longDesc: string;
  suitableCargo: string[];
  process: { step: string; name: string; desc: string }[];
  considerations: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "full-truck-load",
    title: "FULL TRUCK LOADS (FTL) & BULK LOAD",
    shortDesc: "Dedicated road transportation solutions for larger consignments requiring full vehicle capacity.",
    iconName: "Truck",
    image: "/images/truck-roadside-day.jpeg",
    path: "/services/full-truck-load",
    longDesc: "Vayu India Roadways Pvt. Ltd. provides reliable Full Truck Load (FTL) services across key routes in India. By choosing our FTL solution, you get dedicated vehicle capacity for your cargo, minimizing transit times and reducing cargo handling points.",
    suitableCargo: [
      "Heavy industrial machinery & equipment",
      "Bulk raw materials (steel, cement, chemicals)",
      "High-volume consumer goods (FMCG)",
      "Agricultural produce & food products",
      "Automotive parts & components"
    ],
    process: [
      { step: "01", name: "Requirement Sharing", desc: "Submit your route, load weight, and material type." },
      { step: "02", name: "Vehicle Placement", desc: "We place the correct truck category at your pick-up point." },
      { step: "03", name: "Secure Loading", desc: "Goods are loaded and secured for road transport." },
      { step: "04", name: "Direct Transit", desc: "Dedicated truck travels directly to the target destination." }
    ],
    considerations: "Requires secure loading docks. Vehicle options include Open-body, Close-body containers, and Multi-axle trailers depending on cargo specifications.",
    benefits: [
      "Direct transit with no intermediate hub delays",
      "Maximum safety with zero co-loading of other cargo",
      "Cost-effective for large bulk movements",
      "Direct control over loading and delivery timelines"
    ]
  },
  {
    id: "part-load",
    title: "LESS THAN TRUCK LOADS (LTL) & PART LOADS",
    shortDesc: "Flexible transportation options for consignments that do not require a full truck.",
    iconName: "Boxes",
    image: "/images/truck-night-highway.jpeg",
    path: "/services/part-load",
    longDesc: "When your cargo doesn't fill an entire truck, our Less Than Truckload (LTL) and Part Load services provide a practical, budget-friendly alternative. We coordinate route-compatible shipments to ensure economical movement without compromising on safety and tracking.",
    suitableCargo: [
      "Medium and small retail consignments",
      "Industrial spare parts & packages",
      "Boxed and palletized materials",
      "Sample products & test batches",
      "Non-hazardous chemical containers"
    ],
    process: [
      { step: "01", name: "Booking & Dimension Check", desc: "Cargo is weighed and measured to calculate space requirements." },
      { step: "02", name: "Consolidation", desc: "Consignments are aggregated into a route-aligned vehicle." },
      { step: "03", name: "Scheduled Transit", desc: "The vehicle completes deliveries along the optimized path." },
      { step: "04", name: "Last-Mile Delivery", desc: "Safe unloading at your specific delivery point." }
    ],
    considerations: "Transit times may vary slightly due to consolidation and multiple delivery drop-offs along the route.",
    benefits: [
      "Highly cost-effective for smaller load sizes",
      "Pay only for the space or weight your cargo occupies",
      "Professional handling at transfer points",
      "Regular scheduled departures on core routes"
    ]
  },
  {
    id: "lcv-lpt",
    title: "LCV & LPT LOADS",
    shortDesc: "Practical vehicle solutions for lighter consignments and routes requiring smaller commercial vehicles.",
    iconName: "Container",
    image: "/images/truck-front-day.jpeg",
    path: "/services/lcv-lpt",
    longDesc: "Light Commercial Vehicles (LCV) and Light Payload Trucks (LPT) are ideal for regional transport, city entries, and smaller cargo capacities. We coordinate dependable LCV/LPT transport for fast, agile deliveries where heavy trucks face restriction or are sub-optimal.",
    suitableCargo: [
      "E-commerce deliveries & distribution packages",
      "Local warehouse-to-retailer distribution",
      "Perishable items & temperature-sensitive cargo",
      "Time-critical light machinery parts",
      "Urban retail inventory replenishment"
    ],
    process: [
      { step: "01", name: "Request Scheduling", desc: "Confirm your cargo dimensions and delivery urgency." },
      { step: "02", name: "Agile Dispatch", desc: "A clean, well-maintained LCV/LPT is assigned to your load." },
      { step: "03", name: "Direct Loading", desc: "Cargo is loaded for rapid local or interstate transport." },
      { step: "04", name: "Express Handover", desc: "Prompt delivery at the destination with minimal friction." }
    ],
    considerations: "Perfect for narrow roads, city-center access with no heavy vehicle restrictions, and same-day regional deliveries.",
    benefits: [
      "Access to city zones restricted for heavy heavy-duty multi-axle trucks",
      "Faster turnaround time and rapid loading/unloading cycles",
      "Excellent option for smaller, time-sensitive cargo blocks",
      "Highly flexible scheduling options"
    ]
  },
  {
    id: "project-logistics",
    title: "PROJECT LOGISTICS & ODC",
    shortDesc: "Transportation coordination for oversized, heavy or specialised consignments requiring careful planning.",
    iconName: "Compass",
    image: "/images/odc-cargo.jpeg",
    path: "/services/project-logistics",
    longDesc: "Over-Dimensional Cargo (ODC) and large-scale industrial projects demand specialized logistics engineering. Vayu India Roadways Pvt. Ltd. plans, coordinates, and manages the road transit of oversized, heavy structures with detailed focus on route clearances and technical safety.",
    suitableCargo: [
      "Heavy engineering boilers and pressure vessels",
      "Wind turbine blades and tower structures",
      "Heavy-duty construction excavators & cranes",
      "Electrical transformers & heavy generators",
      "Pre-fabricated steel bridges and structural beams"
    ],
    process: [
      { step: "01", name: "Technical Audit", desc: "Review cargo dimensions, weight, and center of gravity." },
      { step: "02", name: "Route Survey", desc: "Survey roads for bridge clearances, overhead wires, and turn radii." },
      { step: "03", name: "Permit Acquisition", desc: "Secure official state/national highway permissions." },
      { step: "04", name: "Escorted Execution", desc: "Cargo is transported under slow-speed, coordinated conditions." }
    ],
    considerations: "Requires extended lead time for route surveys, specialized multi-axle hydraulic trailers, and state-level regulatory approvals.",
    benefits: [
      "End-to-end technical route feasibility study",
      "Regulatory alignment and permit management handled by professionals",
      "Highly experienced crew for heavy-lift securing and lashing",
      "Tailored transportation designs for unique industrial assets"
    ]
  },
  {
    id: "project-transportation",
    title: "PROJECT TRANSPORTATION",
    shortDesc: "Coordinated road transportation for project-based cargo and complex movement requirements.",
    iconName: "Shuffle",
    image: "/images/truck-roadside-day.jpeg",
    path: "/services/project-transportation",
    longDesc: "When a major infrastructure, power, or manufacturing project is initiated, moving hundreds of consignments in sync is crucial. Our Project Transportation service manages high-volume, synchronized road movements to supply industrial construction sites reliably.",
    suitableCargo: [
      "Sustained materials supply for infrastructure builds",
      "Power plant raw materials & structural shipments",
      "Refinery expansion equipment pipelines",
      "Massive cement & construction project material flows",
      "Mining development capital equipment"
    ],
    process: [
      { step: "01", name: "Project Blueprinting", desc: "Map out construction schedules and required material flows." },
      { step: "02", name: "Fleet Marshalling", desc: "Assemble a dedicated pool of heavy trucks for continuous rotations." },
      { step: "03", name: "Site Coordination", desc: "Align with site managers for loading and unloading sequences." },
      { step: "04", name: "Synchronized Delivery", desc: "Maintain steady supply loops to prevent site downtime." }
    ],
    considerations: "Demands strict adherence to site arrival hours, loading protocols, and safety-first field operations.",
    benefits: [
      "Continuous supply chain integrity for critical projects",
      "Dedicated operational team to manage localized dispatch",
      "Reduced bottleneck risk at loading/unloading zones",
      "Comprehensive tracking and progress reporting"
    ]
  },
  {
    id: "warehousing",
    title: "WAREHOUSING SERVICES",
    shortDesc: "Organised storage and logistics support for businesses requiring dependable cargo handling and movement coordination.",
    iconName: "Warehouse",
    image: "/images/warehouse.jpeg",
    path: "/services/warehousing",
    longDesc: "To complement our road transportation services, we offer strategic warehousing support. This service assists businesses in consolidating their products, managing transit inventory, and coordinating safe cargo staging near key Indian transit hubs.",
    suitableCargo: [
      "Staged manufacturing raw materials",
      "Finished goods awaiting bulk distribution",
      "Consolidated retail and commercial stock",
      "Industrial spare parts and accessories",
      "High-value boxed cargo requiring temporary holding"
    ],
    process: [
      { step: "01", name: "Receiving & Inspection", desc: "Cargo is unloaded, inspected, and logged into storage records." },
      { step: "02", name: "Safe Staging", desc: "Materials are arranged securely according to size and handling parameters." },
      { step: "03", name: "Inventory Management", desc: "We coordinate dispatch queues for outgoing transportation." },
      { step: "04", name: "Loading & Dispatch", desc: "Products are transferred directly onto trucks for road transport." }
    ],
    considerations: "Storage parameters, climate requirements, and security profiles are customized based on product characteristics.",
    benefits: [
      "Seamless integration with Vayu India Roadways transport network",
      "Reduction in intermediate handling costs",
      "Safe storage environment with round-the-clock monitoring",
      "Flexible storage terms tailored to seasonal business demands"
    ]
  }
];

export const industries = [
  { name: "Manufacturing", desc: "Transporting finished goods and raw industrial components." },
  { name: "Engineering", desc: "Moving engineered machinery and precision heavy equipment." },
  { name: "Automotive", desc: "Delivery of auto assemblies, chassis, and spare parts." },
  { name: "FMCG", desc: "Scheduled supply of packaged consumer foods and retail inventory." },
  { name: "Food Products", desc: "Handling bulk agricultural crops and grain shipments securely." },
  { name: "Steel & Metals", desc: "Transport of heavy steel sheets, coils, rods, and structural beams." },
  { name: "Construction & Cement", desc: "Delivering building aggregates, bagged cement, and bricks." },
  { name: "Infrastructure", desc: "Supporting road, bridge, and energy site construction loads." },
  { name: "Industrial Equipment", desc: "Dispatching machine tools, pumps, and fabrication units." },
  { name: "General Cargo", desc: "Versatile, day-to-day transport of mixed commercial merchandise." }
];
