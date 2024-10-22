const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Groq = require('groq-sdk'); // Import Groq SDK

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Groq API with hardcoded API key
const groq = new Groq({ apiKey: 'gsk_123456789addyourshere' });

// Function to strip markdown-style formatting (like **bold** or _italic_)
function stripMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1');
}

// Function to simplify the legal text
async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: `Simplify the following legal text for common people:\n${text}`,
            },
        ],
        model: 'llama3-8b-8192',
    });
}

// Function to analyze tone
async function analyzeTone(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: `Analyze the tone of the following legal text and suggest improvements:\n${text}`,
            },
        ],
        model: 'llama3-8b-8192',
    });
}

// Function to explain legal terminology
async function explainTerminology(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: `Explain the legal terminology in the following document:\n${text}`,
            },
        ],
        model: 'llama3-8b-8192',
    });
}

// Simplify legal document route
app.post('/simplify', async (req, res) => {
    const { text } = req.body;

    try {
        const chatCompletion = await getGroqChatCompletion(text);
        let simplifiedText = chatCompletion.choices[0]?.message?.content || 'No simplification available';
        simplifiedText = stripMarkdown(simplifiedText); // Remove markdown-style formatting
        res.json({ simplifiedText });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error simplifying the document');
    }
});

// Tone analysis route
app.post('/tone-analysis', async (req, res) => {
    const { text } = req.body;

    try {
        const toneAnalysis = await analyzeTone(text);
        let toneAnalysisResult = toneAnalysis.choices[0]?.message?.content || 'No tone analysis available';
        toneAnalysisResult = stripMarkdown(toneAnalysisResult); // Remove markdown-style formatting
        res.json({ toneAnalysis: toneAnalysisResult });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error analyzing the tone');
    }
});

// Legal terminology explanation route
app.post('/explain-terminology', async (req, res) => {
    const { text } = req.body;

    try {
        const terminologyExplanation = await explainTerminology(text);
        let terminologyResult = terminologyExplanation.choices[0]?.message?.content || 'No explanation available';
        terminologyResult = stripMarkdown(terminologyResult); // Remove markdown-style formatting
        res.json({ terminologyExplanation: terminologyResult });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error explaining the terminology');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
