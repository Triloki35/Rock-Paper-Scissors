function checkWinner(a, b) {
    if (a == 0 && b == 2)
        return 1;
    if (a == 1 && b == 0)
        return 1;
    if (a == 2 && b == 1)
        return 1;
    return 0;
}

function findWinner() {

    var resultTable = new Array(4);

    for (var i = 0; i < resultTable.length; i++) {
        var playersWin = new Array(4)

        for (var j = 0; j < 4; j++) {
            if (i == j)
                playersWin[j] = "-";
            else
                playersWin[j] = 0;
        }
        resultTable[i] = playersWin;
    }


    // GENRATING RANDOM NUMBER 

    var randomArr = [];
    for (var k = 0; k < 50; k++) {

        for (var i = 0; i < 4; i++) {
            randomArr[i] = Math.floor(Math.random() * 3);
        }

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i != j) {
                    resultTable[i][j] += checkWinner(randomArr[i], randomArr[j]);
                }
            }
        }

    }

    /********** CHANGING CONTENT OF TABLE **********/

    document.querySelector("#n00").innerHTML = resultTable[0][0];
    document.querySelector("#n01").innerHTML = resultTable[0][1];
    document.querySelector("#n02").innerHTML = resultTable[0][2];
    document.querySelector("#n03").innerHTML = resultTable[0][3];
    document.querySelector("#n10").innerHTML = resultTable[1][0];
    document.querySelector("#n11").innerHTML = resultTable[1][1];
    document.querySelector("#n12").innerHTML = resultTable[1][2];
    document.querySelector("#n13").innerHTML = resultTable[1][3];
    document.querySelector("#n20").innerHTML = resultTable[2][0];
    document.querySelector("#n21").innerHTML = resultTable[2][1];
    document.querySelector("#n22").innerHTML = resultTable[2][2];
    document.querySelector("#n23").innerHTML = resultTable[2][3];
    document.querySelector("#n30").innerHTML = resultTable[3][0];
    document.querySelector("#n31").innerHTML = resultTable[3][1];
    document.querySelector("#n32").innerHTML = resultTable[3][2];
    document.querySelector("#n33").innerHTML = resultTable[3][3];
}


