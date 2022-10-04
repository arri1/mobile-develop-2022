import {
    StyleSheet,
    Text,
    View,
    Image, 
} from 'react-native';

function truncateTitle (str) {
    if (str.length >= 50) {
        return str.substring(0, 50) + '...';
    }

    return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
    return (
        <View style = {[styles.post]}>
            <Image 
                style = {[styles.image]}
                source={{ 
                    uri: imageUrl
            }}
            />
            <View style = {[styles.postDetails]}>
                <Text style = {[styles.postTitle]}>{truncateTitle(title)}</Text>
                <Text style = {[styles.postDate]}>{new Date(createdAt).toLocaleDateString()}</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    post: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 12,
    },
    postTitle: {
        fontSize: 17,
        fontWeight: "700",
    },
    postDate: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)',
        marginRight: 2,
    },
    postDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
});