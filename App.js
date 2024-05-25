import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const data = [
     { id: 1, name: 'Eagle Shuttlecock', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vlmvIaU7_Ja4fL1ymZ1B4eaDJsxsW2sWAA&s', price: 'Rp. 50.000' },
    { id: 2, name: 'Raket Boshika', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqsReIqg-7zz-kqbDYfX8JQSg3K1CHME6RA&s', price: 'Rp. 120.000' },
    { id: 3, name: 'Raket Speeds', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuDwBERiiXVM5ZeGKDb3l5yeepgNXgPhArQ&s', price: 'Rp. 150.000' },
    { id: 4, name: 'Sepatu Badminton', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2I-GiqTCAdNLQbRb_vd6RnAsL_zr1s-ubg&s', price: 'Rp. 550.000' },
    { id: 5, name: 'Sepatu Yonex', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhcPbYHXs-6XvHyyLGwLGrTHfW6iDcq-Dg&s', price: 'Rp. 399.990' },
    { id: 6, name: 'Senar Raket Yonex', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCW3P1nDKRSI_U6cktZGGWTB56FCzEOH_pg&s', price: 'Rp. 50.000' },
    { id: 7, name: 'Celana Yonex', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2xWiUjhFzeE5hUa99_t6p2gHql1WKe578Q&s', price: 'Rp. 80.000' },
    { id: 8, name: 'Raket Victor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZHPn_oqiUuNjdJ9I-8GcMTpHuWUvvax8lQ&s', price: 'Rp. 529.999' },
    { id: 9, name: 'Sepatu Victor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD1fac3VGksDYaTL2sAgNrH65yjeJmEv4Xw&s', price: 'Rp. 780.000' },
    { id: 10, name: 'Tas Ransel Victor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomJWp2WO4u3shSGMnGqs2qhsLX74pzlmIyw&s', price: 'Rp. 159.999' },
    { id: 11, name: 'Raket Eagle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVLAj2S3BlZwGfrjaRzUHovEjboszY1eSsQ&s', price: 'Rp. 100.000' },
    { id: 12, name: 'Grip Victor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKVycE35osFeb8opWA-lcamSer5SRn0PXQw&s', price: 'Rp. 60.000' },
    { id: 13, name: 'Sepatu Victor A115', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9s6VA0zdjwChzFnuC-ppaGrJybPrzTT0lQ&s', price: 'Rp. 750.000' },
    { id: 14, name: 'Raket Murah', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffe29U4voXsOYxYC75ar1nB5LFox5i2TaHQ&s', price: 'Rp. 50.000' },
    { id: 15, name: 'Baju Victor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uwtVPN-Fdv7Ob_f3bbgwG7W2Hbe4qqeGTQ&s', price: 'Rp. 200.000' },
  ];

  const renderItem = ({ item }: { item: { id: number; name: string; image: string } }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Ionicons name="pricetag" size={20} color="gray" />
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 140,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 15,
    color: 'gray',
    marginLeft: 5,
  },
});