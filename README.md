# react-symmetrical-shapes-container

Create a symmetrical container for your components or images [**GIT**](https://github.com/aapostolou/react-symmetrical-shapes-container)

## Installation

```bash
npm i react-symmetrical-shapes-container
```

## Usage

```javascript
import { ShapesContainer } from 'react-symmetrical-shapes-container'

const shapesArray = [{}, {}, {}]

const App = () => <ShapesContainer shapes={shapesArray} />
```

#### ! Debug

**Visualization:** Will outline the grid cells (`grey`) and shapes (`red`)

**Debug Messages:** Comign Soon !

```javascript
<ShapesContainer debug={true} />
```

### ! shapesArray examples

```javascript
const shapesArray = [{}, {}, {}] // Will Create 3 squares

const shapesArray = [{}, { type: 'rectangle' }, {}] // the second shape will be a rectangle

const shapeArray = [{}, { size: { width: 2, height: 1 } }, {}] // same as above
```

**Hierarchy** `preset` > `type` > `size`

\*Example: If you have both `type` and `size` the shape will be based on `type`

## Props

### ShapesContainer

| Attribute   |   Type    | Default | Description                                                                 |
| :---------- | :-------: | :-----: | --------------------------------------------------------------------------- |
| shapes      |  `array`  | `null`  | Array of objects (shapes). \*_Allowed props below_\*                        |
| weight      | `number`  |   `4`   | (_Optional_) Columns Count                                                  |
| forceWeight | `boolean` | `true`  | (_Optional_) Will resize shapes to fit weight (or, if `false`, thows error) |
| preset      | `number`  | `null`  | (_Optional_) Allows the use of presets. \*_Available preset below_\*        |
| className   | `string`  | `null`  | (_Optional_) Sets the `className` attribute of the container                |
| spacing     | `number`  |   `0`   | (_Optional_) Sets the `margin` style attribute of shapes                    |
| debug       | `boolean` | `false` | (_Optional_) Debug Mode                                                     |

### Shape

| Attribute |    Type     |         Default         | Description                                                              |
| :-------- | :---------: | :---------------------: | ------------------------------------------------------------------------ |
| type      |  `string`   |         `null`          | (_Optional_) Shape of shape \*_Available shape types below_\*            |
| size      |  `object`   | `{ width:1, height:1 }` | (_Optional_) Custom shape size                                           |
| spacing   |  `number`   |       \*`inherit`       | (_Optional_) Will overide `spacing` passed down by the `ShapesContainer` |
| classname |   `sting`   |         `null`          | (_Optional_) Component inside the shape.                                 |
| component | `Component` |         `null`          | (_Optional_) Component inside the shape.                                 |
| debug     |  `boolean`  |        `inherit`        | (_Optional_) Will overide `debug` passed down by the `ShapesContainer`   |

##

<details closed> 
<summary>**\*Shape Types**</summary>

```javascript
/* Square */
"square": { width: 1, height: 1 },
"big-square": { width: 2, height: 2 },

/* Rectangle */
"rectangle": { width: 2, height: 1 },
"big-rectangle": { width: 3, height: 2 },

/* Rectangle Vertical */
"rectangle-ver": { width: 1, height: 2 },
"big-rectangle-ver": { width: 2, height: 3 }
```

</details>

#### Available Presets

\***`preset`** work better combined with **`weight`**

<details closed> 
<summary>**Preset = 2**</summary>

```javascript
<ShapesContainer weight={2} preset={2} />
```

![Preset 2](https://i.ibb.co/0sxw1v9/Preset-2.png)

</details>

<details closed> 
<summary>**Preset = 3**</summary>

```javascript
<ShapesContainer weight={3} preset={3} />
```

![Preset 3](https://i.ibb.co/MpLF2LZ/Preset-3.png)

</details>

<details closed> 
<summary>**Preset = 4**</summary>

```javascript
<ShapesContainer weight={4} preset={4} />
```

![Preset 4](https://i.ibb.co/BNLHFdS/Preset-4.png)

</details>

<details closed> 
<summary>**Preset = 'random'**</summary>

\*Not implemented yet

```javascript
<ShapesContainer preset={'random'} />
```

Every shape will get a random 'type' value.

</details>

\*The examples presets above have **Debug Mode Enabled** for visualization.

## TODO

• Add debug messages for `Debug Mode`

• Debug Mode Errors for `props`

• Add more presets

• \*Add option for Flexible Shapes

• Better Preset example images

## Contributing

Fill free to open an issue to discuss possible changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
