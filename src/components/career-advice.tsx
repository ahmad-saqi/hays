import { useState } from "react";
import CareerImg from "../assets/img/career.webp";

// Define types
type ContentItem = {
  title: string;
  readTime: string;
  author: string;
  type: string;
  category: string;
};

type TabName =
  | "CV & Cover letters"
  | "Job searching"
  | "Accepting a job offer"
  | "Negotiating a payrise"
  | "Managing a team"
  | "Industry insights";

type TabContents = {
  [key in TabName]: ContentItem[];
};

const CareerAdvice = () => {
  const [activeTab, setActiveTab] = useState<TabName>("CV & Cover letters");

  const tabs: TabName[] = [
    "CV & Cover letters",
    "Job searching",
    "Accepting a job offer",
    "Negotiating a payrise",
    "Managing a team",
    "Industry insights",
  ];

  const tabContents: TabContents = {
    "CV & Cover letters": [
      {
        title: "Using AI in your job search: smart strategy or risky shortcut?",
        readTime: "8 min read",
        author: "Josie Davies",
        type: "Article",
        category: "CV & Cover letters",
      },
      {
        title: "How to write a cover letter that stands out",
        readTime: "5 min read",
        author: "Michael Smith",
        type: "Article",
        category: "CV & Cover letters",
      },
      {
        title: "The ultimate CV template for 2023",
        readTime: "10 min read",
        author: "Sarah Johnson",
        type: "Guide",
        category: "CV & Cover letters",
      },
    ],
    "Job searching": [
      {
        title: "Top 10 job search strategies for 2023",
        readTime: "7 min read",
        author: "David Wilson",
        type: "Article",
        category: "Job searching",
      },
      {
        title: "How to leverage LinkedIn for your job search",
        readTime: "6 min read",
        author: "Emma Thompson",
        type: "Article",
        category: "Job searching",
      },
      {
        title: "Networking strategies that actually work",
        readTime: "9 min read",
        author: "Robert Chen",
        type: "Guide",
        category: "Job searching",
      },
    ],
    "Accepting a job offer": [
      {
        title: "What to consider before accepting a job offer",
        readTime: "9 min read",
        author: "Robert Brown",
        type: "Article",
        category: "Accepting a job offer",
      },
      {
        title: "Red flags to watch for in a job offer",
        readTime: "6 min read",
        author: "Lisa Wong",
        type: "Article",
        category: "Accepting a job offer",
      },
      {
        title: "Negotiating your benefits package",
        readTime: "8 min read",
        author: "James Miller",
        type: "Guide",
        category: "Accepting a job offer",
      },
    ],
    "Negotiating a payrise": [
      {
        title: "The art of salary negotiation",
        readTime: "8 min read",
        author: "Lisa Wong",
        type: "Article",
        category: "Negotiating a payrise",
      },
      {
        title: "When is the right time to ask for a raise?",
        readTime: "5 min read",
        author: "Michael Johnson",
        type: "Article",
        category: "Negotiating a payrise",
      },
      {
        title: "Preparing your case for a pay increase",
        readTime: "7 min read",
        author: "Sarah Williams",
        type: "Guide",
        category: "Negotiating a payrise",
      },
    ],
    "Managing a team": [
      {
        title: "Effective leadership in remote teams",
        readTime: "10 min read",
        author: "James Miller",
        type: "Article",
        category: "Managing a team",
      },
      {
        title: "How to conduct productive 1:1 meetings",
        readTime: "6 min read",
        author: "Emily Davis",
        type: "Article",
        category: "Managing a team",
      },
      {
        title: "Building trust with your team members",
        readTime: "8 min read",
        author: "Daniel Wilson",
        type: "Guide",
        category: "Managing a team",
      },
    ],
    "Industry insights": [
      {
        title: "Tech industry trends for 2023",
        readTime: "12 min read",
        author: "Anna Chen",
        type: "Report",
        category: "Industry insights",
      },
      {
        title: "The future of remote work",
        readTime: "9 min read",
        author: "Thomas Lee",
        type: "Article",
        category: "Industry insights",
      },
      {
        title: "Emerging jobs in the green economy",
        readTime: "10 min read",
        author: "Rachel Green",
        type: "Report",
        category: "Industry insights",
      },
    ],
  };

  const currentContents = tabContents[activeTab];

  return (
    <div className="max-w-screen-xl mx-auto py-16 space-y-6 px-4 lg:px-0">
      <h1 className="text-4xl font-semibold">
        Career advice
        <span className="font-light"> from Hays </span>
      </h1>
      <div className="flex gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`border border-black py-2 px-6 font-medium text-sm ${
              activeTab === tab ? "bg-green-200" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <a href="#" className="text-blue-500 hover:underline font-semibold">
        View all career advice
      </a>

      {/* tabs content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Main featured content */}
        {currentContents.length > 0 && (
          <div className="md:col-span-1">
            <img src={CareerImg} alt="" className="w-full h-auto rounded-lg" />
            <a
              href="#"
              className="hover:underline text-xl font-semibold block mt-4"
            >
              {currentContents[0].title}
            </a>
            <p className="mt-2 text-gray-600">
              {currentContents[0].readTime} | {currentContents[0].author} |{" "}
              {currentContents[0].type} | {currentContents[0].category}
            </p>
          </div>
        )}

        {/* Secondary content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-1">
          {currentContents.slice(1, 3).map((item, index) => (
            <div key={index}>
              <img
                src={CareerImg}
                alt=""
                className="w-full h-auto rounded-lg"
              />
              <a
                href="#"
                className="hover:underline text-xl font-semibold block mt-4"
              >
                {item.title}
              </a>
              <p className="mt-2 text-gray-600">
                {item.readTime} | {item.author} | {item.type} | {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
