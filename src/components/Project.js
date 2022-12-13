import emote404 from "./img/emote404.jpg";

export default function Project() {
  return (
    <div>
      <h1 className="text-5xl mt-10 text-primary font-bold text-center">Projects</h1>
      <div className="flex justify-center my-72">
        <img src={emote404} alt="404" width="200" />
      </div>
    </div>
  );
}
