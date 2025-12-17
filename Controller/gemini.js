const uploads = multer({ storage: multer.memoryStorage() });
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const { GoogleGenAI } = require("@google/genai");
const saveResumes = require("../db/resume");
const multer = require("multer")
const pdf = require("pdf-parse")

require("dotenv").config();

async function upload(req, res) {

  if (!req.files || !req.files.file) {

    return res.status(400).send({ success: false, message: "No file uploaded" });
  }

  try {
    // 1️⃣ Extract text from PDF
    const data = new Uint8Array(req.files.file.data);
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(i => i.str).join(" ") + "\n\n";
    }

    // 2️⃣ Send extracted text to Gemini API
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).send({ success: false, message: "GEMINI_API_KEY not set in env" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `
        You are an AI resume expert.
        Analyze the resume text below and return JSON with:
        1. Resume Score (out of 100)
        2. ATS Score
        3. Missing Skills
        4. Suggestions
        5. Improved Resume Text

        Resume:
        ${text}`;

    const result = await ai.models.generateContent({

      model: "gemini-2.5-flash",
      contents: [{ text: prompt }]
    });

    const aiText = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No AI response";

    // 3️⃣ Send AI response to client
    res.send({ success: true, extractedText: text, aiAnalysis: aiText });

  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "Error processing PDF or AI", details: err.message });
  }
};



async function saveResume(req, res) {

  try {

    const { resumeText } = req.body;

    let response = await new saveResumes({ resumeText }).save();
    console.log(response);


    return res.send({

      response,
      status: 200,
      message: "Your Resume data save successfuly...",

    })


  } catch (err) {

    console.error(err);
    res.status(500).send({ success: false, message: "Rsume not found", details: err.message });
  }
};

async function getResumeData(req, res) {

  try {

    let getDataRes = await saveResumes.find();
    console.log(getDataRes);


    return res.send({

      getDataRes,
      status: 200,
      message: "Your Resume data save successfuly...",

    })


  } catch (err) {

    console.error(err);
    res.status(500).send({ success: false, message: "Rsume not found", details: err.message });
  }
};








// Serve the frontend files
async function analyze(req, res) {

  try {
    // 1. Extract text from PDF
    const dataBuffer = req.file.buffer;
    const pdfData = await pdf(dataBuffer);
    const resumeText = pdfData.text;
    const jobDescription = req.body.jobDescription;


    // 2. Formulate prompt for Gemini
    const prompt = `Analyze the following resume and job description.
        Resume: "${resumeText.substring(0, 2000)}..." // Truncate for brevity, use full text in real app
        Job Description: "${jobDescription.substring(0, 2000)}..."

        Provide a match analysis including:
        - A match percentage (0-100).
        - Key matching skills.
        - Missing skills or gaps.
        - Suggestions for improvement.
        Format the output as a JSON object.`;

    // 3. Call Gemini API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // A capable and fast model
      contents: [prompt],
    });

    const rawText = response.text;
    // Assuming Gemini returns a valid JSON string, parse it
    const analysisResult = JSON.parse(rawText);
    res.json(analysisResult);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error during analysis.' });
  }
}

module.exports = { upload, saveResume, getResumeData, analyze }
