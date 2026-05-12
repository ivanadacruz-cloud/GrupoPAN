import React from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';

export function VideoRoom() {
  return (
    <div className="relative flex-1 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center m-4">
      {/* Mock Video Paciente (Main) */}
      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500 text-2xl font-medium">Câmera do Paciente</span>
      </div>
      
      {/* Mock Video Profissional (Self - PIP) */}
      <div className="absolute bottom-6 right-6 w-48 aspect-video bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center shadow-lg">
        <span className="text-gray-400 text-sm">Sua Câmera</span>
      </div>

      {/* Controles */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-gray-900/80 p-4 rounded-2xl backdrop-blur-sm">
        <button className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors">
          <Mic size={24} />
        </button>
        <button className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors">
          <Video size={24} />
        </button>
        <button className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors">
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
}
