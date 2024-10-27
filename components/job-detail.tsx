"use client";

import {
    CalendarIcon,
    BuildingIcon,
    PhoneIcon,
    MailIcon,
    MapPinIcon,
    BriefcaseIcon,
    DollarSignIcon,
    UsersIcon,
    LinkIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JobData } from "@/interfaces/jobData";

export function JobDetailComponent({ job }: { job: JobData }) {
    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        {job.titulo_oferta}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{job.tipo_de_cargo}</Badge>
                        <Badge variant="secondary">{job.modalidad}</Badge>
                        {job.inclusiva === "Sí" && (
                            <Badge variant="default">Inclusiva</Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <section className="grid gap-2">
                        <h2 className="text-xl font-semibold">
                            Información de la empresa
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <BuildingIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.nombre_empresa}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BriefcaseIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.rubro}</span>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-2">
                        <h2 className="text-xl font-semibold">
                            Información de contacto
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.fono}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.mail_contacto}</span>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-2">
                        <h2 className="text-xl font-semibold">
                            Detalles del empleo
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                                <span>
                                    {job.region}, {job.comuna}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSignIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.sueldo}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <UsersIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{job.postulantes} </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                                <span>Publicado: {job.publicacion}</span>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-2">
                        <h2 className="text-xl font-semibold">
                            Descripción de la oferta
                        </h2>
                        <p className="text-muted-foreground">{job.oferta}</p>
                    </section>

                    <section className="grid gap-2">
                        <h2 className="text-xl font-semibold">
                            Información adicional
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <span className="font-medium">
                                    Área de trabajo:
                                </span>{" "}
                                {job.area_de_trabajo}
                            </div>
                            <div>
                                <span className="font-medium">
                                    ID del trabajo:
                                </span>{" "}
                                {job.id_job}
                            </div>
                            <div>
                                <span className="font-medium">
                                    Correlativo:
                                </span>{" "}
                                {job.correlativo}
                            </div>
                            <div>
                                <span className="font-medium">
                                    ID de la empresa:
                                </span>{" "}
                                {job.id_empresa}
                            </div>
                        </div>
                    </section>

                    <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                    >
                        <LinkIcon className="w-5 h-5" />
                        Postular a este empleo
                    </a>
                </CardContent>
            </Card>
        </div>
    );
}
