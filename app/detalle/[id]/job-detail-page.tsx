"use client";

import { JobDetailComponent } from "@/components/job-detail";
import { JobData } from "@/interfaces/jobData";

export default function JobDetailPage({ job }: { job: JobData }) {
    return <JobDetailComponent job={job} />;
}
