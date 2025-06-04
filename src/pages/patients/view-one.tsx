
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, MessageSquare, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ViewOnePatient = () => {
  const { id } = useParams();
  
  // Mock patient data - in real app, fetch based on id
  const patient = {
    id: id,
    name: "Sarah Johnson",
    dateOfBirth: "1985-03-15",
    age: 39,
    phone: "(555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main St, Anytown, ST 12345",
    medicalHistory: [
      "Hypertension (diagnosed 2020)",
      "Type 2 Diabetes (diagnosed 2018)",
      "Allergic to Penicillin"
    ],
    recentVisits: [
      { date: "2024-05-15", reason: "Annual checkup", notes: "Blood pressure stable, A1C levels good" },
      { date: "2024-03-10", reason: "Follow-up diabetes", notes: "Medication adjustment needed" },
      { date: "2024-01-20", reason: "Flu symptoms", notes: "Prescribed rest and fluids" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" size="sm">
                <Link to="/patients/view-all" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Patients</span>
                </Link>
              </Button>
            </div>
            <h1 className="text-xl font-semibold text-slate-900">Patient Details</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Info Card */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Patient Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{patient.name}</h3>
                  <p className="text-slate-600">Patient ID: {patient.id}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Born: {patient.dateOfBirth} (Age {patient.age})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{patient.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{patient.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{patient.address}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link to={`/chat/patient/${patient.id}`} className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Start Patient Consultation</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Medical History and Recent Visits */}
          <div className="lg:col-span-2 space-y-8">
            {/* Medical History */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {patient.medicalHistory.map((item, index) => (
                    <li key={index} className="text-slate-700 border-l-2 border-blue-200 pl-4 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recent Visits */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Recent Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patient.recentVisits.map((visit, index) => (
                    <div key={index} className="border-l-2 border-emerald-200 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-slate-900">{visit.reason}</h4>
                        <span className="text-sm text-slate-500">{visit.date}</span>
                      </div>
                      <p className="text-sm text-slate-600">{visit.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOnePatient;
