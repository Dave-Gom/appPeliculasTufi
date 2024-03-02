import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 25,
  },
  title: {
    color: '#29166F',
    fontSize: 25,
    fontFamily: 'PlusJakartaSans-Regular',
    textAlign: 'center',
  },
  logo: {
    width: 230,
    height: 230,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsAndData: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 5,
    flex: 1,
    alignItems: 'center',
  },
  button: {
    margin: 5,
  },
  buttonsWrapper: {
    flex: 1,
    margin: 20,
    width: 280,
    alignSelf: 'center',
  },
  textWrapper: {
    flex: 1,
    width: 280,
    alignItems: 'center',
  },
  butonsLabelStyle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 15,
  },
  textIntput: {
    width: '100%',
    margin: 5,
  },
  textIntputError: {
    width: '100%',
    margin: 5,
    color: 'red',
    fontFamily: 'PlusJakartaSans-Regular',
    borderColor: 'red',
  },
  text: {
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#23232D',
  },

  blockButtonWrapper: {
    padding: 10,
    justifyContent: 'flex-end',
    marginBottom: 10,
    width: '100%',
  },
  blockButtonCommonStyles: {
    backgroundColor: '#29166F',
    borderWidth: 0.5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockButtonLabelStyles: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  blockButtonContentStyles: {
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockButtonDisabled: {
    opacity: 0.3,
  },
  textErrorStyles: {
    color: 'red',
    fontFamily: 'PlusJakartaSans-Regular',
    paddingLeft: 20,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    paddingTop: 30,
  },
  paid: {
    flex: 1,
    backgroundColor: '#70D0F6',
    borderRadius: 10,
    height: 24,
    justifyContent: 'center',
  },
  paidText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#222831',
  },
  aproved: {
    flex: 1,
    backgroundColor: '#1da756',
    borderRadius: 10,
    height: 24,
    justifyContent: 'center',
  },
  aprovedText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#f9fbfc',
  },
  rejected: {
    flex: 1,
    backgroundColor: '#f4694d',
    borderRadius: 10,
    height: 24,
    justifyContent: 'center',
  },
  rejectedText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#f9fbfc',
  },
  pending: {
    flex: 1,
    backgroundColor: '#ffd369',
    borderRadius: 10,
    height: 24,
    justifyContent: 'center',
  },
  pendingText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#222831',
  },
});
