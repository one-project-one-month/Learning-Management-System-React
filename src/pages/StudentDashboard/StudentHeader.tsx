import { Button } from '@/components/ui/button';
import { courseDummyCategory } from './dummy-data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Props {
  categoryId: number;
  onCategoryId: (id: number) => void;
}

export default function StudentHeader({ categoryId, onCategoryId }: Props) {
  return (
    <header className="h-20 w-full flex justify-between items-center space-x-2 ">
      <div className="hidden md:block md:text-xl font-bold mb-2">
        My Courses
      </div>
      <div className="flex items-center gap-1 ">
        <Button
          variant={`${categoryId === 0 ? 'default' : 'outline'}`}
          onClick={() => {
            onCategoryId(0);
          }}
          className="mb-2"
        >
          All Courses
        </Button>
        <ScrollArea className="max-w-[180px] md:max-w-md whitespace-nowrap rounded-md pb-1">
          <div className="flex flex-row gap-1  justify-between items-center overflow-x-auto w-auto p-1 pb-2">
            {courseDummyCategory.map((category) => (
              <Button
                variant={`${
                  categoryId === category.categoryId ? 'default' : 'outline'
                }`}
                // variant={'default'}
                key={category.categoryId}
                onClick={() => {
                  onCategoryId(category.categoryId);
                }}
              >
                {category.name}
              </Button>
            ))}
            {/* <div className="border-[1px] px-2 cursor-pointer border-black rounded-lg p-1  ">
          Marketing
        </div>
         */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </header>
  );
}
