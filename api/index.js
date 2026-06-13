const Anthropic = require("@anthropic-ai/sdk");

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages, apiKey } = req.body;

    if (!apiKey) {
      return res.status(400).json({ error: "API key required" });
    }

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages required" });
    }

    const client = new Anthropic({
      apiKey: apiKey,
    });

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: messages,
    });

    const aiMessage = response.content[0].type === "text" ? response.content[0].text : "";

    return res.status(200).json({
      success: true,
      message: aiMessage,
    });
  } catch (error) {
    console.error("API Error:", error);

    if (error.status === 401) {
      return res.status(401).json({
        error: "❌ API key invalid hai! Sahi key daal ke dubara try karo.",
      });
    }

    return res.status(500).json({
      error: error.message || "Something went wrong",
    });
  }
}
