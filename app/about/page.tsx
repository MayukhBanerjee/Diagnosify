import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, Stethoscope } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">About DIAGNOSIFY</h1>
          <p className="text-muted-foreground">
            Learn more about our mission, technology, and the team behind DIAGNOSIFY.
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Mission</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="leading-7">
                  DIAGNOSIFY was founded with a clear mission: to make healthcare more accessible, efficient, and
                  personalized through the power of artificial intelligence. We believe that everyone deserves access to
                  quick, reliable health information that can help them make informed decisions about their wellbeing.
                </p>
                <p className="leading-7 mt-4">
                  By combining advanced machine learning algorithms with a user-friendly interface, we've created a
                  platform that can analyze symptoms, predict potential conditions, and provide tailored health
                  recommendations—all while maintaining the highest standards of privacy and security.
                </p>
                <p className="leading-7 mt-4">
                  Our goal is not to replace healthcare professionals, but to complement their expertise by providing
                  users with preliminary insights and guidance that can help them better understand their health
                  concerns and seek appropriate medical attention when necessary.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Technology</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Brain className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Advanced AI</CardTitle>
                  <CardDescription>Powered by sophisticated machine learning algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI model has been trained on extensive medical datasets to recognize patterns and correlations
                    between symptoms and conditions with high accuracy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Stethoscope className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Medical Expertise</CardTitle>
                  <CardDescription>Developed in collaboration with healthcare professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our system has been developed and validated with input from experienced doctors, ensuring that our
                    predictions and recommendations align with medical best practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Shield className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>Your health data is protected with enterprise-grade security</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We employ AES-256 encryption and strict access controls to ensure that your sensitive health
                    information remains private and secure at all times.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">How It Works</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Input Your Symptoms</h3>
                      <p className="text-muted-foreground">
                        Select from our comprehensive list of symptoms or describe them in your own words. Our system
                        validates your inputs in real-time to ensure accuracy.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">AI Analysis</h3>
                      <p className="text-muted-foreground">
                        Our advanced machine learning algorithms process your symptoms, comparing them against thousands
                        of potential conditions to identify the most likely matches.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Receive Predictions</h3>
                      <p className="text-muted-foreground">
                        View a ranked list of potential conditions, each with a confidence score indicating the
                        likelihood of a match based on your specific symptoms.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Personalized Recommendations</h3>
                      <p className="text-muted-foreground">
                        Get tailored advice on medications, dietary adjustments, and precautions based on your predicted
                        conditions, helping you take immediate steps to manage your health.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-medium">Track Your Health</h3>
                      <p className="text-muted-foreground">
                        Save your assessments to your personal dashboard, allowing you to monitor your health over time
                        and share information with healthcare providers if needed.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Important Disclaimer</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="leading-7 text-muted-foreground">
                  DIAGNOSIFY is designed to provide preliminary health information and is not a substitute for
                  professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or
                  other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                <p className="leading-7 mt-4 text-muted-foreground">
                  The predictions and recommendations provided by DIAGNOSIFY are based on the symptoms you report and
                  statistical correlations in our database. They should be used as a starting point for discussion with
                  healthcare professionals, not as definitive diagnoses.
                </p>
                <p className="leading-7 mt-4 text-muted-foreground">
                  If you're experiencing severe or life-threatening symptoms, please seek emergency medical attention
                  immediately rather than using this platform.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}

