let users = localStorage.getItem("users");
if (users) {
  users = JSON.parse(users);
} else {
  users = [
    {
      id: 1,
      name: "Nguyễn Tài Duy",
      gmail: "Duynguyen010503@gmail.com",
      address: "Đông Anh, Hà Nội",
      streaks: 54,
      rank: 10,
      exp: 54,
      kaiwaAI: {
        id: 100,
        name: 
      }
      course: []
    }
  ];
}
let openStarredBoards = localStorage.getItem("openStarredBoards");
let openClosedBoards = localStorage.getItem("openClosedBoards");
let openBoards = localStorage.getItem("openBoards");

let user = localStorage.getItem("user");
let boardId = localStorage.getItem("boardId");
let taskId = localStorage.getItem("taskId");
let listId = localStorage.getItem("listId");

if (user) {
  user = JSON.parse(user);
} else {
  let currentPath = window.location.pathname;
  let filename = currentPath.split('/').pop();
  if (filename != "signup.html" && filename != "login.html") {
    window.location.href = "../pages/login.html";
  }
}

if (openStarredBoards) {
  openStarredBoards = JSON.parse(openStarredBoards);
} else {
  openStarredBoards = false;
}

if (openClosedBoards) {
  openClosedBoards = JSON.parse(openClosedBoards);
} else {
  openClosedBoards = false;
}

if (openBoards) {
  openBoards = JSON.parse(openBoards);
} else {
  openBoards = false;
}

if (boardId) {
  boardId = JSON.parse(boardId);
} else {
  boardId = -1;
  saveData();
  window.location.href = "../pages/index.html";
}

if (taskId) {
  taskId = JSON.parse(taskId);
} else {
  taskId = -1;
  saveData();
  window.location.href = "../pages/index.html";
}

if (listId) {
  listId = JSON.parse(listId);
} else {
  listId = -1;
  saveData();
  window.location.href = "../pages/index.html";
}

function checkData(value, type, value2) {
  if (type == "email") {
    let regexMail =
      /^[a-zA-Z](?!.*\.\.)[a-zA-Z0-9._%+-]*[a-zA-Z0-9]@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;
    if (value == "") {
      return "Email không được bỏ trống";
    } else if (value.length < 6 || value.length > 254) {
      return "Email phải từ 6-254 ký tự";
    } else if (regexMail.test(value) != true) {
      return "Email không đúng định dạng";
    } else {
      return "valid";
    }
  } else if (type == "password") {
    if (value == "") {
      return "Mật khẩu không được bỏ trống";
    } else if (value.length < 8) {
      return "Mật khẩu phải từ 8 ký tự trở lên";
    } else {
      return "valid";
    }
  } else if (type == "user") {
    user = users.find((element) => element.email == value);
    if (!user) {
      return "Email không tồn tại";
    } else if (user.password != value2) {
      return "Sai mật khẩu";
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("boardId", JSON.stringify(-1));
      localStorage.setItem("taskId", JSON.stringify(-1));
      localStorage.setItem("listId", JSON.stringify(-1));
      return "valid";
    }
  } else if (type == "username") {
    if (value == "") {
      return "Username không được để trống";
    } else {
      return "valid";
    }
  } else if (type == "userSignUp") {
    let checkEmail = users.find((element) => element.email == value);
    let checkUsername = users.find((element) => element.username == value2);
    if (checkEmail) {
      return "Email đã tồn tại";
    } else if (checkUsername) {
      return "Username đã tồn tại";
    } else {
      return "valid";
    }
  } else if (type == "title") {
    if (value == "") {
      return "Tiêu đề không được để trống";
    } else {
      return "valid";
    }
  } else if (type == "description") {
    if (value == "") {
      return "Mô tả chi tiết không được để trống";
    } else {
      return "valid";
    }
  } else if(type=="checktitleboard"){
    let boardCheck = user.boards.find(board => board.title == value);
    if(boardCheck){
      return "Tiêu đề không được trùng";
    } else {
      return "valid";
    }
  }
}

let dataBackgrounds = [
  "../css/data/images/board1.jpg",
  "../css/data/images/board2.jpg",
  "../css/data/images/board3.jpg",
  "../css/data/images/board4.jpg",
  "linear-gradient(123deg, #ffb100 0%, #fa0c00 100%)",
  "linear-gradient(123deg, #2609ff 0%, #d20cff 100%)",
  "linear-gradient(123deg, #00ff2f 0%, #00ffc8 100%)",
  "linear-gradient(123deg, #00ffe5 0%, #004bfa 100%)",
  "linear-gradient(123deg, #ffa200 0%, #edfa00 100%)",
  "linear-gradient(123deg, #ff00ea 0%, #fa0c00 100%)",
];

let dataColorLabel = [
  "#BAF3DB",
  "#F8E6A0",
  "#FEDEC8",
  "#FFD5D2",
  "#DFD8FD",
  "#4BCE97",
  "#F5CD47",
  "#FEA362",
  "#F87168",
  "#9F8FEF",
];

saveData();
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  if (user) {
    let userIndex = users.findIndex((element) => element.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...user };
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
  }
  localStorage.setItem("boardId", JSON.stringify(boardId));
  localStorage.setItem("taskId", JSON.stringify(taskId));
  localStorage.setItem("listId", JSON.stringify(listId));
  localStorage.setItem("openStarredBoards", JSON.stringify(openStarredBoards));
  localStorage.setItem("openClosedBoards", JSON.stringify(openClosedBoards));
  localStorage.setItem("openBoards", JSON.stringify(openBoards));
}
