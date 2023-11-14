'use strict'// e usado para facilitar a localizacao de bugs e erros, tenha o dobro de atencao ao programar
document.addEventListener("DOMContentLoaded", function() {
    var currentContent = null;

    function hideContent(content) {
        if (content) {
            content.style.display = "none";
        }
    }

    function toggleContent(contentId) {
        var content = document.getElementById(contentId);
        if (content === currentContent && content.style.display !== "none") {
            hideContent(content);
            currentContent = null;
        } else {
            hideContent(currentContent);
            content.style.display = "block";
            currentContent = content;
        }
    }

    var buttons = document.querySelectorAll(".item");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var contentId = "content" + this.id.substr(7);
            toggleContent(contentId);
        });
    });
});
