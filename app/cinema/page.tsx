"use client";
import SectionTitle2 from "../components/common/SectionTitle2";
import SectionTitle from "../components/common/SectionTitle";
import AbissiniaMovies from "../components/common/AbissiniaMovies";
import Description from "../components/common/Description";

const Cinema = () => {
  return (
    <>
      <SectionTitle text="Cinema Services" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <Description />
        <div className="lg:col-span-4 lg:pl-4 px-4">
          <div>
            <SectionTitle2 text="Abissinia Movies" />
            <AbissiniaMovies />
          </div>
          <div>
            <SectionTitle2 text="Abissinia Cinema" />
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Cinema Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3542106530117!2d38.738164773673205!3d9.03141658895392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853e15e83f87%3A0x3e4c1ea5319d99a1!2zQ2luZW1hIFJhcyB8IE1lcmthdG98IOGIsuGKkuGImyDhiKvhiLUgfCDhiJjhiK3hiqvhibY!5e0!3m2!1sen!2set!4v1716022815747!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cinema;
