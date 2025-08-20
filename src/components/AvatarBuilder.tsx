import React, { useState } from 'react';
import AvatarPreview, { AvatarConfig } from './AvatarPreview';
import OptionSelector from './OptionSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const hairStyleOptions: { value: AvatarConfig['hairStyle']; label: string }[] = [
  { value: 'short', label: 'Short' },
  { value: 'long', label: 'Long' },
  { value: 'bald', label: 'Bald' },
];

const eyeStyleOptions: { value: AvatarConfig['eyeStyle']; label: string }[] = [
  { value: 'normal', label: 'Normal' },
  { value: 'wink', label: 'Wink' },
  { value: 'closed', label: 'Closed' },
];

const mouthStyleOptions: { value: AvatarConfig['mouthStyle']; label: string }[] = [
  { value: 'smile', label: 'Smile' },
  { value: 'frown', label: 'Frown' },
  { value: 'neutral', label: 'Neutral' },
];

const shirtStyleOptions: { value: AvatarConfig['shirtStyle']; label: string }[] = [
    { value: 'tshirt', label: 'T-Shirt' },
    { value: 'hoodie', label: 'Hoodie' },
];

const colorOptions = [
  { value: 'bg-red-500', label: 'Red', className: 'bg-red-500' },
  { value: 'bg-blue-500', label: 'Blue', className: 'bg-blue-500' },
  { value: 'bg-green-500', label: 'Green', className: 'bg-green-500' },
  { value: 'bg-yellow-500', label: 'Yellow', className: 'bg-yellow-500' },
  { value: 'bg-purple-500', label: 'Purple', className: 'bg-purple-500' },
  { value: 'bg-gray-800', label: 'Black', className: 'bg-gray-800' },
  { value: 'bg-yellow-200', label: 'Blonde', className: 'bg-yellow-200' },
  { value: 'bg-orange-300', label: 'Skin 1', className: 'bg-orange-300' },
  { value: 'bg-yellow-900', label: 'Skin 2', className: 'bg-yellow-900' },
];

const hairColorOptions = colorOptions.slice(0, 7);
const shirtColorOptions = colorOptions.slice(0, 6);
const skinColorOptions = colorOptions.slice(7, 9);

const accessoryOptions: { value: AvatarConfig['accessory']; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'glasses', label: 'Glasses' },
];

const backgroundOptions = [
  { value: 'bg-gray-200', label: 'Gray', className: 'bg-gray-200' },
  { value: 'bg-blue-200', label: 'Blue', className: 'bg-blue-200' },
  { value: 'bg-green-200', label: 'Green', className: 'bg-green-200' },
  { value: 'bg-yellow-200', label: 'Yellow', className: 'bg-yellow-200' },
];


const AvatarBuilder = () => {
  const [config, setConfig] = useState<AvatarConfig>({
    hairStyle: 'short',
    hairColor: 'bg-gray-800',
    eyeStyle: 'normal',
    mouthStyle: 'smile',
    skinColor: 'bg-orange-300',
    shirtStyle: 'tshirt',
    shirtColor: 'bg-blue-500',
    accessory: 'none',
    background: 'bg-gray-200',
  });

  const updateConfig = <K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const randomizeAvatar = () => {
    const randomOption = (options: { value: any }[]) => options[Math.floor(Math.random() * options.length)].value;

    setConfig({
        hairStyle: randomOption(hairStyleOptions),
        hairColor: randomOption(hairColorOptions),
        eyeStyle: randomOption(eyeStyleOptions),
        mouthStyle: randomOption(mouthStyleOptions),
        skinColor: randomOption(skinColorOptions),
        shirtStyle: randomOption(shirtStyleOptions),
        shirtColor: randomOption(shirtColorOptions),
        accessory: randomOption(accessoryOptions),
        background: randomOption(backgroundOptions),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Virtual Avatar Builder</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <AvatarPreview config={config} />
          <Button onClick={randomizeAvatar}>Randomize</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Avatar</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="face" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="face">Face</TabsTrigger>
                <TabsTrigger value="clothing">Clothing</TabsTrigger>
                <TabsTrigger value="extras">Extras</TabsTrigger>
              </TabsList>
              <TabsContent value="face" className="pt-4">
                <OptionSelector
                  label="Hair Style"
                  options={hairStyleOptions}
                  selectedValue={config.hairStyle}
                  onSelect={(value) => updateConfig('hairStyle', value)}
                />
                <OptionSelector
                  label="Hair Color"
                  options={hairColorOptions}
                  selectedValue={config.hairColor}
                  onSelect={(value) => updateConfig('hairColor', value)}
                  type="color"
                />
                <OptionSelector
                  label="Eyes"
                  options={eyeStyleOptions}
                  selectedValue={config.eyeStyle}
                  onSelect={(value) => updateConfig('eyeStyle', value)}
                />
                <OptionSelector
                  label="Mouth"
                  options={mouthStyleOptions}
                  selectedValue={config.mouthStyle}
                  onSelect={(value) => updateConfig('mouthStyle', value)}
                />
                <OptionSelector
                  label="Skin Color"
                  options={skinColorOptions}
                  selectedValue={config.skinColor}
                  onSelect={(value) => updateConfig('skinColor', value)}
                  type="color"
                />
              </TabsContent>
              <TabsContent value="clothing" className="pt-4">
                <OptionSelector
                    label="Shirt Style"
                    options={shirtStyleOptions}
                    selectedValue={config.shirtStyle}
                    onSelect={(value) => updateConfig('shirtStyle', value)}
                />
                <OptionSelector
                  label="Shirt Color"
                  options={shirtColorOptions}
                  selectedValue={config.shirtColor}
                  onSelect={(value) => updateConfig('shirtColor', value)}
                  type="color"
                />
              </TabsContent>
              <TabsContent value="extras" className="pt-4">
                <OptionSelector
                  label="Accessory"
                  options={accessoryOptions}
                  selectedValue={config.accessory}
                  onSelect={(value) => updateConfig('accessory', value)}
                />
                <OptionSelector
                  label="Background"
                  options={backgroundOptions}
                  selectedValue={config.background}
                  onSelect={(value) => updateConfig('background', value)}
                  type="color"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AvatarBuilder;