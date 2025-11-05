const skillData = {
  c_cpp: {
    title: "C / C++",
    description: `
      Proficient in <span style="font-style: italic;">C</span>, applied across multiple courses including 
      <i>Data Structures & Algorithms</i>, <i>Operating Systems</i>, <i>Embedded Systems</i>, and 
      <i>Computer Engineering</i>; evolved from foundational understanding of syntax and semantics to 
      hands-on experience in data structures, memory management, unit testing, and embedded system programming. 
      <br><br>
      Building on this foundation, I started working with <i>C++</i> during my thesis at <i>Tietoevry</i>, 
      where I implemented and optimized <i>LDPC codes</i> used in 5G NR communication systems. The transition 
      from C to C++ felt natural, allowing me to focus on performance optimization and efficient code structure. 
    `
  },
  java: {
    title: "Java",
    description: `
      Building on my <em>OOP</em> experience with <em>Python</em>, I applied <em>Java</em> 
      in my <em>Software Development Methodology</em> course by creating my first 
      <a class="link-story" href="https://github.com/mustafahrahimi/Brickstorm" style="font-style: italic;" target="_blank">computer game</a>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>.<br>     
      This project gave me hands-on experience with the full software development lifecycle.<br>
      I worked extensively with <em>OOP concepts</em>, applying <em>abstraction</em> and <em>modular design</em> principles, 
      and became familiar with essential data structures such as <em>lists</em>, <em>queues</em>, <em>stacks</em>, and <em>trees</em>.<br><br>
      I also gained practical experience in <em>modeling, analysis, and testing</em> (including unit and end-user testing), preparing documentation, 
      and consistently following good <em>software quality conventions</em> throughout the project.
    `
  },
  csharp: {
    title: "C# .NET",
    description: `
      Proficient in <em>C# and .NET</em>, with a strong foundation in <em>object-oriented programming</em> built through prior experience in <em>Java</em> 
      and <em>Python</em>.<br> As part of my degree, I took an elective in <em>C#</em> and <em>.NET</em> programming, where I developed applications of varying complexity and 
      explored the <em>.NET architecture</em> in depth.
      The coursework covered essential areas including <em>C# syntax</em>, <em>data types</em>, <em>exception handling</em>, and object-oriented principles 
      such as <em>inheritance</em>, <em>interfaces</em>, and <em>polymorphism</em>.<br><br>
      Building on this foundation, I worked on <em>desktop app development</em> for <em>Windows</em> using forms, controls, and the <em>Model-View-Controller (MVC)</em> pattern, 
      along with <em>event handling</em>, <em>delegates</em>, <em>LINQ</em> for data access, and <em>REST API</em> integration. Currently exploring <em>ASP.NET</em> to broaden 
      my web development experience.
    `
  },
  python: {
    title: "Python",
    description: `
    I was first introduced to <em>Python</em> in high school, where it became the first programming language I used to write code and understand fundamental 
    programming concepts. <br> Later, during my university studies, I revisited <em>Python</em> across multiple courses, including <em>Introduction to Data Processing</em>, 
    <em>Operating Systems</em>, and <em>Applied Machine Learning</em> — using it to write automation scripts for 
    data preprocessing, analyze datasets using libraries such as <em>NumPy</em> and <em>Pandas</em>, simulate operating system concepts (mainly scheduling & memory management), 
    and build and train machine learning models with frameworks like <em>scikit-learn</em>, <em>TensorFlow</em>, and <em>Fastai</em>.
    `
  },
  kotlin: {
    title: "Kotlin",
    description: `
    In the <em>Software Engineering</em> course, I worked with a team of five people to build an <em>Android app</em> following the <em>AGILE framework</em> to manage iterative 
    development and ensure timely delivery. We chose <em>Kotlin</em> as our main development language. I created <em>interactive prototypes in Figma</em> and implemented 
    them in <em>Jetpack Compose</em> to build a clean, responsive frontend. I also developed an interface to connect the app with the backend, ensuring smooth data flow.<br><br> 
    I used Kotlin features like <em>coroutines, data classes, and ViewModels</em> to make the app efficient and maintainable. 
    This project gave me hands-on experience in <em>mobile app development, UI/UX design, and backend integration</em>, while collaborating closely 
    in a <em>team environment</em>. <br>
    Take a look at our app, <em>Golden Years</em>, <a class="link-story" href="https://github.com/mustafahrahimi/DVGC22-G13" target="_blank">here</a> 
    <i class="fa-solid fa-arrow-up-right-from-square"></i>.
  `
  },
  sql: {
    title: "SQL",
    description: `
    We’ve all used databases without realizing it, but during the <em>Database Technology</em> course, I got to explore what goes on 
    behind the scenes. I learned the principles and usage of <em>general database management systems (DBMS)</em> and studied <em>database architecture</em>. 
    I became proficient in the <em>relational data model</em>, including <em>data structures</em>, <em>relational algebra</em>, and <em>data integrity</em>, 
    and gained hands-on experience with <em>SQL</em> to query, manage, and manipulate data.<br><br>
    The course also covered <em>database design techniques</em> like <em>E/R modeling</em>, <em>functional dependencies</em>, and <em>normalization</em>, 
    as well as <em>storage structures</em> such as <em>indexing</em> and <em>transaction management</em>. I was also introduced to other database types, 
    including <em>distributed</em> and <em>web-based databases</em>, giving me a well-rounded understanding of modern data management.
    `
  },
  matlab: {
    title: "MATLAB",
    description: `
    I’ve always thought <em>MATLAB</em> was fascinating, seeing how widely it is used by <em>electrical</em> and other engineers. 
    I never imagined I would get the chance to use it during my studies—until my thesis at <em>Tietoevry</em>, where it became an essential 
    tool. <br><br> During the project, one implementation of <em>LDPC codes</em> was done in <em>MATLAB</em>, taking advantage of its built-in tools 
    for testing and analyzing output data, which made validation and experimentation much more efficient. This experience gave me hands-on 
    exposure to MATLAB’s capabilities in <em>signal processing</em> and <em>algorithm testing</em> within a professional research context.
    `
  },
  mips: {
    title: "MIPS Assembly",
    description: `
    I initially thought <em>C</em> was close to hardware and gave fine-grained control over <em>memory management</em> and <em>low-level operations</em>. 
    But that perspective changed during the <em>Datorsystemteknik</em> course, where I gained hands-on experience with <em>MIPS assembly</em>. I implemented 
    routines for <em>arithmetic operations</em>, <em>branching</em>, <em>loops</em>, and <em>memory access</em>, which illustrated how <em>CPU registers</em>, 
    <em>instruction sets</em>, and <em>memory hierarchy</em> work together to execute programs. <br><br>
    We also studied the <em>MIPS processor architecture</em>, including its <em>RISC design</em>, <em>pipeline stages</em>, and <em>instruction formats</em>, 
    which clarified how high-level code translates into machine instructions. This experience strengthened my understanding of <em>low-level programming</em>, 
    <em>data representation</em>, <em>memory systems</em>, and <em>interrupt handling</em>, and made working with <em>C</em> more practical and intuitive.
    `
  },
  web: {
    title: "HTML, CSS & JavaScript",
    description: `
    I first encountered <em>web development</em> in high school, where I took my first <em>HTML, CSS, and JavaScript</em> course. It was a unique experience 
    because I could literally run the code and see the output live on my local server — a completely different experience compared to <em>Python</em>, where I 
    mostly worked in the terminal. <br><br> Later, during university, I naturally returned to this stack whenever I needed a <em>web interface</em> for my projects.  
    Recently, in <em>oct 2025</em>, I felt the need to create a <em>personal website</em> to complement my CV, and once again I jumped into this stack 
    to build what you are seeing now. I hope this won’t be the last time I use this stack, as I really enjoy working with it.  
    `
  },
  winapps: {
    title: "Windows Applications",
    description: `
    I began exploring desktop application development with <em>Python’s Tkinter</em> library during high school, but later shifted to <em>Windows Forms</em> 
    and <em>WPF</em> in <em>C#.NET</em>, as it allowed me to build more robust and feature-rich desktop applications. <br> I am particularly proficient in <em>Windows 
    Forms</em>, having used it extensively to create responsive and maintainable user interfaces through <em>form controls</em>, <em>user controls</em>, 
    <em>event-driven programming</em>, <em>data binding</em>, and <em>layout management</em>. <br><br> Take a look at <em>SellUP</em>, my latest desktop application, 
    <a class="link-story" href="https://github.com/mustafahrahimi/SellUP" target="_blank">here</a> <i class="fa-solid fa-arrow-up-right-from-square"></i>.
    `
  },
  git: {
    title: "Git & GitHub",
    description: "I use Git for version control and collaboration in all projects, manage repositories on GitHub, and implement \
    branching, merging, and pull request workflows."
  },
  docker: {
    title: "Docker",
    description: "I built and ran Docker containers for isolated app environments, wrote Dockerfiles, \
    and managed multi-container setups using Docker Compose."
  },
  linux: {
    title: "Linux",
    description: "I work with Bash scripting, file system management, configuring network services, \
    and using command-line tools for development and debugging."
  },
  agile: {
    title: "Agile / Scrum",
    description: "In team-based software projects, I participate in Scrum sprints with daily stand-ups, sprint reviews, \
    and retrospectives, using tools like GitHub Projects and Trello for task tracking."
  }
};

const buttons = document.querySelectorAll(".skill-btn");
const card = document.getElementById("skill-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const skillKey = btn.dataset.skill;
    const skill = skillData[skillKey];

    if (skill) {
      card.innerHTML = `
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      `;
    } else {
      card.innerHTML = "<p>Coming soon...</p>";
    }

    card.classList.add("fade");
    setTimeout(() => card.classList.remove("fade"), 300);

    if (window.innerWidth <= 1100) { 
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
