import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sushil Shrestha",
    role: "Cloud Enthusiast",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    quote:
      "AWS Club Nepal has been a turning point in my career. The workshops and hands-on labs helped me understand cloud fundamentals faster than any online course ever did.",
  },
  {
    name: "Anisha Karki",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "Before joining AWS Club Nepal, I had only theoretical knowledge of cloud. The mentorship and peer learning here gave me the confidence to build real-world projects on AWS.",
  },
  {
    name: "Prakash Adhikari",
    role: "DevOps Intern",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "The community is amazing! I got to collaborate on hackathons, solve real AWS challenges, and connect with like-minded developers across Nepal.",
  },
  {
    name: "Shristi Maharjan",
    role: "Data Science Student",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "AWS Club Nepal provided me with exposure to cloud-native tools that are highly relevant in data science. I even deployed my first ML model on AWS thanks to their guidance!",
  },
  {
    name: "Bibek Sharma",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    quote:
      "I joined AWS Club Nepal just to learn the basics, but ended up leading a project on serverless applications. It truly empowers students to go beyond theory.",
  },
  {
    name: "Niruta Rai",
    role: "Cloud Practitioner",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    quote:
      "The supportive culture at AWS Club Nepal makes it easy to ask questions and learn. The certification prep sessions were a huge help for passing my AWS Cloud Practitioner exam.",
  },
  {
    name: "Rohit Gurung",
    role: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    quote:
      "Being part of AWS Club Nepal gave me industry-ready cloud knowledge. Now, deploying and scaling my apps on AWS feels like second nature.",
  },
  {
    name: "Sandhya KC",
    role: "AI/ML Enthusiast",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    quote:
      "I always thought cloud was complicated, but the sessions at AWS Club Nepal broke it down into simple, practical steps. It inspired me to explore AI/ML on the cloud.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export function TestimonialSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Loved by the Community</h2>
            <p className="mt-6 text-muted-foreground">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index} className="bg-neutral-310 dark:bg-none">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
