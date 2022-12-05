// 운동복 구입 문제
// 웹에 오픈된 사례가 없네요
// https://ssyeo.notion.site/GitHub-9da0d7e4ee0d4060b9bf3cf138b3518e

function sports_wear(color, prices) {
  var colorUp = [];
  var colorDn = [];
  var n_user = 0;
  var cnt_same = 0;
  var cnt_none = 0;
  var total_amount = 0;

  for (var item of color) {
    colorUp[n_user] = item.charAt(0);
    colorDn[n_user] = item.charAt(1);
    n_user++;
  }

  colorUp.sort();
  colorDn.sort();

  for (var i = 0; i < n_user; i++) {
    if (colorUp[i] == "X") continue;

    for (var j = 0; j < n_user; j++) {
      if (colorDn[j] == "X") continue;

      if (colorUp[i] == colorDn[j]) {
        cnt_same++;
        colorUp[i] = "X";
        colorDn[j] = "X";
        break;
      }
    }
  }

  var cnt_none = n_user - cnt_same;
  var rate = prices[1] / prices[0];

  if (rate <= 2) total_amount = cnt_same * prices[0] + cnt_none * prices[1];
  else {
    total_amount = cnt_same * prices[0] + cnt_none * prices[0] * 2;
  }

  return total_amount;
}

console.log("\n\n===운동복 구입===");

var c1 = ["RG", "WR", "BW", "GG"];
var p1 = [5000, 6000];
console.log(c1, p1);
console.log(sports_wear(c1, p1));

var c2 = ["RG", "WR", "BW", "GG"];
var p2 = [2000, 6000];
console.log(c2, p2);
console.log(sports_wear(c2, p2));

var c3 = ["BW", "RY", "BY"];
var p3 = [9000, 10000];
console.log(c3, p3);
console.log(sports_wear(c3, p3));

var c4 = ["BB", "GY", "YG", "BR"];
var p4 = [5000, 7000];
console.log(c4, p4);
console.log(sports_wear(c4, p4));
