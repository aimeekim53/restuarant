import { useCallback, useState } from 'react';

import h from '../images/HAEMUL_PAJEON.jpeg';
import k from '../images/KIMCHI_JEON.jpeg';
import v from '../images/VEGAN_JEON.webp';


import kd from '../images/KKOT_DEUNGSIM.jpeg';
import a from '../images/ANSIM.jpeg';
import g from '../images/GALBI.png';

import gt from '../images/GALBITANG.webp';
import kj from '../images/KIMCHI_JJIGAE.jpeg';
import y from '../images/YUKGAEJANG.jpeg';

import Page from './Page';

const pageOne = {
    title: 'KOREAN PANCAKES',
    items: [
        { title: 'HAEMUL PAJEON', description: 'Korean Pancakes with mix seafood and vege', image: h, },
        { title: 'KIMCHI JEON', description: 'Korean Pancakes with sliced kimchi and vege', image: k, },
        { title: 'VEGAN JEON', description: 'Korean Pancakes with vege', image: v, }
    ]
};

const pageTwo = {
    title: 'FRESH BBQ',
    items: [
        { title: 'KKOT DEUNGSIM', description: 'Beef rib eye', image: kd, },
        { title: 'ANSIM', description: 'Beef tender loin', image: a, },
        { title: 'GALBI', description: 'Marinated Korean beef rib', image: g, }
    ]
};

const pageThree = {
    title: 'STEWS',
    items: [
        { title: 'GALBITANG', description: 'Clear soup made with beef short ribs', image: gt, },
        { title: 'KIMCHI JJIGAE', description: 'Spicy kimchi soup', image: kj, },
        { title: 'YUKGAEJANG', description: 'Spicy beef and vegetable soup', image: y, }
    ]
};

const menu = [
    pageOne,
    pageTwo,
    pageThree,
]

function Menu() {
    const [page, setPage] = useState(0);
    const next = useCallback(() => {
        if (page === 2) {
            setPage(0);
            return;
        }
        setPage(page + 1)
    }, [page]);
    const previous = useCallback(() => {
        if (page === 0) {
            setPage(2);
            return;
        }
        setPage(page - 1)
    }, [page]);

    return (
        <div>
            <button onClick={previous}>previous</button>
            <Page {...menu[page]} />
            <button onClick={next}>next</button>
        </div>
    );
}

export default Menu;
