(window.onload = function () {
        document.getElementById("addCircleSuccessively").onclick = addNewCircleSuccessively;
        document.getElementById("addCircleRandomly").onclick = addNewCircleRandomly;

        function addNewCircleSuccessively() {
            var content = document.getElementById("content");
            content.insertBefore(circleGenerator(), content.firstChild);
        }

        function addNewCircleRandomly() {
            var content = document.getElementById("content");
            var circle = circleGenerator();
            circle.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
            circle.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            circle.style.position = "fixed";
            content.insertBefore(circle, content.firstChild);
        }

        function circleGenerator() {
            var minRadius = 10;
            var maxRadius = 100;
            var circle = document.createElement("div");
            var radius = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);
            circle.style.width = radius * 2 + "px";
            circle.style.height = radius * 2 + "px";
            circle.style.borderRadius = radius + "px";
            circle.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + ")";
            return circle;
        }
    }
);
