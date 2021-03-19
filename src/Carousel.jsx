import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        photos: [],
        active: 0,
    };

    // constructor() {
    //     super(props);
    //
    //     this.handleIndexClick = this.handleIndexClick.bind(this)
    // }

    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({ large }) => large);
        }
    }

    handleIndexClick = (index) => {
        this.setState({
            active: index,
        });
    };

    render() {
        const { photos, active } = this.state;

        return (
            <div className={'carousel'}>
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                            key={photo}
                            onClick={this.handleIndexClick.bind(this.index)}
                            onKeyPress={this.handleIndexClick.bind(this.index)}
                            role="presentation"
                            data-index={index}
                            src={photo}
                            alt="animal thumbnail"
                            className={index === active ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
