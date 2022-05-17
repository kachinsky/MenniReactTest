import { Pressable, StyleSheet, Text, View, Image} from 'react-native';

export default function Dashboard() {
    const handleButtonPress = () =>alert('Example');
    const onPress = (msg) => {
      //For generating alert on buttton click
      alert('Alert for: ' + msg);
    };
    return (
    <View style={styles.dashboard}>
        <Pressable onPress={ () => onPress('Acquista Prodotto Pressed') }>
          <View style={styles.cardBtn}>
            <Image source={require('../assets/images/icon-aggiungi.svg')} style={styles.cardBtnImage} />
            <Text style={styles.cardBtnTitle}>Acquista Prodotto</Text>
          </View>
        </Pressable>
        <Pressable onPress={ () => onPress('Apri Sinistro Pressed') }>
          <View style={styles.cardBtn}>
              <Image source={require('../assets/images/icon-sinistro.svg')} style={styles.cardBtnImage} />
              <Text style={styles.cardBtnTitle}>Apri Sinistro</Text>
            </View>
        </Pressable>
        <Pressable onPress={ () => onPress('Prenota Appuntamento Pressed') }>
          <View style={styles.cardBtn}>
              <Image source={require('../assets/images/icon-prenota.svg')} style={styles.cardBtnImage} />
              <Text style={styles.cardBtnTitle}>Prenota Appuntamento</Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
    cardBtn: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6,
        borderRadius: 7,
        flexDirection: 'row',
        minHeight: 120,
    },
    cardBtnTitle: {
        fontSize: 20,
    },
    cardBtnImage: {
        position:'relative',
        opacity: '1',
        width: 90,
        height: 90,
    },
});
