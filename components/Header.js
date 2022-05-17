import { Pressable, StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {

    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Pressable style={styles.toogleBtn}>
          <Image source={require('../assets/images/icon-toogle.svg')} style={styles.toogleBtnIcon} />
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  
  header: {
    marginBottom: 50,
    paddingRight: 40,
    position: 'relative',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  toogleBtn: {
    width: 23,
    height: 14,
    position: 'absolute',
    top: 8,
    right: 0,
  },
  toogleBtnIcon: {
    position:'relative',
    opacity: '1',
    width: 23,
    height: 14,
    resizeMode: "contain",
  },
});
