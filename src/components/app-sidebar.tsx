'use client';

import * as React from 'react';
import {
  BookOpenCheckIcon,
  BookOpenIcon,
  Frame,
  GraduationCapIcon,
  LayoutDashboard,
  Mail,
  Map,
  PieChart,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
// import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
// import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { TeamSwitcher } from './team-switcher';

// This is sample data.
const data = {
  user: {
    name: 'Ko Lin',
    email: 'm@example.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  teams: [
    {
      name: 'LMS Platform',
      logo: GraduationCapIcon,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'My Courses',
      url: 'login',
      icon: BookOpenCheckIcon,
      isActive: true,
      items: [
        {
          title: 'Ongoing',
          url: '#',
        },
        {
          title: 'Completed',
          url: '#',
        },
      ],
    },
    {
      title: 'All Courses',
      url: '#',
      icon: BookOpenIcon,
      items: [
        {
          title: 'Computer Science',
          url: '#',
        },
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Web Development',
          url: '#',
        },
        {
          title: 'Software Engineer',
          url: '#',
        },
      ],
    },
    {
      title: 'Dashboards',
      url: '#',
      icon: LayoutDashboard,
      dashboardCategory: [
        {
          title: 'Admin Dashboard',
          url: 'admin',
        },
        {
          title: 'Instructor Dashboard',
          url: 'instructor',
        },
        {
          title: 'Student Dashboard',
          url: 'student',
        },
      ],
    },
  ],
  buttons: [
    {
      title: 'About',
      url: '#',
      icon: GraduationCapIcon,
    },
    {
      title: 'Contact Us',
      url: '#',
      icon: Mail,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      side="left"
      {...props}
      className=" flex flex-col  items-center justify-between  h-full border-none hover:border-none focus:border-none focus:ring-0 "
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} buttons={data.buttons} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
