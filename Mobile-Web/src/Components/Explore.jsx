import React, { useEffect, useRef } from "react";
import "./Explore.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    // Staggered panel animations with scale, rotate and fade
    gsap.fromTo(
      panels,
      {
        opacity: 0,
        scale: 0.8,
        rotation: -5,
        y: 100,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Parallax image vertical movement + scale zoom + rotate
    panels.forEach((panel) => {
      const img = panel.querySelector("img");
      if (!img) return;

      gsap.to(img, {
        y: "-10%",
        scale: 1.1,
        rotation: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Overlay text sliding with bounce effect
    gsap.utils.toArray(".overlay").forEach((overlay) => {
      gsap.fromTo(
        overlay,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: overlay,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Background pulse color effect
    gsap.to("body", {
      backgroundColor: "#e0f7ff",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="exploreHeading">
        <h1>Explore Our Products</h1>
        <p>Scroll Down for a Mesmerising Experience ↓</p>
      </div>

     <section className="vertical-section" ref={sectionRef}>
  <div className="panel">
    <img src="https://miro.medium.com/v2/resize:fit:1200/0*aDCHjBVFoKm7nvEN.jpg" alt="" /><br />
    <p style={{paddingLeft:"40%"}}> Discover Mac</p>
    <video
      src="https://www.apple.com/assets-www/en_WW/mac/welcome/7ba0e8f66_large_2x.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
     className="IphoneVideo"
      alt="Xiaomi 14 Ultra Video"
       style={{width:"100%"}}
    />
    <div className="overlay">
      <h3>New Model Mac Launch</h3>
      <p>Ultra power with stunning Performace.</p>
    </div>
  </div>

   <div className="panel">
    <img src="https://soyacincau.com/wp-content/uploads/2018/07/fbhero_macbookpro2018-1024x596.jpg" alt="Image"
      style={{ width: "32%", display: "block" }} />
    <img src="https://orientaldaily.on.cc/asset/china_world/20211020/photo/1020-00180-061b1.jpg" style={{ width: "32%",  display: "block" }}alt="" />
   <img src="https://cdn.osxdaily.com/wp-content/uploads/2021/10/macbook-pro-m1-pro-m1-max-spec-sheet.jpg" style={{ width: "32%", display: "block" }}alt="" />
    
  </div>

  <div className="panel">
     <p style={{paddingLeft:"18%"}}> Discover Lenova:To provide innovative technology solutions that enhance the lives of our customers </p>
    <video
      src="https://i01.appmifile.com/webfile/globalimg/products/pc/mi-notebook-14/A1R_Cooling.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={{ width: "100%", borderRadius: "20px", display: "block" }}
      alt="High-End Laptop Video"
    />
    <div className="overlay">
      <h3>High-End Lenova Laptop </h3>
      <p>Work and play, no compromises.</p>
    </div>
  </div>
  <div className="panel">
    <video
      src="https://in-files.apjonlinecdn.com/landingpages/content-pages/hp-ai/images/omnibook.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={{ width: "32%", display: "block" }}
      alt="Bulova Watch Video"
    />
   <img src="https://i.ytimg.com/vi/gVBELZqOOIE/maxresdefault.jpg" alt=""  style={{ width: "32%" }}/>
   <img src="https://laptopmedia.com/wp-content/uploads/2024/09/IMG_2318B1861BE7-1.jpeg" alt="" style={{ width: "32%" }} />
    
  </div>
   <div className="panel">
   <img src="https://hpstorerajkot.com/wp-content/uploads/715E0Nxc1mL._SL1500_.jpg" alt="" style={{ width: "32%" }}/>
   <img src="https://m.media-amazon.com/images/I/71JyAU-wQ9L._UF894,1000_QL80_.jpg" alt=""  style={{ width: "32%" }}/>
   <img src="https://rukminim2.flixcart.com/image/750/900/xif0q/computer/a/p/p/x360-bf0058tu-thin-and-light-laptop-hp-original-imagh4ypehdgcgwk.jpeg?q=20&crop=false" alt="" style={{ width: "32%" }} />
  </div>

  
  <div className="panel">
    <img src="https://hpstorerajkot.com/wp-content/uploads/222-2.jpg"
      style={{ width: "100%" }}
      alt="High-End Laptop Video"
    />
    <div className="overlay">
      <h3>High-End Lenova Laptop </h3>
      <p>Work and play, no compromises.</p>
    </div>
  </div>
    <div className="panel" style={{justifyContent:"center",width:"80%"}}>
   <img src="https://m.media-amazon.com/images/I/91Fzn-ieJaL._SY350_.jpg" alt="" style={{ width: "30%" }}/>
   <img src="https://m.media-amazon.com/images/I/813a9T7P+vL._SY350_.jpg" alt=""  style={{ width: "30%" }}/>
  </div>
    <div className="panel">
   <img src="https://onsitego.com/blog/wp-content/uploads/2021/08/Mi-Notebook-Pro-Mi-Notebook-ultra-price-scaled.jpg" alt="" style={{ width: "62%" }}/>
   <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1632306189.29356142!400x400!85.jpg" alt=""  style={{ width: "35%" }}/>
  </div>

   <div className="panel">
    <img src="https://techspectacle.com/wp-content/uploads/2021/06/ASUS-VS-ACER.jpg" alt="" /><br />
    <p style={{paddingLeft:"40%"}}> Discover Mac</p>
 <iframe 
  width="1100" 
  height="500" 
  src="https://www.youtube.com/embed/epIbrUjQ1TA?si=1PhO3p6sWMQbxHkB&autoplay=1&loop=1&playlist=epIbrUjQ1TA&mute=1" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
    <div className="overlay">
      <h3>New Model SamSung Launch</h3>
      <p>Ultra power with stunning Performacea and Ultra Soft.</p>
    </div>
  </div>
</section>
<br />
    </>
  );
};

export default Explore;
