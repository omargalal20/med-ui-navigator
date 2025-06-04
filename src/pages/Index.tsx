
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Activity, Shield, ChevronRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">MedQuery</h1>
                <p className="text-xs text-slate-500">Healthcare Professional Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-slate-600">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link to="/auth/login">Sign Out</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">
            Trusted Medical Assistance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered medical Q&A system designed for healthcare professionals. 
            Get instant, reliable medical information and manage patient consultations with confidence.
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-medium text-slate-900">General Medical Q&A</CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Access comprehensive medical knowledge through our AI assistant. Get instant answers to clinical questions, 
                drug interactions, symptoms, and treatment protocols.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base">
                <Link to="/chat/general" className="flex items-center justify-center space-x-2">
                  <span>Start Medical Consultation</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-medium text-slate-900">Patient Management</CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Manage patient records, view consultation history, and access patient-specific medical insights 
                through our secure platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-medium py-3 text-base">
                <Link to="/patients/view-all" className="flex items-center justify-center space-x-2">
                  <span>Access Patient Portal</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 p-8">
          <h3 className="text-2xl font-medium text-slate-900 text-center mb-8">
            Trusted by Healthcare Professionals
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">HIPAA Compliant</h4>
              <p className="text-slate-600">Secure, encrypted platform ensuring patient privacy and data protection.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Evidence-Based</h4>
              <p className="text-slate-600">AI trained on current medical literature and clinical guidelines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">24/7 Available</h4>
              <p className="text-slate-600">Round-the-clock medical assistance for urgent clinical decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-300">
              MedQuery - Supporting Healthcare Excellence
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Developed by Omar Elhanafy
            </p>
            <p className="text-xs text-slate-500 mt-1">
              This system is designed to assist healthcare professionals and is not intended to replace clinical judgment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
