import React, { useState, useEffect } from "react";
import { RouterProvider, useRouter } from "./components/Router";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetQuoteModal from "./components/GetQuoteModal";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Network from "./pages/Network";
import Industries from "./pages/Industries";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function AppContent() {
  const { path } = useRouter();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Dynamic Page Title & SEO Metadata synchronization on path change
  useEffect(() => {
    let title = "Vayu India Roadways Pvt. Ltd. | Road Transportation & Logistics";
    let metaDesc = "Vayu India Roadways Pvt. Ltd. provides professional road transportation and logistics solutions from Pai, Kaithal, Haryana.";

    if (path === "/about") {
      title = "Vayu India Roadways Pvt. Ltd. | About Us";
      metaDesc = "Learn about our corporate logistics philosophy, safety protocols, and operations centered in Pai, Kaithal, Haryana.";
    } else if (path === "/services") {
      title = "Vayu India Roadways Pvt. Ltd. | Transportation Services";
      metaDesc = "Explore Vayu's road fleet services, including Full Truck Loads, Part Loads, LCV/LPT, and Project Cargo logistics across India.";
    } else if (path.startsWith("/services/")) {
      const serviceId = path.replace("/services/", "");
      const cleanId = serviceId.replace(/-/g, " ").toUpperCase();
      title = `Vayu India Roadways | ${cleanId} Service`;
      metaDesc = `Professional road dispatch details for ${serviceId} movement. Direct routing from Haryana's leading carrier networks.`;
    } else if (path === "/network") {
      title = "Vayu India Roadways Pvt. Ltd. | Branch Network";
      metaDesc = "Get operational coordinates for our registered head office in Pai, Kaithal, Haryana, and learn about nationwide active corridors.";
    } else if (path === "/industries") {
      title = "Vayu India Roadways Pvt. Ltd. | Industries We Support";
      metaDesc = "Review industrial sectors Vayu services, including Steel, FMCG, Manufacturing, Automotive, and Engineering bulk transportation.";
    } else if (path === "/gallery") {
      title = "Vayu India Roadways Pvt. Ltd. | Fleet Gallery";
      metaDesc = "Browse authentic high-resolution photographs of our TATA commercial logistics trucks and transport machinery in action.";
    } else if (path === "/contact") {
      title = "Vayu India Roadways Pvt. Ltd. | Contact Us";
      metaDesc = "Drop us an enquiry. Speak directly with cargo supervisors at our Kaithal office to arrange immediate vehicle placements.";
    }

    document.title = title;
    
    // Update description meta tag dynamically
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDesc);
    }
  }, [path]);

  // Route Renderer
  const renderPage = () => {
    if (path === "/") {
      return <Home onQuoteClick={() => setIsQuoteOpen(true)} />;
    }
    if (path === "/about") {
      return <About />;
    }
    if (path === "/services") {
      return <Services />;
    }
    if (path.startsWith("/services/")) {
      return <ServiceDetail onQuoteClick={() => setIsQuoteOpen(true)} />;
    }
    if (path === "/network") {
      return <Network />;
    }
    if (path === "/industries") {
      return <Industries />;
    }
    if (path === "/gallery") {
      return <Gallery />;
    }
    if (path === "/contact") {
      return <Contact />;
    }

    // Default Fallback
    return <Home onQuoteClick={() => setIsQuoteOpen(true)} />;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900 scroll-smooth">
      {/* Structural Header */}
      <header className="flex-shrink-0">
        <TopBar />
        <Navbar onQuoteClick={() => setIsQuoteOpen(true)} />
      </header>

      {/* Dynamic Content */}
      <main className="flex-grow z-10">
        {renderPage()}
      </main>

      {/* Structural Footer */}
      <Footer />

      {/* Global Form Quote Modal */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
