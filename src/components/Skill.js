import html from "./img/logo/html.svg";
import css from "./img/logo/css.svg";
import javascript from "./img/logo/javascript.svg";
import bootstrap from "./img/logo/bootstrap.svg";
import tailwindcss from "./img/logo/tailwindcss.svg";
import react from "./img/logo/react.svg";
import github from "./img/logo/github.svg";
import git from "./img/logo/git.svg";
import vscode from "./img/logo/vscode.svg";

export default function Skill() {
  return (
    <div className="container">
      <h1 className="text-5xl mt-10 text-primary font-bold text-center">My Skill</h1>

      <div className="pt-14 flex items-center justify-center gap-8">
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center ">
            <img src={html} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[95%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">95%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">i'm pretty good at html, </h1>
          <h1 className="flex justify-center text-lg ">i also almost master all elements in html</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={css} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[90%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">90%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">i'm pretty good at css, </h1>
          <h1 className="flex justify-center text-lg ">i know what i'm doing</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={javascript} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[30%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">30%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">Still learning, </h1>
          <h1 className="flex justify-center text-lg ">still don't know what i'm doing</h1>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center gap-8">
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={bootstrap} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[40%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">40%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">seldom use it, </h1>
          <h1 className="flex justify-center text-lg ">maybe i forgot</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={tailwindcss} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[90%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">90%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">already accustomed, </h1>
          <h1 className="flex justify-center text-lg ">my main css frameworks</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={react} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[10%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">10%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">my main js library, </h1>
          <h1 className="flex justify-center text-lg ">but still learning</h1>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center gap-8">
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={vscode} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[80%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">80%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">my main code editor, </h1>
          <h1 className="flex justify-center text-lg ">best code editor</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={git} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[20%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">20%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">Still learning, </h1>
          <h1 className="flex justify-center text-lg ">no caption</h1>
        </div>
        <div className="border-4 bg-purple-200 rounded-xl p-5 ">
          <div className="flex items-center">
            <img src={github} width="60" className="mr-2" />
            <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
              <div className="bg-primary w-[45%] h-[9px] rounded-full"></div>
            </div>
            <h1 className="p-3">45%</h1>
          </div>
          <h1 className="flex justify-center text-lg pt-4">use it often, </h1>
          <h1 className="flex justify-center text-lg ">but not for teamwork</h1>
        </div>
      </div>
    </div>
  );
}
