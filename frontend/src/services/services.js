
export function filterServices() {
    let input, filter, contentList, list, name, i, txtValue;
    input = document.querySelector(".searchInput");
    filter = input.value.toUpperCase();
    contentList = document.querySelector(".content-list");
    list = contentList.getElementsByClassName("list");
    for (i = 0; i < list.length; i++) {
        name = list[i].getElementsByTagName("div")[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}