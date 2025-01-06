import { Dimensions, StyleSheet } from 'react-native';
import { ScreenHeight } from 'react-native-elements/dist/helpers';

const { width, height } = Dimensions.get('window');
const navbarFontSize = width * 0.014;
const footerFontSize = width * 0.007;
const pFontSize = width * 0.02;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8ccaf',
    flex: 1,
    flexDirection: 'column',
    padding: width * 0.02
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  h1: {
    fontSize: width * 0.2,
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#692b20',
    margin: 0,
  },
  h2: {
    fontSize: width * 0.1,
    fontFamily: 'DM Sans',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#692b20',
    margin: 0,
  },
  h3: {
    fontSize: width * 0.025,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color: '#692b20',
    margin: 0,
  },
  p: {
    fontSize: pFontSize,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color: '#692b20',
    margin: 0,
  },
  links: {
    marginLeft: width * 0.06,
  },
  link: {
    fontSize: pFontSize,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color: '#692b20',
    textDecorationLine: 'underline'
  },
  hover: {
    fontSize: pFontSize,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color:'#800020',
    textDecorationLine: 'underline'
  },
  button: {
    borderWidth: 3,
    borderColor: '#800020',
    backgroundColor: '#FFFDD0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: '20%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: width * 0.015,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color: '#800020',
    margin: 0,
  },
  tinyLogo: {
    height: height * 0.07,
    width: width * 0.05,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginLeft: 0,  
    alignSelf: 'center'
  },
  navbarLink: {
    fontFamily: 'DM Sans',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#692b20',
    paddingLeft: 15,
    paddingRight: 15,
  },
  navbarHover: {
    fontFamily: 'DM Sans',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#692b2050',
    backgroundColor: '#d8ccaf50',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  activePage:{
    fontFamily: 'DM Sans',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#692b20',
    backgroundColor: '#d8ccaf',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  navbar: {
    backgroundColor: '#f7f3ea',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    paddingLeft: '2.5%',
    paddingRight: '2.5%'
  },
  footerLink: {
    fontFamily: 'DM Sans',
    fontSize: footerFontSize,
    fontWeight: '400',
    color: '#FFFDD0',
    paddingLeft: 15,
    paddingRight: 15,
  },
  footerHover: {
    fontFamily: 'DM Sans',
    fontSize: footerFontSize,
    fontWeight: '400',
    color: '#FFFDD0',
    backgroundColor: '#FFFDD050',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  footer: {
    backgroundColor: '#800020',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    width: '100%',
    paddingLeft: '2.5%',
    paddingRight: '2.5%'
  },
  input: {
    borderWidth: 2,
    borderColor: '#800020',
    backgroundColor: '#FFFDD0',
    fontFamily: 'DM Sans',
    fontSize: width * 0.015,
    fontWeight: '400',
    color: '#800020',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
},
});

export default styles;
