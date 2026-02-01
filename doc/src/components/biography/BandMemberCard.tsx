import { BandMember } from "@/data/bandMembers";

interface BandMemberCardProps {
  member: BandMember;
  index: number;
}

export const BandMemberCard = ({ member, index }: BandMemberCardProps) => {
  return (
    <article 
      className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded bg-card/50 hover:border-primary/30 transition-all duration-500"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Photo */}
      <div className="w-full md:w-48 h-64 md:h-auto flex-shrink-0 rounded overflow-hidden border border-border">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover sepia-warm"
        />
      </div>
      
      {/* Info */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
          <h3 className="font-mono text-2xl text-primary crt-glow">{member.name}</h3>
          <span className="font-mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">
            {member.role}
          </span>
        </div>
        
        <div className="font-mono text-xs text-muted-foreground mb-4 space-y-1">
          <p>
            <span className="text-primary/60">Nascuda:</span> {member.birthYear}, {member.birthPlace}
          </p>
          <p>
            <span className="text-primary/60">Instruments:</span> {member.instrument}
          </p>
        </div>
        
        <p className="text-foreground/80 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </article>
  );
};
