import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import "../css/Animated.css"

function Marrige() {
  const [refX, inViewX] = useInView({ triggerOnce: true });
  const [refY, inViewY] = useInView({ triggerOnce: true });
  const [refZ, inViewZ] = useInView({ triggerOnce: true });

  const link = "https://res.cloudinary.com/dk1eug9ms/image/upload/v1701287046/cassia/Untitled_rjjvzb.jpg"

  return (
    <>
      <div className="flex justify-center mt-8 mb-8">
        <div className="w-full max-w-screen-lg mt-3">
          <div 
          style={{ backgroundImage: "url(https://res.cloudinary.com/dk1eug9ms/image/upload/v1701287046/cassia/Untitled_rjjvzb.jpg)" }}
          className="flex flex-col sm:flex-row justify-between animated-grid dimming-bg rounded-xl shadow-sm   ">
            <div
              className={`w-full sm:w-[50%] dimming-bg p-2  mb-4 sm:mb-0 content-x ${inViewX ? 'content-x' : ''}`}
              ref={refX}
            >
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                  <h4 className="text-black font-medium text-2xl">Birth Day</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="https://thumbs.dreamstime.com/b/indian-children-birthday-6277900.jpg"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                  </div>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div
              className={`w-full sm:w-[50%] pt-2 pb-2 pe-2 content-xr ${inViewY ? 'content-xr' : ''}`}
              ref={refY}
            >
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                  <h4 className="text-black font-medium text-2xl">Naming Ceremoney</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="https://i.ytimg.com/vi/NYvx2BUbjvE/maxresdefault.jpg"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                  </div>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Marrige;
