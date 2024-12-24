import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const navbarFontSize = width * 0.014;
const footerFontSize = width * 0.007;
const pFontSize = width * 0.02;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c75f40',
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
    fontFamily: 'PassionOne',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFDB58',
    margin: 0,
  },
  h2: {
    fontSize: width * 0.1,
    fontFamily: 'PassionOne',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFDB58',
    margin: 0,
  },
  h3: {
    fontSize: width * 0.025,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    margin: 0,
  },
  p: {
    fontSize: pFontSize,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    margin: 0,
  },
  links: {
    marginLeft: width * 0.06,
  },
  link: {
    fontSize: width * 0.025,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    marginLeft: 50,
    textDecorationLine: 'underline'
  },
  hover: {
    fontSize: width * 0.025,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color:'#800020',
    marginLeft: 50,
    textDecorationLine: 'underline'
  },
  button: {
    borderWidth: 3,
    borderColor: '#800020',
    backgroundColor: '#FFFDD0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: '30%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: width * 0.015,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#800020',
    margin: 0,
  },
  navbarLink: {
    fontFamily: 'Mandali',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#FFFDD0',
    paddingLeft: 15,
    paddingRight: 15,
  },
  navbarHover: {
    fontFamily: 'Mandali',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#FFFDD0',
    backgroundColor: '#FFFDD050',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  activePage:{
    fontFamily: 'Mandali',
    fontSize: navbarFontSize,
    fontWeight: '400',
    color: '#800020',
    backgroundColor: '#FFFDD0',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  navbar: {
    backgroundColor: '#800020',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '2.5%',
    paddingRight: '2.5%'
  },
  footerLink: {
    fontFamily: 'Mandali',
    fontSize: footerFontSize,
    fontWeight: '400',
    color: '#FFFDD0',
    paddingLeft: 15,
    paddingRight: 15,
  },
  footerHover: {
    fontFamily: 'Mandali',
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
    fontFamily: 'Mandali',
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
