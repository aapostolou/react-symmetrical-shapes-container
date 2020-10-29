# react-symmetrical-shapes-container

Create a symmetrical container for your components or images [**GIT**](https://github.com/aapostolou/react-symmetrical-shapes-container)

## Installation

```bash
npm i react-symmetrical-shapes-container
```

## Usage

```javascript
import { ShapesContainer } from 'react-symmetrical-shapes-container'

const App = () => <ShapesContainer shapes={shapesArray} />
```

### ! shapesArray examples

```javascript
const shapesArray = [{}, {}, {}] // Will Create 3 squares

const shapesArray = [{}, { type: 'rectangle' }, {}] // will create a square-rectangle-square pattern
```

## Props\*

### ShapesContainer

| Attribute |  Type  | Default | Description                                                                                |
| :-------- | :----: | :-----: | ------------------------------------------------------------------------------------------ |
| shapes    | array  |  null   | Array of objects (shapes). \*_Allowed props below_\*                                       |
| weight    | number |    4    | (_Optional_) How many squares per row (rectangles count as 2 squares)                      |
| minWidth  | number |  null   | (_Optional_) minWidth of each shape (rectangles is minWidth\*2). **Passed as style prop**. |
| preset    | number |  null   | (_Optional_) allows the use of presets. \*_Available preset below_\*                       |

### Shape

| Attribute  |   Type    | Default  | Description                                                                                                     |
| :--------- | :-------: | :------: | --------------------------------------------------------------------------------------------------------------- |
| type       |  string   | 'square' | (_Optional_) Shape of shape \*_Available shape types below_\*                                                   |
| background |    img    |   null   | (_Optional_) Set 'background-image' of shape. (set to random returns an image from **https://picsum.photos/** ) |
| component  | Component |   null   | (_Optional_) Component inside the shape.                                                                        |

### \*Available Shape Types

```javascript
const shapesArray = [{ type: 'square' }, { type: 'rectangle' }]
```

• square: weight = 1

• rectangle: weight = 2

#### \*Available Presets

**\*Presets** work better combined with **weight**.\*

#### Preset = {3}

```javascript
<ShapesContainer weight={3} preset={3} />
```

![Preset3](https://i.ibb.co/cyPn8pk/image.png)

_! background colors and images are not part of preset !_

#### Preset = {'random}

```javascript
<ShapesContainer preset={'random'} />
```

Every shape will get a random 'type' value.
_! It works with every weight !_

#### \*Class Preset ()

##### Shapes Container

```javascript
<ShapesContainer className='class-preset' />
```

| Preset         | Description                                                       |
| :------------- | ----------------------------------------------------------------- |
| outline-shapes | Adds a dashed outline to every shape (_outline: 1px dashed #ddd_) |
| round-shapes   | Make shapes' corners round (_border-radius: 100vmax_)             |

##### Shape

```javascript
const shapesArray = [{ className: 'class-preset' }]
```

| Preset      | Description                                           |
| :---------- | ----------------------------------------------------- |
| round-shape | Make shape's corners round (_border-radius: 100vmax_) |

_! multiple presets can be used at once !_

## TODO

• Add a lot more props.
• Add more presets
• Better Documentation.

• Add 2x2 Square
• Add 1x2 Rectangle (Vertical)

## Contributing

Fill free to open an issue to discuss possible changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
