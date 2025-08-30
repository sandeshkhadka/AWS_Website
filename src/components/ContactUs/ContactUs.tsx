"use client";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center"></div>

          <div className="mt-8 grid sm:grid-cols-2 md:mt-12">
            <div className="border p-6 lg:p-12 w-full h-full">
              <h2 className="text-5xl font-bold">
                Let&apos;s get in touch with us
              </h2>


              <div className="my-7 space-y-5 lg:my-10 w-full">
                <div>
                  <p>Phone</p>
                  <span className="font-semibold">(+977) 9840122883</span>
                </div>

                <div>
                  <p>Email</p>
                  <span className="font-semibold">info@awscloudclubnepal.com</span>
                </div>
              </div>
            </div>

            <div className="h-full border w-full">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
