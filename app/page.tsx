import "./css/fontello.css";
import Article from "./Article";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-gray-200 bg-gray-900">

      {/* Header Section */}
      <header className="w-full text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-100">mvxd.net Blog</h1>
        <p className="text-lg text-gray-400">
          Hello, I'm <span className="font-semibold text-gray-300">Jakub</span>, an CS Student at University of Radom, Faculty of Transport, Electrical Engineering and Computer Science. <br></br>
          Passionate about programming and foreign languages. Currently learning Japanese and Korean.
        </p>
      </header>

      {/* Blog Section */}
      <section className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md border border-gray-700">
      <Article
          title="Started University"
          date="September 2, 2024."
          content={
            <>
              <p>
                I've started my IT studies at the University of Radom. I'm excited to learn more about programming, data science, and cybersecurity.
                But recently I haven't done much, because I felt a bit overwhelmed and burn out. I'm trying to get back on track and start learning again.
                The projects I'm working on are a Latent Trainer for game StarCraft 2 and my personal website with a blog.  <br></br>
                <br></br>
                For now at this blog will be one post at a time.
              </p>
            </>
          }
        />
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col items-center mt-12 space-y-4">
        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <i className="demo-icon icon-github-circled text-2xl text-gray-400"></i>
          <a href="https://github.com/scmisa" className="text-gray-300 hover:text-gray-100 hover:underline">
            @scmisa
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <i className="demo-icon icon-linkedin-squared text-2xl text-gray-400"></i>
          <a href="https://www.linkedin.com/in/jakub-oleszczuk/" className="text-gray-300 hover:text-gray-100 hover:underline">
            LinkedIn: Jakub Oleszczuk
          </a>
        </div>

        {/* Contact */}
        <div className="mt-4">
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-2 bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
