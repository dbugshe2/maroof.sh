import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Maroof Shittu Software Engineer" },
    { name: "description", content: "Welcome to my personal website" },
    {
      name: "keywords",
      content:
        "Software Engineer, Frontend Engineer, Portfolio, HTML, CSS, JavaScript, Typescript, React",
    },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <!-- ==================== Start Loading ==================== --> */}

      <div className="loading">
        <span>C</span>
        <span>o</span>
        <span>m</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span></span>
        <span>S</span>
        <span>o</span>
        <span>o</span>
        <span>n</span>
      </div>

      <div id="preloader"></div>

      {/* <!-- ==================== End Loading ==================== --> */}

      {/* <!-- ==================== Start progress-scroll-button ==================== --> */}

      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* <!-- ==================== End progress-scroll-button ==================== --> */}

      {/* <!-- ==================== Start cursor ==================== --> */}

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* <!-- ==================== End cursor ==================== --> */}

      {/* <!-- ==================== Start Footer ==================== --> */}
      {/* <!-- ==================== End Footer ==================== --> */}
    </div>
  );
}
