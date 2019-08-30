import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import PropTypes from 'prop-types';
import getAvatarColor from '../utils/getAvatarColor';  //Get mau avatar tu ten
import getInitials from '../utils/getInitials';   //Get 2 chu cai dau cua avatar tu ten

export default function AuthorRow({ fullname, linktext, onPressLinkText }) {
    return (
        <View style={styles.container}>
            <Avatar
                initials={getInitials(fullname)}
                size={35}
                backgroundColor={getAvatarColor(fullname)} />
            <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
            {!!linktext && (     //Nếu tồn tại linktext thì sẽ render, k thì bỏ qua
                <TouchableOpacity onPress={onPressLinkText}>
                    <Text numberOfLines={1}>{linktext}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10, //margin theo chieu ngang
        height: 50,

    },
    text: {
        marginHorizontal: 6,
        flex: 1,     //Để thanh text chiếm toàn bộ View, để đẩy phần Comment về phía ngoài
    }
})
AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linktext: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired,
};