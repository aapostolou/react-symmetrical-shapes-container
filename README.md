# react-symmetrical-shapes-container

Create a symmetrical container for your components or images [**GIT**](https://github.com/aapostolou/react-symmetrical-shapes-container)

## Installation

```bash
npm i react-symmetrical-shapes-container
```

## Usage

```javascript
import { ShapesContainer } from 'npm i react-symmetrical-shapes-container'

const App = () => <ShapesContainer shapes={shapesArray} />
```

### ! shapesArray examples

```javascript
const shapesArray = [{}, {}, {}] // Will Create 3 squares with random background

const shapesArray = [{}, { type: 'rectangle' }, {}] // will create a square-rectangle-square pattern with random background
```

## Props\*

### ShapesContainer

| Attribute |  Type  | Default | Description                                                                                |
| :-------- | :----: | :-----: | ------------------------------------------------------------------------------------------ |
| shapes    | array  |  null   | Array of objects (shapes). \*_Allowed props below_\*                                       |
| weight    | number |    4    | (_Optional_) How many squares per row (rectangles count as 2 squares)                      |
| style     | object |   { }   | (_Optional_) ShapesContainer style.                                                        |
| minWidth  | number |  null   | (_Optional_) minWidth of each shape (rectangles is minWidth\*2). **Passed as style prop**. |
| preset    | number |  null   | (_Optional_) allows the use of presets. \*_Available preset below_\*                       |

### Shape

| Attribute  |   Type    | Default  | Description                                                                                      |
| :--------- | :-------: | :------: | ------------------------------------------------------------------------------------------------ |
| type       |  string   | 'square' | (_Optional_) Shape of shape \*_Available shape types below_\*                                    |
| background |    img    | 'random' | (_Optional_) Set background of shape. (default is a random image from **https://picsum.photos/** |
| style      |  object   |   { }    | (_Optional_) Shape style.                                                                        |
| component  | Component |   null   | (_Optional_) Component inside the shape.                                                         |

### \*Available Shape Types

```javascript
const shapesArray = [{ type: 'square' }, { type: 'rectangle' }]
```

#### \*Available Presets

**\*Presets** work better combined with **weight**.\*

#### Preset = {3}

```javascript
<ShapesContainer weight={3} preset={3} />
```

![Preset3](https://i.ibb.co/cyPn8pk/image.png)

_! Background colors and images are not part of preset !_

## TODO

• Add a lot more props.
• Add more presets
• Better Documentation.

## Contributing

Fill free to open an issue to discuss possible changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
