const match = (styles, ...args) => {
    const classnames = new Set();

    for (const item of args) {
        const type = typeof item;

        if (type === 'string' && item.length > 0) {
            const classes = item.split(' ');
            classes.forEach((cx) => {
                classnames.add(cx);
            });
        } else if (Array.isArray(item) && item.length && typeof args[0] === 'string') {
            item.forEach((element) => {
                classnames.add(`${args[0]}--${element}`);
            });
        } else if (type === 'object' && item !== null) {
            for (const [key, value] of Object.entries(item)) {
                if (value && typeof args[0] === 'string') {
                    if (key.includes('--')) {
                        classnames.add(key);
                    } else {
                        classnames.add(`${args[0]}--${key}`);
                    }
                }
            }
        }
    }

    const fn = (acc, key) => {
        if (key in styles) {
            acc.push(styles[key]);
        } else if (process.env.NODE_ENV !== 'production') {
            console.warn(`"${key}" is missing in the stylesheet`); // eslint-disable-line no-console
        }

        return acc;
    };

    return [...classnames]
        .sort()
        .reduce(fn, [])
        .join(' ');
};

const bemCSSModules = (styles) => {
    return (...args) => match(styles, ...args);
};

module.exports = bemCSSModules;
