import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContributorType } from "@/data/contributors";

type ContributorCardParms = {
  contributor: ContributorType
}

export default function ContributorCard(parms: ContributorCardParms){
  const { contributor } = parms;
  return (
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 w-[280px]">

                          {/* Image */}
                          <div className="relative w-full aspect-square">
                            <Image
                              src={contributor.image}
                              alt={contributor.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="p-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold">{contributor.name}</h3>
                            {contributor.role && (
                              <p className="text-muted-foreground text-sm mt-1">
                                {contributor.role}
                              </p>
                            )}
                            <div className="flex space-x-5 mt-3">
                              {contributor.github && (
                                <Link
                                  href={contributor.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition"
                                >
                                  <Github />
                                </Link>
                              )}
                              {contributor.linkedin && (
                                <Link
                                  href={contributor.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition"
                                >
                                  <Linkedin />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
  )
}
