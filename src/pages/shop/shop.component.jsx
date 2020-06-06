import React, {useEffect, lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({fetchCollectionsStartAsync, match}) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div>
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`}
                       component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);