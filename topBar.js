import React from 'react';
import {View, Text, StyleSheet,StatusBar, Dimensions  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function topBar() {
    return (
      <View style={styles.background}>
        <View style={styles.hamburgerMenu}>
          <FontAwesomeIcon icon={faBars} style={styles.iconStyle} />
        </View>
        <View style={styles.userName}>
          <View style={styles.userNameCircle}>
            <Text style={styles.userNameProfile}>SM</Text>
          </View>
          <View style={styles.userNameContent}>
            <Text style={styles.userNameText}>Hi, Sumit!</Text>
          </View>
          
        </View>
        <View style={styles.statistics}>
          <FontAwesomeIcon icon={faChartLine} style={styles.iconStyle} />
        </View>
        <View style={styles.search}>
          <FontAwesomeIcon icon={faSearch} style={styles.iconStyle} />
        </View>
        <View style={styles.notifications}>
          <FontAwesomeIcon icon={faBell} style={styles.iconStyle} />
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    paddingTop:StatusBar.currentHeight,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: windowHeight*0.02,
    borderBottomEndRadius: windowHeight*0.02,
    borderBottomStartRadius: windowHeight*0.02,
  },
  iconStyle: {
    color: 'white',
    alignItems: 'center'
  },
  hamburgerMenu: {
    flex:1,
    alignItems: 'center'
    //backgroundColor: 'green'
  },
  userName: {
    flexDirection: 'row',
    flex: 4,
   // alignItems: 'center'
   // backgroundColor: 'black'
  },
  statistics: {
    flex: 1,
    alignItems: 'center'
  },
  search: {
    flex: 1,
    alignItems: 'center'
  },
  notifications: {
    flex: 1,
    alignItems: 'center'
  },
  userNameCircle: {
    height: windowHeight*0.04,
    width: windowHeight*0.04,
    borderRadius: windowHeight*0.02,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  userNameContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    fontWeight: "500",
    color: 'white',
    fontSize: 15,
    paddingLeft: windowWidth*0.04,
    textAlign: 'center'
  },
  textColorWhite: {
    color: 'white',
  },
  userNameProfile:{
    fontSize: 13,
    fontWeight: '800',
    //backgroundColor: 'pink',
    textAlign: 'center'
  }
});