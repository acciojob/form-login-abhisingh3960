function getFormvalue() {
    let fname = document.querySelector("input[name='fname']").value;
    let lname = document.querySelector("input[name='lname']").value;
    let fullName = fname + " " + lname;
    alert(fullName);
}
