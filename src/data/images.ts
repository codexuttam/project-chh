// Real Company Vehicle Photographic Assets Config
// All files live in /public/images and are served from the site root.
export interface FleetImage {
  id: string;
  filename: string;
  title: string;
  category: "Fleet Carriers" | "Project & ODC" | "Warehousing";
  description: string;
  fallbackUrl: string;
}

export const fleetImages: FleetImage[] = [
  {
    id: "truck-night-highway",
    filename: "/images/truck-night-highway.jpeg",
    title: "Vayu Truck - Night Interstate Transit",
    category: "Fleet Carriers",
    description: "Our highly-decorated TATA road carrier equipped with vibrant LED lighting, operating night runs along Haryana-Delhi highways.",
    fallbackUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "truck-roadside-composition",
    filename: "/images/truck-roadside-day.jpeg",
    title: "Vayu Truck - Rural Green Route",
    category: "Fleet Carriers",
    description: "Vayu India road carrier parked on a countryside corridor during a long-distance cargo rotation.",
    fallbackUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "truck-front-view",
    filename: "/images/truck-front-day.jpeg",
    title: "Vayu Truck - Direct Front Profile",
    category: "Fleet Carriers",
    description: "Front-facing view of the authentic decorated TATA cargo vehicle (Haryana reg. HR39 G6198) parked at our staging yard.",
    fallbackUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "odc-heavy-cargo",
    filename: "/images/odc-cargo.jpeg",
    title: "Over-Dimensional Cargo Movement",
    category: "Project & ODC",
    description: "Heavy and over-dimensional industrial equipment moved on specialised trailers with planned routing and escort coordination.",
    fallbackUrl: "https://images.unsplash.com/photo-1606185540834-d6e7473ff264?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "warehouse-storage",
    filename: "/images/warehouse.jpeg",
    title: "Warehousing & Storage Support",
    category: "Warehousing",
    description: "Palletised goods staged in racked warehouse storage, ready for consolidated dispatch and onward road transportation.",
    fallbackUrl: "https://images.unsplash.com/photo-1592838064575-70ed626d3a44?auto=format&fit=crop&q=80&w=1200"
  }
];

// Non-fleet brand / section assets
export const siteImages = {
  logo: "/images/logo.jpeg",
  logisticsTeam: "/images/logistics-team.jpg"
};

export const getImageUrl = (image: FleetImage) => {
  return image.filename || image.fallbackUrl;
};
