import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Generate a 48x48 icon (perfect for Google Search)
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  // Read the original logo you requested
  const logoPath = path.join(process.cwd(), 'public', 'buildnest-logo.png');
  const logoData = fs.readFileSync(logoPath);
  const base64Image = logoData.toString('base64');
  const src = `data:image/png;base64,${base64Image}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* We use your exact logo, but we restrict its width/height to 60% of the space. 
            This adds invisible padding around it, making it look "smaller" in the browser tab. */}
        <img 
          src={src} 
          style={{ 
            width: '60%', 
            height: '60%', 
            objectFit: 'contain' 
          }} 
        />
      </div>
    ),
    { ...size }
  );
}
