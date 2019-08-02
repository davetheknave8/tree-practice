console.log('JS');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', onReady())


function onReady(){
    setTimeout(trunk, 500);
    setTimeout(branchOne, 1000);
    setTimeout(branchTwo, 1500);
    setTimeout(branchThree, 2000);
    setTimeout(branchFour, 2500);
    setTimeout(branchFive, 3000);
}

function createTree(){
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 20;
    ctx.moveTo(450, 250);
    ctx.lineTo(250, 260);
}

function trunk(){
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(250, 475);
    ctx.lineTo(250, 250);
    ctx.strokeStyle ='#361703';
    ctx.stroke();
}

function branchOne() {
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(100, 100);
    ctx.lineTo(250, 260);
    ctx.stroke();
}

function branchTwo() {
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(400, 100);
    ctx.lineTo(250, 260);
    // setTimeout(() => { ctx.stroke(); }, 10000);
    ctx.stroke();
}

function branchThree() {
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(250, 50);
    ctx.lineTo(250, 250);
    // setTimeout(() => { ctx.stroke(); }, 10000);
    ctx.stroke();
}

function branchFour() {
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(50, 250);
    ctx.lineTo(250, 260);
    // setTimeout(() => { ctx.stroke(); }, 10000);
    ctx.stroke();
}

function branchFive() {
    const canvas = document.getElementById('canvasTwo');
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 20;
    ctx.moveTo(450, 250);
    ctx.lineTo(250, 260);
    // setTimeout(() => { ctx.stroke(); }, 10000);
    ctx.stroke();
}