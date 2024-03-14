import * as HoverCard from "@radix-ui/react-hover-card";
import {
  FaGithub,
  FaBehanceSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const NavigationLink = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <HoverCard.Root openDelay={200} closeDelay={200}>
          <HoverCard.Trigger>
            <li className="border-b-2 border-black transition transform ease-in-out delay-50 hover:scale-105 duration-300">
              <a href="">ABOUT</a>
            </li>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content align="center">
              <div className="max-w-[400px] p-5 space-y-3 flex flex-col gap-2 rounded-3xl bg-slate-950 text-[#f75049]">
                <h2 className="font-bold text-lg uppercase">ABOUT ME</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore iusto, veritatis labore accusantium corrupti earum
                  maiores enim voluptatem excepturi ratione tempore architecto!
                  Neque ea facere laudantium, tempore sunt et? Temporibus.
                </p>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root openDelay={200} closeDelay={200}>
          <HoverCard.Trigger>
            <li className="border-b-2 border-black transition transform ease-in-out delay-50 hover:scale-105 duration-300">
              <a href="">WORKS</a>
            </li>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content align="center"></HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>{" "}
        <HoverCard.Root openDelay={200} closeDelay={200}>
          <HoverCard.Trigger>
            <li className="border-b-2 border-black transition transform ease-in-out delay-50 hover:scale-105 duration-300">
              <a href="">CONTACT</a>
            </li>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content align="center">
              <div className="max-w-[400px] p-5 space-y-3 flex flex-col gap-2 rounded-3xl bg-slate-950 text-[#f75049]">
                <h2 className="font-bold text-lg uppercase">CONTACT ME</h2>
                <ul className="flex gap-5 justify-center">
                  <li>
                    <a
                      href="https://github.com/hideakigabriel"
                      target="_blank"
                    >
                      <FaGithub size={28} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gabriel-hideaki/"
                      target="_blank"
                    >
                      <FaBehanceSquare size={28} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/hideaki.productions"
                      target="_blank"
                    >
                      <FaInstagramSquare size={28} />
                    </a>
                  </li>
                  <li>
                    <a href="href=https://www.behance.net/hideakidesign" target="_blank">
                      <FaLinkedin size={28} />
                    </a>
                  </li>
                </ul>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </>
  );
};

export default NavigationLink;
