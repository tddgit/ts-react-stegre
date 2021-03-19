import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Modal from './Modal.jsx';
import Carousel from './Carousel.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import ThemeContext from './ThemeContext.jsx';

// const DetailsWithErrorBoundary = (props) => {
//     return (
//         <pre>
//             <code>{JSON.stringify(props, null, 4)}</code>
//         </pre>
//     );
// };

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        loading: true,
        name: '',
    };

    componentDidMount() {
        console.log(this.props.id);
        pet.animal(this.props.id).then(({ animal }) => {
            this.setState({
                url: animal.url,
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false,
            });
        }, console.error);
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    adopt = () => navigate(this.state.url);

    render() {
        if (this.state.loading) {
            return <h1>loading...</h1>;
        }
        const {
            animal,
            breed,
            location,
            description,
            name,
            media,
        } = this.state;
        return (
            <div className={'details'}>
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                            <button style={{ backgroundColor: themeHook[0] }}>
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

/**
 * @param props
 */
export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
