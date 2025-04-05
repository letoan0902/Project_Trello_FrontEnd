let users = localStorage.getItem("users");
if(users){
    users=JSON.parse(users);
} else {
    users = [
        {
          id: 1,
          username: "letoan242",
          email: "trinhhanh261293@gmail.com",
          password: "12345678",
          created_at: "2025-02-28T12:00:00Z",
          boards: [
            {
              id: 101,
              title: "Dự án Website",
              description: "Quản lý tiến độ dự án website",
              backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/640px-Cat_August_2010-4.jpg",
              is_starred: true,
              is_closed: false,
              created_at: "2025-02-28T12:30:00Z",
              lists: [
                {
                  id: 201,
                  title: "Việc cần làm",
                  created_at: "2025-02-28T13:00:00Z",
                  tasks: [
                    {
                      id: 301,
                      title: "Thiết kế giao diện",
                      description: "Tạo wireframe cho trang chủ",
                      status: "pending",
                      due_date: "2025-03-05T23:59:59Z",
                      tag: [
                        {
                          id: 401,
                          content: "Urgent",
                          color: "#fff"
                        }
                      ],
                      created_at: "2025-02-28T13:30:00Z"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
};


let idNewTask = localStorage.getItem("idNewTask");
if(idNewTask){
    idNewTask=JSON.parse(idNewTask);
} else {
    idNewTask = 301;
}


let idNewList = localStorage.getItem("idNewList");
if(idNewList){
    idNewList=JSON.parse(idNewList);
} else {
    idNewList = 201;
}

let idNewBoard = localStorage.getItem("idNewBoard");
if(idNewBoard){
    idNewBoard=JSON.parse(idNewBoard);
} else {
    idNewBoard = 101;
}

let user = localStorage.getItem("user");
if(user){
    user=JSON.parse(user);
} else {
    let currentPath = window.location.pathname;
    if (currentPath !== "/Project-Trello/pages/signup.html" && currentPath !== "/Project-Trello/pages/login.html") {
        window.location.href = "/Project-Trello/pages/login.html";
    }
}

let boardId = localStorage.getItem("boardId");
if(boardId){
    boardId = JSON.parse(boardId);
} else {
    boardId = -1;
    saveData();
    window.location.href = "../pages/index.html"
}

let openStarredBoards = localStorage.getItem("openStarredBoards");
if(openStarredBoards){
    openStarredBoards = JSON.parse(openStarredBoards);
} else {
    openStarredBoards = false;
    saveData();
}

let openClosedBoards = localStorage.getItem("openClosedBoards");
if(openClosedBoards){
    openClosedBoards = JSON.parse(openClosedBoards);
} else {
    openClosedBoards = false;
    saveData();
}

let openBoards = localStorage.getItem("openBoards");
if(openBoards){
    openBoards = JSON.parse(openBoards);
} else {
    openBoards = false;
    saveData();
}


function checkData(value, type, value2){
    if(type=="email"){
        let regexMail = /^[a-zA-Z](?!.*\.\.)[a-zA-Z0-9._%+-]*[a-zA-Z0-9]@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;
        if(value==""){
            return "Email không được bỏ trống";
        } else if(value.length<6||value.length>254){
            return "Email phải từ 6-254 ký tự";
        } else if(regexMail.test(value) != true){
            return "Email không đúng định dạng";
        } else {
            return "valid";
        }
    } else if(type=="password"){
        if(value==""){
            return "Mật khẩu không được bỏ trống";
        } else if(value.length<8){
            return "Mật khẩu phải từ 8 ký tự trở lên"
        } else {
            return "valid";
        }
    } else if(type=="user"){
        user = users.find((element)=> element.email == value);
        if(!user){
            return "Email không tồn tại";
        } else if(user.password!=value2){
            return "Sai mật khẩu";
        } else {
            localStorage.setItem("user",JSON.stringify(user));
            return "valid";
        }
    } else if(type=="username"){
        if(value==""){
            return "Username không được để trống";
        } else {
            return "valid";
        }
    } else if(type=="userSignUp"){
        let checkEmail = users.find((element)=> element.email == value);
        let checkUsername = users.find((element)=> element.username == value2);
        if(checkEmail){
            return "Email đã tồn tại";
        } else if(checkUsername){
            return "Username đã tồn tại";
        } else {
            return "valid";
        }
    } else if(type=="title"){
        if(value==""){
            return "Tiêu đề không được để trống";
        } else {
            return "valid";
        }
    }
}


let dataBackgrounds = ["../css/data/images/board1.jpg",
    "../css/data/images/board2.jpg",
    "../css/data/images/board3.jpg",
    "../css/data/images/board4.jpg",
    "linear-gradient(123deg, #ffb100 0%, #fa0c00 100%)",
    "linear-gradient(123deg, #2609ff 0%, #d20cff 100%)",
    "linear-gradient(123deg, #00ff2f 0%, #00ffc8 100%)",
    "linear-gradient(123deg, #00ffe5 0%, #004bfa 100%)",
    "linear-gradient(123deg, #ffa200 0%, #edfa00 100%)",
    "linear-gradient(123deg, #ff00ea 0%, #fa0c00 100%)"];

function saveData(){
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("idNewTask", JSON.stringify(idNewTask));
    localStorage.setItem("idNewList", JSON.stringify(idNewList));
    localStorage.setItem("idNewBoard", JSON.stringify(idNewBoard));
    localStorage.setItem("boardId", JSON.stringify(boardId));
    localStorage.setItem("openStarredBoards", JSON.stringify(openStarredBoards));
    localStorage.setItem("openClosedBoards", JSON.stringify(openClosedBoards));
    localStorage.setItem("openBoards", JSON.stringify(openBoards));
}