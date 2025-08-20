import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OptionSelectorProps<T extends string> {
  label: string;
  options: { value: T; label: string; className?: string }[];
  selectedValue: T;
  onSelect: (value: T) => void;
  type?: 'button' | 'color';
}

const OptionSelector = <T extends string>({
  label,
  options,
  selectedValue,
  onSelect,
  type = 'button',
}: OptionSelectorProps<T>) => {
  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-left">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) =>
          type === 'button' ? (
            <Button
              key={option.value}
              variant={selectedValue === option.value ? 'default' : 'outline'}
              onClick={() => onSelect(option.value)}
            >
              {option.label}
            </Button>
          ) : (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={cn(
                'w-8 h-8 rounded-full border-2',
                option.className,
                selectedValue === option.value ? 'border-primary ring-2 ring-primary' : 'border-gray-300'
              )}
              aria-label={option.label}
            />
          )
        )}
      </div>
    </div>
  );
};

export default OptionSelector;