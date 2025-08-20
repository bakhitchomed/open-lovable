import React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarConfig {
  hairStyle: 'short' | 'long' | 'bald';
  hairColor: string;
  eyeStyle: 'normal' | 'wink' | 'closed';
  mouthStyle: 'smile' | 'frown' | 'neutral';
  skinColor: string;
  shirtStyle: 'tshirt' | 'hoodie';
  shirtColor: string;
}

interface AvatarPreviewProps {
  config: AvatarConfig;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ config }) => {
  const hairClasses = {
    bald: 'hidden',
    short: 'h-8 w-full rounded-t-full absolute -top-1',
    long: 'h-16 w-full rounded-t-full absolute -top-1',
  };

  const eyeClasses = 'w-4 h-4 bg-black rounded-full';

  const mouthClasses = {
    smile: 'w-10 h-5 border-b-4 border-l-4 border-r-4 border-black rounded-b-full',
    frown: 'w-10 h-5 border-t-4 border-l-4 border-r-4 border-black rounded-t-full',
    neutral: 'w-10 h-1 bg-black',
  };

  return (
    <div className="flex items-center justify-center w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
      <div className="relative w-48 h-48">
        {/* Shirt */}
        <div
          className={cn(
            'absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 rounded-t-lg',
            config.shirtColor
          )}
        />
        {config.shirtStyle === 'hoodie' && (
           <div
            className={cn(
              'absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-12 rounded-t-full',
              config.shirtColor
            )}
          />
        )}

        {/* Head */}
        <div
          className={cn(
            'absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full',
            config.skinColor
          )}
        >
          {/* Hair */}
          <div className={cn(hairClasses[config.hairStyle], config.hairColor)} />

          {/* Eyes */}
          <div className="absolute top-10 flex w-full justify-around">
            <div className={cn(eyeClasses)} />
            <div className={cn(eyeClasses, { 'h-1 w-4 mt-2': config.eyeStyle === 'wink', 'h-1 w-4': config.eyeStyle === 'closed' })} />
          </div>

          {/* Mouth */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className={cn(mouthClasses[config.mouthStyle])} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPreview;