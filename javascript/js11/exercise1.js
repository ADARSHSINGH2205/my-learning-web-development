let boxes = document.querySelectorAll(".box");

// random color
boxes.forEach(box => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = color;
});

// tilt effect
boxes.forEach(box => {

    box.addEventListener("mousemove", (e) => {

        let rect = box.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        

        let centerX = rect.width / 2;
        let centerY = rect.height / 2;

        let dx = x - centerX;
        let dy = y - centerY;

        let rotateX = dy / 10;
        let rotateY = -dx / 10;

        box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

});