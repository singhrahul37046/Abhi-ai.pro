const Anthropic = require("@anthropic-ai/sdk");
const readline = require("readline");

// Global variables
let apiKey = "";
let client = null;

// Initialize API client with user's API key
function initializeClient(key) {
  apiKey = key;
  client = new Anthropic({
    apiKey: apiKey,
  });
}

// Get API key from user via terminal
function getAPIKeyFromUser() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "\n🔑 Apna Anthropic API key enter karo (https://console.anthropic.com/api/keys se copy karo):\n> ",
      (answer) => {
        rl.close();
        resolve(answer.trim());
      }
    );
  });
}

// Chat function to send message to Claude
async function chat(userMessage) {
  try {
    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    return message.content[0].type === "text" ? message.content[0].text : "";
  } catch (error) {
    if (error.status === 401) {
      return "❌ API key invalid hai! Sahi key daal ke dubara try karo.";
    }
    return `Error: ${error.message}`;
  }
}

// Main function
async function main() {
  console.log("\n╔═══════════════════════════════════╗");
  console.log("║   🤖 ABHI-AI PRO - Chatbot 🤖   ║");
  console.log("╚═══════════════════════════════════╝\n");

  // Step 1: Get API key from user
  const key = await getAPIKeyFromUser();

  if (!key || key.length === 0) {
    console.log("❌ API key zaruri hai! Program exit ho raha hai.");
    process.exit(1);
  }

  console.log("⏳ Connecting to Claude AI...");
  initializeClient(key);
  console.log("✅ Successfully connected!\n");

  // Step 2: Interactive chat loop
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("📝 Commands: Type 'exit' ya 'quit' ke liye bahar aao\n");

  const askQuestion = () => {
    rl.question("👤 Tum: ", async (userInput) => {
      // Exit conditions
      if (
        userInput.toLowerCase() === "exit" ||
        userInput.toLowerCase() === "quit" ||
        userInput.toLowerCase() === "q"
      ) {
        console.log("\n👋 Phir milenge! Bye!\n");
        rl.close();
        process.exit(0);
      }

      // Empty input
      if (!userInput.trim()) {
        askQuestion();
        return;
      }

      try {
        console.log("⏳ Soch raha hoon...\n");
        const response = await chat(userMessage);
        console.log(`🤖 Abhi: ${response}\n`);
      } catch (error) {
        console.error(`❌ Error: ${error.message}\n`);
      }

      askQuestion();
    });
  };

  askQuestion();
}

// Run the app
main().catch(console.error);
