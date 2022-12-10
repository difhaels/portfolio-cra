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

      <div className="flex items-center justify-center gap-14">
        <div className="flex items-center">
          <img src={html} width="60" className="mr-2" />
          <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
            <div className="bg-primary w-[60%] h-[9px] rounded-full"></div>
          </div>
          <h1 className="p-3">60%</h1>
        </div>
        <div className="flex items-center">
          <img src={css} width="60" className="mr-2" />
          <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
            <div className="bg-primary w-[60%] h-[9px] rounded-full"></div>
          </div>
          <h1 className="p-3">60%</h1>
        </div>
        <div className="flex items-center">
          <img src={html} width="60" className="mr-2" />
          <div className="w-[200px] h-4 border-4 border-slate-600 flex items-center rounded-full">
            <div className="bg-primary w-[60%] h-[9px] rounded-full"></div>
          </div>
          <h1 className="p-3">60%</h1>
        </div>
      </div>
    </div>
  );
}
