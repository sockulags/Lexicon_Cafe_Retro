import hotImage from '../assets/hot.jpg';
import juicyImage from '../assets/juicy.jpg';
import cosyImage from '../assets/cosy.jpg';

export const TEXT = {
    "hot": {
        image: hotImage,
        leftInfo:  "Hot freshly ground black coffe or a cup of equisite tea?",
        rightInfo: "We give you that perfect cup every time",
        menuItems: {
            item: ["Mocha Latte", "Caffe Formaggio", "Espresso", "Chai Verde Latte"],
            price: ["£ 7.50", "£ 5.00", "£ 3.50", "£ 5.50"]
        }
    }, 
    "juicy": {
        image: juicyImage,
        leftInfo:  "Ripe fruit - freshly squeezed",
        rightInfo: "It's as simple as that. Chunky or smooth - it's your choice.",
        menuItems: {
            item: ["Branched Apricots", "Deep Rasberries", "Smooth Oranges"],
            price: ["£ 4.20", "£ 3.50", "£ 6.50"]
        }
    }, 
    "cosy": {
        image: cosyImage,
        leftInfo:  "Hang around. Enjoy the settings.",
        rightInfo: "Use our fast Wifi. Borrow a newspaper or a novel.",
        menuItems: {
            item: ["Mon - Sun", "Caffe Retro", "0123-45 67 89"],
            price: ["8am - 11pm", "Canto Vi", "caffe@lorem.pge"]
        }
    }, 
};
