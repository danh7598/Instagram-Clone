import React from 'react';
import { ColorPropType, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export default function Avatar({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,  //Hinh vuong khi co borderRadius = size/2 se ra hinh tron
        backgroundColor,
    }
    return (
        <View style={[style, styles.container]}>
            <Text style={styles.text}>
                {initials}
            </Text>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', //Lựa chọn primary axis (trục chính) (default: column), xếp children dọc từ trên xuống
        justifyContent: 'center', //Phân bố children theo trục chính, xếp ở giữa từ trên xuống
        alignItems: 'center', //Phân bố children theo trục phụ (trục ngang), xếp ở giữa từ trái qua phải
        //Kết hợp lại children sẽ nằm giữa parent, text sẽ nằm giữa avatar
    },
    text: {
        color: 'white'  //Chữ màu trắng
    }
})
/* Khoi tao cac tham so prop bang Proptypes */
Avatar.propTypes = {   //propTypes with p small
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired
}
