# @mjeightyfive/bcm [![Build Status](https://travis-ci.com/mjeightyfive/bcm.svg?branch=master)](https://travis-ci.com/mjeightyfive/@mjeightyfive/bcm)

## Install

```
$ npm i @mjeightyfive/bcm
```

## Usage

```jsx
import bcm from '@mjeightyfive/bcm';
import styles from './my.module.scss';

const bx = bcm(styles);

const App = () => (
    <div className={bx('app')}>
        <h1 className={bx('app__title', { teal: true })>App</h1>
    </div>
);
```

```scss
// my.module.scss:

.app {
    background-color: white;
}

.app__title {
    color: teal;
}
```


## Examples

```js
bx('photo');
// => photo

bx('photo', 'nice');
// => nice photo

bx('photo__img', 'lazyload', { framed: true, 'featured': true });
// => lazyload photo__img photo__img--featured photo__img--framed

bx('photo__img', 'lazyload', { framed: true, 'photo__img--featured': true });
// => lazyload photo__img photo__img--featured photo__img--framed

bx('photo__img', ['featured', 'framed', 'black-and-white']);
// => photo__img photo__img--black-and-white photo__img--featured photo__img--framed

const classes = ['photo', 'very', 'nice'];
bx(...classes);
// => nice photo very
```

## API

### bcm(styles)

#### object

Type: `object`

```
// e.g. localIdentName: '[local]__[hash:base64:5]'

{
    photo: "photo__1D89u"
    photo__caption: "photo__caption__1rDET"
    photo__img: "photo__img__X_pPt"
    photo__img--featured: "photo__img--featured__30ZMP"
    photo__img--framed: "photo__img--framed__2Myh-"
    photo__img--landscape: "photo__img--black-and-white__10Og5"
    ...
}
```

## Credits

Based on [class-names](https://www.npmjs.com/package/@sindresorhus/class-names) and [bem-names](https://www.npmjs.com/package/bem-names)


## License

MIT © [mjeightyfive](https://mje.fi)
