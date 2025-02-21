import React from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import OverviewCard from "./OverviewCard";
import { BookOpen, CircleDollarSign, Users, UsersRound } from "lucide-react";

interface Props {
    filterId: number;
}
export default function Overview({ filterId }: Props) {
    return (
        <div className="grid md:grid-cols-4 gap-4">
            <OverviewCard title="Courses" total={257}>
                <BookOpen className="w-5" />
            </OverviewCard>

            <OverviewCard title="Instructors" total={105}>
                <UsersRound className="w-5" />
            </OverviewCard>

            <OverviewCard title="Students" total={3607}>
                <Users className="w-5" />
            </OverviewCard>

            <OverviewCard title="Revenue" total={1250}>
                <CircleDollarSign className="w-5" />
            </OverviewCard>
        </div>
    )
}
