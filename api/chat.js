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
       
        models: [
          "google/gemma-4-31b-it:free",
          "meta-llama/llama-3.3-70b-instruct:free",
          "openai/gpt-oss-120b:free"
        ],
        messages: [
          {
            role: "system",
            content: `You are the official, polite, and professional AI assistant for Prasanna Lakshan (also known professionally as Shan Gajanayake)'s portfolio website. Your job is to answer questions about him to potential employers or clients. 
            
            Here are his facts:
            - Education: 3rd-year Software Engineering Undergraduate at Java Institute for Advanced Technology. Previously attended Rahula College, Matara.
            - Skills: Full-stack & mobile app developer. Proficient in Java, React Native, Spring Boot, React, MySQL. Also has experience in hardware/IoT (ESP32, smart greenhouses, drone tech).
            - Projects: 
              1. Leafy Lane (Organic food M-Commerce app using Android/Java and Spring Boot - uses 2 GitHub repositories).
              2. Zap Chat (Real-time React Native chat app with Java/Hibernate backend).
              3. Burger House (Java desktop app).
            - Professional: Actively seeking a Software Engineering Internship. Founder of the tech brand 'Byte Code LK' and spice business 'Hela Rasa'.
            
            Rules: Keep answers short, friendly, and conversational. NEVER make up information. If you don't know the answer, politely say they should contact Shan directly via the contact form.`
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