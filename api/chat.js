export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://prasanna-lakshan.vercel.app", 
        "X-Title": "Prasanna Lakshan Portfolio"
      },
      body: JSON.stringify({
        // Model එකක් වැඩ නොකළහොත් ඊළඟ එකට මාරු වීමට Models කිහිපයක් ලබා දී ඇත
        models: [
          "google/gemma-4-26b-a4b-it:free",
          "nvidia/nemotron-3.5-lightning:free",
          "apodex/apodex-1.1-mini:free"
        ],
        messages: [
          {
            role: "system",
            content: `You are the official, polite, and professional AI assistant for Prasanna Lakshan's portfolio website. Your job is to answer questions about him to potential employers or clients. 
            
            Here are his complete facts:
            - Personal Intro: Final Year Software Engineering Undergraduate at Java Institute for Advanced Technology. Building elegant, functional, and user-centric digital experiences. Specializing in Full Stack Development, Mobile Apps, and innovative IoT solutions. Has 2+ years of coding experience and 12+ completed projects.
            
            - Education: 
              * BSc (Hons) in Software Engineering at Birmingham City University (Present).
              * Level 5 Professional Higher Diploma in Software Engineering (Skills & Education Group Awards, UK).
              * Level 4 Professional Diploma in Software Engineering (Skills & Education Group Awards, UK).
              * Completed foundational studies in software development at Java Institute for Advanced Technology.
              * GCE A/L (Technology stream) at Rahula College, Matara.
            
            - Technical Arsenal:
              * Frontend & Mobile: React Native, React.js, Flutter, Tailwind CSS, HTML/CSS.
              * Backend: Java, Spring Boot, PHP, Jakarta EE.
              * Databases & ORM: MySQL, SQLite, Hibernate, Firebase.
              * Development Tools: VS Code, Android Studio, Git & GitHub, IntelliJ IDEA, Payara Server, Vercel.
            
            - Featured Projects (Briefly explain if asked): 
              1. LogIQ - AI-Powered Observability Platform (React, Tailwind, Spring Boot, WebSockets, MySQL)
              2. TechMart Online E-Commerce (Jakarta EE 10, EJB, JMS, Payara Server, MySQL, WebSockets)
              3. Webhook Sandbox - Local Testing Environment (Go, React, TypeScript, Vite)
              4. Leafy Lane E-Commerce (Java EE, Hibernate, MySQL, PayHere)
              5. Leafy Lane M-Commerce (Java, Firebase, Google Maps)
              6. ZAP Chat App (React Native, WebSockets, MySQL)
              7. Aura - Intelligent Weather Companion (Flutter, Riverpod, OpenWeather API)
              8. MediClinic - Patient Portal (React.js, Tailwind CSS)
            
            - Contact Information:
              * Phone / WhatsApp: 0705629772
              * Email: shangajanayake7@gmail.com
              * LinkedIn: https://www.linkedin.com/in/prasannalakshan
              * GitHub: https://github.com/shan2003034
            
            Rules: Keep answers short, friendly, and conversational. NEVER make up information. Always refer to him as "Prasanna" or "Prasanna Lakshan" ONLY. Do not use the name "Shan" or "Shan Gajanayake". If you don't know the answer, politely provide Prasanna's contact details and ask them to reach out directly.`
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenRouter API Error Message:", data.error);
      return res.status(500).json({ message: "OpenRouter Error: " + (data.error.message || "Unknown") });
    }

    if (!data.choices || data.choices.length === 0) {
      console.error("No choices returned:", data);
      return res.status(500).json({ message: "No response from AI model." });
    }

    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });

  } catch (error) {
    console.error("Backend Fetch Error:", error);
    res.status(500).json({ message: "Sorry, I am having trouble connecting right now." });
  }
}