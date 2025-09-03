"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import { TeamMemberCard } from "./TeamCard";
import { Filter } from "./filter";
import Expandable from "../ui/expandable";
import { chunkAlternating } from "@/utils/chunkArray";

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

  const chunks = chunkAlternating(filteredMembers);

  return (
    <section id="teams" className="px-6 py-16 md:py-32 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-4 text-lg">
          Discover the talented individuals behind our success.
        </p>
      </div>
      <Filter selected={selected} setSelected={setSelected} />
      <div>
        {chunks.map((chunk, index) => (
          <div key={index} className="space-y-2">
            <Expandable
              key={index}
              className="w-full min-w-72 storybook-fix"
              list={chunk}
            />
          </div>
        ))}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div> */}
      </div>
    </section>
  );
}
