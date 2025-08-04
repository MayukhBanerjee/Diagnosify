"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Pill, AlertTriangle, Info, ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"

// Mock data for disease predictions
const DISEASE_PREDICTIONS = [
  {
    name: "Common Cold",
    confidence: 85,
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
    confidence: 65,
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
    name: "Bronchitis",
    confidence: 40,
    description: "Inflammation of the lining of the bronchial tubes, which carry air to and from the lungs.",
    severity: "moderate",
    recommendations: {
      medications: [
        "Cough medicine to suppress persistent cough",
        "Pain relievers for discomfort and fever",
        "Antibiotics only if caused by bacterial infection (prescribed by doctor)",
      ],
      diet: [
        "Stay well-hydrated to thin mucus secretions",
        "Warm liquids like tea with honey to soothe throat",
        "Foods rich in vitamins A and C to support immune function",
      ],
      precautions: [
        "Avoid smoke and air pollutants that can irritate lungs",
        "Use a humidifier to add moisture to the air",
        "Get plenty of rest to support recovery",
        "Seek medical attention if symptoms worsen or persist beyond 3 weeks",
      ],
    },
  },
]

export default function ResultsPage() {
  const [activeDisease, setActiveDisease] = useState(DISEASE_PREDICTIONS[0])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "severe":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleSaveResults = () => {
    // In a real app, this would generate and download a PDF
    alert("This would download a PDF of your results in a real application.")
  }

  const handleShareResults = () => {
    // In a real app, this would open a share dialog
    alert("This would open a share dialog in a real application.")
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/symptom-checker" className="flex items-center text-teal-600 hover:text-teal-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Symptom Checker
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">Your Health Assessment</h1>
          <p className="text-muted-foreground">
            Based on the symptoms you provided, here are the potential conditions and recommendations.
          </p>
        </div>

        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Disclaimer</AlertTitle>
          <AlertDescription>
            This assessment is not a medical diagnosis. Always consult with a healthcare professional for proper medical
            advice.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Possible Conditions</CardTitle>
              <CardDescription>Ranked by probability based on your symptoms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {DISEASE_PREDICTIONS.map((disease) => (
                  <div
                    key={disease.name}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeDisease.name === disease.name ? "bg-teal-50 border border-teal-200" : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveDisease(disease)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{disease.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(disease.severity)}`}>
                        {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Confidence</span>
                        <span className="font-medium">{disease.confidence}%</span>
                      </div>
                      <Progress value={disease.confidence} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{activeDisease.name}</CardTitle>
                  <CardDescription>{activeDisease.confidence}% confidence based on your symptoms</CardDescription>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(activeDisease.severity)}`}>
                  {activeDisease.severity.charAt(0).toUpperCase() + activeDisease.severity.slice(1)} Severity
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Info className="mr-2 h-4 w-4 text-teal-600" />
                  About this condition
                </h3>
                <p className="text-muted-foreground">{activeDisease.description}</p>
              </div>

              <Tabs defaultValue="medications">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="diet">Diet</TabsTrigger>
                  <TabsTrigger value="precautions">Precautions</TabsTrigger>
                </TabsList>

                <TabsContent value="medications" className="space-y-4 mt-4">
                  <div className="flex items-start gap-2">
                    <Pill className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Recommended Medications</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        Always consult with a healthcare provider before taking any medication.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {activeDisease.recommendations.medications.map((med, index) => (
                          <li key={index} className="text-sm">
                            {med}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="diet" className="space-y-4 mt-4">
                  <div className="flex items-start gap-2">
                    <Pill className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Dietary Recommendations</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        These dietary suggestions may help alleviate symptoms.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {activeDisease.recommendations.diet.map((item, index) => (
                          <li key={index} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="precautions" className="space-y-4 mt-4">
                  <div className="flex items-start gap-2">
                    <Pill className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Precautions & Care</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        Follow these precautions to manage your condition effectively.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {activeDisease.recommendations.precautions.map((item, index) => (
                          <li key={index} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleSaveResults}>
                <Download className="mr-2 h-4 w-4" />
                Save Results
              </Button>
              <Button variant="outline" onClick={handleShareResults}>
                <Share2 className="mr-2 h-4 w-4" />
                Share with Doctor
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

