/* eslint-disable @typescript-eslint/no-unused-vars */
import { ColumnDef } from '@tanstack/react-table';
import { CourseTableType } from './types';
import { Button } from '@/components/ui/button';
import {
  ArrowUpDown,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash,
  Trash2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils';

export const useColumnOptions = (): ColumnDef<CourseTableType>[] => {
  return [
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Id
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('id')}</div>
      ),
    },
    {
      accessorKey: 'categoryName',
      header: ({ column }) => {
        // console.log('categoryName >>>', column);
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Category
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('categoryName')}</div>,
    },
    {
      accessorKey: 'courseName',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Course Name
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('courseName')}</div>,
    },
    {
      accessorKey: 'currentPrice',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Price
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">
          {formatPrice(row.getValue('currentPrice'))}
        </div>
      ),
    },

    {
      accessorKey: 'studentCount',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Count
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="text-center font-medium">
            {row.getValue('studentCount')}
          </div>
        );
      },
    },
    {
      accessorKey: 'totalIncome',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Total Income
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">
          {formatPrice(row.getValue('totalIncome'))}
        </div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                asChild
                onClick={() => {
                  console.log('id >>>', row.getValue('id'));
                }}
              >
                <span>
                  <Trash2 /> Delete
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to={'/courses/new'}
                  state={{ courseId: row.getValue('id') }}
                >
                  <Pencil /> Edit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
