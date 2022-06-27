// import Image from "next/image";

// import logo from "../../public/images/dok-logo.png";

/// Alternatively use Logos from your own source.

// import Link from "next/link";
/// Use anchor tags or Link according to your back-end

type Props = {
  element: JSX.Element;
};

let Navbar = ({ element }: Props): JSX.Element => {
  return (
    <>
      <section className="navbar bg-base-100">
        <section className="navbar-start">{element}</section>
        <section className="navbar-center">
          <a href="/">
            <section className="normal-case font-bold hidden text-gray-400 hover:text-white lg:flex lg:place-content-center md:flex md:place-content-center text-xl btn btn-ghost">
              Data on Kubernetes
            </section>
          </a>
        </section>
        <section className="navbar-end">
          <section className="btn btn-rectangle btn-ghost m-2 p-auto">
            <a href="/">
              {/* <img
                src={logo}
                alt="DoK Logo"
                width={"130px"}
                height={"45px"}
              /> */}
            </a>
          </section>
        </section>
      </section>
      <section className="h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" />
      {/*  Apply colours accordingly! */}
    </>
  );
};

export default Navbar;
