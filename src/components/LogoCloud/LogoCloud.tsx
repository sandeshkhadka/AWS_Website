import Image from "next/image";
const LogoClouds = () => {
  return (
    <div className="py-16 flex items-center justify-center lg:py-32">
      <div className="max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Sponsors</h2>
          <p className="mt-6 text-muted-foreground">
            Meet the supports who made AWS Student Community Day 2025 happen.
          </p>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-[#a166e8]">Powered By</h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
            <Image src="/aws.png"  alt="AWS Logo" width={200} height={200}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
