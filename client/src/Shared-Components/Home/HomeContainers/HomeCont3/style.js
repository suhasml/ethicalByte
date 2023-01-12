import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'rgb(224, 131, 117)',
  },
  imgCont: {
    margin: '-32px 32px -32px 0px',
  },
  textCont1: {
    marginTop: '105px',
    marginBottom: '20px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    color: '#333',
    fontSize: '30px',
    fontWeight: '500',
  },
  spanText: { display: 'block' },
  textCont2: {
    fontSize: '23px',
    lineHeight: '28px',
    letterSpacing: '1px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    color: '#333',
  },
  textCont3: {
    fontSize: '19px',
    lineHeight: '28px',
    letterSpacing: '1px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    color: '#333',
    marginTop: '30px',
  },
  BtnCont: {
    marginTop: '20px',
  },
  btn1: {
    background: '#ed1c24',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
  },
  btn2: {
    color: '#ed1c24',
    borderColor: '#ed1c24',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    marginLeft: '25px',
    background: 'white',
  },
}));
