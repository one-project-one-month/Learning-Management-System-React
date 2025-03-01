'use client';

import {
  BadgeCheck,
  CreditCard,
  LogIn,
  LogOut,
  LucideLogIn,
  ChevronsUpDown,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { useTheme } from '@/provider/theme-provide';
import { useAuthStore } from '@/store/authStore';

export function NavUser() {
  const { isMobile } = useSidebar();
  const { theme } = useTheme();
  const { authUser, logout } = useAuthStore();

  const data = authUser?.data;

  const isLoggedIn = !!data; // Check if the user is logged in

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="sm"
              className={`h-16 outline-none border-gray-600 rounded-xl border py-8 mb-2 ${
                theme == 'light'
                  ? 'hover:bg-gray-600 data-[state=open]:bg-gray-300'
                  : 'data-[state=open]:bg-sidebar-accent'
              } data-[state=open]:text-sidebar-accent-foreground`}
            >
              <Avatar
                className={`h-14 w-14 rounded-full outline-none ${
                  theme == 'light' ? 'text-black' : 'text-white'
                }`}
              >
                <AvatarImage
                  width={20}
                  height={20}
                  src={'/Brian.jpeg'}
                  alt={data?.name}
                />
                <AvatarFallback className="rounded-lg">
                  {data?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {data?.name} Need to Login
                </span>
                <span className="truncate text-xs">{data?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal cursor-pointer">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage alt={data?.name} />
                  <AvatarFallback className="rounded-lg">
                    {data?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{data?.name}</span>
                  <span className="truncate text-xs">{data?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <CreditCard />
                Billing
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            {/* Conditionally render Logout or Login/Register based on auth state */}
            {isLoggedIn ? (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => logout()}
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            ) : (
              <>
                <Link to="/login">
                  <DropdownMenuItem className="cursor-pointer">
                    <LogIn />
                    Login
                  </DropdownMenuItem>
                </Link>
                <Link to="/register">
                  <DropdownMenuItem className="cursor-pointer">
                    <LucideLogIn />
                    <span>Register</span>
                  </DropdownMenuItem>
                </Link>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
