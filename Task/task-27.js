function past(h, m, s){
    //#Happy Coding! ^_^
    var hours = h * 3600000;
    var minuts = m * 60000;
    var seconds = s * 1000;
    var result = hours + minuts + seconds;
    return result; 
};