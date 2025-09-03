import Image from "next/image";
const LogoClouds = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="max-w-7xl px-6">
        <div className="text-center max-w-xl space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">Our Sponsors</h2>
          <p>
            Meet the supports who made AWS Student Community Day 2025 happen.
          </p>
        </div>
        <div className="text-center mt-10">
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
            <Image src="/aws.png" alt="AWS Logo" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
