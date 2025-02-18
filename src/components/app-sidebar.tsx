'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpenCheckIcon,
  BookOpenIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
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
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
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
      className="border-none hover:border-none focus:border-none focus:ring-0"
    >
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
