import { BackCrumbs } from "@/src/components/layout/BackCrumbs";
import { Preview, Tickets } from "@/src/pages/tickets";

export default function() {
    return (
        <div className="bg-main-gray">
            <div className="bg-main-blue rounded-b-2xl h-4" />
            <BackCrumbs />

            <div className="flex ">
                <Tickets />
                <Preview />
            </div>
        </div>
    );
}
