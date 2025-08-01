class Home {
    constructor() {
        this.body = document.body;
        this.searchBar = document.getElementById("search-bar");
        this.filterBar = document.getElementById("filter-bar");
        this.darkMode = document.getElementById("dark-mode");
        this.name = document.getElementById("name");
        this.card = document.getElementById("card-type");
        this.type = document.getElementById("type");
        this.attribute = document.getElementById("attribute");
        this.format = document.getElementById("format");
        this.filter = document.getElementById("filter");
        this.submit = document.getElementById("submit");
        this.apply = document.getElementById("apply");
        this.reset = document.getElementById("reset");
        this.order = document.getElementById("order");
        this.sort = document.getElementById("sort");
    };

    toggleTheme() {
        this.body.classList.toggle("color-dark");
        this.searchBar.classList.toggle("color-medium");
        this.filterBar.classList.toggle("color-medium");
        this.darkMode.classList.toggle("color-light");
        this.name.classList.toggle("color-light");
        this.card.classList.toggle("color-light");
        this.type.classList.toggle("color-light");
        this.attribute.classList.toggle("color-light");
        this.format.classList.toggle("color-light");
        this.filter.classList.toggle("color-light");
        this.submit.classList.toggle("color-light");
        this.reset.classList.toggle("color-light");
        this.order.classList.toggle("color-light");
        this.apply.classList.toggle("color-light");
        this.sort.classList.toggle("color-light");
    };

    toggleFilterBar = () => {        
        if (this.filterBar.style.marginTop === "59px" || this.filterBar.style.marginTop === "") {
            this.filterBar.style.marginTop = "0px";
            this.gallery.style.marginTop = "-59px"

        }
        else if (this.filterBar.style.marginTop = "0px") {
            this.filterBar.style.marginTop = "59px";
            this.gallery.style.marginTop = "0px"
        }   
    };

    toggleFocus = (id) => {
        var img = document.getElementById(id);
        var modal = document.getElementById("focus-modal");
        var modalContent = document.getElementById("modal-content");

        if (modal.style.display === "none" || modal.style.display === "") {
            modal.style.display = "flex";
            modalContent.src = img.src;
            modalContent.style.width = "500px";
        }
        else {
            modal.style.display = "none";
        }

        modal.onclick = function () {
            modal.style.display = "none";
        };
    };
}