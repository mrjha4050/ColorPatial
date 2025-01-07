import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const colors = [
  { name: 'Warm White', value: '#F5F5F0' },
  { name: 'Soft Gray', value: '#E0E0E0' },
  { name: 'Natural Beige', value: '#E8DCD0' },
  { name: 'Sage Green', value: '#C2C5AA' },
  { name: 'Dusty Blue', value: '#A2B5BB' },
];

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker = ({ onColorChange }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-white/30 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Choose Your Color</h3>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <Button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            className="w-12 h-12 rounded-full p-0 transition-transform hover:scale-110"
            style={{ 
              backgroundColor: color.value,
              border: selectedColor === color.value ? '2px solid black' : '1px solid #e0e0e0'
            }}
            title={color.name}
          />
        ))}
      </div>
    </Card>
  );
};

export default ColorPicker;