"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data for symptoms
const BODY_SYSTEMS = [
  {
    name: "Respiratory",
    symptoms: ["Cough", "Shortness of breath", "Wheezing", "Chest pain", "Rapid breathing", "Sore throat"],
  },
  {
    name: "Digestive",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain", "Bloating", "Heartburn"],
  },
  {
    name: "Neurological",
    symptoms: ["Headache", "Dizziness", "Confusion", "Memory loss", "Numbness", "Tingling", "Seizures"],
  },
  {
    name: "Cardiovascular",
    symptoms: ["Chest pain", "Palpitations", "Shortness of breath", "Swelling", "Fatigue", "Dizziness"],
  },
  {
    name: "Musculoskeletal",
    symptoms: ["Joint pain", "Muscle pain", "Stiffness", "Swelling", "Limited range of motion", "Weakness"],
  },
  {
    name: "Skin",
    symptoms: ["Rash", "Itching", "Hives", "Redness", "Swelling", "Dryness", "Blisters"],
  },
]

export default function SymptomChecker() {
  const { toast } = useToast()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const filteredSymptoms = BODY_SYSTEMS.map((system) => ({
    ...system,
    symptoms: system.symptoms.filter((symptom) => symptom.toLowerCase().includes(searchTerm.toLowerCase())),
  })).filter((system) => system.symptoms.length > 0)

  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleRemoveSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
  }

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/symptom-checker/results")
    }, 2000)
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">Symptom Checker</h1>
          <p className="text-muted-foreground">
            Select your symptoms to get a preliminary assessment and health recommendations.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select Your Symptoms</CardTitle>
            <CardDescription>
              Choose all symptoms you are currently experiencing. Be as specific as possible for more accurate results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="browse">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="browse">Browse by Body System</TabsTrigger>
                <TabsTrigger value="search">Search Symptoms</TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-4">
                <div className="grid gap-4">
                  {BODY_SYSTEMS.map((system) => (
                    <div key={system.name} className="space-y-2">
                      <h3 className="font-medium text-teal-700">{system.name} System</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {system.symptoms.map((symptom) => (
                          <div key={symptom} className="flex items-center space-x-2">
                            <Checkbox
                              id={`symptom-${symptom}`}
                              checked={selectedSymptoms.includes(symptom)}
                              onCheckedChange={() => handleSymptomToggle(symptom)}
                            />
                            <Label htmlFor={`symptom-${symptom}`} className="cursor-pointer">
                              {symptom}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="search" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search symptoms..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {searchTerm && (
                  <ScrollArea className="h-[300px] rounded-md border p-4">
                    {filteredSymptoms.length > 0 ? (
                      filteredSymptoms.map((system) => (
                        <div key={system.name} className="mb-4">
                          <h3 className="font-medium text-teal-700 mb-2">{system.name} System</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {system.symptoms.map((symptom) => (
                              <div key={symptom} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`search-symptom-${symptom}`}
                                  checked={selectedSymptoms.includes(symptom)}
                                  onCheckedChange={() => handleSymptomToggle(symptom)}
                                />
                                <Label htmlFor={`search-symptom-${symptom}`} className="cursor-pointer">
                                  {symptom}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No symptoms found matching "{searchTerm}"
                      </div>
                    )}
                  </ScrollArea>
                )}
              </TabsContent>
            </Tabs>

            {selectedSymptoms.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium mb-2">Selected Symptoms ({selectedSymptoms.length})</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom) => (
                    <div
                      key={`selected-${symptom}`}
                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {symptom}
                      <button
                        onClick={() => handleRemoveSymptom(symptom)}
                        className="ml-2 text-teal-600 hover:text-teal-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setSelectedSymptoms([])}>
              Clear All
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-teal-600 hover:bg-teal-700"
              disabled={selectedSymptoms.length === 0 || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Symptoms"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

