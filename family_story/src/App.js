import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <IntroductionSection />
      <BibisaraSection />
      <ZhetybaiSection />
      <GrandmotherSection />
      <FatherSection />
      <JourneySection />
      <LegacySection />
      <GoldenThread />
    </div>
  );
}

// Hero Section Component with animations
const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const threadRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    // Hero section animation
    if (titleRef.current && threadRef.current && scrollIndicatorRef.current) {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current.querySelector('h1'), {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: 'power3.out'
      })
      .from(titleRef.current.querySelector('h2'), {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
      }, '-=0.5')
      .from(threadRef.current, {
        duration: 1.5,
        drawSVG: '0%',
        ease: 'power2.inOut'
      })
      .from(scrollIndicatorRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef} 
      className="hero min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#2C1810] text-white relative overflow-hidden"
      aria-label="Hero section"
      tabIndex="-1"
    >
      {/* Background elements can be added here */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div 
        ref={titleRef}
        className="relative z-10 text-center px-4 max-w-4xl"
        aria-labelledby="hero-title hero-subtitle"
      >
        <h1 id="hero-title" className="text-5xl md:text-7xl font-serif font-bold mb-4 text-family-primary">A Thread of Perseverance</h1>
        <h2 id="hero-subtitle" className="text-xl md:text-2xl font-sans font-light mb-12">A Family Story Across Generations</h2>
      </div>
      
      <svg 
        ref={threadRef}
        className="absolute bottom-24 w-full max-w-3xl"
        height="4" 
        viewBox="0 0 800 4"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path 
          d="M0,2 L800,2" 
          stroke="#D4AF37" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 animate-bounce flex flex-col items-center"
        aria-label="Scroll indicator"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-family-primary" aria-hidden="true">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

// Introduction Section Component
const IntroductionSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    if(contentRef.current) {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });
    }

    if(imageRef.current) {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power3.out",
        delay: 0.2
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-family-bg text-family-text">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div ref={contentRef} className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-serif mb-8 text-family-secondary">Our Story Begins</h2>
            <p className="text-lg leading-relaxed">
              Across generations, my family's story traces an unbroken thread of perseverance and transformation.
              It began with a great-grandmother born into a nomadic life who settled in rural Kazakhstan in search of survival,
              followed by a grandfather who left the countryside to build a future in the city.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              The next chapter saw a father who, rooted in urban life, made the bold choice to move his family across continents.
              My own journey, moving to Canada at nine years old, continues this enduring pattern of seeking new horizons.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              It is a reminder that each generation's courage to adapt shapes the foundation for the next,
              turning struggle into strength and change into opportunity.
            </p>
          </div>

          <div ref={imageRef} className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-96">
              <img
                src="./images/4generations.jpg"
                alt="Family Heritage"
                className="w-full h-full object-cover rounded-xl border-4 border-family-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Historical Card Component (reusable)
const HistoricalCard = ({ title, children, expanded = true, onToggle = null }) => {
  return (
    <div 
      className={`bg-history-bg p-6 rounded-lg shadow-lg border border-gray-300 mb-6 transition-all ${expanded ? 'block' : 'hidden'}`}
      role="region"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      tabIndex="-1"
    >
      <h3 
        id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-xl font-bold mb-4 text-history-primary font-serif"
      >
        {title}
      </h3>
      <div className="text-history-text text-base">
        {children}
      </div>
    </div>
  );
};

// Bibisara Abenova Section Component
const BibisaraSection = () => {
  const sectionRef = useRef(null);
  const mainContentRef = useRef(null);
  const historicalCardRef = useRef(null);
  const survivalRef = useRef(null);
  const resilienceRef = useRef(null);

  useGSAP(() => {
    // Main content animation (the nomad section)
    if(mainContentRef.current) {
      gsap.from(mainContentRef.current, {
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });
    }

    // Survival section animation
    if(survivalRef.current) {
      gsap.from(survivalRef.current, {
        scrollTrigger: {
          trigger: survivalRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.2
      });
    }

    // Historical card animation (now positioned after survival section)
    if(historicalCardRef.current) {
      gsap.from(historicalCardRef.current, {
        scrollTrigger: {
          trigger: historicalCardRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power3.out",
        delay: 0.3
      });
    }

    // Resilience section animation
    if(resilienceRef.current) {
      gsap.from(resilienceRef.current, {
        scrollTrigger: {
          trigger: resilienceRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.4
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-family-bg text-family-text relative">
      <div className="max-w-5xl mx-auto">
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          <div ref={mainContentRef} className="lg:w-1/2">
            <h2 className="text-4xl font-serif mb-6 text-family-secondary">The Nomad: Bibisara Abenova</h2>
            <h3 className="text-xl font-sans mb-6">Born in northern Kazakhstan in the 1920s</h3>

            <div className="mb-8">
              <p className="text-lg leading-relaxed mb-4">
                My great-grandmother, Bibisara Abenova, was born in northern Kazakhstan in the 1920s as a nomad.
              </p>

              <p className="text-lg leading-relaxed">
                Pastoral nomadism was profoundly intertwined with the very essence of Kazakh identity and culture.
                It had been the predominant way of life in the Kazakh steppe for more than four millennia.
                This practice was primarily an adaptation to the arid environment, specifically the scarcity of good pastureland and water.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Kazakhs migrated seasonally along predetermined routes, pasturing animals such as sheep, horses, and camels.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-96">
              <img
                src="./images/Nomads.jpg"
                alt="Nomad Survival"
                className="w-full h-full object-contain rounded-xl border-4 border-family-primary shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          <div ref={survivalRef} className="lg:w-1/2">
            <h3 className="text-2xl font-serif mb-6 text-family-secondary">SURVIVAL</h3>
            <p className="text-lg leading-relaxed mb-6">
              My great-grandmother was 8 years old at the peak of the famine. Her region was one of the highest hit.
              Her family had to leave for the hopes of finding an escape. Somehow, they managed to make it all the way
              to the most southern region of Kazakhstan, Turkestan Region.
            </p>
            <p className="text-lg leading-relaxed">
              Unfortunately, her parents decided to leave her in Turkestan with some acquaintances because they were afraid
              that if she continued the path with them, there would be a lack of resources for survival for all of them.
              So, her family continued their journey, while she stayed in Turkestan, and they never saw each other again.
            </p>
          </div>

          <div ref={historicalCardRef} className="lg:w-1/2">
            <HistoricalCard title="THE GREAT FAMINE (1930-1933)">
              <p className="font-mono mb-3">
                Soviet regime's radical modernization project under the First Five-Year Plan took the form of
                a violent, simultaneous campaign of forced sedentarization and collectivization.
                The goal was to shatter the traditional Kazakh way of life, seize control of the republic's livestock wealth,
                and forge a new, modern Soviet Kazakh nation.
              </p>

              <div className="mt-4">
                <p className="font-mono font-bold">Statistics:</p>
                <ul className="font-mono mt-2 space-y-1">
                  <li>• 1.5 million deaths total</li>
                  <li>• Over 1 million ethnic Kazakhs died</li>
                  <li>• ~40% of the Kazakh population</li>
                  <li>• Death rate surpassed the Ukrainian famine</li>
                </ul>
              </div>
            </HistoricalCard>
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div ref={resilienceRef} className="lg:w-1/2">
            <h3 className="text-2xl font-serif mb-6 text-family-secondary">RESILIENCE</h3>
            <p className="text-lg leading-relaxed">
              In the end, she got married at eighteen to the man who grew up in the same family that raised her.
              Shortly after, he was collected as a USSR cavalry member and left for war to Germany and Japan.
              Thankfully, he came back and they had 3 children together.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My great-grandmother was a housewife and also worked in the field, and my great-grandfather was a village accountant.
              My great-grandmother's survival story reminds me to stay strong in difficult times.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-96">
              <img
                src="./images/greatgrandparents.jpg"
                alt="Great Grandparents Resilience"
                className="w-full h-full object-cover rounded-xl border-4 border-family-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Zhetybai Abenov Section Component
const ZhetybaiSection = () => {
  const sectionRef = useRef(null);
  const mainContentRef = useRef(null);
  const historicalCardRef = useRef(null);
  const ambitionRef = useRef(null);

  useGSAP(() => {
    // Main content animation
    if(mainContentRef.current) {
      gsap.from(mainContentRef.current, {
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });
    }

    // Historical card animation (now below the image)
    if(historicalCardRef.current) {
      gsap.from(historicalCardRef.current, {
        scrollTrigger: {
          trigger: historicalCardRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.3
      });
    }

    // Ambition section animation
    if(ambitionRef.current) {
      gsap.from(ambitionRef.current, {
        scrollTrigger: {
          trigger: ambitionRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-family-bg text-family-text relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div ref={mainContentRef} className="md:w-2/3">
            <h2 className="text-4xl font-serif mb-6 text-family-secondary">The Builder: Zhetybai Abenov</h2>
            <h3 className="text-xl font-sans mb-6">Born May 17th, 1954</h3>

            <div className="mb-8">
              <p className="text-lg leading-relaxed mb-4">
                My grandfather, Zhetybai Abenov, was born on May 17th, 1954, officially in Uzbek SSR,
                however currently in the Turkestan Region of Kazakhstan. He grew up in a village along
                with his parents, an older sister and a younger brother.
              </p>

              <p className="text-lg leading-relaxed">
                The village was very diverse, with Kazakhs, Russians, Korean, Germans living side by side.
                According to my grandfather the majority in the village were Greeks.
              </p>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="w-full max-w-md h-96">
              <img
                src="./images/deportations.png"
                alt="Ethnic Deportations"
                className="w-full h-full object-contain rounded-xl border-4 border-family-primary shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div ref={historicalCardRef} className="mx-auto max-w-md">
            <HistoricalCard title="ETHNIC DEPORTATIONS TO KAZAKHSTAN (1937-1944)">
              <p className="font-mono mb-3">
                How did Greeks and Korean end up in southern Kazakhstan? Between 1937 and 1944,
                more than 1.2 million people were forcefully deported to Kazakhstan.
                Most of them were ethnic groups from various parts of the Soviet Union,
                who were deemed unreliable and nationalistic and seen as a threat.
              </p>

              <div className="mt-4">
                <p className="font-mono font-bold">Timeline:</p>
                <ul className="font-mono mt-2 space-y-1">
                  <li>• Mid-1930s: Koreans (east), Finns, Germans, Polish (west), Kurds, Iranians, Jews (south)</li>
                  <li>• WWII & After: Chechen, Ingush, Crimean Tatars, Ukrainians</li>
                </ul>

                <p className="font-mono mt-4 font-bold">Total Deported: 1.2+ million people</p>
              </div>
            </HistoricalCard>
          </div>
        </div>
        
        <div ref={ambitionRef} className="mt-16">
          <h3 className="text-2xl font-serif mb-6 text-family-secondary">AMBITION & ENTREPRENEURSHIP</h3>
          <p className="text-lg leading-relaxed">
            My grandfather moved to Almaty in his youth because he got into a polytechnic university there, 
            moving his entire family to provide them with better opportunities. After graduation, he met my grandmother, 
            married, and had three children.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            He started as a construction foreman. However, when the USSR collapsed and Kazakhstan gained independence, 
            the communist regime changed to capitalism. Even though times were tough, he decided to pursue entrepreneurship 
            (which in USSR was illegal), due to the new opportunities opening up.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            He was very successful in both of his careers. Unfortunately, later in his life, he started having health issues. 
            My dad took him to South Korea for treatment, but he sadly passed away there at the age of 63 in 2018. 
            My grandfather's story is a testament to resilience and ambition.
          </p>
        </div>
      </div>
    </section>
  );
};

// Grandmother Section Component
const GrandmotherSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const aralskRef = useRef(null);
  const historicalCardRef = useRef(null);

  useGSAP(() => {
    // Title animation
    if(titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: "power3.out",
      });
    }

    // Intro animation
    if(introRef.current) {
      gsap.from(introRef.current, {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.2
      });
    }

    // Aralsk content animation
    if(aralskRef.current) {
      gsap.from(aralskRef.current, {
        scrollTrigger: {
          trigger: aralskRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "power3.out",
        delay: 0.2
      });
    }

    // Historical card animation
    if(historicalCardRef.current) {
      gsap.from(historicalCardRef.current, {
        scrollTrigger: {
          trigger: historicalCardRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power3.out",
        delay: 0.3
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-blue-50 text-history-text relative">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-4xl font-serif mb-6 text-aral-sea text-center">The Lost Sea: A Grandmother's Tale</h2>
        
        <div ref={introRef} className="mb-12 text-center">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            My grandmother's family story shows another side of the Kazakhstan history. Her father, my great grandfather's family
            was repressed during the <a href="https://en.wikipedia.org/wiki/Great_Purge" target="_blank" rel="noopener noreferrer" className="text-family-primary hover:underline">Great Purge</a> in 1930s. My great grandfather's father and his elder were arrested. He never saw them again.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div ref={aralskRef} className="md:w-2/3">
            <h3 className="text-2xl font-serif mb-6 text-aral-sea">ARALSK</h3>
            <p className="text-lg leading-relaxed mb-4">
              My grandmother is from the small city of Aralsk (modern name Aral) in south-western Kazakhstan.
              Aral was formerly a fishing port and harbour city on the banks of the Aral Sea, and was a major supplier
              of fish to the neighboring region.
            </p>

            <p className="text-lg leading-relaxed">
              Aral Sea used to be the third largest lake in the world, similar to the size of lake Superior.
              But starting from 1960s it started to dry up.
            </p>
            <p className="text-lg leading-relaxed">
              My father in his childhood used to spend his summer in Aralsk with his grandparents in late 80s and early 90s.
              But he never saw the Aral sea. It already receded from this port city. My grandmother's mother is still alive.
              She has 7 children, and about 25 grandchildren. None of them live in Aralsk anymore.

            </p>

            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-md h-80">
                <img
                  src="./images/Aral_Sea.gif"
                  alt="Aral Sea"
                  className="w-full h-full object-contain rounded-xl border-4 border-aral-sea shadow-lg"
                />
              </div>
            </div>
          </div>

          <div ref={historicalCardRef} className="md:w-1/3">
            <HistoricalCard title="THE ARAL SEA DISASTER">
              <p className="font-mono mb-3">
                One of the largest ecological catastrophes of the 20th century
              </p>

              <div className="mt-4">
                <p className="font-mono font-bold">Environmental Impact (1960s-2000s):</p>
                <ul className="font-mono mt-2 space-y-1">
                  <li>• Lost over 90% of its water</li>
                  <li>• Salinity increased sharply</li>
                  <li>• Most native fish species died</li>
                  <li>• Dust storms carrying salt and pesticides</li>
                  <li>• Damaged soils and human health across Central Asia</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="font-mono">
                  </p>
              </div>
            </HistoricalCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// Father Section Component
const FatherSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const buildingLifeRef = useRef(null);
  const finalRef = useRef(null);

  useGSAP(() => {
    // Title animation
    if(titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
      });
    }
    
    // Content animation
    if(contentRef.current) {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.2
      });
    }
    
    // Building life section animation
    if(buildingLifeRef.current) {
      gsap.from(buildingLifeRef.current, {
        scrollTrigger: {
          trigger: buildingLifeRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });
    }
    
    // Final content animation
    if(finalRef.current) {
      gsap.from(finalRef.current, {
        scrollTrigger: {
          trigger: finalRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.1
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-family-bg text-family-text relative">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-4xl font-serif mb-12 text-family-secondary text-center">The Professional: My Father</h2>
        
        <div ref={contentRef} className="mb-12">
          <p className="text-lg leading-relaxed mb-4">
            My dad grew up in Almaty. He studied in Kazakh and Russian schools, becoming proficient in both languages. 
            After graduating high school, he decided it would be safe to study heat and gas supply engineering at the University of KazGASA.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            After studying in KazGASA for 2 years, he decided it wasn't for him, so he switched to KIMEP University to study finance, where he met my mom.
          </p>
        </div>
        
        <h3 ref={buildingLifeRef} className="text-3xl font-serif mb-6 text-family-secondary text-center">BUILDING A LIFE</h3>
        
        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            He graduated from university and started working as a financial analyst. Two years later, I was born 
            and six years later after that, in 2014, my sister was born. For years, both my mom and my dad worked 
            very, very hard for my sister and I to have a good life overall, and later on move to Canada.
          </p>
        </div>
        
        <div ref={finalRef} className="bg-family-secondary/10 p-6 rounded-lg">
          <p className="text-lg leading-relaxed italic">
            In 2018, all of their efforts paid off and we did. The move was really tough for them at first, 
            but then because of how hardworking and determined they are, it all worked out. Right now, my dad 
            works as a financial analyst in a company in Ottawa.
          </p>
        </div>
      </div>
    </section>
  );
};

// Interactive Map Component
const InteractiveMap = () => {
  const mapRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    // Animate the map elements when they come into view
    if(mapRef.current) {
      gsap.from(mapRef.current.querySelectorAll('.map-location'), {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.2
      });
    }
  }, { scope: mapRef });

  const locations = [
    { id: 1, name: "Almaty, Kazakhstan", description: "Childhood home" },
    { id: 2, name: "Ottawa, Canada", description: "First Canadian city" },
    { id: 3, name: "Gatineau, Canada", description: "French immersion" },
    { id: 4, name: "Ottawa, Canada", description: "Current home" }
  ];

  const languages = [
    { id: 1, name: "Russian" },
    { id: 2, name: "English" },
    { id: 3, name: "French" },
    { id: 4, name: "Kazakh" }
  ];

  return (
    <div ref={mapRef} className="mt-16 p-8 bg-white rounded-lg shadow-md border border-family-secondary/20" 
         aria-label="Interactive journey map" role="region">
      <h3 className="text-2xl font-serif mb-6 text-center text-family-secondary">My Journey Path</h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
        {locations.map((location, index) => (
          <div 
            key={location.id}
            className={`map-location text-center transition-all duration-300 ${activeStep >= index ? 'opacity-100' : 'opacity-60'}`}
            onMouseEnter={() => setActiveStep(index)}
            onFocus={() => setActiveStep(index)}
            role="button"
            tabIndex="0"
            aria-label={`${location.name}, step ${location.id}`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-2 transition-all ${
              activeStep >= index 
                ? 'bg-family-primary scale-110' 
                : 'bg-family-secondary/50'
            }`}>
              <span className="font-bold" aria-hidden="true">{location.id}</span>
            </div>
            <p className="font-sans font-medium" aria-label={location.name}>{location.name}</p>
            <p className="text-sm text-gray-600 mt-1" aria-label={location.description}>{location.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4" aria-label="Language badges">
        {languages.map((lang) => (
          <span 
            key={lang.id}
            className="bg-history-bg px-4 py-2 rounded-full text-sm transition-all hover:bg-family-primary hover:text-white cursor-pointer"
            role="button"
            tabIndex="0"
            aria-label={`Language: ${lang.name}`}
          >
            {lang.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// Journey Section Component
const JourneySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const adaptingRef = useRef(null);
  const contentContainerRef = useRef(null);

  useGSAP(() => {
    // Title animation
    if(titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
      });
    }

    // Content animation
    if(contentRef.current) {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.2
      });
    }

    // Adapting and growing section animation
    if(adaptingRef.current) {
      gsap.from(adaptingRef.current, {
        scrollTrigger: {
          trigger: adaptingRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });
    }

    // Content container animation
    if(contentContainerRef.current) {
      gsap.from(contentContainerRef.current, {
        scrollTrigger: {
          trigger: contentContainerRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.3
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-family-bg text-family-text relative">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-4xl font-serif mb-12 text-family-secondary text-center">New Horizons: My Journey</h2>
        
        <div ref={contentRef} className="mb-12 text-center">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            My early childhood in Kazakhstan is filled with warm memories which I'm really grateful for. 
            In 2018, at the age of nine, my family and I moved to Ottawa, Canada, which was one of the biggest 
            turning points of my life. We moved to Canada because we sought better opportunities and a cleaner 
            environment due to my asthma.
          </p>
          
          <div className="bg-family-secondary/10 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              After that, in 2021, when I was 12 years old, my family relocated to Gatineau, Quebec, 
              a French speaking region. From ages 12-14, I went to a French school there. At the age of 16, I'm back in Ottawa.
            </p>
          </div>
        </div>
        
        <h3 ref={adaptingRef} className="text-3xl font-serif mb-8 text-family-secondary text-center">ADAPTING AND GROWING</h3>

        <div ref={contentContainerRef} className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-family-secondary/10 p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-center">
                Now at 17, I am aiming to study international relations. As someone who went to school with 3 different
                language of instructions: English, French and Russian, and being exposed to Kazakh language from the childhood,
                I am fascinating about learning about different cultures and diversity of this world.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./images/avatar2.png"
              alt="International Relations"
              className="w-full max-w-md h-96 object-contain rounded-xl border-4 border-family-primary shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Legacy Section Component
const LegacySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const wisdomRef = useRef(null);
  const endingRef = useRef(null);

  useGSAP(() => {
    // Title animation
    if(titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 1.2,
        opacity: 0,
        scale: 0.9,
        ease: "power3.out",
      });
    }
    
    // Content animation
    if(contentRef.current) {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "power3.out",
        delay: 0.2
      });
    }
    
    // Wisdom section animation
    if(wisdomRef.current) {
      gsap.from(wisdomRef.current, {
        scrollTrigger: {
          trigger: wisdomRef.current,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "power3.out",
        delay: 0.3
      });
    }
    
    // Ending animation
    if(endingRef.current) {
      gsap.from(endingRef.current, {
        scrollTrigger: {
          trigger: endingRef.current,
          start: "top 90%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
        delay: 0.4
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-[#F4E4D7] to-[#D4A574] text-family-text relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 ref={titleRef} className="text-4xl font-serif mb-12 text-family-text">LEGACY</h2>
        
        <div className="bg-gradient-to-br from-family-primary/10 to-history-primary/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-family-primary/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-family-primary to-transparent"></div>
          <div className="absolute top-0 left-0 w-32 h-32 -mt-16 -ml-16 bg-family-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 -mb-16 -mr-16 bg-history-primary/10 rounded-full blur-xl"></div>

          <p ref={contentRef} className="text-lg leading-relaxed mb-6 relative z-10 font-serif text-family-text">
            As someone who has always had the fortune to grow up surrounded by a wonderful support system and a thriving culture,
            I cannot help feeling grateful for everything I was given. I look up to my ancestors' qualities of strength, and resilience,
            which they all share.
          </p>

          <p ref={wisdomRef} className="text-lg leading-relaxed mb-6 relative z-10 font-serif text-family-text italic border-l-4 border-family-primary pl-4 py-2 bg-family-bg/30 rounded-r-lg">
            The wisdom that I gather from their life stories is that there is no challenge that cannot be overcome by hard work,
            bravery and persistence. As I continue to go through life and try to reach my goals, I will continue pushing myself
            in my purpose, adapting to the challenges ahead and most importantly, keeping hope like my ancestors did in their tough times.
          </p>

          <div ref={endingRef} className="mt-8 pt-6 border-t border-family-secondary/40 relative z-10">
            <div className="flex items-center">
              <div className="h-0.5 bg-gradient-to-r from-transparent to-family-primary w-full mr-4"></div>
              <p className="text-xl font-serif italic text-family-text font-semibold tracking-wide">The thread of perseverance continues...</p>
              <div className="h-0.5 bg-gradient-to-l from-transparent to-family-primary w-full ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Golden Thread Component
const GoldenThread = () => {
  const threadRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    // Animate the thread along the page as user scrolls
    if(pathRef.current) {
      gsap.set(pathRef.current, { drawSVG: 0 });

      gsap.to(pathRef.current, {
        drawSVG: true,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });
    }
  }, { scope: threadRef });

  return (
    <div 
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none z-10 hidden md:block overflow-visible"
      aria-hidden="true"
      role="presentation"
    >
      <svg 
        ref={threadRef}
        className="w-1 h-full"
        viewBox="0 0 2 10000" 
        preserveAspectRatio="none"
        focusable="false"
        role="img"
        aria-label="Visual thread connecting the different sections"
      >
        <path
          ref={pathRef}
          d="M1,0 L1,10000"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default App;