import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { newCourseFormType } from '../useNewCourseForm';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

type Props = {
  form: newCourseFormType;
  category: string;
  onCategory: (category: string) => void;
};

const categories = [
  { label: 'Web Development', value: 1 },
  { label: 'Mobile Development', value: 2 },
  { label: 'Data Science', value: 3 },
  { label: 'Cloud Computing', value: 4 },
];

export default function CourseCategoryForm({
  form,
  category,
  onCategory,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (currentValue: string) => {
    const selectedOption = categories.find(
      (option) => option.label === currentValue
    );
    if (selectedOption) {
      onCategory(selectedOption.label);
      form.setValue('categoryName', selectedOption.label);
    }
    setOpen(false);
  };

  const handleClear = () => {
    onCategory('');
    form.setValue('categoryName', '');
  };

  // console.log(
  //   'category name field >>>',
  //   form?.getValues('categoryName')
  // );

  return (
    <FormField
      control={form.control}
      name="categoryName"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Category</FormLabel>

          <FormControl>
            <div className="relative">
              <Input
                {...field}
                placeholder="category"
                value={field.value || ''}
                // value={categoryName}
                onFocus={() => {
                  setOpen(true);
                }}
                onChange={(e) => {
                  field.onChange(e);
                  onCategory(e.target.value);
                  // setCategoryName(e.target.value);

                  if (!open) {
                    setOpen(true);
                  }
                }}
              />
              {category && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-8 top-0 h-full px-2 py-0 hover:bg-transparent"
                  onClick={handleClear}
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>
              )}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="absolute right-0 top-0 h-full px-2 py-0 hover:bg-transparent"
                  >
                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto" align="end">
                  <Command>
                    <CommandInput value={category} onValueChange={onCategory} />
                    <CommandList>
                      <CommandEmpty>{'emptyMessage'}</CommandEmpty>
                      <CommandGroup className="max-h-60 overflow-auto">
                        {categories
                          .filter((option) =>
                            option.label
                              .toLowerCase()
                              .includes(category.toLowerCase())
                          )
                          .map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.label}
                              onSelect={handleSelect}
                              className="flex items-center"
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  category === option.label
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
