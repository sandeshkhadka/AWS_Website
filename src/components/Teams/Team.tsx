import { teamMembers } from "@/data/team"
import { TeamMemberCard } from "./TeamCard"

function Team() {
    return (
        <div className="px-6 py-16 md:py-32 space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p className="mt-4 text-lg">Discover the talented individuals behind our success.</p>
            </div>
            
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team