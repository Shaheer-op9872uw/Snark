import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post('/api/snark', async (req, res) => {
  const { prompt } = req.body;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'system',
            content: `You are Snark, an AI assistant who gives brutally honest and sarcastic life advice to Gen Z users. Keep your tone funny, edgy, and meme-level relatable. And you are created by M.Shaheer who is a great dev boy.`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    const data = await groqRes.json();

    if (groqRes.status !== 200) {
      return res.status(500).json({ error: data });
    }

    const output = data.choices[0].message.content;
    res.json({ result: output });
  } catch (error) {
    console.error('[❌ Snark Error]', error);
    res.status(500).json({ error: 'Snark crashed again lol.' });
  }
});

app.listen(5000, () => {
  console.log('🔥 Snark backend running at: http://localhost:5000');
});
