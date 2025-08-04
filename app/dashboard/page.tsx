"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { BarChart, LineChart, PieChart } from "lucide-react"
import Link from "next/link"

// Mock data for health history
const HEALTH_HISTORY = [
  {
    date: "2025-03-28",
    symptoms: ["Cough", "Fever", "Fatigue"],
    diagnosis: "Common Cold",
    confidence: 85,
  },
  {
    date: "2025-02-15",
    symptoms: ["Headache", "Dizziness", "Nausea"],
    diagnosis: "Migraine",
    confidence: 78,
  },
  {
    date: "2025-01-05",
    symptoms: ["Rash", "Itching", "Swelling"],
    diagnosis: "Allergic Reaction",
    confidence: 92,
  },
]

// Mock data for health metrics
const HEALTH_METRICS = {
  symptomsOverTime: [
    { month: "Jan", count: 3 },
    { month: "Feb", count: 5 },
    { month: "Mar", count: 2 },
    { month: "Apr", count: 0 },
  ],
  conditionDistribution: [
    { condition: "Common Cold", percentage: 45 },
    { condition: "Allergies", percentage: 30 },
    { condition: "Migraine", percentage: 15 },
    { condition: "Other", percentage: 10 },
  ],
}

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedHistory, setSelectedHistory] = useState(HEALTH_HISTORY[0])

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">Your Health Dashboard</h1>
          <p className="text-muted-foreground">
            Track your health history, view past assessments, and monitor your progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Health Overview</CardTitle>
              <CardDescription>Summary of your recent health assessments and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="history">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="history">
                    <BarChart className="h-4 w-4 mr-2" />
                    History
                  </TabsTrigger>
                  <TabsTrigger value="trends">
                    <LineChart className="h-4 w-4 mr-2" />
                    Trends
                  </TabsTrigger>
                  <TabsTrigger value="conditions">
                    <PieChart className="h-4 w-4 mr-2" />
                    Conditions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="history" className="space-y-4">
                  <div className="grid gap-4">
                    {HEALTH_HISTORY.map((record, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${
                          selectedHistory === record ? "bg-teal-50 border border-teal-200" : "hover:bg-muted border"
                        }`}
                        onClick={() => setSelectedHistory(record)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{record.diagnosis}</h3>
                          <span className="text-sm text-muted-foreground">
                            {new Date(record.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {record.symptoms.map((symptom, i) => (
                            <span key={i} className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full text-xs">
                              {symptom}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Confidence</span>
                            <span className="font-medium">{record.confidence}%</span>
                          </div>
                          <Progress value={record.confidence} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="trends">
                  <div className="h-[300px] flex items-center justify-center border rounded-lg">
                    <div className="text-center p-6">
                      <h3 className="font-medium mb-2">Symptom Frequency Over Time</h3>
                      <div className="flex items-end justify-center h-40 gap-6">
                        {HEALTH_METRICS.symptomsOverTime.map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="w-12 bg-teal-500 rounded-t-md"
                              style={{ height: `${item.count * 30}px` }}
                            ></div>
                            <span className="text-xs mt-2">{item.month}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Your symptom frequency has decreased over the past few months.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="conditions">
                  <div className="h-[300px] flex items-center justify-center border rounded-lg">
                    <div className="text-center p-6 w-full">
                      <h3 className="font-medium mb-4">Condition Distribution</h3>
                      <div className="flex justify-center gap-4 mb-6">
                        <div className="w-32 h-32 rounded-full border-8 border-teal-500 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold">45%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {HEALTH_METRICS.conditionDistribution.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                  backgroundColor:
                                    index === 0
                                      ? "#14b8a6"
                                      : index === 1
                                        ? "#0d9488"
                                        : index === 2
                                          ? "#0f766e"
                                          : "#115e59",
                                }}
                              ></div>
                              <span className="text-sm">
                                {item.condition} ({item.percentage}%)
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Calendar</CardTitle>
              <CardDescription>Track your health assessments over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              <div className="mt-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/symptom-checker" className="w-full">
                    New Health Check
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Detailed Assessment</CardTitle>
              <CardDescription>
                {selectedHistory
                  ? `${selectedHistory.diagnosis} - ${new Date(selectedHistory.date).toLocaleDateString()}`
                  : "Select an assessment to view details"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedHistory && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Symptoms</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedHistory.symptoms.map((symptom, i) => (
                        <span key={i} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                          {symptom}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-medium mb-2">Diagnosis</h3>
                    <div className="p-3 bg-teal-50 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{selectedHistory.diagnosis}</span>
                        <span className="text-sm">{selectedHistory.confidence}% confidence</span>
                      </div>
                      <Progress value={selectedHistory.confidence} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Recommendations</h3>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg">
                        <h4 className="text-sm font-medium">Rest and Hydration</h4>
                        <p className="text-sm text-muted-foreground">
                          Ensure adequate rest and stay well-hydrated to support recovery.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="text-sm font-medium">Medication</h4>
                        <p className="text-sm text-muted-foreground">
                          Over-the-counter pain relievers as needed for symptom management.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="text-sm font-medium">Follow-up</h4>
                        <p className="text-sm text-muted-foreground">
                          Consult with healthcare provider if symptoms persist beyond 7 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

