import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c75f40',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    color:' #800020',
    marginLeft: 50,
    textDecorationLine: 'underline'
  },
  links: {
    marginLeft: 150,
  },
});

export default styles;
