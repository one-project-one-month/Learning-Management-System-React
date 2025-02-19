import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useTheme } from '@/provider/theme-provide'
import { AArrowDown, AArrowUp } from 'lucide-react'
export default function Courses() {
    const { theme } = useTheme()
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Course_Id</TableHead>
                    <TableHead><div className='flex items-center space-x-2'><span>Enrollment_date</span> <AArrowUp /> </div> </TableHead>
                    <TableHead >Atatus</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [0, 1, 2, 3, 4, 5].map(Course => (
                        <TableRow className={` ${theme === "light" ? "hover:bg-gray-200" : ""}`}>
                            <TableCell className="font-medium">001</TableCell>
                            <TableCell>John</TableCell>
                            <TableCell>CS015</TableCell>
                            <TableCell>2025-01-01</TableCell>
                            <TableCell >Completed</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
