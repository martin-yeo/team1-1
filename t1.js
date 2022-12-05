// 배달앱
// https://webcoding-start.tistory.com/33

function store_process(infos, actions) {
    var answer = [];
    var user = []; var n_user = 0;
    var user_action = []; var n_action = 0;
    var user_login = false;
    var cart_on = false;
    
    for(var idpwd of infos) {
        user[n_user] = idpwd.split(' ');
        n_user++;
    }

    for(var item of actions) {
        user_action[n_action] = item.split(' ');
        n_action++;
    }

    for(var i=0; i < n_action; i++) {
        switch(user_action[i][0]) {
            case "LOGIN" : 
                if (user_login) {
                    answer[i] = false;
                    break;
                }
                for(var j=0; j < n_user; j++) {
                    if(user[j][0] == user_action[i][1] && user[j][1] == user_action[i][2]) {
                        user_login = true;
                        answer[i] = true;
                        break;
                    }
                }
                if(j == n_user) answer[i] = false;
                break;
            case "ADD" :
                if(user_login) {
                    answer[i] = true;
                    cart_on = true;
                } else {
                    answer[i] = false;
                }
                break;
            case "ORDER" :
                if(user_login && cart_on) {
                    answer[i] = true;
                    cart_on = false;
                } else {
                    answer[i] = false;
                }
                break;
        }
    }
    
    return answer;
}

console.log("\n\n===배달앱===");

var login_1 = ["kim password", "lee abc" ];
var actions_1 = ["ADD 30", "LOGIN kim abc", "LOGIN lee password", "LOGIN kim password", "LOGIN kim password", "ADD 30", "ORDER", "ORDER", "ADD 40", "ADD 50"];
// [false, false, false, true, false, true, true, false, true, true]
console.log(login_1, actions_1);
console.log(store_process(login_1, actions_1));


var login_2 = ["kim password", "lee abc" ];
var actions_2 = ["LOGIN lee abc", "LOGIN kim password"];
// [true, false]
console.log(login_2, actions_2);
console.log(store_process(login_2, actions_2));
console.log(store_process(login_2, actions_2));