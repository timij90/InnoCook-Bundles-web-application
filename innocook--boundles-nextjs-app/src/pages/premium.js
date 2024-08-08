import { useEffect } from 'react';
import Favorites from '@/components/Favorites';
import History from '@/components/History';
import { Tab, Tabs } from 'react-bootstrap';
import Head from 'next/head';
import { getFavorites, getRecentlyViewed } from '@/services';
import { favoritesAtom, recentlyViewedAtom } from '../atom/atoms';
import { useAtom } from 'jotai';

function Premium() {
    const [favorites, setFavorites] = useAtom(favoritesAtom);
    const [recentlyViewed, setRecentlyViewed] = useAtom(recentlyViewedAtom);

    useEffect(() => {
        async function fetchData() {
            try {
                const favoritesResponse = await getFavorites();
                setFavorites(favoritesResponse);

                const recentlyViewedResponse = await getRecentlyViewed();
                setRecentlyViewed(recentlyViewedResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handleDeleteFavorite = (recipeId) => {
        setFavorites(prevFavorites => prevFavorites.filter(recipe => !recipe.uri.includes(recipeId)));
    };

    const handleDeleteHistory = (recipeId) => {
        setRecentlyViewed(prevHistory => prevHistory.filter(recipe => !recipe.uri.includes(recipeId)));
    };

    return (
        <div>
            <Head>
                <title>Premium | InnoCook Bundles</title>
            </Head>
            <main>
            <Tabs defaultActiveKey="favorites" id="custom-tab-example" className="custom-tabs" justify>
         <Tab eventKey="favorites" title="Favorites" className="custom-tab">
           <Favorites favorites={favorites} onDelete={handleDeleteFavorite} isPremiumPage={true} />
         </Tab>
         <Tab eventKey="history" title="History" className="custom-tab">
           <History history={recentlyViewed} onDelete={handleDeleteHistory} isPremiumPage={true} />
         </Tab>
       </Tabs>
            </main>
        </div>
    );
}

export default Premium;

