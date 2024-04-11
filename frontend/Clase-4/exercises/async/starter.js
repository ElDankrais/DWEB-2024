console.log('Inicio');
setTimeout(() => {
    console.log('Requiem for a dream');
}, 5000);
console.log('Otras cosas');
console.log('Se terminó');

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('green', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//             delayedColorChange('yellow', 1000, () => {
//                 delayedColorChange('cyan', 1000, () => {
//                     delayedColorChange('lime', 1000)
//                 });
//             });
//         });
//     });
// });

//Llamado a Backend

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :c');
        } else {
            success(`Aquí viene tu información del endpoint ${url}`);
        }
    }, delay)
}

// fakeRequestCallback(
//     'libros.com/page1',
//     (response) => {
//         console.log('Entré');
//         console.log(response);
//         fakeRequestCallback('libros.com/page2',
//             (response) => {
//                 console.log('Entré');
//                 console.log(response);
//                 fakeRequestCallback('libros.com/page3',
//                     (response) => console.log(response),
//                     (err) => console.error(err)
//                 )
//             },
//             (err) => console.error(err)
//         )
//     },
//     (err) => console.error(err)
// )

//Promesas

const delayedColorChangePromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChangePromise('red', 1000)
//     .then(() => delayedColorChangePromise('orange', 1000))
//     .then(() => delayedColorChangePromise('lime', 1000))
//     .then(() => delayedColorChangePromise('aqua', 1000))


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :c');
            } else {
                resolve(`Aquí viene tu información del endpoint ${url}`);
            }
        }, delay)
    })
}

// fakeRequestPromise('libros/page1')
//     .then((data) => {
//         console.log(data);
//         return fakeRequestPromise('libros/page2');
//     })
//     .then((data) => {
//         console.log(data);
//         return fakeRequestPromise('libros/page3');
//     })
//     .then(() => console.log('Final'))
//     .catch((err) => console.error(err))

//async await

async function rainbow() {
    await delayedColorChangePromise('red', 1000)
    await delayedColorChangePromise('orange', 1000)
    await delayedColorChangePromise('yellow', 1000)
    await delayedColorChangePromise('green', 1000)
    await delayedColorChangePromise('blue', 1000)
    await delayedColorChangePromise('indigo', 1000)
    await delayedColorChangePromise('violet', 1000)
}

async function printRainbow() {
    await rainbow();
    console.log('END OF RAINBOW');
}

printRainbow();

//try-catch

async function fakeCall() {
    const response = await fakeRequestPromise('libros/page1')
        .catch((err) => console.error(err));
    
    console.log(response);
}

fakeCall();
