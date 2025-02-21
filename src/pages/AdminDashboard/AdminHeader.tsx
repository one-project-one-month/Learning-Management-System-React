import { Button } from '@/components/ui/button';

interface Props {
    filterId: number;
    onFilterId: (id: number) => void;
}

export default function AdminHeader({ filterId, onFilterId }: Props) {
    return (
        <header className="h-20 w-full flex justify-between items-center px-2 ">
            <div className="text-xl font-bold mb-2">Dashboard</div>
            <div className="flex items-center gap-1">
                <Button
                    variant={`${filterId === 0 ? 'default' : 'outline'}`}
                    onClick={() => {
                        onFilterId(0);
                    }}>Year</Button>
                <Button variant={`${filterId === 1 ? 'default' : 'outline'}`}
                    onClick={() => {
                        onFilterId(1);
                    }}>Month</Button>
                <Button variant={`${filterId === 2 ? 'default' : 'outline'}`}
                    onClick={() => {
                        onFilterId(2);
                    }}>Today</Button>

            </div>
        </header>
    );
}
