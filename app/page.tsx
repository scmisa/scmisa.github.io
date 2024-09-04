import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-20 flex-col items-center justify-between p-24">
        <h1 className="text-5xl">mvxd.net WIP</h1>
        <article className="p-10 text-lg">
          Hello, I'm Jakub I'm an IT student (yet to be in October), I'm interested in IT programming, I enjoy studying foreign languages.
          I'm currently learning Japanese and Korean. I'm also interested in the culture of these countries.
          I'm also part of the StarCraft 2 community, I'm a fan of the game and I'm interested in the competitive scene.
          I recetly took part of research project about StarCraft 2, where I was responsible for ECG Sensors recording and data analysis,<br></br>
          which took place in Warsaw H.4.0.S gamebar.
        </article>
        <footer>
          Github: <a href="https://github.com/scmisa">@scmisa</a>
          LinkedIn: <a href="https://www.linkedin.com/in/jakub-oleszczuk/">Jakub Oleszczuk</a>
        </footer>
    </main>
  );
}
