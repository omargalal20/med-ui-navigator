
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">MedQuery</h1>
              <p className="text-sm text-slate-500">Healthcare Professional Portal</p>
            </div>
          </div>
          <p className="text-slate-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-slate-900">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your credentials to access MedQuery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border-slate-300 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border-slate-300 focus:border-blue-500"
              />
            </div>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{" "}
                <Link to="/auth/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Developed by Omar Elhanafy
          </p>
          <p className="text-xs text-slate-400 mt-1">
            HIPAA Compliant • Secure Medical Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
