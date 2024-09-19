import TeamCard, { Member } from "./TeamCard";

const Members: Member[] = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    workstation: "Frontend Developer",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    workstation: "Backend Developer",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Johnson",
    workstation: "UI/UX Designer",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    workstation: "Full Stack Developer",
  },
];

function About() {
  return (
    <section className="mx-4 md:mx-0">
      <section className="max-w-7xl mx-auto py-4">
        <div className="hero my-6">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg "
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6 max-w-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                reprehenderit molestias quaerat dicta veniam iure repudiandae
                praesentium alias consequuntur nihil pariatur corporis quod
                doloremque ab architecto perferendis minima illum quos
                assumenda, voluptatum labore maiores? <br />
                Quis similique quae quibusdam veritatis nisi accusantium minus
                asperiores! Recusandae consectetur sapiente neque aut at iure!
              </p>
            </div>
          </div>
        </div>
        <section className="my-8">
          <h2 className="text-3xl text-center font-title2 text-white font-bold mb-4">
            Nuestro equipo
          </h2>
          <article className="flex gap-1 justify-evenly">
            {Members.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </article>
        </section>
      </section>
    </section>
  );
}

export default About;
