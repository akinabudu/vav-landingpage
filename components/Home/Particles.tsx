'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesPage = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      backgroundMask: {
        enable: true,
        cover: {
          value: {
            r: 0,
            g: 0,
            b: 0
          }
        }
      },
      background: {
        image: "url('https://particles.js.org/images/background.jpg')",
        size: "100% 100%",
        repeat: "no-repeat"
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        color: {
          value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
          animation: {
            enable: true,
            speed: 30
          }
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out"
          },
          size: true,
          speed: {
            min: 1,
            max: 3
          }
        },
        number: {
          value: 100,
          density: {
            enable: true
          }
        },
        opacity: {
          value: 1
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        shape: {
          type: ["circle", "square", "polygon"],
          options: {
            polygon: [
              {
                sides: 5
              },
              {
                sides: 6
              }
            ]
          }
        },
        size: {
          value: {
            min: 3,
            max: 5
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 30
          },
          enlighten: {
            enable: true,
            value: 30
          },
          enable: true,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15
          }
        }
      
    }
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticlesPage