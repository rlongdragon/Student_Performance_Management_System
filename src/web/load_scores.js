function rank(r, data) {
    const noRepeat = data.filter(function (ele, pos) {
        return data.indexOf(ele) == pos;
    });
    noRepeat.sort(function (a, b) { return b - a });
    return (noRepeat.indexOf(r)) + 1
}

function getResult(num, n) {
    return Math.round(num * Math.pow(10, n)) / Math.pow(10, n);
}

function average(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += parseInt(data[i]);
    }
    avg = (sum / data.length).toFixed(2);
    return avg;
}

function catch_data(data, student_number, time, subject) {
    if (time == "0.1") {
        if (subject == "1") {
            var start_time = new Date(new Date().setDate(new Date().getDate() - time))
            var load_data = []
            for (var i = data[4].length; i > 2; i--) {
                var C = i - 1

                var in_data = []
                var class_score = []
                for (var j = 0; j < 39; j++) {
                    if (data[j + 5][C] != "缺交" && data[j + 5][C] != "缺考") {
                        class_score.push(data[j + 5][C])
                    }
                }
                if (data[student_number + 4][C] == "缺交" || data[student_number + 4][C] == "缺考") {
                    in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], "==", average(class_score), C - 1)
                    //  插入選項 日期         科目        項目        分數                        排名                            平均
                } else {
                    in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], rank(data[student_number + 4][C], class_score), average(class_score), C - 1)
                    //  插入選項 日期         科目        項目        分數                        排名                            平均
                }
                load_data.push(in_data)
                // 加入資料
            }
        }
        else {
            var codeToSubject = {
                "2": "國文",
                "3": "英文",
                "4": "數學",
                "5": "物理",
                "6": "化學",
                // "7":"地科",
                // "8":"生物",
                // "9":"歷史",
                // "10":"地理",
                // "11":"公民"
            }
            var start_time = new Date(new Date().setDate(new Date().getDate() - time))
            var load_data = []
            for (var i = data[4].length; i > 2; i--) {
                var C = i - 1

                if (data[3][C] == codeToSubject[subject]) {
                    var in_data = []
                    var class_score = []
                    for (var j = 0; j < 39; j++) {
                        if (data[j + 5][C] != "缺交" && data[j + 5][C] != "缺考") {
                            class_score.push(data[j + 5][C])
                        }
                    }
                    if (data[student_number + 4][C] == "缺交" || data[student_number + 4][C] == "缺考") {
                        in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], "==", average(class_score), C - 1)
                        //  插入選項 日期         科目        項目        分數                        排名                            平均
                    } else {
                        in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], rank(data[student_number + 4][C], class_score), average(class_score), C - 1)
                        //  插入選項 日期         科目        項目        分數                        排名                            平均
                    }
                    load_data.push(in_data)
                    // 加入資料

                }
            }

        }
    } else if (data != []) {
        if (subject == "1") {
            var start_time = new Date(new Date().setDate(new Date().getDate() - time))
            var load_data = []
            for (var i = data[4].length; i > 2; i--) {
                var C = i - 1
                var test_time = new Date(data[2][C]);
                if (test_time > start_time) {
                    var in_data = []
                    var class_score = []
                    for (var j = 0; j < 39; j++) {
                        if (data[j + 5][C] != "缺交" && data[j + 5][C] != "缺考") {
                            class_score.push(data[j + 5][C])
                        }
                    }
                    if (data[student_number + 4][C] == "缺交" || data[student_number + 4][C] == "缺考") {
                        in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], "==", average(class_score), C - 1)
                        //  插入選項 日期         科目        項目        分數                        排名                            平均
                    } else {
                        in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], rank(data[student_number + 4][C], class_score), average(class_score), C - 1)
                        //  插入選項 日期         科目        項目        分數                        排名                            平均
                    }
                    load_data.push(in_data)
                    // 加入資料
                } else {
                    break;
                }
            }
        }
        else {
            var codeToSubject = {
                "2": "國文",
                "3": "英文",
                "4": "數學",
                "5": "物理",
                "6": "化學",
                // "7":"地科",
                // "8":"生物",
                // "9":"歷史",
                // "10":"地理",
                // "11":"公民"
            }
            var start_time = new Date(new Date().setDate(new Date().getDate() - time))
            var load_data = []
            for (var i = data[4].length; i > 2; i--) {
                var C = i - 1
                var test_time = new Date(data[2][C]);
                if (test_time > start_time) {
                    if (data[3][C] == codeToSubject[subject]) {
                        var in_data = []
                        var class_score = []
                        for (var j = 0; j < 40; j++) {
                            class_score.push(data[j + 5][C])
                        }

                        in_data.push(data[2][C], data[3][C], data[4][C], data[student_number + 4][C], rank(data[student_number + 4][C], class_score), average(class_score), C - 1)
                        //  插入選項 日期         科目        項目        分數                        排名                                          平均
                        load_data.push(in_data)
                        // 加入資料
                    }
                } else {
                    break;
                }
            }
        }
    }
    load_scores(load_data)
}
/**
    load_data = [
        [時間, 科目, 項目, 分數, 排名, 平均]
        ["2022/01/02", "物理", "力矩", 60, 10, 55.55]
        ["2022/01/02", "物理", "力矩", 60, 10, 55.55]
        ["2022/01/02", "物理", "力矩", 60, 10, 55.55]
    ]
*/

function load_scores(load_data) {
    var R = load_data.length;
    var C = 6
    if (R == []) {
        tab = "<div class='no_data' style='background-color: #faa; color: red; font-weight: bold; font-size:40px'>  沒有資料:(</div>"
        var div1 = document.getElementById("return");
        div1.innerHTML = tab;
        return;
    }

    var tab = '<table style="background-color: green;">';
    tab += '<thead style="background-color: rgb(148, 219, 148);"><td style="width: 80px;">時間</td><td style="width: 40px;">科目</td><td style="width: 200px;">項目</td><td style="width: 40px;">分數</td><td>班排</td><td>平均</td><td>ID</td></thead>'
    for (var i = 0; i < R; i++) {

        if (i % 2 == 0) {
            color = "#caffc4"
        } else {
            color = "#a6e79e"
        }

        tab += `<tr class="scores_data" style="background-color: ${color}">`;

        for (var j = 0; j < C; j++) {
            if (j == 3) {
                if (parseInt(load_data[i][j]) < 60) {
                    color = "red"
                } else {
                    color = "blue"
                }
            } else if (j == 4) {
                color = "hsl(" + ((40 - load_data[i][j]) * 3) + ", 100%, 42%)"
            } else if (j == 5) {
                if (parseInt(load_data[i][j]) < 60) {
                    color = "red"
                } else {
                    color = "blue"
                }
            } else {
                color = "black"
            }
            tab += `<td id=\"R${i + 1}C${j + 1}\" style="color: ${color}">${load_data[i][j]}</td>`;
        };
        tab += `<td>${load_data[i][6]}</td>`;
        tab += "</tr>";
    };
    tab += "</table>";
    var div1 = document.getElementById("return");
    div1.innerHTML = tab;

    pas = []
}