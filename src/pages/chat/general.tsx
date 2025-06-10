import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageSquare, Send, Clock, User, Bot, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChatSidebar } from "@/components/chat-sidebar";

const GeneralChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your medical AI assistant. How can I help you with your clinical questions today?",
      timestamp: new Date()
    }
  ]);

  const recentChats = [
    { id: 1, title: "Drug interaction: Warfarin and Aspirin", timestamp: "2 hours ago" },
    { id: 2, title: "Symptoms of acute myocardial infarction", timestamp: "1 day ago" },
    { id: 3, title: "Pediatric dosing for amoxicillin", timestamp: "2 days ago" },
    { id: 4, title: "Differential diagnosis for chest pain", timestamp: "3 days ago" },
    { id: 5, title: "Post-operative care guidelines", timestamp: "1 week ago" }
  ];

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        type: "ai",
        content: "Hello! I'm your medical AI assistant. How can I help you with your clinical questions today?",
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
          content: "I understand your question. Let me provide you with evidence-based medical information...",
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
            <Link to="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
        <ChatSidebar type="general" chatHistory={recentChats} onNewChat={handleNewChat} />
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
                      <span>MedQuery AI</span>
                      <Button asChild variant="ghost" size="sm">
                        <Link to="/dashboard" className="flex items-center space-x-2">
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Link>
                      </Button>
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="flex-1 overflow-y-auto flex flex-col">
                    <ChatSidebar type="general" chatHistory={recentChats} onNewChat={handleNewChat} />
                  </div>
                </DrawerContent>
              </Drawer>
              
              <h1 className="text-lg md:text-xl font-semibold text-slate-900 flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                General Medical Q&A
              </h1>
            </div>
            
            {/* Desktop Back Button */}
            <Button asChild variant="ghost" size="sm" className="hidden md:flex">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] md:max-w-2xl flex items-start space-x-3 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' ? 'bg-blue-600' : 'bg-emerald-600'
                }`}>
                  {msg.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-lg px-4 py-3 ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white border border-slate-200 text-slate-900'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-slate-200 bg-white p-4 md:p-6">
          <div className="flex space-x-2 md:space-x-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a medical question..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralChat;
