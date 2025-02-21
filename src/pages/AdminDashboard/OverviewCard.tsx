
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { type } from "os";

type OverviewProp = {
    title: string,
    total: number,
    children?: React.ReactNode

}
export default function OverviewCard({ title, total, children }: OverviewProp) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center gap-2">
                        {children}
                        {title}
                    </div>
                </CardTitle>
                <p className="ms-4 text-xl italic font-bold">{
                    title == "Renevue" ? "+$ " + total : (<>+{total}<span className="text-sm text-gray-400"> {title}</span></>)
                }</p>
                <p className=" text-xs text-gray-600">+20.0% from last month</p>
            </CardHeader>
        </Card>
    )
}
