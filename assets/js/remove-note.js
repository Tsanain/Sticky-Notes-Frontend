function removenote(note_number) {
    var note_name = ".note" + note_number;
    document.querySelector(note_name).remove();
}
