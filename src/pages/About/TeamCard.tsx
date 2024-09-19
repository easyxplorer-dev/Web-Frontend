export type Member = {
  id: number;
  img: string;
  name: string;
  workstation: string;
};

type Props = {
  member: Member;
};

function TeamCard({ member }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-800 transition hover:bg-gray-700 max-w-xs p-4 rounded-lg">
      <img
        src={member.img}
        alt={`Avatar de ${member.name}`}
        className="w-24 h-24 rounded-lg"
        loading="lazy"
      />
      <div className="text-center">
        <h3 className="text-white">{member.name}</h3>
        <p>{member.workstation}</p>
      </div>
    </div>
  );
}

export default TeamCard;
