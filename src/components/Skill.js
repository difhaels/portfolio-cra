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
      <img src={css} width="50" />
    </div>
  );
}
