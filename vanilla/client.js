
// console.log('JS');

// const canvas = document.getElementById('canvasTwo');
// const ctx = canvas.getContext('2d');



// document.getElementById("addMainBtn").addEventListener('click', () => {
//     mainIn = document.getElementById("mainIn").value;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     y  = 0;
//     console.log(mainIn);
//     trunk();
//     for(let i = 0; i < mainIn; i++){
//         branch();
//     }
// })




// function trunk() {
//     const canvas = document.getElementById('canvasTwo');
//     const ctx = canvas.getContext('2d'); 
//     ctx.beginPath();
//     ctx.lineWidth = 20;
//     ctx.strokeStyle = 'brown';
//     ctx.moveTo(250, 475);
//     ctx.lineTo(250, 300);
//     ctx.stroke();
//     ctx.closePath();
// }

// function branch(startY = y, startX = x, mainBranches = mainIn){
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     ctx.moveTo(startY, startX);
//     ctx.lineTo(250, 310);
//     branchNum++
//     branches = [
//         ...branches,
//         {number: branchNum,
//         x: startX,
//         y: startY}
//     ]
//     ctx.stroke();
//     ctx.closePath();
//     y += (500/mainBranches);
//     canvas.addEventListener('click', (event) => {
//         console.log(event.offsetX, event.offsetY);
//         // for(let currentBranch of branches){
//         //     if
//         // }
//     })
// }

let x = 100;
let y = 100;
let branchNum = 4;
let lessons = 4;
let branches = [];
let mainIn = 0;


const stage = new Konva.Stage({
    container: 'container',
    width: 500,
    height: 500,
    draggable: true
})

let layer = new Konva.Layer();



var trunk = new Konva.Line({
    name: 'trunk',
    points: [250, 500, 250, 250],
    stroke: 'brown',
    strokeWidth: 20,
    lineCap: 'round',
    lineJoin: 'round',
    url: 'https://google.com'
});

trunk.on('click', (event) => {
    console.log(trunk);
    console.log(event.currentTarget.attrs.url);
    window.location.href = event.currentTarget.attrs.url;
})

trunk.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
    trunk.attrs.stroke = 'black'
    layer.draw();
    console.log('hello');
})

trunk.on('mouseout', function () {
    trunk.attrs.stroke = 'brown'
    layer.draw();
});

layer.add(trunk);

stage.add(layer);

for (let i = 0; i < branchNum; i++) {
    console.log('draw');
     let currentBranch = new Konva.Line({
        name: `Branch ${i +1}`,
        points: [x, y, 250, 260],
        stroke: 'brown',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        url: 'https://google.com'
    })
    layer.add(currentBranch);
    layer.draw()
    x += 450/(branchNum);
    currentBranch.on('mouseover', (event) => {
        event.currentTarget.attrs.stroke = 'black'
        layer.draw();
        document.body.style.cursor = 'pointer';
    })
    currentBranch.on('mouseout', (event) => {
        event.currentTarget.attrs.stroke = 'brown'
        layer.draw();
        document.body.style.cursor = 'default';
    })
    currentBranch.on('click', (event) => {
        addLessons(event, lessons);
    })
    console.log(currentBranch);
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}

const addLessons = (event, numOfLessons) => {
    let branchWidth = event.currentTarget.attrs.strokeWidth;
    branchWidth /= 1.5;
    const coordinates = event.currentTarget.attrs.points;
    console.log(coordinates);
    let lineDivide = 1/(numOfLessons + 2);
    let point = lineDivide
    let newX = lerp(coordinates[0], coordinates[2], point);
    let newY = lerp(coordinates[1], coordinates[3], point);
    let check = 0;
    for(let i = 0; i < numOfLessons; i++){
        console.log(newX, newY)
        let numOne = 25
        let numTwo = -50
        console.log(numOne, numTwo);
        if(check === 0){
            let lessonBranch = new Konva.Line({
                name: `${event.currentTarget.attrs.name} Lesson ${i}`,
                points: [newX, newY, (newX + numTwo), (newY + numOne)],
                stroke: 'brown',
                strokeWidth: branchWidth,
                lineCap: 'round',
                lineJoin: 'round'
            })
            check = 1;
            console.log(check);
            point += lineDivide
            newX = lerp(coordinates[0], coordinates[2], point);
            newY = lerp(coordinates[1], coordinates[3], point);
            layer.add(lessonBranch);
            layer.draw()
            lessonBranch.on('mouseover', (event) => {
                event.currentTarget.attrs.stroke = 'black'
                layer.draw();
                document.body.style.cursor = 'pointer';
            })
            lessonBranch.on('mouseout', (event) => {
                event.currentTarget.attrs.stroke = 'brown'
                layer.draw();
                document.body.style.cursor = 'default';
            })
            lessonBranch.on('click', (event) => {
                addLessons(event, lessons);
            })
        } else if (check === 1) {
            let lessonBranch = new Konva.Line({
                name: `${event.currentTarget.attrs.name} Lesson ${i}`,
                points: [newX, newY, (newX + numOne), (newY + numTwo)],
                stroke: 'brown',
                strokeWidth: branchWidth,
                lineCap: 'round',
                lineJoin: 'round'
            })
            check = 0;
            point += lineDivide
            newX = lerp(coordinates[0], coordinates[2], point);
            newY = lerp(coordinates[1], coordinates[3], point);
            layer.add(lessonBranch);
            layer.draw()
            lessonBranch.on('mouseover', (event) => {
                event.currentTarget.attrs.stroke = 'black'
                layer.draw();
                document.body.style.cursor = 'pointer';
            })
            lessonBranch.on('mouseout', (event) => {
                event.currentTarget.attrs.stroke = 'brown'
                layer.draw();
                document.body.style.cursor = 'default';
            })
            lessonBranch.on('click', (event) => {
                addLessons(event, lessons);
            })
        }
    }
}

// const getEndpoint = (coordinateOne, coordinateTwo) => {

// }

layer.draw();


//Taken from Konva Documentation
let scaleBy = 1.01;
stage.on('wheel', e => {
    e.evt.preventDefault();
    let oldScale = stage.scaleX();

    let mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    let newScale =
        e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    stage.scale({ x: newScale, y: newScale });

    let newPos = {
        x:
            -(mousePointTo.x - stage.getPointerPosition().x / newScale) *
            newScale,
        y:
            -(mousePointTo.y - stage.getPointerPosition().y / newScale) *
            newScale
    };
    stage.position(newPos);
    stage.batchDraw();
});