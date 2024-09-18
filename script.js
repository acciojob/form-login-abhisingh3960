function getFormvalue() {
    let form = document.getElementById('form1');
    let formData = new FormData(form); // Pass the form element, not a string
    let fname = formData.get('fname');
    let lname = formData.get('lname');
    let fullName = fname + " " + lname;
    alert(fullName);
}
