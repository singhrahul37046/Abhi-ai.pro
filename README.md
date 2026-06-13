# Abhi-ai.pro 🤖

**Ek powerful AI chatbot jo Claude AI ko use karta hai - API key runtime mein daal sakte ho!**

## ✨ Features

- ✅ **No Hardcoded API Keys** - Code mein API key safe nahi padta
- ✅ **Interactive CLI** - Terminal mein directly chat karo
- ✅ **Claude 3.5 Sonnet** - Latest AI model
- ✅ **Easy Setup** - Sirf 2 commands!
- ✅ **Error Handling** - Safe aur stable

## 🚀 Quick Start

### Step 1: Prerequisites Install Karo
Teri machine mein ye hona chahiye:
- **Node.js** (version 14+) - [Download karo](https://nodejs.org/)
- **npm** (Node ke saath aata hai)

Check karne ke liye:
```bash
node --version
npm --version
```

### Step 2: Repo Clone Karo
```bash
git clone https://github.com/singhrahul37046/Abhi-ai.pro.git
cd Abhi-ai.pro
```

### Step 3: Dependencies Install Karo
```bash
npm install
```
Ye command package.json se sab packages download karega (~30 MB)

### Step 4: API Key Setup Karo

1. Go to: https://console.anthropic.com/api/keys
2. "Create new key" par click karo
3. Key copy karo (starting with `sk-ant-`)

### Step 5: App Run Karo
```bash
npm start
```

### Step 6: Chat Karna Start Karo

```
🔑 Apna Anthropic API key enter karo:
> sk-ant-xxxxxxxxxxxxx

⏳ Connecting to Claude AI...
✅ Successfully connected!

👤 Tum: Namaste! Tum kaun ho?
⏳ Soch raha hoon...

🤖 Abhi: Namaste! Main Claude AI hoon, Anthropic ka...
```

## 💬 Commands

| Command | Action |
|---------|--------|
| `exit` | App close karo |
| `quit` | App close karo |
| `q` | App close karo |

## 🔐 Security Tips

- ⚠️ **API key code mein KABHI paste mat karo**
- ✅ Terminal prompt mein key enter karo
- 🔒 Key public nahi karna
- 💰 Monthly limit set kar sake ho Anthropic console se

## 📊 API Usage

- **Model**: Claude 3.5 Sonnet (Latest)
- **Price**: ~$3 per 1M input tokens, ~$15 per 1M output tokens
- **Limit**: Tum set kar sakte ho

## 🛠️ Troubleshooting

### Error: "Module not found"
```bash
npm install
```
Phir se try karo.

### Error: "API key invalid"
- Key sahi se copy kiya?
- Key valid hai? (console.anthropic.com par check karo)
- Internet connection check karo

### App nahi chal raha?
```bash
# Fresh install try karo
rm -rf node_modules package-lock.json
npm install
npm start
```

## 📚 Aur sikhne ke liye

- [Anthropic Documentation](https://docs.anthropic.com/)
- [Claude Models](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)

## 📝 License

MIT License - Free aur open source!

## 👨‍💻 Author

**Rahul Singh** - [@singhrahul37046](https://github.com/singhrahul37046)

---

**Made with ❤️ for AI lovers!**
