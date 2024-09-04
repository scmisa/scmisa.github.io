import Image from "next/image";
import "./css/fontello.css";

export default function Home() {
  return (
    <main className="flex min-h-20 flex-col items-center justify-between p-24">
        <h1 className="text-5xl">mvxd.net WIP</h1>
        <article className="p-10 text-lg text-justify">
          Hello, I'm Jakub I'm an IT student (yet to be in October), <br></br>
          I'm interested in IT programming, I enjoy studying foreign languages.<br></br>
          I'm currently learning Japanese and Korean. <br></br>
          I'm also part of the StarCraft 2 community, <br></br>
          I'm a fan of the game and I'm interested in the competitive scene.<br></br>
          I recetly took part of research project about StarCraft 2,<br></br>
          where I was responsible for ECG Sensors recording and data analysis,<br></br>
          which took place in Warsaw H.4.0.S gamebar.
        </article>
        <footer>
          <i className="demo-icon icon-github-circled"></i>
          Github: <a href="https://github.com/scmisa">@scmisa</a><br></br>
          <i className="demo-icon icon-linkedin-squared"></i>
          LinkedIn: <a href="https://www.linkedin.com/in/jakub-oleszczuk/">Jakub Oleszczuk</a>
        </footer>
    </main>
  );
}
