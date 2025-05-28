import { lazy, type FC } from 'react';

const Page = lazy(() => import('./page'));

export const DashboardMainPage: FC = () => {
    return (
        <Page />
    )
}