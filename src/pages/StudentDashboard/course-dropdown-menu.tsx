import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { courseDummyCategory, courseDummyData } from './dummy-data';

interface Props {
  onId: (id: number) => void;
}

export default function CourseDropdownMenu({ onId }: Props) {
  // const [id, setId] = useState(0);
  // console.log({ id });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-[1px] border-black rounded-md p-1 m-2 ">
        All courses
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {courseDummyCategory.map((category) => (
          <DropdownMenuSub key={category.categoryId}>
            <DropdownMenuSubTrigger>{category.category}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {courseDummyData
                  .filter((data) => data.categoryId === category.categoryId)
                  .map((course) => (
                    <DropdownMenuItem
                      key={course.id}
                      onClick={() => onId(course.id)}
                    >
                      {course.title}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
