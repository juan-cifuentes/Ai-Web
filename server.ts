import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GenAI safely
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API Route for contacting
app.post("/api/contact", (req, res) => {
  const { name, email, phone, details, plan } = req.body;
  console.log("Nueva solicitud de contacto recibida:", { name, email, phone, details, plan });
  
  res.json({
    success: true,
    message: "¡Gracias por comunicarte con ANN! Tu solicitud ha sido registrada con éxito. Nos pondremos en contacto contigo dentro de las próximas 2 horas para arrancar tu proyecto."
  });
});

// API Route for AI website blueprint generator
app.post("/api/generate-blueprint", async (req, res) => {
  const { businessName, description } = req.body;
  
  if (!businessName || !description) {
    return res.status(400).json({ error: "Nombre del negocio y descripción son requeridos." });
  }

  const keyExists = !!process.env.GEMINI_API_KEY;
  if (!keyExists) {
    return res.json({
      title: businessName,
      heroSubtitle: `La propuesta digital definitiva para tu negocio de "${description}", construida para convertir visitas en clientes desde las primeras 48 horas.`,
      suggestedColors: ["#050913", "#6600FF", "#5EC900", "#FFFFFF"],
      sections: [
        {
          sectionName: "Sección de Impacto (Hero)",
          copywritingSummary: `Presentación audaz de tu negocio usando tipografía limpia y un botón interactivo de cotización automatizada.`
        },
        {
          sectionName: "Propuesta de Valor Única",
          copywritingSummary: `Por qué tu oferta de "${description}" supera a la competencia, acompañado de iconos modernos e interactividad ultra-fluida.`
        },
        {
          sectionName: "Nuestros Canales de Venta",
          copywritingSummary: `Sección bento grid mostrando tus productos/servicios más demandados de forma visual e intuitiva.`
        },
        {
          sectionName: "Testimoniales y Validaciones",
          copywritingSummary: `Generación automática de opiniones de confianza para elevar tu tasa de conversión.`
        }
      ],
      recommendedPages: ["Inicio", "Catálogo de Servicios", "Sobre Nosotros", "Contacto Rápido"],
      featuresToBuild: ["Integración directa con WhatsApp", "Formularios flotantes optimizados para móviles", "Panel de administración y estadísticas SEO"]
    });
  }

  try {
    const ai = getGenAI();
    const prompt = `Crea una propuesta de diseño para un sitio web para el siguiente negocio en español.
Nombre del negocio: "${businessName}"
Descripción: "${description}"

Quiero que sugieras una propuesta estructural optimizada para conversión rápida (landing o sitio multi-página de alta conversión), incluyendo un listado de colores hex sugeridos, secciones clave con copy recomendado en español y funcionalidades claves sugeridas.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Eres un diseñador UX/UI experto y estratega de conversión web de ANN. Creas propuestas impecables, minimalistas, centradas en resultados, en formato JSON riguroso. Tu tono es sofisticado, profesional y convincente en español. No devuelvas ningún texto introductorio o aclaratorio, solo el JSON puro que cumpla estrictamente con el esquema provisto.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            heroSubtitle: { type: Type.STRING },
            suggestedColors: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  sectionName: { type: Type.STRING },
                  copywritingSummary: { type: Type.STRING }
                },
                required: ["sectionName", "copywritingSummary"]
              }
            },
            recommendedPages: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            featuresToBuild: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "heroSubtitle", "suggestedColors", "sections", "recommendedPages", "featuresToBuild"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No text response from Gemini API");
    }
    
    const blueprint = JSON.parse(text);
    return res.json(blueprint);

  } catch (error: any) {
    console.error("Error al generar el blueprint con Gemini:", error);
    return res.status(500).json({ error: "Ocurrió un error al generar la propuesta con Inteligencia Artificial. Por favor intenta de nuevo." });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
