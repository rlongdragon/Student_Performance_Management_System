function main(data, student_number) {
    HTMLstudent_number = document.getElementsByClassName('student_number')
    for(i = 0; i < HTMLstudent_number.length; i++) {
        HTMLstudent_number[i].innerText = data[student_number+4][0];
    }
    HTMLstudent_name = document.getElementsByClassName('student_name')
    for(i = 0; i < HTMLstudent_name.length; i++) {
        HTMLstudent_name[i].innerText = data[student_number+4][1];
    }
    HTMLstudent_rank = document.getElementsByClassName('student_rank')
    for(i = 0; i < HTMLstudent_rank.length; i++) {
        HTMLstudent_rank[i].innerText = data[student_number+47][4];
    }
    HTMLstudent_average = document.getElementsByClassName('student_average')
    for(i = 0; i < HTMLstudent_average.length; i++) {
        HTMLstudent_average[i].innerText = data[student_number+47][3];
    }
    HTMLstudent_total = document.getElementsByClassName('student_total')
    for(i = 0; i < HTMLstudent_total.length; i++) {
        HTMLstudent_total[i].innerText = data[student_number+47][2];
    }
    leaderboard(data, student_number)
}

function leaderboard(data, student_number) {
    var st_number = 0, nd_number = 0, rd_number = 0
    var st_average = 0, nd_average = 0, rd_average = 0
    var st_total = 0, nd_total = 0, rd_total = 0
    var st_name = "", nd_name = "", rd_name = ""
    var previous_total 
    
    for(i = 0; i < 39; i++) {
        if (data[i+48][4] == '1'){
            st_number = data[i+48][0]
            st_average = data[i+48][3]
            st_total = data[i+48][2]
            st_name = data[i+48][1]
            continue
        }
        if (data[i+48][4] == '2'){
            nd_number = data[i+48][0]
            nd_average = data[i+48][3]
            nd_total = data[i+48][2]
            nd_name = data[i+48][1]
            continue
        }
        if (data[i+48][4] == '3'){
            rd_number = data[i+48][0]
            rd_average = data[i+48][3]
            rd_total = data[i+48][2]
            rd_name = data[i+48][1]
            continue
        }
        if (st_number != 0 && nd_number != 0 && rd_number != 0) {
            break
        }
    }

    document.getElementById('st_name').innerText = st_name
    document.getElementById('nd_name').innerText = nd_name
    document.getElementById('rd_name').innerText = rd_name
    
    document.getElementById('st_average').innerText = st_average
    document.getElementById('nd_average').innerText = nd_average
    document.getElementById('rd_average').innerText = rd_average
    
    document.getElementById('st_total').innerText = st_total
    document.getElementById('nd_total').innerText = nd_total
    document.getElementById('rd_total').innerText = rd_total

    if (st_number == student_number){
        document.getElementById('need_score_div').innerHTML = "你是第一名🎉 請繼續保持!"
        document.getElementById('need_score_div').style.backgroundColor = "gold"
    } else if (nd_number == student_number){
        document.getElementById('need_score_div').innerHTML = "你是第二名🎉 你只要再<span>"+ Math.floor(st_total - nd_total) +"</span>分就可以變成第一名了!"
        document.getElementById('need_score_div').style.backgroundColor = "silver"
    } else if (rd_number == student_number){
        document.getElementById('need_score_div').innerHTML = "你是第三名🎉 你只要再<span>"+ Math.floor(nd_total - rd_total) +"</span>分就可以變成第二名了!"
        document.getElementById('need_score_div').style.backgroundColor = "coral"
    } else {
        for(i = 0; i < 39; i++) {
            if (data[i+47][4] == data[student_number+47][4]-1){
                previous_total = data[i+47][2]
                break
            }
        }

        document.getElementById('need_score').innerText = Math.floor(previous_total - data[student_number+47][2])
    }
}