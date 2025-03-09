const quotes = [
    {
        verse: "For God loved the world in this way: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
        chapter: "John 3:16"
    },
    {
        verse: "And over all these virtues put on love, which binds them all together in perfect unity.",
        chapter: "Colossians 3:14"
    },
    {
        verse: "A reminder that we only have the power to love others because of God's overwhelming love for us.",
        chapter: "1 John 4:19"
    },
    {
        verse: "Whoever does not love does not know God, because God is love.",
        chapter: "1 John 4:8"
    },
    {
        verse: "A Christian commandment that serves as the backbone of all great marriage advice.",
        chapter: "1 Corinthians 16:14"
    },
    {
        verse: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
        chapter: "Isaiah 41:10"
    },
    {
        verse: "God is our refuge and strength, a very present help in trouble.",
        chapter: "Psalm 46:1"
    },
    {
        verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
        chapter: "Deuteronomy 31:6"
    }
]

const verse = document.querySelector("#quote span:first-child");
const chapter = document.querySelector("#quote span:last-child");

const randomVerse = quotes[Math.floor(Math.random() * quotes.length)];
verse.innerText = `" ${randomVerse.verse} "`;
chapter.innerText = `- ${randomVerse.chapter} -`;


