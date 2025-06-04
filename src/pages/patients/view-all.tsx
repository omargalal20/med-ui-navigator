
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Users, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllPatients = () => {
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      dateOfBirth: "1985-03-15",
      age: 39
    },
    {
      id: 2,
      name: "Michael Chen",
      dateOfBirth: "1972-08-22",
      age: 51
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      dateOfBirth: "1990-11-08",
      age: 33
    },
    {
      id: 4,
      name: "David Thompson",
      dateOfBirth: "1965-05-30",
      age: 58
    },
    {
      id: 5,
      name: "Lisa Wang",
      dateOfBirth: "1988-12-03",
      age: 35
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" size="sm">
                <Link to="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
            <h1 className="text-xl font-semibold text-slate-900">Patient Management</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-emerald-600" />
              <span>Patient Records</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.dateOfBirth}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/patients/${patient.id}`} className="flex items-center space-x-2">
                          <Eye className="h-4 w-4" />
                          <span>View Details</span>
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewAllPatients;
