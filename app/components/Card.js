import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Card = ({ id }) => {
    //"https://product-images.tcgplayer.com/x.jpg"
    return (
        <Image style={styles.card} source={{uri: "https://product-images.tcgplayer.com/" + id + ".jpg" }} />
    );
};

var cardWidth = 110

const styles = StyleSheet.create({
	card: {
		height: cardWidth * 1.4,
		width: cardWidth
	}
});

export default Card;