document.addEventListener("DOMContentLoaded", function () {
    const projects = ["Blurry Loading", "Expanding Cards"];

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
