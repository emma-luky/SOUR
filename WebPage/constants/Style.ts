import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#c75f40',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#c75f40',
    flex: 1,
    flexDirection: 'column',
    padding: 50
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  h1: {
    fontSize: 300,
    fontFamily: 'PassionOne',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFDB58',
    margin: 0,
  },
  h2: {
    fontSize: 150,
    fontFamily: 'PassionOne',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFDB58',
    margin: 0,
  },
  h3: {
    fontSize: 40,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    margin: 0,
  },
  p: {
    fontSize: 20,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    margin: 0,
  },
  links: {
    marginLeft: 150,
  },
  link: {
    fontSize: 30,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#FFFDD0',
    marginLeft: 50,
    textDecorationLine: 'underline'
  },
  hover: {
    fontSize: 30,
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
    fontSize: 20,
    fontFamily: 'Mandali',
    fontWeight: '400',
    color: '#800020',
    margin: 0,
  },
  navbarLink: {
    fontFamily: 'Mandali',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFDD0',
    paddingLeft: 15,
    paddingRight: 15,
  },
  navbarHover: {
    fontFamily: 'Mandali',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFDD0',
    backgroundColor: '#FFFDD050',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  activePage:{
    fontFamily: 'Mandali',
    fontSize: 20,
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
  input: {
    borderWidth: 2,
    borderColor: '#800020',
    backgroundColor: '#FFFDD0',
    fontFamily: 'Mandali',
    fontSize: 20,
    fontWeight: '400',
    color: '#800020',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
},
});

export default styles;
