function Hero2() {
  return (
    <section className="my-6">
      <div
        className="w-full h-[35rem] bg-fixed bg-center bg-no-repeat relative bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600298881981-7b83f032003b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-[#00000099] h-full text-white pl-auto flex justify-center">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold font-title2">
                Comienza los divertidos y románticos viajes con tu pareja
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div
              className="h-[25rem] bg-fixed w-[25rem] bg-center bg-no-repeat object-cover rounded-lg bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600298881981-7b83f032003b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
