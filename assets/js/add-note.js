var note_number = 2;

function addnote() {
    //event.preventDefault();
    document.querySelector(".notes-box").insertAdjacentHTML(
        "beforeend", 
        '<div class="col-md-3 float-left note' 
        + note_number +
         '"><div class="sticky green-border"><section class="sticky-header gray-color green-bg green-border text-light"><div class="sticky-header-right float-right"><a onclick="removenote(' 
         + note_number +
          ');" class="remove-note"><span class="fas fa-lg fa-trash-alt"></span></a></div><div class="sticky-header-left float-left"><a onclick="addnote();" class="add-note"><span class="fas fa-lg fa-plus"></span></a></div><div class="clearfix"></div></section><section class="sticky-content"><textarea id ="textarea-color" placeholder="Enter note here"></textarea></section></div></div>');
    note_number = note_number + 1;
};
