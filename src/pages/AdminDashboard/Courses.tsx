import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useTheme } from '@/provider/theme-provide'
import { AArrowDown, AArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function Courses() {
    const { theme } = useTheme()
    const [category, setCategory] = React.useState("bottom")
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead><div className='flex items-center space-x-2'><span>Name</span> <AArrowDown /></div> </TableHead>
                    <TableHead><div className='flex items-center space-x-2'><span>Instructor</span> <AArrowUp /></div></TableHead>
                    <TableHead><div className='flex items-center space-x-2'><span>Category</span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Filter</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Course category</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
                                    <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Web Development">Web Development</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="React">React</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Next.js">Next.js</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="C#">C#</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="JAVA">java</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div></TableHead>
                    <TableHead><div className='flex items-center space-x-2'><span>Price</span> <AArrowUp /> </div></TableHead>
                    <TableHead className="text-right">Atatus</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [0, 1, 2, 3, 4, 5].map(Course => (
                        <TableRow className={` ${theme === "light" ? "hover:bg-gray-200" : ""}`}>
                            <TableCell className="font-medium">001</TableCell>
                            <TableCell>React 0 to 1</TableCell>
                            <TableCell>Ko Lynn</TableCell>
                            <TableCell>Web Development</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell className="text-right">active</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
