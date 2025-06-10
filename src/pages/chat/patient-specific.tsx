import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageSquare, Send, Clock, User, Bot, FileText, Menu } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChatSidebar } from "@/components/chat-sidebar";

const PatientSpecificChat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm ready to assist with medical questions specific to Sarah Johnson. I have access to her medical history including hypertension, type 2 diabetes, and penicillin allergy. How can I help you today?",
      timestamp: new Date()
    }
  ]);

  const patientChats = [
    { id: 1, title: "Diabetes medication adjustment", timestamp: "1 hour ago" },
    { id: 2, title: "Blood pressure monitoring", timestamp: "2 days ago" },
    { id: 3, title: "Allergy considerations for treatment", timestamp: "1 week ago" },
    { id: 4, title: "Exercise recommendations", timestamp: "2 weeks ago" },
    { id: 5, title: "Dietary consultation", timestamp: "1 month ago" }
  ];

  const patientInfo = {
    name: "Sarah Johnson",
    conditions: ["Hypertension (2020)", "Type 2 Diabetes (2018)", "Allergic to Penicillin"]
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        type: "ai",
        content: "Hello! I'm ready to assist with medical questions specific to Sarah Johnson. I have access to her medical history including hypertension, type 2 diabetes, and penicillin allergy. How can I help you today?",
        timestamp: new Date()
      }
    ]);
    setMessage("");
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: message,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: "ai",
          content: "Based on Sarah's medical history and current conditions, I recommend...",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-80 bg-white border-r border-slate-200 flex-col">
        <div className="p-6 border-b border-slate-200">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to={`/patients/${id}`} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Patient</span>
            </Link>
          </Button>
        </div>
        <ChatSidebar type="patient" chatHistory={patientChats} patientInfo={patientInfo} onNewChat={handleNewChat} />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b border-slate-200">
          <div className="px-4 md:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Mobile Menu Button */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[80vh]">
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center justify-between">
                      <span>Patient: Sarah Johnson</span>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/patients/${id}`} className="flex items-center space-x-2">
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Link>
                      </Button>
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="flex-1 overflow-y-auto flex flex-col">
                    <ChatSidebar type="patient" chatHistory={patientChats} patientInfo={patientInfo} onNewChat={handleNewChat} />
                  </div>
                </DrawerContent>
              </Drawer>
              
              <h1 className="text-lg md:text-xl font-semibold text-slate-900 flex items-center">
                <MessageSquare className="h-5 w-5 text-emerald-600 mr-2" />
                <span className="hidden sm:inline">Patient-Specific Medical Q&A</span>
                <span className="sm:hidden">Patient Q&A</span>
              </h1>
            </div>
            
            <Button asChild variant="ghost" size="sm" className="hidden md:flex">
              <Link to={`/patients/${id}`} className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Patient</span>
              </Link>
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] md:max-w-2xl flex items-start space-x-3 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' ? 'bg-emerald-600' : 'bg-blue-600'
                }`}>
                  {msg.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-lg px-4 py-3 ${
                  msg.type === 'user' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white border border-slate-200 text-slate-900'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-emerald-100' : 'text-slate-500'
                  }`}>
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 bg-white p-4 md:p-6">
          <div className="flex space-x-2 md:space-x-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about this patient's condition or treatment..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-emerald-600 hover:bg-emerald-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSpecificChat;
