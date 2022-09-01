import { Link } from "@remix-run/react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";

const WidgetTitle = ({ children }: { children: string }) => {
  return (
    <h3
      className="text-2xl mb-6 font-bold"
      dangerouslySetInnerHTML={{ __html: children }}
    ></h3>
  );
};

const SocialIcon = ({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-sky-500 transition-all duration-300"
      >
        {children}
      </a>
    </div>
  );
};

const FooterMenus = [
  { url: `/`, title: `About` },
  { url: `/`, title: `Services` },
  { url: `/`, title: `Pricing` },
  { url: `/`, title: `Enquiry` },
  { url: `/`, title: `Terms & Condition` },
  { url: `/`, title: `Privacy Policy` },
];

export const Footer = () => {
  return (
    <div className="relative bg-sky-500 py-12 text-white">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-5 md:mb-0">
            <div className="relative">
              <WidgetTitle>About</WidgetTitle>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, reiciendis.
                </p>
                <p>
                  e.{" "}
                  <a
                    href="mailto:hello.anggara@gmail.com"
                    className="hover:underline"
                  >
                    hello.anggara@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-5 md:mb-0">
            <div className="relative">
              <WidgetTitle>Quick Links</WidgetTitle>
              <div className="relative">
                {FooterMenus && (
                  <div className="flex flex-wrap">
                    {FooterMenus.map((menu, index) => {
                      const { url, title } = menu;
                      return (
                        <div
                          className="w-1/2 mb-3"
                          key={`footer-menu-${index}`}
                        >
                          <Link to={url}>{title}</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-5 md:mb-0">
            <div className="relative">
              <WidgetTitle>Social Links</WidgetTitle>
              <div className="relative">
                <div className="flex flex-wrap space-x-4">
                  <SocialIcon url="https://facebook.com">
                    <FaFacebookF />
                  </SocialIcon>
                  <SocialIcon url="https://instagram.com">
                    <FaInstagram />
                  </SocialIcon>
                  <SocialIcon url="https://github.com">
                    <FaGithub />
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center text-xs mt-9">
          &copy; 2022. Developed by{" "}
          <a href="https://facebook.com/wahyuang" className="hover:underline">
            Wahyu Anggara
          </a>
        </div>
      </div>
    </div>
  );
};
