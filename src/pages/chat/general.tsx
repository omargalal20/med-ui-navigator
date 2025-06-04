
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const GeneralChat = () => {
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
            <h1 className="text-xl font-semibold text-slate-900">General Medical Q&A</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>Medical Consultation Chat</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              This page will contain the general medical Q&A chat interface with sidebar for chat history.
            </p>
            <p className="text-sm text-slate-500">
              Feature coming soon - this will be your AI-powered medical consultation interface.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeneralChat;
