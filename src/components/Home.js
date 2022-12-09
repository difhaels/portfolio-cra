import hero from "./img/hero.png";

export default function Home() {
  return (
    <div className="flex flex-wrap mt-40">
      <div className="relative w-full lg:w-1/2">
        <img src={hero} alt="rem" class="mx-auto w-[500px]" />
        <span class="absolute -bottom-[124px] left-[340px] -z-10 -translate-x-1/2">
          <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#C147E9"
              d="M26.9,-35.4C38.4,-28.6,53.8,-25.5,56,-18.3C58.2,-11.1,47.2,0.4,44.7,16.5C42.1,32.6,48.1,53.4,42,58C36,62.5,18,50.7,2.5,47.3C-13,43.9,-26,48.8,-37,45.9C-48,42.9,-57,32.2,-62.9,19.2C-68.8,6.3,-71.5,-8.9,-64.9,-18.5C-58.3,-28.1,-42.2,-32.1,-29.9,-38.6C-17.5,-45.1,-8.7,-54.2,-0.5,-53.5C7.7,-52.7,15.3,-42.2,26.9,-35.4Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
        </span>
      </div>
      <div className="relative w-full lg:w-1/2">
        <div className="absolute left-[320px] w-72 border-4 border-slate-900 ">
          <h1 className="px-5 py-2 text-center   text-xl font-bold">Welcome to my profile</h1>
        </div>
        <h1 className="mt-16 text-right text-4xl font-bold">Hi, I'm Agung Saputra</h1>
        <h1 className="mt-4 text-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quidem laboriosam illum aliquid pariatur ipsa quo, laborum, eligendi, ullam ea totam voluptates adipisci? Aut nihil quis optio, error est, inventore ut,
          aspernatur id quae quidem veritatis incidunt ipsa eius architecto quas molestias impedit cumque praesentium tempora accusantium reiciendis nulla
        </h1>
        <h1 className="mt-10 text-right">Let's Connect</h1>
      </div>
    </div>
  );
}
