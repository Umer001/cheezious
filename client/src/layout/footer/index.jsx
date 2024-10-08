import React from "react";
import { Footer } from "flowbite-react";
const AppFooter = () => {
  return (
    <Footer className="shadow-none p-4">
      <div className="w-full">
        <div className="grid w-full  justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <img
              src="https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainLogo.c4a33b22.png&w=640&q=75"
              className="mr-3 w-[140px] rounded"
              alt="Flowbite Logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright href="#" by="Cheezious" year={2023} />
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
