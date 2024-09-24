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
        <article className="my-12 flex flex-wrap gap-4 justify-between mb-24">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl text-white font-title font-bolder uppercase tracking-wider text-center mb-4">
              Quienes Somos
            </h2>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              aperiam? Ullam soluta animi modi commodi ea ipsa esse provident
              accusamus dolorum aut. Ducimus mollitia eius inventore amet
              accusantium quaerat tempore nulla in voluptate blanditiis
              obcaecati, possimus numquam quidem sint. Eum, eveniet ad. Hic est
              eligendi et sapiente dicta a. Reiciendis!
            </p>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              cum, possimus id ut facere excepturi enim aliquid deleniti ad
              itaque.
            </p>
          </section>
          <figure className="max-w-sm relative mx-auto hidden md:block">
            <img
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
              style={{
                maskImage: "linear-gradient(black 90%, transparent)",
              }}
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-52 rounded-lg object-cover absolute top-20 left-0 -translate-x-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute top-8 right-0 translate-x-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 left-0 -translate-x-6 translate-y-8"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
        </article>
        <div className="my-8">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="max-w-sm rounded-lg"
            />
            <div className="text-end">
              <h1 className="text-5xl font-bold font-title uppercase">
                Misión
              </h1>
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
        <div className="my-8">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-start">
              <h1 className="text-5xl font-bold font-title uppercase">
                Visión
              </h1>
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
            <img
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="max-w-sm rounded-lg "
            />
          </div>
        </div>
        <section className="my-8">
          <h2 className="text-4xl text-center font-title text-white mb-4">
            Nuestro equipo
          </h2>
          <article className="flex gap-1 justify-evenly flex-wrap">
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
