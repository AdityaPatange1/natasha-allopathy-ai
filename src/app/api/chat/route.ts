import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are Natasha, an AI-powered medical assistant created by AINK Tech for Para SF India. You are represented by a friendly rat emoji and persona.

Your role is to provide accurate, helpful information about allopathy (modern/Western) medications, drug interactions, treatment options, and general medical knowledge.

Guidelines:
1. Always be helpful, professional, and empathetic.
2. Provide evidence-based medical information.
3. Include relevant drug interactions and contraindications when applicable.
4. Always recommend consulting a healthcare professional for specific medical advice.
5. Use clear, understandable language while maintaining medical accuracy.
6. Include safety warnings for medications when relevant.
7. When discussing dosages, always mention that individual dosing should be determined by a healthcare provider.
8. Be culturally sensitive and aware of healthcare practices in India.

Format your responses in plain text only:
- Do not use any markdown formatting such as asterisks, hashtags, or bullet points.
- Use line breaks to separate sections clearly.
- Use simple dashes or numbers for lists.
- Keep the text clean and readable.
- End with a brief disclaimer when giving medical information.

Remember: You are Natasha, a knowledgeable and caring AI assistant. Always respond with empathy and prioritize patient safety.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      // Return a demo response if no API key is configured
      return NextResponse.json({
        response: getDemoResponse(message),
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

function getDemoResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("metformin")) {
    return `Hello! I'm Natasha, your medical AI assistant. Let me help you understand Metformin.


Metformin Overview

Metformin is a first-line oral antidiabetic medication used primarily to treat Type 2 Diabetes Mellitus.


Mechanism of Action

- Decreases hepatic glucose production.
- Increases insulin sensitivity in peripheral tissues.
- Reduces intestinal glucose absorption.


Common Side Effects

- Gastrointestinal disturbances (nausea, diarrhea, abdominal pain).
- Metallic taste.
- Vitamin B12 deficiency with long-term use.


Important Considerations

- Should be taken with meals to reduce GI side effects.
- Kidney function should be monitored regularly.
- Temporarily discontinued before contrast imaging procedures.


Drug Interactions

- May interact with certain diuretics.
- Caution with alcohol consumption.
- Monitor with ACE inhibitors.


Disclaimer: This information is for educational purposes only. Please consult your healthcare provider for personalized medical advice.`;
  }

  if (lowerMessage.includes("aspirin") || lowerMessage.includes("warfarin")) {
    return `Hello! I'm Natasha. Let me explain the interaction between Aspirin and Warfarin.


Critical Interaction Alert

Aspirin and Warfarin together significantly increase bleeding risk.


Mechanism

- Warfarin: Vitamin K antagonist (affects clotting factors).
- Aspirin: Inhibits platelet aggregation.


Combined Effect

Both medications affect different parts of the coagulation cascade, leading to synergistic anticoagulation.


Clinical Implications

- Increased risk of major bleeding events.
- Higher risk of GI bleeding.
- Intracranial hemorrhage risk elevated.


When Combined Use May Be Necessary

- Certain cardiac conditions (under strict medical supervision).
- Mechanical heart valves with additional risk factors.


Monitoring Required

- More frequent INR checks.
- Watch for signs of bleeding.
- Regular clinical assessment.


Important: This combination should only be used under direct medical supervision. Always consult your healthcare provider.`;
  }

  if (lowerMessage.includes("side effect") || lowerMessage.includes("interaction")) {
    return `Hello! I'm Natasha, and I'm here to help you understand medication side effects and interactions.


Understanding Drug Interactions

Drug interactions can occur when:

- Two or more medications are taken together.
- A medication interacts with food or beverages.
- A medication interacts with a health condition.


Types of Interactions

1. Pharmacokinetic - Affects how the drug is absorbed, distributed, metabolized, or excreted.

2. Pharmacodynamic - Affects how the drug works in the body.


Common Signs of Adverse Effects

- Unusual fatigue or weakness.
- Skin rashes or allergic reactions.
- Changes in heart rate or blood pressure.
- Gastrointestinal symptoms.


What You Can Do

- Keep a list of all medications you take.
- Inform all healthcare providers about your medications.
- Read medication labels carefully.
- Report any unusual symptoms promptly.


For specific drug interaction queries, please provide the medication names, and I'll give you detailed information. Always consult your healthcare provider for personalized advice.`;
  }

  return `Hello! I'm Natasha, your AI-powered medical assistant created by AINK Tech.


I can help you with:

- Medication Information: Learn about allopathy drugs, their uses, and mechanisms.

- Drug Interactions: Understand how different medications interact.

- Side Effects: Get information about common and serious side effects.

- Dosage Guidelines: General dosing information (always confirm with your doctor).

- Treatment Options: Overview of treatment approaches for various conditions.


Try asking me:

- What are the side effects of Metformin?
- How does Omeprazole work?
- What interactions should I know about with Lisinopril?
- Explain the mechanism of ACE inhibitors.


Remember: I provide general medical information for educational purposes. Always consult a qualified healthcare professional for medical advice specific to your situation.

How can I assist you today?`;
}
