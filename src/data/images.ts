// Real Company Vehicle Photographic Assets Config
export interface FleetImage {
  id: string;
  filename: string;
  title: string;
  description: string;
  fallbackUrl: string;
}

export const fleetImages: FleetImage[] = [
  {
    id: "truck-night-highway",
    filename: "/WhatsApp Image 2026-10-03 at 17.08.54.jpeg",
    title: "Vayu Truck - Night Interstate Transit",
    description: "Our highly-decorated TATA road carrier equipped with vibrant LED lighting, operating night runs along Haryana-Delhi highways.",
    fallbackUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200" // Premium night truck fallback
  },
  {
    id: "truck-roadside-composition",
    filename: "/WhatsApp Image 2026-10-03 at 17.08.55 (1).jpeg",
    title: "Vayu Truck - Rural Green Route",
    description: "Vayu India road carrier parked on a countryside corridor during a long-distance cargo rotation.",
    fallbackUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200" // Classic highway logistics fallback
  },
  {
    id: "truck-front-view",
    filename: "/WhatsApp Image 2026-10-03 at 17.08.55.jpeg",
    title: "Vayu Truck - Direct Front Profile",
    description: "Front-facing view of the authentic decorated TATA cargo vehicle (Haryana reg. HR39 G6198) parked at our staging yard.",
    fallbackUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" // Front freight truck fallback
  },
  {
    id: "truck-angled-view",
    filename: "/WhatsApp Image 2026-10-03 at 17.08.56 (1).jpeg",
    title: "Vayu Truck - Angled Roadside Profile",
    description: "Side-angled profile of the Vayu India heavy-duty truck parked under daylight conditions during a delivery cycle.",
    fallbackUrl: "https://images.unsplash.com/photo-1606185540834-d6e7473ff264?auto=format&fit=crop&q=80&w=1200" // Side container truck fallback
  },
  {
    id: "truck-highway-composition",
    filename: "/WhatsApp Image 2026-10-03 at 17.08.56.jpeg",
    title: "Vayu Truck - Highway Departure Staging",
    description: "Ready to load. The iconic Haryana carrier (HR39 G6198) displaying traditional 'BROTHERS HOOD' and 'JAT RAM' decals.",
    fallbackUrl: "https://images.unsplash.com/photo-1592838064575-70ed626d3a44?auto=format&fit=crop&q=80&w=1200" // Indian transport style fallback
  }
];

export const getImageUrl = (image: FleetImage) => {
  // Return fallbackUrl directly since files are not physical on local disk,
  // but allow for easy switching if the local files are ever populated.
  return image.fallbackUrl;
};
