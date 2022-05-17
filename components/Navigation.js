import { Pressable, StyleSheet, Text, View, Image} from 'react-native';

export default function Navigation() {

    return (
    <View style={styles.navPanel}>
        <Pressable>
          <View style={styles.navItem, styles.navItemActive}>
            <Image source={require('../assets/images/icon-home.svg')} style={styles.navItemIcon} />
            <Text style={styles.navItemTitle}>Home</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.navItem}>
            <Image source={require('../assets/images/icon-preventivi.svg')} style={styles.navItemIcon} />
            <Text style={styles.navItemTitle}>Preventivi</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.navItem}>
            <Image source={require('../assets/images/icon-messaggi.svg')} style={styles.navItemIcon} />
            <Text style={styles.navItemTitle}>Messaggi</Text>
          </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    navPanel: {
      position: 'absolute',
      bottom: 20,
      left:35,
      right: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      paddingBottom: 13,
      paddingTop: 13,
      paddingLeft: 18,
      paddingRight: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.16,
      shadowRadius: 6,
      borderRadius: 7,
    },
    navItem: {
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
    },
    navItemIcon: {
      position:'relative',
      opacity: '1',
      width: 26,
      height: 26,
      resizeMode: "contain",
    },
    navItemTitle: {
      fontWeight: 'bold',
      color: 'inherit'
    },
    navItemActive: {
      color: '#00C4FF',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
    },
  
  });
