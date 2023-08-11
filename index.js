const Menus = [
  {
    label: "Home",
    icon: "/icons/_summary.svg",
    path: "/",
  },
  {
    label: "Property Summary",
    icon: "/icons/_home.svg",
    path: "/summary",
  },
  {
    label: "Comparables",
    icon: "/icons/_comparables.svg",
    path: "/comparables",
  },
  {
    label: "Evaluation",
    icon: "/icons/_evaluation.svg",
    path: "/evaluations",
  },
  {
    label: "Properties",
    icon: "/icons/_properties.svg",
    path: "/properties",
  },
  {
    label: "Loans",
    icon: "/icons/_loans.svg",
    path: "/loans",
  },
  {
    label: "Research",
    icon: "/icons/_research.svg",
    path: "/research",
  },
  {
    label: "Workspace",
    icon: "/icons/_properties.svg",
    path: "/workspace",
  },
];

const Actions = [
  {
    label: "Research",
    icon: "/icons/question.svg",
    path: "/research",
  },
  {
    label: "Workspace",
    icon: "/icons/user.svg",
    path: "/workspace",
  },
];

const onClick = (path) => {
  //actions will do here :))
  console.log(path);
};
const renderSideBar = () => {
  const navs = document.querySelector(".sidebar-navs");
  const actions = document.querySelector(".sidebar-actions");

  Menus?.forEach((el, idx) => {
    let button = document.createElement("img");
    button.src = el.icon;
    button.className = "sidebar-element";
    button.addEventListener("click", () => onClick(el.path));
    navs.appendChild(button);
  });

  Actions?.forEach((el, idx) => {
    let button = document.createElement("img");
    button.src = el.icon;
    button.className = "sidebar-element";
    button.addEventListener("click", () => onClick(el.path));
    actions.appendChild(button);
  });
};

renderSideBar();
