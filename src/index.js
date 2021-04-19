import home from "./pages/home/index.js";
import about from "./pages/about/index.js";
import characters from "./pages/characters/index.js"

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "":
                main.appendChild(home());
                break;
                case "#about":
                    main.appendChild(about());
                    break;
                    case "#characters":
                        main.appendChild(characters());
                        break;
                        default:
                        main.appendChild(home())
        }
    })
}


window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})

