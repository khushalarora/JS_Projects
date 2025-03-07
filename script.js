document.addEventListener("DOMContentLoaded", function () {
    const projects = ["Split Landing Page", "Blurry Loading", "Form Input Wave", "Hidden Search", "Progress Steps", "Expanding Cards", "Rotating Navigation", "Scroll Animation", "Sound Board"];
    const list = document.getElementById("project-list");
    projects.forEach((project) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `./${project}/index.html`;
        a.textContent = project;
        li.appendChild(a);
        list.appendChild(li);
    });
});
