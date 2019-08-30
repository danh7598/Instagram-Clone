import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import AuthorRow from './AuthorRow';

export default class Card extends React.Component {

    state = {
        loading: true,
    };

    handleLoad = () => {
        this.setState({ loading: false });
    };

    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linktext: PropTypes.string,
        onPressLinkText: PropTypes.func,
    };

    static defaultProps = {
        linktext: '',
        onPressLinkText: () => { },
    };

    render() {
        const { fullname, linktext, onPressLinkText, image } = this.props;
        const { loading } = this.state;
        return (
            <View>
                <AuthorRow
                    fullname={'Ta Quang Duy'}
                    linktext={'Comment'}
                    onPressLinkText={() => { console.log('Press Comment'); }}
                />
                <Image style={styles.image} source={image} onLoad={this.handleLoad} />

            </View>);

    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1, //make the height of Image match its full-screen width
        backgroundColor: 'rgba(0,0,0,0.02)', //which will show before the Image load, or behind Image if the image transparent
    }
});
