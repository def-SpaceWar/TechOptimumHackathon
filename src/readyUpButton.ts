export function setupButtons() {
    const readyBtn: HTMLButtonElement = document.querySelector("#btn-1")!;
    const upBtn: HTMLButtonElement = document.querySelector("#btn-2")!;

    let ready = false;
    let up = false;

    readyBtn.onclick = () => {
        readyBtn.disabled = true;
        readyBtn.childNodes[1].remove();
        ready = true;
        if (ready && up) {
            window.location.href += "quiz/";
        }

        if (document.querySelector("child-shop")) {
            document.querySelector("child-shop")!.remove();
        }
    };

    document.addEventListener("keydown", (e) => {
        if (e.key == "a") {
            readyBtn.disabled = true;
            readyBtn.childNodes[1].remove();
            ready = true;

            if (ready && up) {
                window.location.href += "quiz/";
            }

            if (document.querySelector("child-shop")) {
                document.querySelector("child-shop")!.remove();
            }
        }
    });

    upBtn.onclick = () => {
        upBtn.disabled = true;
        upBtn.childNodes[1].remove();
        up = true;

        if (ready && up) {
            window.location.href += "quiz/";
        }

        if (document.querySelector("adult-shop")) {
            document.querySelector("adult-shop")!.remove();
        }
    };

    document.addEventListener("keydown", (e) => {
        if (e.key == "l") {
            upBtn.disabled = true;
            upBtn.childNodes[1].remove();
            up = true;

            if (ready && up) {
                window.location.href += "quiz/";
            }

            if (document.querySelector("adult-shop")) {
                document.querySelector("adult-shop")!.remove();
            }
        }
    });
}

export function fadeButtons() {
    const readyBtn: HTMLButtonElement = document.querySelector("#btn-1")!;
    const upBtn: HTMLButtonElement = document.querySelector("#btn-2")!;
    const shopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-shop")!;

    let opacity = 1.0;
    const fading = setInterval(() => {
        opacity -= 0.01;

        readyBtn.style.opacity = opacity.toString();
        upBtn.style.opacity = opacity.toString();

        shopButtons[0].style.opacity = opacity.toString();
        shopButtons[1].style.opacity = opacity.toString();

        if (opacity <= 0) {
            clearInterval(fading);
            readyBtn.remove();
            upBtn.remove();
        }
    }, 10);
}
