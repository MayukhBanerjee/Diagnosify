import { type NextRequest, NextResponse } from "next/server"
import { predictDiseases } from "@/lib/ml-model"

export async function POST(req: NextRequest) {
  try {
    const { symptoms } = await req.json()

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json({ error: "Invalid or missing symptoms array" }, { status: 400 })
    }

    // Process the symptoms through our ML model
    const predictions = predictDiseases(symptoms)

    // Return the predictions
    return NextResponse.json({ predictions })
  } catch (error) {
    console.error("Error in disease prediction:", error)
    return NextResponse.json({ error: "An error occurred during prediction" }, { status: 500 })
  }
}

