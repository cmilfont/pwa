import Experiences from './components/experiences';
import Destinations from './components/destinations';
import Experience from './components/experience';
import Inspiration from './components/inspiration';
import Places from './components/places';
import Place from './components/place';

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
    },
    {
        path: '/places/:placeSlug',
        component: Place,
    },
    {
        path: '/places',
        component: Places,
    }
];