"use client"
import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import { TeamMemberCard } from "./TeamCard";
import { Filter } from "./filter";



export default function Team() {
  const [selected, setSelected] = useState("all");
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);

  useEffect(() => {
    const filteredMembers =
      selected === "all"
        ? teamMembers
        : teamMembers.filter((m) => m.teamTag === selected);
    setFilteredMembers(filteredMembers);
  }, [selected]);

  return (
    <div className="px-6 py-16 md:py-32 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-4 text-lg">Discover the talented individuals behind our success.</p>
      </div>
      <Filter selected={selected} setSelected={setSelected} />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}