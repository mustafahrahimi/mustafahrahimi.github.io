const skillData = {
  c_cpp: {
    title: "C / C++",
    description: `
      Proficient in <span style="font-style: italic;">C</span>, applied across multiple courses including 
      <i>Data Structures & Algorithms</i>, <i>Operating Systems</i>, <i>Embedded Systems</i>, and 
      <i>Computer Engineering</i>; evolved from foundational understanding of syntax and semantics to 
      hands-on experience in data structures, memory management, unit testing, and embedded system programming. 
      <br>
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
    such as <em>inheritance</em>, <em>interfaces</em>, and <em>polymorphism</em>.<br>
    Building on this foundation, I worked on <em>desktop app development</em> for <em>Windows</em> using forms, controls, and the <em>Model-View-Controller (MVC)</em> pattern, 
    along with <em>event handling</em>, <em>delegates</em>, <em>LINQ</em> for data access, and <em>REST API</em> integration. Currently exploring <em>ASP.NET</em> to broaden 
    my web development experience. <br>
    Take a look at <a class="link-story" href="https://github.com/mustafahrahimi/SellUP" target="_blank">SellUP</a> <i class="fa-solid fa-arrow-up-right-from-square"></i>, 
    built with <em>C# .NET</em>.
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
    tool. <br>During the project, one implementation of <em>LDPC codes</em> was done in <em>MATLAB</em>, taking advantage of its built-in tools 
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
    <em>instruction sets</em>, and <em>memory hierarchy</em> work together to execute programs. <br>
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
  android: {
    title: "Android Development",
    description: `
    Worked on the <em>Golden Years</em> Android app using <em>Kotlin</em> and <em>Jetpack Compose</em>, turning Figma prototypes into clean, responsive interface. 
    Used <em>MVVM</em> architecture with <em>ViewModels</em> and <em>Coroutines</em> for smooth app performance and state management. Built connections to the backend 
    for seamless data flow and gained experience in mobile app development, UI/UX design, and team collaboration. <br><br>
    Take a look at our app, <em>Golden Years</em>, <a class="link-story" href="https://github.com/mustafahrahimi/DVGC22-G13" target="_blank">here</a> 
    <i class="fa-solid fa-arrow-up-right-from-square"></i>.
    `
  },
  git: {
    title: "Git & GitHub",
    description: `
    Used <em>Git</em> and <em>GitHub</em> extensively since the first year of university, building a strong understanding of <em>version control</em> and <em>collaborative workflows</em>. 
    Experienced in managing code changes, coordinating with team members, and handling both simple updates and more complex project integrations efficiently.
    `
  },
  cicd: {
    title: "CI/CD",
    description: `
    Have used <em>GitHub Actions</em> on multiple occasions to automate workflows, such as running unit tests, building project artifacts, 
    and deploying updates to a staging environment. I am currently exploring <em>CI/CD</em> pipelines further to gain a deeper understanding and 
    make more effective use of them in future projects.
    `
  },
  docker: {
    title: "Docker",
    description: `
    Have experimented with <em>Docker</em> in personal projects, containerizing applications to test consistent environments and simplify setups. 
    Planning to use it more extensively in upcoming projects to improve deployment efficiency and scalability.
    `
  },
  linux: {
    title: "Linux",
    description: `
    Have used <em>Linux OS</em> and distributions like <em>Kali</em>, <em>Ubuntu</em>, and <em>Fedora</em> for testing, learning networking concepts, and exploring system features. 
    Worked with <em>Bash scripting</em> to automate tasks such as setting up development environments, backing up files, and processing logs. <br>
    Managed <em>file systems</em>, including permissions, process monitoring, and disk usage checks. Configured <em>network services</em> and 
    regularly used command-line and network tools such as <em>grep</em>, <em>awk</em>, <em>curl</em>, <em>netstat</em>, <em>nmap</em>, and <em>tcpdump</em> for 
    debugging, troubleshooting, and analyzing system and network behavior.
    `
  },
  networking: {
    title: "Computer Networking",
    description: `
      Have a good understanding of <em>computer networking concepts</em>, including <em>TCP/IP</em>, <em>subnets</em>, <em>VPNs</em>, and the structure of the Internet and 
      its components. Worked with <em>network services</em>, <em>firewall configurations</em> using <em>iptables</em>, and tools like <em>Wireshark</em> for traffic analysis. Familiar with 
      <em>socket programming</em>, functionality and protocols across the <em>TCP/IP stack</em>, and both wired and wireless local networks. <br>
      Worked with <em>security concepts</em> and best practices, including <em>OWASP guidelines</em>, <em>access control</em>, <em>malware</em>, <em>encryption</em>, 
      and <em>operating system security</em>. Knowledgeable in <em>cryptographic systems</em> using symmetric and asymmetric methods, along with common algorithms and protocols.  
      Understand key security aspects such as <em>confidentiality</em>, <em>integrity</em>, <em>authentication</em>, <em>threats</em>, and <em>vulnerabilities</em>, and can reflect 
      on related issues regarding <em>personal privacy</em>, ethics, and security challenges.
    `
  },
    dns: {
    title: "DNS",
    description: `
    Familiarity with <em>DNS</em> from earlier networking courses provided a foundation, which was expanded by taking a <em>DNS course</em> as an <em>elective course</em> 
    alongside the thesis work. The course explored the purpose of <em>DNS</em>, key concepts such as <em>records</em>, <em>zones</em>, <em>delegation</em>, <em>resolvers</em>, 
    and the <em>domain namespace</em>. It also covered the <em>DNS protocol</em> and <em>DNSSEC</em>, ensuring authentication and integrity through digital signatures. <br><br>
    In addition to the theoretical aspects, the course included practical <em>DNS management</em> and troubleshooting, involving installation, configuration, and maintenance 
    of <em>name servers</em>. Topics such as <em>internationalized domain names (IDNs)</em> and <em>DNS Privacy</em> were also discussed to highlight ongoing developments in 
    security and confidentiality.
    `
  },
    ml: {
    title: "Machine Learning",
    description: `
    Took a <em>Machine Learning</em> course in parallel with my thesis work, driven by my enthusiasm for <em>AI</em> and a forward-looking, optimistic approach. Covered fundamental ML 
    terminology, principles, and theory, including concepts such as <em>learning</em>, <em>classification</em>, <em>cross-validation</em>, and <em>overfitting</em>, 
    and explored classical ML algorithms like <em>linear classifiers</em>, <em>decision trees</em>, and <em>cluster analysis</em>. <br><br>
    Studied <em>deep learning</em>, including <em>neural networks</em>, the <em>universal approximation theorem</em>, and <em>gradient descent optimization</em>. 
    Applied these concepts hands-on using <em>Python</em> and popular libraries such as <em>NumPy</em>, <em>Pandas</em>, <em>Matplotlib</em>, <em>FastAI</em>, and 
    <em>TensorFlow</em>, working with common types and models of <em>neural networks</em>, adapting and implementing existing models. Applied <em>evaluation metrics</em> 
    to assess machine learning algorithms based on the structure and context of datasets.
    `
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
