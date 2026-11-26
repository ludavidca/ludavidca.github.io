// Everything you'd normally edit lives in this file and in gallery.ts.

export const person = {
  name: "David Lu",
  email: "d66lu@uwaterloo.ca",
  location: "SF Bay Area · Toronto",
  resume: "/David-Lu-Resume.pdf", // file lives in public/
  description:
    "Software engineer working on AI systems and backend infrastructure. 8090, Cognichip, Loblaws. Management Engineering and Computing at Waterloo.",
};

// The clickable word in "I build software for ___". The first one is "home".
export const audiences = [
  "domain experts",
  "developers",
  "chip designers",
  "surgical sales reps",
  "merchandise buyers",
  "supply chain officers",
];

// Internship line beside "Experience". Each entry starts on its date
// (year, month 1-12) and lasts until the next one begins. null hides the line.
// It's checked in the visitor's browser, so it stays current without a rebuild.
export const hiringSchedule: [number, number, string | null][] = [
  [2000, 1, "Looking for Summer 2027 internships"],
  [2027, 6, "Looking for Winter and Summer 2028 internships"],
  [2028, 1, "Looking for Summer and Fall 2028 internships"],
  [2028, 5, "Looking for Fall 2028 internships and new grad roles"],
  [2028, 9, "Looking for new grad roles"],
  [2029, 5, null],
];

export const jobs = [
  {
    co: "8090 Solutions AI",
    url: "https://www.8090.ai/",
    role: "Member of Technical Staff",
    when: "Sep – Dec 2026",
    d: "Drove the US launch of a multi-billion-dollar eye health company's quoting platform and rebuilt its LLM product matching, cutting quote turnaround from days to hours.",
  },
  {
    co: "Cognichip AI",
    url: "https://www.cognichip.ai/",
    role: "Software Engineer Intern",
    when: "Jan – Aug 2026",
    d: "Shipped Plan Mode in an AI IDE for chip design and re-architected the agent backend into routable LangGraph graphs on AWS.",
  },
  {
    co: "Loblaw Digital",
    url: "https://www.loblawdigital.co/",
    role: "Software Engineer Intern",
    when: "May – Aug 2025",
    d: "Built LLM pipelines mapping ingredients and pricing for 150,000+ products, generating $4M+ a year in vendor-negotiation savings.",
  },
  {
    co: "Loblaw Companies Limited",
    url: "https://www.loblaw.ca/",
    role: "Software Engineer Intern",
    when: "Sep – Dec 2024",
    d: "Built data pipelines for Loblaw's pilot GenAI project and automated a manual reporting workflow, saving 100+ hours a month.",
  },
];
