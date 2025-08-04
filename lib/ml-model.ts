// This is a simplified mock of an ML model for disease prediction
// In a real application, this would be a more sophisticated model or API call

type Symptom = string
type Disease = {
  name: string
  confidence: number
  description: string
  severity: "mild" | "moderate" | "severe"
  recommendations: {
    medications: string[]
    diet: string[]
    precautions: string[]
  }
}

// Mock database of disease-symptom relationships
const DISEASE_DATABASE = [
  {
    name: "Common Cold",
    symptoms: ["Cough", "Runny nose", "Sore throat", "Congestion", "Sneezing", "Fever"],
    description: "A viral infection of the upper respiratory tract that primarily affects the nose and throat.",
    severity: "mild",
    recommendations: {
      medications: [
        "Over-the-counter pain relievers like acetaminophen or ibuprofen",
        "Decongestants to relieve nasal congestion",
        "Cough suppressants for persistent cough",
      ],
      diet: [
        "Stay hydrated with water, clear broths, and warm liquids",
        "Consume vitamin C-rich foods like citrus fruits",
        "Eat honey to soothe sore throat (not for children under 1 year)",
      ],
      precautions: [
        "Rest to allow your body to recover",
        "Use a humidifier to add moisture to the air",
        "Wash hands frequently to prevent spreading the virus",
        "Avoid close contact with others while symptomatic",
      ],
    },
  },
  {
    name: "Seasonal Allergies",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Congestion", "Cough"],
    description:
      "An immune system response triggered by exposure to certain substances like pollen, dust, or pet dander.",
    severity: "mild",
    recommendations: {
      medications: [
        "Antihistamines to reduce allergy symptoms",
        "Nasal corticosteroids to reduce inflammation",
        "Decongestants for short-term relief of nasal congestion",
      ],
      diet: [
        "Foods with natural antihistamine properties like onions, garlic, and ginger",
        "Anti-inflammatory foods like fatty fish and turmeric",
        "Avoid known food allergens that may worsen symptoms",
      ],
      precautions: [
        "Keep windows closed during high pollen seasons",
        "Use air purifiers with HEPA filters",
        "Shower after being outdoors to remove allergens",
        "Regularly clean home to reduce dust and allergens",
      ],
    },
  },
  {
    name: "Influenza",
    symptoms: ["Fever", "Chills", "Muscle aches", "Fatigue", "Headache", "Cough", "Sore throat"],
    description:
      "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs.",
    severity: "moderate",
    recommendations: {
      medications: [
        "Antiviral medications if prescribed by a doctor",
        "Over-the-counter pain relievers for fever and aches",
        "Cough suppressants for persistent cough",
      ],
      diet: [
        "Stay well-hydrated with water and clear fluids",
        "Consume easy-to-digest foods like soups and broths",
        "Foods rich in vitamin C and zinc to support immune function",
      ],
      precautions: [
        "Rest and avoid physical exertion",
        "Stay home to prevent spreading the virus",
        "Cover coughs and sneezes with tissues",
        "Seek medical attention if symptoms worsen or persist",
      ],
    },
  },
  {
    name: "Migraine",
    symptoms: ["Headache", "Nausea", "Sensitivity to light", "Sensitivity to sound", "Visual disturbances"],
    description:
      "A neurological condition characterized by intense, debilitating headaches often accompanied by other symptoms.",
    severity: "moderate",
    recommendations: {
      medications: [
        "Over-the-counter pain relievers like ibuprofen or aspirin",
        "Prescription migraine medications if recommended by a doctor",
        "Anti-nausea medications if needed",
      ],
      diet: [
        "Stay hydrated and avoid dehydration",
        "Identify and avoid food triggers like aged cheeses, alcohol, or caffeine",
        "Maintain regular eating patterns to prevent low blood sugar",
      ],
      precautions: [
        "Rest in a quiet, dark room during attacks",
        "Apply cold or warm compresses to the head",
        "Practice stress management techniques",
        "Maintain a regular sleep schedule",
      ],
    },
  },
  {
    name: "Gastroenteritis",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal pain", "Fever", "Headache"],
    description: "An intestinal infection marked by diarrhea, abdominal cramps, nausea, vomiting, and sometimes fever.",
    severity: "moderate",
    recommendations: {
      medications: [
        "Anti-diarrheal medications (only if not contraindicated)",
        "Over-the-counter pain relievers for fever and discomfort",
        "Oral rehydration solutions to prevent dehydration",
      ],
      diet: [
        "Clear liquids and broths during acute phase",
        "BRAT diet (bananas, rice, applesauce, toast) as symptoms improve",
        "Gradually reintroduce normal foods as tolerated",
      ],
      precautions: [
        "Stay hydrated to replace lost fluids",
        "Rest to allow your body to recover",
        "Practice good hand hygiene to prevent spreading",
        "Seek medical attention if symptoms are severe or persistent",
      ],
    },
  },
]

// Calculate the match score between user symptoms and disease symptoms
const calculateMatchScore = (userSymptoms: Symptom[], diseaseSymptoms: Symptom[]): number => {
  let matchCount = 0

  // Count how many user symptoms match the disease symptoms
  userSymptoms.forEach((symptom) => {
    if (diseaseSymptoms.includes(symptom)) {
      matchCount++
    }
  })

  // Calculate match percentage based on user symptoms that match disease symptoms
  // and the coverage of disease symptoms
  const userSymptomMatchPercentage = (matchCount / userSymptoms.length) * 100
  const diseaseSymptomCoverage = (matchCount / diseaseSymptoms.length) * 100

  // Weighted average favoring user symptom matches
  return userSymptomMatchPercentage * 0.7 + diseaseSymptomCoverage * 0.3
}

// Predict diseases based on user symptoms
export const predictDiseases = (userSymptoms: Symptom[]): Disease[] => {
  if (!userSymptoms.length) {
    return []
  }

  // Calculate match scores for each disease
  const predictions = DISEASE_DATABASE.map((disease) => {
    const confidence = calculateMatchScore(userSymptoms, disease.symptoms)

    return {
      name: disease.name,
      confidence: Math.round(confidence), // Round to nearest integer
      description: disease.description,
      severity: disease.severity as "mild" | "moderate" | "severe",
      recommendations: disease.recommendations,
    }
  })

  // Sort by confidence score (descending) and filter out low confidence matches
  return predictions
    .filter((disease) => disease.confidence > 20) // Only include diseases with >20% confidence
    .sort((a, b) => b.confidence - a.confidence)
}

// Get personalized recommendations based on predicted diseases
export const getRecommendations = (diseases: Disease[]) => {
  if (!diseases.length) {
    return null
  }

  // Use the top disease for recommendations
  const topDisease = diseases[0]

  return {
    disease: topDisease.name,
    confidence: topDisease.confidence,
    medications: topDisease.recommendations.medications,
    diet: topDisease.recommendations.diet,
    precautions: topDisease.recommendations.precautions,
  }
}

