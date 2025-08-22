"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQs() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "users",
      question: "What is AWS Open Source Community Nepal?",
      answer:
        "AWS Open Source Community Nepal is a group of developers, students, and professionals passionate about open source and AWS technologies. We share knowledge, collaborate on projects, and build a strong open source ecosystem in Nepal.",
    },
    {
      id: "item-2",
      icon: "calendar",
      question: "How often do you organize events?",
      answer:
        "We organize meetups, workshops, and community discussions regularly—usually once every 1–2 months. Major events and hackathons are announced on our social media and community channels.",
    },
    {
      id: "item-3",
      icon: "book-open",
      question: "Who can join the community?",
      answer:
        "Anyone! Whether you're a student, developer, or tech enthusiast, you’re welcome to join. You don’t need prior experience with AWS or open source; curiosity and a willingness to learn are enough.",
    },
    {
      id: "item-4",
      icon: "laptop",
      question: "Do I need AWS experience to participate?",
      answer:
        "Not at all. Many of our members are beginners exploring open source and cloud technologies. We provide beginner-friendly sessions, mentorship, and hands-on demos to help you get started.",
    },
    {
      id: "item-5",
      icon: "github",
      question: "How can I contribute to open source with the community?",
      answer:
        "You can participate in open source projects we collaborate on, join hackathons, or contribute to documentation, design, and community building. We also guide members on contributing to global open source projects on GitHub.",
    },
    {
      id: "item-6",
      icon: "globe",
      question: "Where can I connect with the community?",
      answer:
        "You can join us through our official Slack/Discord group, follow us on LinkedIn, and attend our in-person or online events. All event details are regularly updated on our community pages.",
    },
  ];

  return (
    <section className="dark:bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
