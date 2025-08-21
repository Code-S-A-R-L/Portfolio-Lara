import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;
  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/7946210/7946210-uhd_1440_2732_30fps.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-taupe/60 via-deep-taupe/40 to-dark-taupe/50 z-5"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <AnimatedHeaderSection
          subTitle={"404 No Bugs Found"}
          title={"Ali Sanati"}
          text={text}
          textColor={"text-light-taupe"}
        />
      </div>
    </section>
  );
};

export default Hero;
