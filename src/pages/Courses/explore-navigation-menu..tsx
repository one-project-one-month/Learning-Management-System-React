import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { courseDummyCategory } from '@/constant/dummy-data';
import { categories } from '../studentCourse/types';

interface Props {
  onCategoryId: (categoryId: number) => void;
}

export default function ExploreNavigationMenu({ onCategoryId }: Props) {
  const category: categories[] = [
    { id: 0, name: 'All' },
    ...courseDummyCategory,
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-72 w-48 rounded-md border">
              <ul>
                {category.map((data) => (
                  <li key={data.id}>
                    <NavigationMenuLink
                      onClick={() => {
                        onCategoryId(data.id);
                      }}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-[200px]"
                    >
                      {data.name}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
