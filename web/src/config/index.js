const config = {
  email: "jterrazz@protonmail.com",
  githubProfileUrl: "https://github.com/jterrazz",
  devpostProfileUrl: "https://devpost.com/jterrazz",
  articles: [
    {
      imageSrc: "https://miro.medium.com/max/11520/1*mxwl0_gdFfhnpXeh8RozCA.jpeg",
      title: "Implementing the sha256 and md5 hash functions in C",
      date: new Date(), // Jun 07
      description: "Guide to understand and implement efficiently the sha256 and md5 functions in the C language.",
      link: "https://medium.com/a-42-journey/implementing-the-sha256-and-md5-hash-functions-in-c-78c17e657794?"
    },
    {
      imageSrc: "https://miro.medium.com/max/5312/1*P6vFidQIJazsiNkh0ijqtQ.jpeg",
      title: "How to create your own malloc library",
      date: new Date(), // Jun 02
      description: "This article gathers all the useful informations to understand why malloc is useful, how it works, and how you can recreate it yourself.",
      link: "https://medium.com/a-42-journey/how-to-create-your-own-malloc-library-b86fedd39b96?"
    },
    {
      imageSrc: "https://miro.medium.com/max/10368/1*Ceb5wOYqam7eEY2NN2A0wQ.jpeg",
      title: "Expert Systems: How to implement a backward chaining resolver  in Python",
      date: new Date(),
      description: "Inference reasoning using Python",
      link: "https://medium.com/a-42-journey/expert-systems-how-to-implement-a-backward-chaining-resolver-in-python-bf7d8924f72f"
    },
  ],
  projects: [
    {
      name: "jterrazz.com",
      githubLink: "https://github.com/jterrazz/jterrazz.github.io",
      websiteLink: "https://jterrazz.com",
      date: new Date(),
      description: "My portfolio website, hosted on Github Pages",
      category: "Personal",
      tags: ["web", "react", "bootstrap", "github-pages", "firebase-functions"],
      inProgress: 1
    },
    {
      name: "42-woody-woodpacker",
      githubLink: "https://github.com/jterrazz/42-woody-woodpacker",
      date: new Date(),
      description: "Runtime packer for ELF binaries.",
      category: "Personal",
      tags: ["42", "C", "virus", "security", "ASM"],
      inProgress: 0.95
    },
    {
      name: "42-hypertube",
      githubLink: "https://github.com/jterrazz/42-hypertube",
      date: new Date(),
      description: "A web application for discovering and streaming peer to peer videos.",
      category: "Personal",
      tags: ["42", "docker", "web", "node.js", "javascript", "typescript", "react", "next.js", "mongo"],
      inProgress: 1
    },
    {
      name: "42-matcha",
      githubLink: "https://github.com/jterrazz/42-matcha",
      date: new Date(),
      description: "A dating website made with VueJS and Express.",
      category: "Personal",
      tags: ["docker", "react", "bootstrap", "vuex", "scss"],
      inProgress: 0.3
    },
    {
      name: "myshop.eth",
      githubLink: "https://github.com/jterrazz/myshop.eth",
      date: new Date(),
      description: "An open and social platform that enable direct peer to peer markets.",
      category: "Personal",
      tags: ["ethereum", "blockchain"],
      inProgress: 0.01
    },
    {
      name: "deallit",
      githubLink: "https://github.com/jterrazz/deallit",
      date: new Date(),
      description: "A social marketplace that use cryptocurrencies.",
      category: "Personal",
      tags: ["vue.js", "less", "webpack", "node.js", "bitcoind", "mocha", "zero-mq", "mysql", "redis", "aws", "design"],
      inProgress: 1
    },
    {
      name: "cryptoboard",
      githubLink: "https://github.com/jterrazz/cryptoboard",
      date: new Date(),
      description: "An iOS cryptocurrency tracker written in swift for learning purposes.",
      category: "Personal",
      tags: ["swift", "design", "iOS"],
      inProgress: 1
    },
    {
      name: "react-native-learning",
      githubLinks: ["https://github.com/jterrazz/rn-animated-desk", "https://github.com/jterrazz/rn-authentication", "https://github.com/jterrazz/rn-jobs"],
      date: new Date(),
      description: "A collection of projects made when learning react native.",
      category: "Personal",
      tags: ["react-native", "iOS", "android"],
      inProgress: 1
    },
    {
      name: "42-music-room",
      githubLink: "https://github.com/jterrazz/42-music-room",
      date: new Date(),
      description: "Mobile application in partnership with Deezer.",
      category: "Personal",
      tags: ["42", "iOS", "android", "react-native"],
      inProgress: 0.01
    },
    {
      name: "ffs-rn",
      githubLink: "https://github.com/jterrazz/ffs-rn",
      date: new Date(),
      description: "Not your usual TODO app.",
      category: "Personal",
      tags: ["iOS", "android", "react-native"],
      inProgress: 0.01
    },
    {
      name: "42-libft",
      githubLink: "https://github.com/jterrazz/42-libft",
      date: new Date(),
      description: "A basic C library used in the 42 projects.",
      category: "Personal",
      tags: ["42", "C"],
      inProgress: 1
    },
    {
      name: "42-piscine-reloaded",
      githubLink: "https://github.com/jterrazz/42-piscine-reloaded",
      date: new Date(),
      description: "C exercises of the entry test at the 42 Paris School.",
      category: "Personal",
      tags: ["42", "C"],
      inProgress: 1
    },
    {
      name: "42-expert-system",
      githubLink: "https://github.com/jterrazz/42-expert-system",
      mediumLink: "https://github.com/jterrazz/42-expert-system",
      date: new Date(),
      description: "Backward chaining rule based system in Python.",
      category: "Personal",
      tags: ["42", "C", "python", "rpn", "algorithmic"],
      inProgress: 1
    },
    {
      name: "42-libft-asm",
      githubLink: "https://github.com/jterrazz/42-libft-asm",
      mediumLink: "https://medium.com/a-42-journey/a-quick-guide-to-code-your-first-assembly-functions-43c2032ebfda",
      date: new Date(),
      description: "Basic functions implemented in Assembly using the x86 Intel syntax.",
      category: "Personal",
      tags: ["42", "ASM"],
      inProgress: 1
    },
    {
      name: "42-dr-quine",
      githubLink: "https://github.com/jterrazz/42-dr-quine",
      mediumLink: "https://medium.com/a-42-journey/build-your-own-quines-3dd117a89fdb",
      date: new Date(),
      description: "This project addresses auto-replication issues, and confronts you the Kleene's recursion theorem.",
      category: "Personal",
      tags: ["42", "C", "ASM", "security"],
      inProgress: 1
    },
    {
      name: "42-ssl-md5",
      githubLink: "https://github.com/jterrazz/42-ssl-md5",
      mediumLink: "https://medium.com/a-42-journey/implementing-the-sha256-and-md5-hash-functions-in-c-78c17e657794",
      date: new Date(),
      description: "OpenSSL implementation in C. Supports md5, sha1,  sha256, sha224, sha512 and sha384 algorithms. ",
      category: "Personal",
      tags: ["42", "C", "encryption"],
      inProgress: 1
    },
    {
      name: "42-ft-p",
      githubLink: "https://github.com/jterrazz/42-ft-p",
      date: new Date(),
      description: "FTP client and server implemented in C, based on the RFC959 standard. Handle file transfers on the TCP/IP protocol.",
      category: "Personal",
      tags: ["42", "C", "network"],
      inProgress: 1
    },
    {
      name: "42-nm-otool",
      githubLink: "https://github.com/jterrazz/42-nm-otool",
      mediumLink: "https://medium.com/p/7d4fef3d7507",
      date: new Date(),
      description: "Nm and otool implementation in C. Parse Mach-o files, supports fat binaries, archives and corrupted binaries.",
      category: "Personal",
      tags: ["42", "C", "macho", "unix"],
      inProgress: 1
    },
    {
      name: "42-malloc",
      githubLink: "https://github.com/jterrazz/42-malloc",
      mediumLink: "https://medium.com/a-42-journey/how-to-create-your-own-malloc-library-b86fedd39b96",
      date: new Date(),
      description: "C implementation of the malloc library using mmap.",
      category: "Personal",
      tags: ["42", "C", "unix"],
      inProgress: 1
    },
    {
      name: "42-ft-printf",
      githubLink: "https://github.com/jterrazz/42-ft-printf",
      date: new Date(),
      description: "Custom printf implementation in C.",
      category: "Personal",
      tags: ["42", "C"],
      inProgress: 1
    },
    {
      name: "42-corewar",
      githubLink: "https://github.com/jterrazz/42-corewar",
      date: new Date(),
      description: "Virtual machine simulating basic processors operations, with basic notions of Assembly.",
      category: "Personal",
      tags: ["42", "C", "ASM"],
      inProgress: 1
    },
    {
      name: "42-fillit",
      githubLink: "https://github.com/jterrazz/42-fillit",
      date: new Date(),
      description: "Algorithmic project for the 42 Paris School",
      category: "Personal",
      tags: ["42", "C", "algorithmic"],
      inProgress: 1
    },
    {
      name: "42-get-next-line",
      githubLink: "https://github.com/jterrazz/42-get-next-line",
      date: new Date(),
      description: "Read lines from a file descriptor.",
      category: "Personal",
      tags: ["42", "C"],
      inProgress: 1
    },
    {
      name: "42-lem-in",
      githubLink: "https://github.com/jterrazz/42-lem-in",
      date: new Date(),
      description: "Handle a virtual anthill efficiently.",
      category: "Personal",
      tags: ["42", "C", "algorithmic"],
      inProgress: 1
    },
    {
      name: "42-push-swap",
      githubLink: "https://github.com/jterrazz/42-push-swap",
      date: new Date(),
      description: "Sorts data on a stack, with a limited set of instructions and limited number of moves.",
      category: "Personal",
      tags: ["42", "C", "algorithmic"],
      inProgress: 1
    },

    /*
     * Professional
     */

    {
      name: "dalia-b2c",
      githubLink: "https://github.com/jterrazz/42-push-swap",
      date: new Date(),
      description: "API python + Website amelioration 5 months",
      category: "Professional",
      tags: ["python", "django", "nuxt.js", "vue.js", "postgres", "heroku-hosting", "heroku-ci"],
      inProgress: 1
    },
    {
      name: "dalia-b2b",
      githubLink: "https://github.com/jterrazz/42-push-swap",
      date: new Date(),
      description: "New API / Doc / Sync with plugin client side / 4 month",
      category: "Professional",
      tags: ["node.js", "C", "algorithmic"],
      inProgress: 1
    },

    /*
     * Events
     */

    {
      name: "ethwaterloo-defi-dy",
      githubLink: "https://github.com/jterrazz/ethwaterloo-defi-dy",
      devpostLink: "https://devpost.com/software/defy-dy",
      date: new Date(),
      description: "Derivatives of Defi protocols made for the ETHWaterloo hackathon in 36 hours. @smartcontractkit , @graphprotocol , @UMAprotocol and @fortmatic bounties winner.",
      category: "Hackathon",
      tags: ["ethereum", "react", "winner"],
      rewards: 4,
      inProgress: 1
    },
    {
      name: "ethparis-collective",
      githubLink: "https://github.com/jterrazz/ethparis-collective",
      devpostLink: "https://devpost.com/software/ethparis",
      date: new Date(),
      description: "Solidity crowdfunding platform created in 36 hours at the EthParis hackathon. Built with truffle, VueJS, SKALE sidechain, NodeJS. SKALE labs bounty winner",
      category: "Hackathon",
      tags: ["ethereum", "vue.js", "winner"],
      rewards: 1,
      inProgress: 1
    },
  ],
}

export default config
