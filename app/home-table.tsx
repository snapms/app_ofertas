"use client";

import { JobData } from "@/interfaces/jobData";
import { DataTable } from "./prueba/data-table";
import { columns } from "./prueba/columns";

export default function HomeTable({ data }: { data: JobData[] }) {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
