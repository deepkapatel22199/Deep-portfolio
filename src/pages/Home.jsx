function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Deep Ka Patel</h1>
      <h2 className="text-2xl mb-6 text-gray-700">
        Full Stack Developer | AI Enthusiast
      </h2>
      <p className="text-gray-600 max-w-xl mb-6">
        I build modern web applications using the MERN stack and AI technologies.
        I love creating interactive and dynamic experiences on the web.
      </p>
      <a
        href="/projects"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        View Projects
      </a>
    </div>
  );
}

export default Home;
