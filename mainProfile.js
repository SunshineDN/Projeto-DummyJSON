let userInfo = JSON.parse(window.localStorage.getItem("user")) || false;
console.log(userInfo)

function writeUserPageError() {
    return `
    <div class="error">
        <img src="page-not-found.svg" alt="Page not found" class="not_found">
        <h1 style="text-align: center;">User not found!</h1>
        <h3>There must have been an error in the user request, return to the home page!</h3>
        <button onclick="return window.close()">Close</button>
    </div>`
}

function writeUserPage(user) {
    return `
    <h1 style="text-align: center;" class="user_page" >-= User Page =-</h1>
    <main class="container">
        <img class="user_image" src="${user.image}" alt="Profile Picture">
        <div class="info_inp">
            <label for="user_name">Name:</label>
            <input type="text" id="user_name" value="${user.firstName} ${user.lastName}" disabled>
        </div>
        <div class="info_inp">
            <label for="user_username">Username:</label>
            <input type="text" id="user_nick" value="${user.username}" disabled>
        </div>
        <div class="info_inp">
            <label for="user_birthdate">Birthdate:</label>
            <input type="date" id="user_birthdate" value="${user.birthDate}" disabled>
        </div>
        <div class="info_inp">
            <label for="user_gender">Gender:</label>
            <input type="text" id="user_gender" value="${user.gender}" disabled>
        </div>
        <div class="info_inp">
            <label for="user_email">Email:</label>
            <input type="text" id="user_email" value="${user.email}" disabled>
        </div>
        <div class="info_inp">
            <label for="user_phone">Phone:</label>
            <input type="tel" id="user_phone" value="${user.phone}" disabled>
        </div>
    </main>
    `
}

window.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();

    if (userInfo == false || ("message" in userInfo)) {
        document.body.innerHTML = writeUserPageError();
    } else {
        document.body.innerHTML = writeUserPage(userInfo)
    }
})