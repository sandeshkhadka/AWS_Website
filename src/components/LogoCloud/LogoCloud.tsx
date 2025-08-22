import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/data/logos";

const LogoClouds = () => {
  return (
    <div className="py-16 flex items-center justify-center lg:py-32">
      <div className="max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Sponsors</h2>
          <p className="mt-6 text-muted-foreground">
            Harum quae dolore orrupti aut temporibus ariatur.
          </p>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
          <Logo06 />
          <Logo07 />
          <Logo08 />
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
