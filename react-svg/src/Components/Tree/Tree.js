import React, {Component} from 'react';
import Tree from 'react-tree-graph';


const data = {
    name: 'Colour',
    textProps: { x: -25, y: 25 },
        children: [{
            name: 'Black',
            pathProps: 'black',
            children: [],
            textProps: { x: -25, y: 25 }
        }, {
            name: 'Blue',
            textProps: {x: -25, y: 25},
            children: [{
                name: 'Aquamarine',
                children: [],
                textProps: { x: -25, y: 25 }
            }, {
                name: 'Cyan',
                children: [],
                textProps: { x: -25, y: 25 }
            }, {
                name: 'Navy',
                children: [],
                textProps: { x: -25, y: 25 }
            }, {
                name: 'Turquoise',
                children: [],
                textProps: {x: -25, y: 25}
            }]
        }, {
            name: 'Green',
            children: [],
            textProps: { x: -25, y: 25 }
        }, {
            name: 'Purple',
            textProps: {x: -25, y: 25},
            children: [{
                name: 'Indigo',
                children: [],
                textProps: { x: -25, y: 25 }
            }, {
                name: 'Violet',
                children: [],
                textProps: { x: -25, y: 25 }
            }]
        }, {
            name: 'Red',
            textProps: {x: -25, y: 25},
            children: [{
                name: 'Crimson',
                children: [],
                textProps: { x: -25, y: 25 }
            }, {
                name: 'Maroon',
                children: [],
                textProps: {x: -25, y: 25}
            }, {
                name: 'Scarlet',
                children: [],
                textProps: {x: -25, y: 25}
            }]
        }, {
            name: 'White',
            children: [],
            textProps: {x: -25, y: 25}
        }, {
            name: 'Yellow',
            children: [],
            textProps: {x: -25, y: 25, transform: 'rotate(90)'}
        }]

}

class LessonTree extends Component {
    render(){
        return(
            <>
                <Tree 
                data={data}
                nodeRadius={15}
                margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
                    height={700}
                    width={1000}
                 />
            </>
        )
    }
}

export default LessonTree;