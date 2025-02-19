'use client';

import {
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  LayoutDashboardIcon,
  LucideLayoutDashboard,
  Mail,
  type LucideIcon,
} from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { setRole } = useAuthStore();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu className="space-y-5">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && (
                    <Link to={`#`} className="w-5 h-5 ">
                      <item.icon />
                    </Link>
                  )}
                  <span className="mt-1">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="space-y-5 ">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title} className="mt-5">
                      <SidebarMenuSubButton asChild>
                        <Link to={`${subItem.url}`}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <SidebarMenuButton asChild tooltip={'About'}>
          <Link to="#">
            <div className="w-5 h-5">
              <GraduationCap />
            </div>

            <span className="mt-1">About</span>
          </Link>
        </SidebarMenuButton>
        <SidebarMenuButton asChild tooltip={'Contact Us'}>
          <Link to="#">
            <div className="w-5 h-5">
              <Mail />
            </div>
            <span className="mt-1">Contact Us</span>
          </Link>
        </SidebarMenuButton>
        <SidebarMenuButton
          onClick={() => setRole('admin')}
          asChild
          tooltip={'Admin Dashboard'}
        >
          <div className="cursor-pointer">
            <div className="w-5 h-5">
              <LayoutDashboard />
            </div>
            <span className="mt-1">Admin Dashboard</span>
          </div>
        </SidebarMenuButton>
        <SidebarMenuButton
          onClick={() => setRole('instructor')}
          asChild
          tooltip={'Instructor Dashboard'}
        >
          <div className="cursor-pointer">
            <div className="w-5 h-5">
              <LayoutDashboardIcon />
            </div>
            <span className="mt-1">Instructor Dashboard</span>
          </div>
        </SidebarMenuButton>
        <SidebarMenuButton
          onClick={() => setRole('student')}
          asChild
          tooltip={'Student Dashboard'}
        >
          <div className="cursor-pointer">
            <div className="w-5 h-5">
              <LucideLayoutDashboard />
            </div>
            <span className="mt-1">Student Dashboard</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenu>
    </SidebarGroup>
  );
}
