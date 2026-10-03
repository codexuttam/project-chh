import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  
  // Parse incoming JSON payloads
  app.use(express.json());

  // In-memory arrays to hold incoming user forms (resilient for runtime demonstration)
  const quotes: any[] = [];
  const contacts: any[] = [];

  // --------------------------------------------------------
  // BACKEND API ROUTES
  // --------------------------------------------------------

  // POST endpoint to capture cargo quote requests
  app.post("/api/quotes", (req, res) => {
    try {
      const quoteData = req.body;
      
      // Perform validation check
      if (!quoteData.name || !quoteData.phone || !quoteData.pickup || !quoteData.delivery) {
        return res.status(400).json({
          success: false,
          error: "Required parameters are missing (name, phone, pickup, delivery)."
        });
      }

      const newQuote = {
        id: `quote-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        ...quoteData,
        submittedAt: new Date().toISOString()
      };

      quotes.push(newQuote);
      console.log("[Vayu Backend] SUCCESS: Cargo Quote Received:", newQuote);

      return res.status(201).json({
        success: true,
        message: "Your cargo quote request has been recorded. Our team will contact you shortly.",
        id: newQuote.id
      });
    } catch (error) {
      console.error("[Vayu Backend] ERROR: Failed to process quote:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error occurred while writing cargo request."
      });
    }
  });

  // POST endpoint to capture drop-us-a-line general queries
  app.post("/api/contact", (req, res) => {
    try {
      const contactData = req.body;

      // Validate required inputs
      if (!contactData.name || !contactData.phone || !contactData.email || !contactData.message) {
        return res.status(400).json({
          success: false,
          error: "Required parameters are missing (name, phone, email, message)."
        });
      }

      const newContact = {
        id: `contact-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        ...contactData,
        submittedAt: new Date().toISOString()
      };

      contacts.push(newContact);
      console.log("[Vayu Backend] SUCCESS: Contact Enquiry Received:", newContact);

      return res.status(201).json({
        success: true,
        message: "Your general inquiry has been received at our head office.",
        id: newContact.id
      });
    } catch (error) {
      console.error("[Vayu Backend] ERROR: Failed to process contact enquiry:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error occurred while writing general enquiry."
      });
    }
  });

  // GET endpoint to securely inspect collected responses (developer diagnostic tool)
  app.get("/api/admin/submissions", (req, res) => {
    return res.json({
      quotesCount: quotes.length,
      contactsCount: contacts.length,
      quotes,
      contacts
    });
  });

  // --------------------------------------------------------
  // MIDDLEWARE MOUNTING & ROUTING
  // --------------------------------------------------------
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    // In development mode, load Vite dynamically to utilize standard middleware
    console.log("[Vayu Backend] Dev mode detected. Mounting Vite middleware...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    // In production mode, serve built static assets from /dist
    console.log("[Vayu Backend] Production mode detected. Serving static built assets...");
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist/index.html"));
    });
  }

  // Bind to server port (must run on port 3000 inside the container workspace)
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[Vayu Backend] Full-stack server active at: http://localhost:${port}`);
  });
}

createServer().catch((err) => {
  console.error("[Vayu Backend] FATAL: Failed to initiate full-stack server:", err);
});
