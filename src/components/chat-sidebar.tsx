
import { Clock, User, Bot, FileText, Github, Linkedin, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHistory {
  id: number;
  title: string;
  timestamp: string;
}

interface PatientInfo {
  name: string;
  conditions: string[];
}

interface ChatSidebarProps {
  type: 'general' | 'patient';
  chatHistory: ChatHistory[];
  patientInfo?: PatientInfo;
  onNewChat: () => void;
}

export const ChatSidebar = ({ type, chatHistory, patientInfo, onNewChat }: ChatSidebarProps) => {
  return (
    <>
      <div className="p-6 border-b border-slate-200">
        {type === 'general' ? (
          <>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">MedQuery AI</h2>
            <p className="text-sm text-slate-600">
              Your AI-powered medical consultation assistant. Ask questions about symptoms, 
              treatments, drug interactions, and clinical protocols.
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="h-5 w-5 text-emerald-600" />
              <h2 className="text-lg font-semibold text-slate-900">Patient: {patientInfo?.name}</h2>
            </div>
            <p className="text-sm text-slate-600">
              AI consultation with access to patient medical history, current conditions, and treatment plans.
            </p>
          </>
        )}
      </div>
      
      <div className="flex-1 p-6">
        <Button
          onClick={onNewChat}
          className="w-full justify-center mb-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
        
        <h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          {type === 'general' ? 'Recent Conversations' : 'Patient Chat History'}
        </h3>
        <div className="space-y-2">
          {chatHistory.map((chat) => (
            <div key={chat.id} className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
              <p className="text-sm font-medium text-slate-900 truncate">{chat.title}</p>
              <p className="text-xs text-slate-500 mt-1">{chat.timestamp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6 pb-6 border-t border-slate-200">
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/omar-elhanafy-9a9257211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/omargalal20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <span className="text-sm text-slate-600">
            Developed by Omar Elhanafy
          </span>
        </div>
      </div>
    </>
  );
};
