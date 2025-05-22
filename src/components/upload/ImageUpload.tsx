import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await response.json();
      if (data.url) {
        onUpload(data.url);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        onChange={handleUpload}
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={uploading}
      />
      <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 transition-colors">
        <Upload className="h-6 w-6 text-gray-400 mr-2" />
        <span className="text-gray-600">
          {uploading ? 'Uploading...' : 'Click to upload image'}
        </span>
      </div>
    </div>
  );
};

export default ImageUpload;