import "./css/fontello.css";
import Article from "./Article";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-gray-200 bg-gray-900">
      
      {/* Header Section */}
      <header className="w-full text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-100">mvxd.net Blog</h1>
        <p className="text-lg text-gray-400">
          Hello, I'm <span className="font-semibold text-gray-300">Jakub</span>, an IT student starting in October.
          Passionate about programming and foreign languages. Currently learning Japanese and Korean.
        </p>
      </header>

      {/* Blog Section */}
      <section className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md border border-gray-700">
        {/* First Blog Article */}
        <Article
          title="Being Part of the StarCraft 2 Community"
          date="September 7, 2024"
          content={
            <>
              <p className="mb-4">
                I'm part of the StarCraft 2 community and a big fan of the competitive scene. 
                Recently, I had the opportunity to participate in a research project involving ECG Sensors recording and data analysis 
                at the Warsaw H.4.0.S gamebar. It was an incredible experience, blending my interests in gaming and data science.
              </p>
              <p>
                The project explored how players’ heart rates reacted to intense StarCraft 2 matches, giving insight into stress levels and 
                excitement during gameplay. I plan to write more about this experience and how it relates to esports and data science.
              </p>
            </>
          }
        />

        {/* Second Blog Article (Placeholder for Future Posts) */}
        <Article
          title="Upcoming Blog Post"
          date="Coming soon..."
          content={
            <>
              <p>
                Stay tuned for my future posts on IT, programming, and my journey of learning Japanese and Korean. 
                I'll also dive into how gaming communities can benefit from research and analytics in the digital world.
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
