import Experiences from './components/experiences';
import Destinations from './components/destinations';
import Experience from './components/experience';
import Inspiration from './components/inspiration';

export default [
    {
        path: '/',
        component: Inspiration,
        exact: true,
    },
    {
        path: '/experiences/:experienceSlug?',
        component: Experiences,
    },
    {
        path: '/destination/:destinationSlug/:experienceSlug',
        component: Experience,
    },
    {
        path: '/destination/:destinationSlug',
        component: Destinations,
    }
];