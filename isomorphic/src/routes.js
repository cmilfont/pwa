import React from 'react';

export default [
    {
        path: '/',
        component: () => {
            return (
                <div>Raiz</div>
            )
        },
        exact: true
    },
    {
        path: '/experiences/:experiencesSlug?',
        component: () => {
            return (
                <div>Experiences</div>
            )
        }
    }
]