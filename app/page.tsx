import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, HeartPulse, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-teal-700">
                  Empowering Health, One Symptom at a Time
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  DIAGNOSIFY uses advanced AI to predict potential health conditions based on your symptoms and provide
                  personalized recommendations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/symptom-checker">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Check Your Symptoms <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Medical illustration"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">
                How DIAGNOSIFY Works
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered platform analyzes your symptoms to provide accurate disease predictions and personalized
                health recommendations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-teal-100 rounded-full">
                <Brain className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center">Intelligent Symptom Analysis</h3>
              <p className="text-center text-gray-600">
                Our advanced machine learning algorithms analyze your symptoms to identify potential health conditions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-teal-100 rounded-full">
                <HeartPulse className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center">Personalized Recommendations</h3>
              <p className="text-center text-gray-600">
                Receive tailored advice on medications, diet, and precautions based on your predicted conditions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-teal-100 rounded-full">
                <ShieldCheck className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center">Secure & Private</h3>
              <p className="text-center text-gray-600">
                Your health data is encrypted and protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">
                Ready to Take Control of Your Health?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your health journey today with DIAGNOSIFY's AI-powered symptom checker.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/symptom-checker">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Check Your Symptoms Now
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

