/**
 * Created by 1 on 2017/2/16.
 */

var gamerAmount;
gamerAmount=document.getElementById("gameramount").value;

var killerAmount;
killerAmount=Math.floor(gamerAmount/3.5);

var commonPeopleAmount;
commonPeopleAmount=gamerAmount-killerAmount;


var numberOk; numberOk=true;
function checkInput() {//检查文本框
    var x=Number(gamerAmount);
    numberOk=true;
    if(isNaN(x)){
        alert("请输入数字");
        document.getElementById("gameramount").value=" ";
        numberOk=false;
        return numberOk;
    }
    else {
        if (gamerAmount<4||gamerAmount>18){
        alert("支持游戏人数为：4-18人。");
        document.getElementById("gameramount").value=" ";
        numberOk=false;
        return numberOk;
         }
    }
}


function printNumber() {//获取杀手和平民人数DOM并写入。
    gamerAmount=document.getElementById("gameramount").value;
    killerAmount=Math.floor(gamerAmount/3.5);
    commonPeopleAmount=gamerAmount-killerAmount;
var inputKillerNumber= document.getElementById("m-proprotion-killerNumber");
var inputCommonPeopleNumber= document.getElementById("m-proprotion-commonPeopleNumber");

    inputKillerNumber.innerHTML=killerAmount;
    inputCommonPeopleNumber.innerHTML=commonPeopleAmount;
}




var gamerIdentity = new Array(gamerAmount);
var gamer         = new Array(gamerAmount);
function assignIdentity() {//顺序分配身份
    var i=1;
    for (i=1;i<=killerAmount;i++){
        gamerIdentity[i]="杀手"
    }
    for (i=killerAmount+1;i<=gamerAmount;i++){
        gamerIdentity[i]="平民";
    }
}
assignIdentity();

function resetGamer(){
    var i=1;
    for(i=1;i<=gamerAmount;i++){
        gamer[i]="平民";
    }
}resetGamer();


function assignKillerToGamer() {//为游戏者随机分配杀手
    resetGamer();
        var a=1;
        while(a<=killerAmount){
            var  n=Math.floor(Math.random()*gamerAmount+1);
            if(gamer[n]=="平民"){gamer[n]="杀手";a++;}
}}

var gamerList=document.getElementsByClassName("gamerlist");
function resetList() {for(i=0;i<18;i++){gamerList[i].innerHTML="";}}

function writeGamerIn() {//重置列表，检查输入，排列身份，写入。
    resetList();
    assignKillerToGamer();
    checkInput();
    if(numberOk==true){
        for(i=0;i<gamerAmount;i++){
            gamerList[i].innerHTML="玩家"+(i+1)+"  :  "+gamer[i+1];
        }
    }
}

function printNumberTime() {
    id=window.setInterval(printNumber,300);
}
function clearPrintNumberTime() {
    clearInterval(id);
    writeGamerIn();
}



























