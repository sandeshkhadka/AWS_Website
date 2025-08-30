"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string(),
});

const formSchema = contactFormSchema;

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate a successful contact form submission
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center px-4">
      {/* Lines */}
      <div className="absolute left-0 right-0  top-[20px] z-10 h-px w-full bg-border dark:bg-neutral-700 md:top-[48px]"></div>
      <div className="absolute bottom-0 right-[20px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700 md:right-[48px]"></div>
      <div className="absolute bottom-[20px] left-0 right-0 z-10 h-px w-full bg-border dark:bg-neutral-700 md:bottom-[48px]"></div>
      <div className="absolute bottom-0 left-[20px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700 md:left-[48px]"></div>

      {/* Top Right Cross */}
      <div className="absolute right-[43.5px] top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute right-[48px] top-[43.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Top Left Cross */}
      <div className="absolute left-[42.5px] right-0 top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute left-[48px] right-0 top-[42.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Left Cross */}
      <div className="absolute bottom-[48px] left-[42.5px] right-0 z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[42.5px] left-[48px] right-0 z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Right Cross */}
      <div className="absolute bottom-[48px] right-[43.5px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[43.5px] right-[48px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* lines end */}

      <Card className="bg-transparent my-10 shadow-none border-none w-full mx-auto max-w-md py-4">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
