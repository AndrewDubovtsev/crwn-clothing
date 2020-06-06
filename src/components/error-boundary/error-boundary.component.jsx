import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    state = {
        hasErrored: false
    };

    // lets us know whether any of the children
    // wrapped with an ErrorBoundary has thrown an error
    static getDerivedStateFromError(error) {
        // process the error
        // represents the state
        return { hasErrored: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    };

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png'/>
                    <ErrorImageText>Sorry, this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;