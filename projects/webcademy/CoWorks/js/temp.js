document.querySelector(".checkbox").addEventListener("change", function () {
    document.querySelector(".btn").disabled = !document.querySelector(".checkbox").checked;
});

