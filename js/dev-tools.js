const skillData = {
  c_cpp: {
    title: "C / C++",
    description: `
      Proficient in <em>C</em>, applied throughout various courses such as <em>Data Structures & Algorithms</em>, <em>Operating Systems</em>, <em>Embedded Systems</em>, 
      and <em>Computer Engineering</em>; advanced from a basic grasp of syntax and semantics to practical experience in data structures, memory management, unit testing, 
      and programming for embedded systems. <br>
      Building on this groundwork, I used <em>C++</em> during my thesis at <em>Tietoevry</em>, where I developed and 
      fine-tuned <em>LDPC codes</em> used in <em>5G NR</em> communication systems. <br><br>
      <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
      Pointers & Memory Management • Dynamic Data Structures • Bitwise Operations • Modular Program Design • Debugging (gdb/valgrind) • Build Systems (Make/CMake) 
      • OOP (C++) • STL Containers • Performance Optimization • Embedded/Low-Level Programming • Third-Party Libraries
    `
  },
  java: {
    title: "Java",
    description: `
    Competent in <em>Java</em>, building on prior <em>OOP</em>  experience with <em>Python</em>, applied extensively in the <em>Software Development Methodology</em> course through the 
    creation of a <em>Computer Game</em>. Gained hands-on experience across the full software development lifecycle, from design and implementation to testing and documentation. 
    Applied object-oriented principles such as abstraction, modular design, and encapsulation, while working with core data structures including lists, queues, stacks, and trees. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Object-Oriented Programming • Abstraction & Modular Design • Data Structures (Lists, Queues, Stacks, Trees) • Software Development Lifecycle • Modeling & Analysis 
    • Unit & End-User Testing • Documentation & Software Quality • Debugging & Troubleshooting • Design Patterns • Project Planning & Implementation
    `
  },
  csharp: {
    title: "C# .NET",
    description: `
    Proficient in <em>C#.NET</em>, building on prior object-oriented programming experience in <em>Java</em> and <em>Python</em>. Gained practical experience through a 
    university elective in <em>C#</em> and <em>.NET</em> programming, developing applications of varying complexity and exploring the <em>.NET</em> architecture in depth. 
    Progressed from core syntax and data types to advanced topics including OOP principles, design patterns, data access, asynchronous programming, and API integration. 
    Applied this knowledge to develop desktop applications using forms, controls, and the <em>Model-View-Controller (MVC)</em> pattern, while working with event handling, 
    delegates, <em>LINQ</em>, and <em>REST APIs</em>. Currently expanding skills in <em>ASP.NET</em> for web development. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Object-Oriented Programming • Design Patterns • MVC Architecture • Event Handling & Delegates • <em>LINQ</em> & Data Access • Asynchronous Programming • 
    <em>REST API</em> Integration • Windows Forms • <em>ASP.NET</em> Web Development
    `
  },
  python: {
    title: "Python",
    description: `
    Competent in <em>Python</em>, first introduced in high school as an entry point to programming and fundamental concepts, later deepened through university courses 
    such as <em>Introduction to Data Processing</em>, <em>Operating Systems</em>, and <em>Applied Machine Learning</em>; applied Python for a variety of tasks, including automation, 
    data analysis, simulation, and machine learning, gaining hands-on experience with both scripting and scientific computing. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Automation & Scripting • Data Analysis (NumPy, Pandas) • Simulation of OS Concepts • Machine Learning (scikit-learn, TensorFlow, Fastai) • Data Preprocessing & Pipeline Design 
    • Object-Oriented & Functional Programming • Performance Optimization • Debugging & Testing • Visualization (Matplotlib, Seaborn) • Modular Program Design
    `
  },
  kotlin: {
    title: "Kotlin",
    description: `
    Competent in <em>Kotlin</em>, applied during a <em>Software Engineering</em> course to develop an <em>Android</em> application as part of a five-person team following 
    the <em>AGILE</em> framework. Served as the lead on <em>UI/UX</em>, translating interactive <em>Figma</em> prototypes into a clean, responsive frontend using <em>Jetpack 
    Compose</em>, while integrating the interface with the backend to ensure smooth data flow. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>Android</em> Development • <em>Jetpack Compose</em> • <em>UI/UX</em> Design & Implementation • Backend Integration • <em>Kotlin</em> Coroutines & <em>ViewModels</em> 
    • Data Classes & Object-Oriented Programming • <em>AGILE</em> Methodologies • Responsive & Maintainable Code • Team Collaboration • Mobile App Lifecycle
  `
  },
  sql: {
    title: "SQL",
    description: `
    Competent in <em>SQL</em> and relational database management, developed through the <em>Database Technology</em> course. Gained a solid understanding of <em>DBMS</em> 
    principles, database architecture, and the relational data model, including data structures, relational algebra, and data integrity. Applied <em>SQL</em> extensively 
    to query, manage, and manipulate data, while gaining hands-on experience with database design techniques such as <em>E/R modeling</em>, functional dependencies, and 
    normalization. Explored storage structures, indexing, transaction management, and was introduced to distributed and web-based databases, building a comprehensive 
    understanding of modern data management. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Relational Databases • <em>SQL</em> Querying & Data Manipulation • Database Design (<em>E/R Modeling</em>, Normalization) • Data Integrity & Constraints 
    • Relational Algebra • Indexing & Transaction Management • Distributed & Web-Based Databases • Storage Structures • Performance Optimization • Data Modeling & Analysis
    `
  },
  matlab: {
    title: "MATLAB",
    description: `
    Competent in <em>MATLAB</em>, applied extensively during my thesis at <em>Tietoevry</em> as an essential tool for implementing and testing <em>LDPC codes</em>. 
    Leveraged <em>MATLAB</em>’s built-in capabilities for data analysis, visualization, and validation, enabling efficient experimentation and performance evaluation. 
    Gained hands-on experience in signal processing, algorithm development, and testing within a professional research context, applying <em>MATLAB</em> to solve complex 
    engineering problems. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Signal Processing • Algorithm Implementation & Testing • Data Analysis & Visualization • <em>LDPC Codes</em> • Simulation & Validation 
    • Experimentation & Performance Evaluation • Professional Research Applications • <em>MATLAB</em> Built-In Functions • Numerical Computation • Scientific Programming
    `
  },
  mips: {
    title: "MIPS Assembly",
    description: `
    Competent in <em>MIPS Assembly</em>, applied during the <em>Datorsystemteknik</em> course to gain hands-on experience with low-level programming and <em>CPU</em>
    architecture. Implemented routines for arithmetic operations, branching, loops, and memory access, gaining practical insight into how <em>CPU</em> registers, instruction 
    sets, and memory hierarchy collaborate to execute programs. Studied <em>MIPS</em> processor architecture, including <em>RISC</em> design, pipeline stages, and instruction
    formats, deepening understanding of how high-level code translates into machine instructions. Strengthened skills in data representation, memory systems, interrupt handling, 
    and low-level program optimization. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Low-Level Programming • <em>MIPS</em> Instruction Set • <em>CPU</em> Architecture & <em>RISC</em> Design • Pipeline Stages & Instruction Formats • Arithmetic & Logic Operations 
    • Branching & Loops • Memory Access & Management • Data Representation • Interrupt Handling • Program Optimization
    `
  },
  web: {
    title: "HTML, CSS & JavaScript",
    description: `
    Competent in <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>, first introduced in high school as an entry point to web development, Loved it as it provided immediate visual 
    feedback. Continued applying this stack during university projects whenever a web interface was required, and most 
    recently used it to develop my personal website. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Front-End Development • Responsive Design <br> • Semantic <em>HTML5</em> • <em>CSS3</em> • <em>JavaScript (ES6+)</em> 
    `
  },
  winapps: {
    title: "Windows Applications",
    description: `
    Proficient in <em>Windows</em> desktop application development, initially started with <em>Python</em>’s <em>Tkinter</em> and later migrated to <em>Windows Forms</em> 
    and <em>WPF</em> in <em>C#.NET</em>. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>Windows Forms</em> • <em>WPF</em> • Form & User Controls • Data Binding • Layout Management
    `
  },
  android: {
    title: "Android Development",
    description: `
    Familiar with <em>Android</em> app development, applied during the <em>Golden Years</em> project using <em>Kotlin</em> and <em>Jetpack Compose</em>. 
    Translated <em>Figma</em> prototypes into responsive interfaces, implemented <em>MVVM</em> architecture with <em>ViewModels</em> and <em>Coroutines</em> 
    for efficient state management, and integrated backend data for seamless performance. Gained hands-on experience in mobile development, <em>UI/UX</em> design, 
    and collaborative team workflows. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>Kotlin</em> • <em>Jetpack Compose</em> • <em>MVVM</em> Architecture • <em>ViewModels</em> & <em>Coroutines</em> • <em>UI/UX</em> Implementation 
    • Backend Integration • Mobile App Lifecycle • Responsive Interfaces • State Management • Team Collaboration
    `
  },
  git: {
    title: "Git & GitHub",
    description: `
    Proficient in <em>Git</em> and <em>GitHub</em>, with extensive experience since the first year of university. Skilled in version control, managing code changes, 
    coordinating with team members, and handling updates and project integrations. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Version Control • Branching & Merging • <em>Git</em> Workflows (Feature, GitFlow) • Pull Requests & Code Reviews • Conflict Resolution • Repository Management 
    • Collaborative Development • Commit History & Reverting • CI/CD Integration • Project Collaboration
    `
  },
  cicd: {
    title: "CI/CD",
    description: `
    Familiar with <em>CI/CD</em> practices, currently building expertise with <em>GitHub Actions</em> to automate key parts of the development process. Familiar with
    setting up workflows to run unit tests, build projects, and perform preliminary integration steps. Actively 
    exploring full <em>CI/CD</em> pipelines for automated testing, building, and deployment, while optimizing workflows with caching, matrix builds, and security checks. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Continuous Integration & Deployment • <em>GitHub Actions</em> • Automated Testing (<em>pytest</em>, <em>npm test</em>) • Build Automation • Workflow Optimization 
    • Caching & Matrix Builds (Exploring)
    `
  },
  docker: {
    title: "Docker",
    description: `
    Familiar with <em>Docker</em>, with hands-on experience containerizing applications to ensure consistent and reliable execution across environments. 
    Built and managed <em>Docker</em> images and containers using <em>docker build</em> and <em>docker run</em>, and used <em>Docker Compose</em> to orchestrate 
    multi-container setups, such as pairing applications with databases during development. This experience expanded on earlier dependency management skills gained 
    through <em>Python</em> virtual environments and developed a deeper understanding of application-level isolation. Currently exploring <em>Kubernetes</em> to 
    further enhance container orchestration and scalability. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Containerization • <em>Docker</em> Images & Containers • <em>Docker Compose</em> • Dependency & Environment Isolation • Multi-Container Setups 
    • Application Packaging • <em>Kubernetes</em> (Exploring)
    `
  },
  linux: {
    title: "Linux",
    description: `
    Competent in <em>Linux</em>, with hands-on experience using distributions such as <em>Kali</em>, <em>Ubuntu</em>, and <em>Fedora</em> for development, 
    testing, and system exploration. Familiar with using <em>Bash</em> scripting to automate tasks like environment setup, backups, and log processing. Worked 
    extensively with the <em>Linux</em> terminal to manage file systems, monitor processes, connect to remote systems, and perform a range of system administration 
    tasks. Configured network services and used tools like <em>grep</em>, <em>awk</em>, <em>curl</em>, <em>netstat</em>, <em>nmap</em>, and <em>tcpdump</em> for debugging, 
    troubleshooting, and network analysis. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>Linux</em> Distributions (<em>Kali</em>, <em>Ubuntu</em>, <em>Fedora</em>) • <em>Bash</em> Scripting • Terminal & CLI Tools • File System Management 
    • Process Monitoring • Remote System Access • Network Configuration • System Administration • Command-Line Tools (<em>grep</em>, <em>awk</em>, <em>curl</em>, 
    <em>netstat</em>) • Network Analysis (<em>nmap</em>, <em>tcpdump</em>)
    `
  },
  networking: {
    title: "Computer Networking",
    description: `
    Strong understanding of computer networking principles, including <em>TCP/IP</em> architecture, <em>IP</em> addressing and subnetting, routing, switching, 
    and core Internet protocols. Hands-on experience with network services and security tools, including firewall configuration using <em>iptables</em> and traffic 
    analysis with <em>Wireshark</em>. Familiar with socket programming and protocols across the <em>TCP/IP</em> stack, applied in both wired and wireless network environments. 
    Knowledgeable in cybersecurity concepts and best practices, including <em>OWASP</em> guidelines, access control, malware, encryption, and operating system security. 
    Experienced in symmetric and asymmetric cryptography, with insight into security principles such as confidentiality, integrity, authentication, and ethical implications 
    surrounding privacy and vulnerabilities. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>TCP/IP</em> Protocol Suite • <em>IP</em> Addressing & Subnetting • Routing & Switching • <em>Wireshark</em> & Packet Analysis 
    • Firewall Configuration (<em>iptables</em>) • Socket Programming • Cryptography (Symmetric & Asymmetric) 
    • <em>OWASP</em> • Threats, Vulnerabilities & Privacy Considerations
    `
  },
    dns: {
    title: "DNS",
    description: `
    Familiar with <em>DNS</em> through foundational networking courses and expanded this knowledge with a dedicated elective <em>DNS</em> course in my final year. 
    Developed a solid understanding of core <em>DNS</em> concepts including domain namespaces, records, zones, delegation, and resolvers. Studied the <em>DNS</em> 
    protocol and <em>DNSSEC</em> to understand mechanisms for authentication and integrity using digital signatures. Gained practical experience in managing and 
    troubleshooting <em>DNS</em> infrastructure through installation, configuration, and maintenance of name servers. Also explored emerging topics such as 
    internationalized domain names (<em>IDNs</em>) and <em>DNS Privacy</em> to stay current with developments in security and confidentiality. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>DNS</em> Architecture • Records, Zones & Delegation • <em>DNSSEC</em> & Digital Signatures • Name Server Configuration • Resolver Behavior 
    • <em>DNS</em> Protocol Analysis • <em>DNS</em> Management & Troubleshooting • Internationalized Domain Names (<em>IDNs</em>) • <em>DNS Privacy</em> & Security 
    • Infrastructure Maintenance
    `
  },
    ml: {
    title: "Machine Learning",
    description: `
    Practical experience in <em>Machine Learning</em> through a final-year elective on <em>Applied Machine Learning</em>. Developed a solid foundation in <em>ML</em> principles, 
    terminology, and classical algorithms including <em>linear classifiers</em>, <em>decision trees</em>, and <em>clustering</em>. Studied deep learning, including neural networks, the universal approximation theorem, and gradient descent optimization. Applied 
    these concepts hands-on using <em>Python</em> with libraries such as <em>NumPy</em>, <em>Pandas</em>, <em>Matplotlib</em>, <em>FastAI</em>, and <em>TensorFlow</em>, 
    adapting and implementing models, and evaluating algorithm performance using appropriate metrics. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Supervised & Unsupervised Learning • Neural Networks & Deep Learning • Gradient Descent Optimization • Model Evaluation & Metrics • <em>Python</em> for ML (<em>NumPy</em>, 
    <em>Pandas</em>, <em>Matplotlib</em>) • <em>TensorFlow</em> & <em>FastAI</em> • Data Preprocessing & Feature Engineering • Classification & Clustering Algorithms 
    • Cross-Validation & Overfitting Management • Model Adaptation & Implementation
    `
  },
  circuit: {
    title: "Circuit Analysis",
    description: `
    Familiar with fundamental circuit concepts, passive components (<em>R</em>, <em>L</em>, <em>C</em>, transformers), and circuit analysis techniques 
    including <em>Ohm’s Law</em>, <em>Kirchhoff’s Laws</em>, nodal/mesh analysis, AC circuits, resonance, and capacitor charging/discharging. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    <em>Ohm’s & Kirchhoff’s Laws</em> • Nodal & Mesh Analysis • AC Circuits & Phasors • Resonance • <em>R, L, C</em> Components • Transformers • Power & Impedance
    `
  }, 
  digital: {
    title: "Digital Electronics",
    description: `
    Familiar with digital circuit design and analysis, including digital logic families, combinational and sequential circuits, <em>Karnaugh Maps</em>, latches and flip-flops,
     synchronous/asynchronous and iterative sequential networks, semiconductor memories, <em>ADC</em>/<em>DAC</em> conversion, sampling and sample-and-hold circuits, and 
     microcontrollers. <br><br>
    <span style="font-size: 1.2em; font-weight: bold;">Expertise:</span> <br>
    Digital Logic Families • Combinational & Sequential Circuits • <em>Karnaugh Maps</em> • Latches & Flip-Flops • Synchronous & Asynchronous Networks 
    • Semiconductor Memories • <em>ADC</em> & <em>DAC</em> • Sampling & Sample-and-Hold • Microcontrollers
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
