import Home from '@/views/home/HomeFile';
import TrueMe from '@/views/home/TrueMe';
import Colorful from '@/views/home/Colorful';
import Handbag from '@/views/home/Handbag';
import Jewelry from '@/views/home/Jewelry';

var HomeRouter = [{
        path: '/home',
        component: Home,
    },
    {
        path: '/home/trueme',
        component: TrueMe
    },
    {
        path: '/home/colorful',
        component: Colorful
    },
    {
        path: '/home/handbag',
        component: Handbag
    },
    {
        path: '/home/jewelry',
        component: Jewelry
    },
]

export default HomeRouter