import React, { useState } from 'react';
import { Leaf, Image as ImageIcon, PlaySquare, Monitor } from 'lucide-react';

const EcoLab = () => {
  const [toggles, setToggles] = useState({ blurImages: false, stopAutoplay: false, grayscale: false });
  const baseEmission = 25.0;

  const calculateSavings = () => {
    let savings = 0;
    if (toggles.stopAutoplay) savings += 0.50;
    if (toggles.blurImages) savings += 0.30;
    if (toggles.grayscale) savings += 0.10;
    return savings;
  };

  const currentEmission = baseEmission * (1 - calculateSavings());

  const handleToggle = (key) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-8"><Leaf className="text-green-500" /> Eco-Simulator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`border-2 border-dashed border-gray-300 rounded-xl p-4 transition-all bg-white ${toggles.grayscale ? 'grayscale' : ''}`}>
          <div className="bg-gray-100 rounded-lg p-6 h-[400px]">
            <h2 className="text-2xl font-black mb-4">Tech News</h2>
            <div className="bg-gray-900 w-full h-40 rounded-lg flex items-center justify-center mb-4 text-white">
              {toggles.stopAutoplay ? "Video Paused" : "▶ Playing HD Video"}
            </div>
            <div className={`h-24 bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 ${toggles.blurImages ? 'blur-md' : ''}`}>
              <ImageIcon size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-6">Control Panel</h2>
          <div className="space-y-4 mb-8">
            {['stopAutoplay', 'blurImages', 'grayscale'].map((key) => (
              <label key={key} className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-gray-50">
                <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <input type="checkbox" checked={toggles[key]} onChange={() => handleToggle(key)} className="w-5 h-5 accent-green-500" />
              </label>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-white text-center">
            <p className="text-gray-400">Current Emission</p>
            <p className="text-4xl font-black text-green-400">{currentEmission.toFixed(1)} g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoLab;