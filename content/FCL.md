---
title: FCL - Four Crown League
tags:
  - Website
  - FCL
  - Stack
  - Rust
  - Leptos
  - Axum
  - PostgreSQL
  - SQLx
  - LAPS
---

Hi there! In this post, I want to share my experience working on the [Four Crown League (FCL) website](https://fourcrownleague.com), a project that has been both challenging and rewarding. FCL is a competitive gaming league that brings together players from around the world to compete in various games. The website serves as the central hub for all league activities, including player registrations, match scheduling, and live score updates. It was built *vibecoded* on a MERN stack (MongoDB, Express.js, React, Node.js). So I decided to rewrite/build it from scratch using Rust both in the backend and frontend. Stack I used is: LAPS - [Leptos](https://leptos.dev/), Axum, PostgreSQL, SQLx. Leptos is a full-stack web framework for building web applications in Rust. It allows you to write both client-side and server-side code in Rust, providing a seamless development experience. Axum is a web application framework *made by [tokio.rs](https://tokio.rs/) developers* for building APIs in Rust, known for its performance and type safety. PostgreSQL is a powerful, open-source relational database system that I used to store all the data for the FCL website. SQLx is an async, pure Rust SQL crate that provides compile-time checked queries, making it easier to work with databases in Rust.

One of the main challenges I faced during this project was learning how to effectively use Rust for web development. While Rust is known for its performance and safety, it has a steeper learning curve compared to more traditional web development languages like JavaScript or Python. However, I found that the benefits of using Rust, such as its strong type system and memory safety guarantees, made the effort worthwhile.

Another challenge was integrating the various components of the stack. I had to ensure that the frontend and backend communicated effectively, and that data was being stored and retrieved correctly from the PostgreSQL database. This required a good understanding of both the Leptos framework and the SQLx crate, as well as how to structure the application for optimal performance.
Despite these challenges, I found the experience of building the FCL website with Rust to be incredibly rewarding. The end result is a fast, reliable, and secure web application that serves the needs of the Four Crown League community. It will still take some time to fully build all features, but I'm excited about the progress I've made so far. *Progress built mostly by an AI so far maybe some base structures*

If you're interested in learning more about Rust or web development in general, I highly recommend giving it a try. The Rust community is incredibly supportive, and there are plenty of resources available to help you get started. Whether you're a seasoned developer looking to expand your skill set or a beginner eager to learn, Rust has something to offer for everyone.

Soon I may start series of videos/streams on building web applications with Rust, so stay tuned for more updates! [YouTube Channel](https://www.youtube.com/@scmisa)

Thank you for reading, and happy coding! 🚀
